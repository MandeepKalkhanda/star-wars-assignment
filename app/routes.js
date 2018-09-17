// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
   console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
   cb(null, componentModule.default);
};

export default function createRoutes(store) {
   // Create reusable async injectors using getAsyncInjectors factory
   const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

   return [{
      path: '/',
      name: 'loginContainer',
      getComponent(nextState, cb) {
         const importModules = Promise.all([
            System.import('containers/LoginContainer/reducer'),
            System.import('containers/LoginContainer/sagas'),
            System.import('containers/LoginContainer'),
         ]);

         const renderRoute = loadModule(cb);

         importModules.then(([reducer, sagas, component]) => {
            injectReducer('loginContainer', reducer.default);
            injectSagas('loginContainer', sagas.default);
            renderRoute(component);
         });

         importModules.catch(errorLoading);
      }
   },
   {
      path: '/planet',
      name: 'planetContainer',
      getComponent(nextState, cb) {
         const importModules = Promise.all([
            System.import('containers/PlanetContainer/reducer'),
            System.import('containers/PlanetContainer/sagas'),
            System.import('containers/PlanetContainer'),
         ]);

         const renderRoute = loadModule(cb);

         importModules.then(([reducer, sagas, component]) => {
            injectReducer('planetContainer', reducer.default);
            injectSagas('planetContainer', sagas.default);
            renderRoute(component);
         });

         importModules.catch(errorLoading);
      },
   }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
         System.import('containers/NotFoundPage')
            .then(loadModule(cb))
            .catch(errorLoading);
      },
   },
   ];
}

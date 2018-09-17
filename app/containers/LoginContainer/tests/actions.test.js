import expect from 'expect';
import {
  defaultAction,
} from '../actions';
import {
  LOGIN,
} from '../constants';

describe('LoginContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of LOGIN', () => {
      const expected = {
        type: LOGIN,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});

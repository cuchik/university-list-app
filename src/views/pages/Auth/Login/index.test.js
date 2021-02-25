import React from 'react';
// 'shallow' almost same 'mount' except 'mount' including all childs of component
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Formik } from 'formik';
import Login from './index';

describe('Login Page UI Test', () => {
  describe('full DOM tests', () => {
    let reactWrapper;
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
    beforeEach(() => {
      store = mockStore(initialState);
      reactWrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );
    });
    it('able to find a heading h1', () => {
      expect(reactWrapper.find('h1').length).toBe(1);
    });
    it('able to find a Formik', () => {
      expect(reactWrapper.find(Formik).length).toBe(1);
    });
    it('able to find a form', () => {
      expect(reactWrapper.find('form').length).toBe(1);
    });
    it('able to find 2 inputs', () => {
      expect(reactWrapper.find('input').length).toBe(2);
    });
    it('able to find a button', () => {
      expect(reactWrapper.find('button').length).toBe(1);
    });
  });
});

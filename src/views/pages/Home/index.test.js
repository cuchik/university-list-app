import React from 'react';
// 'shallow' almost same 'mount' except 'mount' including all childs of component
import { mount } from 'enzyme';
import Home from './index';

describe('Home Page UI Test', () => {
  describe('full DOM tests', () => {
    let reactWrapper;
    beforeEach(() => {
      reactWrapper = mount(<Home />);
    });
    it('able to find a heading h2', () => {
      expect(reactWrapper.find('h2').length).toBe(1);
    });
    it('able to find a heading h3', () => {
      expect(reactWrapper.find('h3').length).toBe(1);
    });
    it('able to find a list with 7 items', () => {
      expect(reactWrapper.find('ul').length).toBe(1);
      expect(reactWrapper.find('li').length).toBe(7);
    });
  });
});

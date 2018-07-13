import React from 'react';
import App from '../app';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').text()).toEqual('Cuong beo');
});
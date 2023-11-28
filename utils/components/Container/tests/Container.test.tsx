import React from 'react';
import { shallow } from 'enzyme';

import { Container } from '../Container';

describe('<Container />', () => {
  describe('should render as', () => {
    test('div by default', () => {
      const wrapper = shallow(<Container children={<div />} />);

      expect(wrapper).toMatchSnapshot();
    });

    test('header', () => {
      const wrapper = shallow(<Container As={'header'} children={<div />} />);

      expect(wrapper).toMatchSnapshot();
    });

    test('section', () => {
      const wrapper = shallow(<Container As={'section'} children={<div />} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

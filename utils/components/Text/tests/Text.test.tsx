import React from 'react';
import { shallow } from 'enzyme';

import { Text } from '../Text';

describe('<Text />', () => {
  describe('should render as', () => {
    test('span by default', () => {
      const wrapper = shallow(<Text />);

      expect(wrapper.find('span')).toBeDefined();
    });

    test('h1', () => {
      const wrapper = shallow(<Text As={'h1'} />);

      expect(wrapper.find('h1')).toBeDefined();
    });
  });

  describe('should have class', () => {
    test('s28', () => {
      const wrapper = shallow(<Text As={'div'} fontSize={28} />);

      expect(wrapper.find('div.s28')).toBeDefined();
    });

    test('s28  d10', () => {
      const wrapper = shallow(<Text fontSize={28} desktopFontSize={10} />);

      expect(wrapper.find('span.s28.d10')).toBeDefined();
    });

    test('bold uppercase', () => {
      const wrapper = shallow(<Text bold={true} upperCase={true} />);

      expect(wrapper.find('span.bold.upperCase')).toBeDefined();
    });
  });
});

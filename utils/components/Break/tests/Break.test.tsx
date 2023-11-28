import React from 'react';
import { shallow } from 'enzyme';

import { Break } from '../Break';

describe('<Break /> should render as div class', () => {
  test('top4', () => {
    const wrapper = shallow(<Break size={4} />);

    expect(wrapper.find('div.top4')).toBeDefined();
  });

  test('right20', () => {
    const wrapper = shallow(<Break size={20} padding={'right'} />);

    expect(wrapper.find('div.right20')).toBeDefined();
  });

  test('right8 inline', () => {
    const wrapper = shallow(<Break size={8} padding={'right'} inline={true} />);

    expect(wrapper.find('div.right8.inline')).toBeDefined();
  });
});

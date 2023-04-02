import React from 'react';
import { shallow } from 'enzyme';

import { ActionButton } from '../ActionButton';

// empty handleClick
// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleClick = () => {};

describe('<ActionButton />', () => {
  describe('should render with textContent', () => {
    test('type=button class=Button Button_text textContent=Поделиться', () => {
      const wrapper = shallow(
        <ActionButton action={'share'} onClick={handleClick} />
      );

      expect(wrapper.find('button.Button.Button_text')).toBeDefined();
      expect(wrapper.find('button').text()).toContain('Поделиться');

      expect(wrapper).toMatchSnapshot();
    });

    test('type=button class=Button Button_text textContent=Сохранить', () => {
      const wrapper = shallow(
        <ActionButton action={'save'} onClick={handleClick} />
      );

      expect(wrapper.find('button').text()).toContain('Сохранить');

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should render without textContent', () => {
    test('type=button class=Button', () => {
      const wrapper = shallow(
        <ActionButton
          action={'delete'}
          textContent={false}
          onClick={handleClick}
        />
      );

      expect(wrapper.find('button').text().length).toBe(0);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

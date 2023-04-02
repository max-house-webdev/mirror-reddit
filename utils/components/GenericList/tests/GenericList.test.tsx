import React from 'react';
import { shallow } from 'enzyme';

import { GenericList } from '../GenericList';
import { IItem, IGenericListProps } from '../GenericList';

describe('<GenericList />', () => {
  describe('by default', () => {
    const props: IGenericListProps = {
      list: [
        {
          id: 'id-0',
          text: 'text-0',
        },
        {
          id: 'id-1',
          text: 'text-1',
        },
        {
          id: 'id-2',
          text: 'text-1',
        },
      ],
    };

    const { list } = props;

    const wrapper = shallow(<GenericList list={list} />);

    test('should render list of three DivElement', () => {
      expect(wrapper.find('div')).toHaveLength(3);
      expect(wrapper.find('div#id-0')).toBeDefined();
      expect(wrapper.find('div#id-1')).toBeDefined();
      expect(wrapper.find('div#id-2')).toBeDefined();
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('custom', () => {
    const props: IGenericListProps = {
      list: [
        {
          id: 'id-0',
          text: 'text-0',
          As: 'a',
          className: 'list__item',
          child: <span>child</span>,
          onClick: () => {
            return 'click 0';
          },
        },
        {
          id: 'id-1',
          text: 'text-1',
          As: 'a',
          className: 'list__item',
          child: <span>child</span>,
          onClick: () => {
            return 'click 1';
          },
        },
      ],
    };

    const { list } = props;

    const wrapper = shallow(<GenericList list={list} />);

    test('should render list of two AnchorElement', () => {
      expect(wrapper.find('a.list__item')).toHaveLength(2);
    });

    test('should contain onclick Fn', () => {
      const result = wrapper.find('a').map((listItem) => {
        return listItem.simulate('click');
      });

      expect(result).toHaveLength(2);
    });
  });
});

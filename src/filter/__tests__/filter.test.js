import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from '../views/filter/Filter';
import Link from '../views/link';
import * as FilterTypes from '../constants';

enzyme.configure({ adapter: new Adapter() });

describe('Filter', () => {
  it('should render three link', () => {
  const wrapper = shallow(<Filter /> );
  expect(wrapper.contains(<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>)).toEqual(true);
  expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toEqual(true) ;
  expect(wrapper.contains(<Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>)).toEqual(true) ;
  });
});

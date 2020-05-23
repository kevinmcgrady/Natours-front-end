import { shallow } from 'enzyme';
import React from 'react';

import { Icon } from '../icon/icon.component';

describe('<Icon />', () => {
  const icon = shallow(
    <Icon iconName='icon-map-pin' className='foo' iconClassName='foo' />,
  );

  it('should render svg', () => {
    expect(icon.find('svg')).toHaveLength(1);
  });

  it('should add classname', () => {
    expect(icon.find('svg').hasClass('foo')).toEqual(true);
  });

  it('should display correct href', () => {
    expect(icon.find('svg').find('use').prop('xlinkHref')).toBe(
      'icons.svg#icon-map-pin',
    );
  });
});

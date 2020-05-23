import { shallow } from 'enzyme';
import React from 'react';

import { Page } from './page.component';

describe('<Page />', () => {
  const page = shallow(
    <Page>
      <p>This is a page</p>
    </Page>,
  );

  it('should render component', () => {
    expect(page).toHaveLength(1);
  });

  it('should render children', () => {
    expect(page.find('p').text()).toBe('This is a page');
  });

  it('should have classname main', () => {
    expect(page.find('main').hasClass('main')).toEqual(true);
  });
});

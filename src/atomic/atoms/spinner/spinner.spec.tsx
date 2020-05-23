import { shallow } from 'enzyme';
import React from 'react';

import { Spinner } from './spinner.component';

describe('<Spinner />', () => {
  const spinner = shallow(<Spinner />);

  it('should render', () => {
    expect(spinner.find('div').first().hasClass('spinnerContainer')).toEqual(
      true,
    );
  });

  it('should render small spinner', () => {
    expect(spinner.find('div').at(1).hasClass('spinner')).toEqual(true);
  });

  it('should render large spinner', () => {
    const largeSpinner = shallow(<Spinner large />);

    expect(largeSpinner.find('div').at(1).hasClass('largeSpinner')).toEqual(
      true,
    );
  });
});

import React from 'react';

import '../../../index.css';

import { Icon } from './icon.component';

export default { title: 'Icon' };

export const grey = () => (
  <Icon className='heading-box__icon' iconName='icon-clock' />
);

export const colored = () => <Icon iconName='icon-map-pin' />;

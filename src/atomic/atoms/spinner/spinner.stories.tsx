import React from 'react';

import '../../../index.css';

import { Spinner } from './spinner.component';

export default { title: 'Spinner' };

export const small = () => <Spinner />;

export const large = () => <Spinner large />;

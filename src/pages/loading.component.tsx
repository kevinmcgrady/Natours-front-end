import React from 'react';

import { Page } from '../atomic/atoms/page/page.component';
import { Spinner } from '../atomic/atoms/spinner/spinner.component';

const Loading: React.FC<{}> = () => {
  return (
    <Page>
      <div className='pageContainer'>
        <Spinner large />
      </div>
    </Page>
  );
};

export default Loading;

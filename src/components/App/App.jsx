import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { BREAKPOINTS } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding-block: 48px;
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    padding-inline: 16px;
  }
`;

export default App;

import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainSection>
        <Header>
          <Title>Running</Title>
          <TabletAndLarger>
            <Select label='Sort' value={sortId} onChange={ev => setSortId(ev.target.value)}>
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </TabletAndLarger>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainSection>
      <SecondarySection>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <DesktopSpacer size={42} />
        <LaptopAndLarger>
          <ShoeSidebar />
        </LaptopAndLarger>
      </SecondarySection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const SecondarySection = styled.div`
  flex-basis: 248px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-basis: 0;
  }
`;

const MainSection = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex: revert;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopSpacer = styled(Spacer)`
  @media (max-width: ${BREAKPOINTS.tablet}) {
    & {
      display: none;
    }
  }
`;

const LaptopAndLarger = styled.div`
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const TabletAndLarger = styled.div`
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

export default ShoeIndex;

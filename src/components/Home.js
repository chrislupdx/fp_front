import React from 'react';
import HyperLinkListContainer from '../containers/HyperLinkListContainer';
import CreateLinkContainer from '../containers/CreateLinkContainer';
import { Main } from '../styles';

export default function Home() {
  return (
    <Main>
      <CreateLinkContainer />
      <HyperLinkListContainer />
    </Main>
  );
}

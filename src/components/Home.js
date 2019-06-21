import React from 'react';
import HyperLinkListContainer from '../containers/HyperLinkListContainer';
import CreateLinkContainer from '../containers/CreateLinkContainer';

export default function Home() {
  return (
    <>
      <CreateLinkContainer />
      <HyperLinkListContainer />
    </>
  );
}

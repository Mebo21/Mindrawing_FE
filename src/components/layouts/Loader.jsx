import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader color="#7469b6" size={100} />
      <p>Loading...</p>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  text-align: center;
`;

export default Loader;

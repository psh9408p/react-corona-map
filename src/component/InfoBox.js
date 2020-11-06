import React from "react";
import styled, { css } from "styled-components";

const InfoBoxUI = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  padding: 15px;
  z-index: 10000;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
`;

const InfoBoxTitle = styled.div`
  font-size: 15px;
  font-weight: bolder;
`;

const InfoBox = () => {
  return (
    <InfoBoxUI>
      <InfoBoxTitle>현재날짜</InfoBoxTitle>
      <div>2020.11.07</div>
    </InfoBoxUI>
  );
};

export default InfoBox;

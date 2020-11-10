import React from "react";
import styled, { css } from "styled-components";
const { kakao } = window;
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

const MyPosition = styled.div`
  position: absolute;
  top: 180px;
  z-index: 10000;
  background: white;
  left: 20px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bolder;
`;

const Searching = styled.div`
  position: absolute;
  top: 100px;
  left: 140px;
  z-index: 10000;
  background: white;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
`;

// let ps = new kakao.maps.services.Places();

const InfoBox = () => {
  return (
    <>
      <InfoBoxUI>
        <InfoBoxTitle>현재날짜</InfoBoxTitle>
        <div>2020.11.07</div>
      </InfoBoxUI>
      <MyPosition
        onClick={() => {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const latlng = new kakao.maps.LatLng(lat, lng);

              const InfoContainer = document.getElementById("myMap");
              const InfoOptions = {
                center: latlng,
                level: 5,
              };

              const map = new kakao.maps.Map(InfoContainer, InfoOptions);

              const InfoMarker = new kakao.maps.Marker({
                map,
                position: latlng,
              });
              InfoMarker.setMap(map);
            });
          } else {
            alert("위치정보를 사용할 수 없습니다 !");
          }
        }}
      >
        현재위치
      </MyPosition>
      <Searching>
        <input
          placeholder="목적지를 입력해주세요"
          style={{ border: "none", outline: "none" }}
          onClick={(e) => {
            console.log(e.target.value);
          }}
        />
        <button>검색</button>
      </Searching>
    </>
  );
};

export default InfoBox;

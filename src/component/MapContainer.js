import React, { useEffect } from "react";
// import styled, { css } from "styled-components";
import data from "../data/data";

const { kakao } = window;

console.log(data);

const MapContainer = () => {
  useEffect(() => {
    // addMap();
    addMarker();
  }, []);

  //지도생성함수
  // const addMap = () => {
  //   const container = document.getElementById("myMap");
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };
  //   //
  //   const map = new kakao.maps.Map(container, options);
  // };

  //마커생성함수
  const addMarker = () => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(data[0].lat, data[0].lng),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    // const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    data.forEach((el) => {
      const Marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });
      const InfoMarker = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: el.title,
        removable: true,
      });
      kakao.maps.event.addListener(Marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        InfoMarker.open(map, Marker);
      });
    });
    // const marker = new kakao.maps.Marker({
    //   map,
    //   position: new kakao.maps.LatLng(data[0].lat, data[0].lng),
    // });
    //---------------------------------
  };

  return <div id="myMap" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapContainer;

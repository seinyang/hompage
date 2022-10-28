// 카카오 맵 나타나게 하기,마커띄우기,인포윈도우

/* global kakao */

import React, { useState, useEffect } from "react";
const { kakao } = window;
//map.js안에 컴포넌트 (카카오 지도)
function Maps() {
  const [Map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("maps");
    const options = {
      center: new kakao.maps.LatLng(37.54508315015891, 127.05577825168322),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);
  }, {});

  const markerPosition = new kakao.maps.LatLng(
    37.54508315015891,
    127.05577825168322
  );

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  //마커생성
  marker.setMap(Map);

  const iwContent = [
      '<div style="padding: 10px;">',
      '   <div style="text-align: center; margin-bottom: 10px"><img src="../images/home/logo2.png" /></div>',
      "   <p>(주)넥스모어시스템즈<br /> 서울특별시 성동구 아차산로 103, 7층 708, 709호<br />",
      '       <a href="http://www.nexmore.co.kr" target="_blank">www.nexmore.co.kr</a>',
      "   </p>",
      "</div>",
    ].join(""),
    iwPosition = new kakao.maps.LatLng(37.54508315015891, 127.05577825168322); //인포윈도우 표시 위치

  // 인포윈도우를 생성
  var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  // 마커 위에 인포윈도우를 표시합니다.
  infowindow.open(Map, marker);
  return (
    <div className="maps">
      <div
        id="maps"
        style={{
          width: "100%",
          height: "600px",
          marginBottom: "30px",
        }}
      ></div>
    </div>
  );
}

export default Maps;

// SearchPlace.js
// 카카오 맵 나타나게 하기
/* global kakao */
import React, { useEffect } from "react";
const { kakao } = window;

function Maps() {
  useEffect(() => {
    const container = document.getElementById("maps");
    const options = {
      center: new kakao.maps.LatLng(37.56728016380676, 127.03596086234063),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, {});

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

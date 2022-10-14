import React from "react";
const { kakao } = window;

function Map() {
  return (
    <div>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=	c06badffb34344aced21fc4860c1b78d"
      ></script>
      {/* <!--Page Title--> */}
      <section
        className="page-title"
        style="background-image: url(../images/background/bg-page-title-1.jpg)"
      >
        <div className="auto-container">
          <h1>오시는길</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">오시는길</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="auto-container">
          <div className="service-details">
            <div className="content">
              <div className="row">
                <h3>LOCATION MAP</h3>
                <div
                  id="map"
                  style="width: 100%; height: 600px; margin-bottom: 30px"
                ></div>
              </div>
              <h3>LOCATION INFO</h3>
              <div className="gallery-info-box">
                <ul>
                  <li className="clearfix">
                    주소 :
                    <span>서울특별시 성동구 아차산로 103, 7층 708, 709호</span>
                  </li>
                  <li className="clearfix">
                    대표전화 : <span>02. 556. 3379</span>
                  </li>
                  <li className="clearfix">
                    상담전화 : <span>02. 563. 3336</span>
                  </li>
                  <li className="clearfix">
                    팩스번호 : <span>02. 556. 3359</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script>
        var HOME_PATH = window.HOME_PATH || "."; var nexmore = new
        kakao.maps.LatLng(37.5450077, 127.0558034), map = new
        kakao.maps.Map("map",{" "}
        {{
          center: nexmore.destinationPoint(0, 0),
          zoom: 13,
        }}
        ), marker = new naver.maps.Marker(
        {{
          map: map,
          position: nexmore,
        }}
        ); var contentString = [ '
        <div style="padding: 10px;">
          ', '{" "}
          <div style="text-align: center; margin-bottom: 10px">
            <img src="../images/home/logo2.png" />
          </div>
          ', "{" "}
          <p>
            (주)넥스모어시스템즈
            <br /> 서울특별시 성동구 아차산로 103, 7층 708, 709호
            <br />
            ", '{" "}
            <a href="http://www.nexmore.co.kr" target="_blank">
              www.nexmore.co.kr
            </a>
            ', "{" "}
          </p>
          ", "
        </div>
        ", ].join(""); var infowindow = new naver.maps.InfoWindow(
        {{
          content: contentString,
        }}
        );
      </script>
    </div>
  );
}

export default Map;

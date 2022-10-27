import React from "react";
import { Link } from "react-router-dom";
import Maps from "./maps";
const { kakao } = window;
let maps = document.getElementById("maps");
function Map() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>오시는길</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
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

                {/* // 여기로 maps.js 호출 */}
                <section>
                  <Maps />
                </section>
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
    </div>
  );
}
export default Map;

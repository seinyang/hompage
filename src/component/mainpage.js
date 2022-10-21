import React from "react";
import Slider from "./slider";
import Defaultsection1 from "./defaultsection1";
import Defaultsection2 from "./defaultsection2";
import News1 from "./news1";
import Download from "./download";
import Smartfactory from "./smartfactory";

import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      {/* slider.js */}
      <section
        class="main-slider"
        data-start-height="700"
        data-slide-overlay="yes"
      >
        <div
          id="categoryExampleSlider"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#categoryExampleSlider"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#categoryExampleSlider" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="images/main-slider/1.jpg" />
              <div class="carousel-caption">
                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="-90"
                  data-speed="1500"
                  data-start="0"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text-left">
                    <h2>IT의 가치 넥스모어가 만들어 갑니다.</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="images/main-slider/2.jpg" />
              <div class="carousel-caption">
                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="-90"
                  data-speed="1500"
                  data-start="0"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text-left">
                    <h2>
                      {" "}
                      끊임없이 변화하는 넥스모어는 더 나은 세상을 만들어 갑니다.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="left carousel-control"
            href="#categoryExampleSlider"
            role="button"
            data-slide="prev"
          >
            <span
              class="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#categoryExampleSlider"
            role="button"
            data-slide="next"
          >
            <span
              class="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* defaultsection1*/}
      <section className="default-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Challenge to Global Business</h2>
            <p>
              넥스모어시스템즈는 체계적이고 고도화된 개발로직으로 성공적인
              E-Business를 최우선으로 생각합니다.
            </p>
          </div>
          <div
            className="services-outer wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="clearfix">
              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-graphic"></span>
                  </div>
                  <h3>AI 관제 서비스</h3>
                  <div className="text">
                    AI기반 실시간 사람, 사물 인식으로 사람의 행동을 이해하는
                    시각 지능 핵심 솔루션
                  </div>
                  <Link a className="read-more" to="/ai">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>

              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-monitor-1"></span>
                  </div>
                  <h3>스마트시티 서비스</h3>
                  <div className="text">
                    물류, 교통, 환경 등 도시 문제를 해결하기 위한 스마트 시티
                    공공 분야 서비스 제공
                  </div>
                  <Link a className="read-more" to="/smartcity">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>

              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-coffee-cup"></span>
                  </div>
                  <h3>안전플랫폼</h3>
                  <div className="text">
                    도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여
                    시민들에게 데이터 기반의 재해재난 대응 서비스 제공
                  </div>
                  <Link a className="read-more" to="/safe">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>

              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-monitor-1"></span>
                  </div>
                  <h3>빅데이터 플랫폼</h3>
                  <div className="text">
                    SKT 인구 통계 데이터를 활용한 맞춤형 데이터셋으로 공공분야
                    및 빅데이터 플랫폼 구축 활용
                  </div>
                  <Link a className="read-more" to="/bigdata">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>

              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-users2"></span>
                  </div>
                  <h3>스마트 팩토리</h3>
                  <div className="text">
                    RFID시스템을 통한 공장자동화(FA)로 MES와 POP,
                    e-Manufacturing, Mobile-Factory 등 생산현장시스템 솔루션
                    제공
                  </div>
                  <Link a className="read-more" to="/smartfactory">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>

              <div className="default-service-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon-bar-chart"></span>
                  </div>
                  <h3>SIMS</h3>
                  <div className="text">
                    운영 센터의 자원 정보를 자동 수집해 자산을 현행화하고
                    효율적으로 관리하기 위한 솔루션
                  </div>
                  <Link a className="read-more" to="/sims">
                    자세히보기 <span className="fa fa-angle-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* defaultsection2 */}

      {/* news1.js */}

      {/* download */}

      {/* contact us */}
      <section className="call-to-action">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-md-8 col-sm-12 col-xs-12">
              <div className="text">Challenge To Global Business NEXMORE</div>
            </div>
            <div className="column text-right col-md-4 col-sm-12 col-xs-12">
              <a
                href="http://www.nexmore.co.kr/realtest/images/service/intro202104.pdf
                "
                className="theme-btn btn-style-two"
              >
                <i className="fa fa-download"></i> 회사소개서 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-upper">
          <div className="inner">
            <h2>CONTACT US</h2>

            <p>
              {" "}
              T. 02-556-3379 / F. 02-556-3359
              <br />
              사업자 등록번호 : 220-86-49824 / 서울특별시 성동구 아차산로 103,
              7층 708, 709호
            </p>
            <center>
              <div className="btn_wrap">
                <a className="blue" href="nexmore/map.html">
                  오시는 길
                </a>{" "}
              </div>
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Mainpage;

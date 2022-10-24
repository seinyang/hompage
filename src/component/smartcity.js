import React from "react";
import { Link } from "react-router-dom";

function Smartcity() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>스마트 서비스</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">스마트 시티 서비스</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-style-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 company">
              <div className="company-tab">
                <ul className="nav nav-pills nav-justified">
                  <li className="active">
                    <Link a data-toggle="pill" to="/smartcity">
                      스마트시티서비스{" "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/safe">
                      안전 플랫폼{" "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/sims">
                      SIMS{"  "}
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="menu1" className="tab-pane fade in active">
                    {/* <!--Title--> */}
                    <div className="sec-title centered">
                      <center>
                        <div className="border-blue-box">
                          <h4>
                            <strong>스마트 시티 서비스</strong>
                          </h4>
                        </div>
                      </center>
                    </div>

                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          display: "inline-block",
                          fontSize: "23px",
                          lineHeight: "5px",
                        }}
                      >
                        <h3>개요</h3>
                      </li>
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            fontSize: "20px",
                          }}
                        >
                          <strong>
                            - 전국 지자체에서 도시 문제, 물류, 환경분야 등
                            스마트 시티 서비스 공공 사업 추진중 <br />- 20개
                            지자체 사업 진행 중이며 46개 지자체 협업 진행
                          </strong>
                        </li>
                        <br />
                      </p>
                    </li>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="left-box">
                      <li style={{ float: "left" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{ fontSize: "23px", display: "inline-block" }}
                        >
                          <h3>스마트시티</h3>
                        </li>
                      </li>
                      <p>
                        <li
                          style={{
                            fontSize: "20px",
                            lineHeight: "35px",
                            display: "inline-block",
                          }}
                        >
                          - 창원시 지역거점 스마트시티
                          조성사업,김천시/양양군&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;스마트타운
                          챌린지 사업 추진 중
                        </li>
                      </p>
                      <center>
                        <img src="../images/nexmore/city1.jpg" />
                        &emsp;&emsp;&emsp;&emsp;
                      </center>
                      <br />
                      <li style={{ float: "left" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{ fontSize: "23px", display: "inline-block" }}
                        >
                          <h3>디지털 물류 서비스</h3>
                        </li>
                        <p>
                          <li
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              lineHeight: "35px",
                            }}
                          >
                            - 김천 구도시의 로봇/드론 라스트마일 물류 서비스를
                            실증하고 &emsp;&nbsp;&nbsp;디지털트윈 기반 구축
                            <br />- 김천 드론 실증 도시 구축사업에 선정되어 드론
                            물류 및
                            &emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;응용서비스
                            사업화 실증 예정
                          </li>
                        </p>
                      </li>
                      <br />
                      <br />
                      <br />
                      <br />
                      <li style={{ display: "inline-block" }}>
                        <center>
                          &emsp; &emsp; &nbsp;
                          <img src="../images/nexmore/digital.png" />
                        </center>
                      </li>
                      <br />
                      <br />
                      <li style={{ float: "left" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{ fontSize: "23px", display: "inline-block" }}
                        >
                          <h3>디지털 트윈 (공공선도, 팩토리)</h3>
                        </li>
                        <p>
                          <li
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              lineHeight: "35px",
                            }}
                          >
                            - 대상 시설물 3D 모델링 및 시뮬레이션을 구현
                            <br /> -경남TP, 경상남도/창원시/김해시 대상 시범
                            적용
                            <br />- 팩토리 적용으로 생산계획 최적화, 안전시설
                            관리, CPS
                            &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;모니터링 서비스
                            제공
                          </li>
                        </p>
                        <center>
                          <img src="../images/nexmore/twin.jpg" /> &emsp; &emsp;
                          &nbsp; &emsp; &emsp; &nbsp;
                        </center>
                      </li>
                    </div>

                    <div className="right-box">
                      <li style={{ float: "left", verticalAlign: "50px" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{
                            fontSize: "23px",
                            display: "inline-block",
                          }}
                        >
                          <h3>스마트 솔루션 확산 / 도시 재생 스마트 기술</h3>
                        </li>
                        <p>
                          <li
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              lineHeight: "35px",
                            }}
                          >
                            - 수원/성남시 스마트시티 솔루션 확산 사업
                            <br />- 안산/인천시 생활밀착형 도시 재생 스마트 기술
                            사업 추진 중
                          </li>
                        </p>
                        <center>
                          <img src="../images/nexmore/soll.jpg" />
                        </center>
                      </li>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <li style={{ float: "left" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{
                            fontSize: "23px",
                            display: "inline-block",
                          }}
                        >
                          <br />
                          <h3>주행소리 기반 도로노면위험 감지</h3>
                        </li>
                        <p>
                          <li
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              lineHeight: "35px",
                            }}
                          >
                            -노면상태에 따른 차량 주행소리 특성에 기반해 AI가
                            노면을 실시간 &nbsp;&nbsp;판별하여 알림으로 사고
                            예방
                            <br />- 성남시 실증, 원주지방국토관리청 설치 진행중,
                            김천 스마트타운 &nbsp;&nbsp;&nbsp;적용 예정
                          </li>
                        </p>
                        <center>
                          <img src="../images/nexmore/zu.jpg" />
                          &emsp;
                        </center>
                      </li>
                      <br />
                      <br />
                      <br />

                      <li style={{ float: "left" }}>
                        <img src="../images/nexmore/box.jpg" />
                        <li
                          style={{
                            fontSize: "23px",
                            display: "inline-block",
                          }}
                        >
                          <br />
                          <h3>대기질 관리 서비스</h3>
                        </li>
                        <p>
                          <li
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              lineHeight: "35px",
                            }}
                          >
                            - 화성시, 오산시 미세먼지 측정소 구축 운영 중
                            <br />- 전국 항구 해경 함정 센서 설치로 해외 유입
                            미세먼지 측정
                            <br />- 지하철 역사 미세먼지 센서 구축 및 측정
                          </li>
                          <br />
                        </p>
                        <center>
                          &emsp;&emsp; <img src="../images/nexmore/대기.png" />
                        </center>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Smartcity;

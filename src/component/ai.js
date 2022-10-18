import React from "react";

import { Link } from "react-router-dom";

function Ai() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>AI&BIG DATA</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">AI 관제 서비스</li>
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
                    <Link a data-toggle="pill" to="/ai">
                      AI 관제 서비스{" "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/bigdata">
                      빅데이터 플랫폼{" "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/fusion">
                      빅데이터 융합 서비스{"  "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/tmap">
                      T-map API{"  "}
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="menu3" className="tab-pane fade in active">
                    {/* <!--Title--> */}
                    <div className="sec-title centered">
                      <center>
                        <div className="border-blue-box">
                          <h4>
                            <strong>
                              AI 시각 지능화 기반 실시간 관제 서비스
                            </strong>
                          </h4>
                        </div>
                      </center>
                    </div>
                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{ display: "inline-block", lineHeight: "5px" }}
                      >
                        <h3>개요</h3>
                      </li>
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            fontSize: "23px",
                          }}
                        >
                          <strong>
                            - AI기반 실시간 사람, 사물 인식으로 사람의 행동을
                            이해하는 시각 지능 핵심 솔루션
                            <br />
                            - CCTV, 카메라 등에서 수집한 이미지 데이터를 사전
                            학습된 AI가 객체로 검출
                            <br />- 검출된 데이터로부터 사람의 행동을 분석하는
                            실시간 관제 모니터링 S/W 제공
                          </strong>
                        </li>
                        <br />
                        <li
                          style={{
                            float: "left",
                            top: "50%",
                            textAlign: "center",
                          }}
                        >
                          <img src="../images/nexmore/실nemo.png" />
                          <img src="../images/nexmore/살표.jpg" />
                          <img src="../images/nexmore/기반.png" />
                          <img src="../images/nexmore/살표.jpg" />
                          <img src="../images/nexmore/실시간.png" />
                        </li>
                      </p>
                    </li>
                    <br />
                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{ display: "inline-block", lineHeight: "5px" }}
                      >
                        <h3>특장점</h3>
                      </li>
                      <br />
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            fontSize: "23px",
                          }}
                        >
                          - 영상 내 사물 검출 대상 추가를 통해 적용 가능 분야
                          확장 가능
                          <br />
                          - 기존 운영중인 CCTV 활용으로 구축 비용 절감
                          <br />- 불법 쓰레기 투기, 위급상황자, 분실물, 위험물
                          등 공공 질서 및 사회 안전 분야 적용 가능
                          <center>
                            <img src="../images/nexmore/영상.jpg" />
                          </center>
                        </li>
                      </p>
                    </li>

                    <br />

                    <li style={{ float: "left", display: "inline-block" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          display: "inline-block",
                          lineHeight: "5px",
                          textAlign: "left",
                        }}
                      >
                        <h3>적용 사례</h3>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <p>
                          - 세종시, 서울시 은평구, 대전시 유성구 등 쓰레기
                          무단투기 단속 및 대전광역시 이상징후 실증 적용
                        </p>
                      </li>
                      <br />
                    </li>

                    <center>
                      <div className="abc">
                        <div>
                          &emsp;&emsp;
                          <img src="./images/nexmore/cctv.png" />
                          <img src="./images/nexmore/화살표.jpg" />
                          &nbsp;&nbsp;
                          <figcaption>
                            <li
                              style={{
                                float: "left",
                                display: "inline-block",
                                textAlign: "center",
                              }}
                            >
                              <h3>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인력
                                영상(cctv)
                              </h3>
                            </li>
                          </figcaption>
                        </div>

                        <div>
                          <li style={{ float: "left" }}>
                            <img src="./images/nexmore/cctv1.png" />

                            <figcaption>
                              <h3>쓰레기 투기 탐지 결과/투기 달지 경고 방송</h3>
                            </figcaption>
                          </li>
                        </div>
                      </div>
                    </center>
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

export default Ai;

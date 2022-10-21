import React from "react";

import { Link } from "react-router-dom";

function Bigdata() {
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
              <li className="active">빅데이터 플랫폼</li>
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
                  <li>
                    <Link a data-toggle="pill" to="/ai">
                      AI 관제 서비스{" "}
                    </Link>
                  </li>
                  <li className="active">
                    <Link a data-toggle="pill" to="/bigdata">
                      빅데이터 플랫폼{" "}
                    </Link>
                  </li>
                  <li>
                    <Link a data-toggle="pill" to="/fusion">
                      빅데이터 융합 서비스{"  "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link a data-toggle="pill" to="tmap">
                      T-map API{"  "}
                    </Link>
                  </li> */}
                </ul>
                <div className="tab-content">
                  <div id="menu3" className="tab-pane fade in active">
                    {/* <!--Title--> */}
                    <div className="sec-title centered">
                      <center>
                        <div className="border-blue-box">
                          <h4>
                            <strong>빅데이터 플랫폼</strong>
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
                            - SKTelecom 보유중인 인구 통계 데이터로 전국민을
                            모집단으로 하는 인구 표본 데이터
                            <br />
                            - 전국민 대비 약 50% 이상의 표본 비율 보유로
                            정확도가 높음
                            <br />- 공공분야 약 200여개 이상의 사업과 다수의
                            빅데이터 플랫폼에서 구축 및 활용 중
                          </strong>
                        </li>
                        <br />
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
                          - 빅데이터 플랫폼인 Geovision으로 공공 및 민간 니즈에
                          부합하는 맞춤형 데이터셋 보유
                          <br />
                          - 국내 유일 전파영역관리시스템을 통한 공간해상도 50m X
                          50m Smart Grid 제공으로 Zone Base <br />
                          인구 데이터 추출 용이
                          <br />- 네트워크 방식 위치 기반 솔루션 ‘pCELL’을 통해
                          타 통신사 대비 5배 이상 정밀한 인구 데이터 제공
                          <div className="abc">
                            <center>
                              <img src="../images/nexmore/영역.jpg" />
                              <figcaption>
                                <h4>
                                  전파영역관리시스템(전파지향성,전파영역관리)&emsp;
                                </h4>
                              </figcaption>
                            </center>

                            <li style={{ float: "left" }}>
                              <img src="../images/nexmore/분석.jpg" />
                              <figcaption>
                                <h4>SKT Data 경복궁 분석 영역</h4>
                              </figcaption>
                            </li>
                            <li style={{ float: "left" }}>
                              <img src="../images/nexmore/vs.jpg" />
                            </li>
                            <li style={{ float: "left" }}>
                              <img src="../images/nexmore/타사.jpg" />
                              <figcaption>
                                <h4>타사 경복궁 분석 영역</h4>
                              </figcaption>
                            </li>
                          </div>
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
                        <h3>데이터 종류</h3>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <p>
                          - 유동/유입인구 데이터를 표출 조건에 맞게 활용
                          가능하며 WEB 기반의 시각화 서비스 제공
                        </p>
                      </li>
                      <br />
                    </li>

                    <div className="abc">
                      <div>
                        <img src="./images/nexmore/표.png" />
                      </div>
                    </div>

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
                          - 유동/유입 인구 데이터를 활용해 문화관광, 교통, 상권,
                          광고 등 다양한 분야에 적용
                        </p>
                      </li>
                      <br />
                    </li>

                    <center>
                      <div className="abc">
                        <div>
                          <img src="./images/nexmore/파주.jpg" />

                          <figcaption>
                            <h3>파주시 관광객 이동 동선 분석</h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/대중교통.jpg" />

                          <figcaption>
                            <h3>대중교통 노선 분석 </h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/상권분석.jpg" />

                          <figcaption>
                            <h3>Geovision 상권분석 </h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/광고.jpg" />

                          <figcaption>
                            <h3>광고 효과 분석 </h3>
                          </figcaption>
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

export default Bigdata;

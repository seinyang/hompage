import React from "react";
import { Link } from "react-router-dom";

function Safe() {
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
              <li className="active">안전 플랫폼</li>
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
                    <Link a data-toggle="pill" to="/smartcity">
                      스마트시티서비스{" "}
                    </Link>
                  </li>
                  <li className="active">
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
                  <div id="menu2" className="tab-pane fade in active">
                    {/* <!--Title--> */}
                    <div className="sec-title centered">
                      <center>
                        <div className="border-blue-box">
                          <h4>
                            <strong>안전 플랫폼</strong>
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
                            - 도시 재해재난 발생 시 재난정보를 수집하고
                            분석〮예측하여 시민들에게 데이터 기반의 재해재난
                            대응 서비스 제공 <br />- 빅데이터 기반의 데이터
                            공유형 안전 플랫폼을 개발하여 데이터를 수집,
                            분석하고, 전용 모바일 앱을 통해 상황 전파
                          </strong>
                        </li>
                      </p>
                    </li>
                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{ display: "inline-block", lineHeight: "5px" }}
                      >
                        <h3>특장점</h3>
                      </li>
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            fontSize: "23px",
                          }}
                        >
                          - 안전분야 대상별 (경사지 붕괴, 폭염, 화재, 홍수)
                          데이터를 시스템간 연계하여 종합 관리하는 플랫폼 구축{" "}
                          <br />
                          - 안전 플랫폼 및 모바일 앱의 슬림(Slim)화,
                          모듈(Module)화, 라이트(Light)화하여 안전분야 최적의
                          성능 제공
                          <br />
                          - 다양한 센서로부터 수집되는 데이터 기반 자가학습
                          패턴인식 기술 제공
                          <br />- REST, Socket.IO, JSON 등 웹 기술을 활용한 표준
                          연계 인터페이스 제공
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
                        <h3>서비스 구성</h3>
                      </li>
                      <div>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                        <img src="./images/nexmore/서비스.png" />
                      </div>
                    </li>
                    <br />
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
                        <h3>개발 s/w 화면</h3>
                      </li>
                    </li>
                    <br />
                    <br />
                    <center>
                      <div className="abc">
                        <div>
                          <img src="./images/nexmore/보드.jpg" />

                          <figcaption>
                            <h3>안전 플랫폼 대시 보드 화면</h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/gps.jpg" />

                          <figcaption>
                            <h3>안전 플랫폼 GIS 기반 예〮경보 현황</h3>
                          </figcaption>
                        </div>
                        <div className="abc">
                          <div>
                            <img src="./images/nexmore/시각.jpg" />

                            <figcaption>
                              <h3>시각화 데이터</h3>
                            </figcaption>
                          </div>
                          <div>
                            <img src="./images/nexmore/경로.jpg" />

                            <figcaption>
                              <h3>구호 부서 출동 최적 경로 선정</h3>
                            </figcaption>
                          </div>
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
export default Safe;

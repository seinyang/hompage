import React from "react";
import { Link } from "react-router-dom";

function Sims() {
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
              <li className="active">SIMS</li>
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
                  <li>
                    <Link a data-toggle="pill" to="/safe">
                      안전 플랫폼{" "}
                    </Link>
                  </li>
                  <li className="active">
                    <Link a data-toggle="pill" to="/sims">
                      SIMS{"  "}
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
                            <strong>서버 정보 관리 시스템(SIMS)</strong>
                          </h4>
                        </div>
                      </center>
                    </div>
                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          fontSize: "23px",
                          display: "inline-block",
                          lineHeight: "5px",
                          verticalAlign: "middle",
                        }}
                      >
                        <h3>개요</h3>
                      </li>
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          <strong>
                            - 서비스운영 센터의 H/W, S/W 정보를 IP기반 연결로
                            자동 수집해 자산 현행화를 유지하고, 수집된 데이터{" "}
                            필터링 및 분석으로 운용 자산을 효율적으로 관리하기
                            위한 솔루션{" "}
                            <li
                              style={{
                                textAlign: "left",
                                lineHeight: "35px",

                                fontSize: "20px",
                              }}
                            >
                              - 수집된 데이터를 기반으로 빅데이터, AI 분석의
                              기초 자료로 활용될 수 있으며 고장, 장애 예측과
                              같은 실질적인 자산 관리 서비스 제공 가능
                            </li>
                          </strong>
                        </li>
                      </p>
                    </li>
                    <li style={{ float: "left" }}>
                      <br />
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          fontSize: "20px",
                          display: "inline-block",
                          lineHeight: "5px",
                          verticalAlign: "middle",
                        }}
                      >
                        <h3>특장점</h3>
                      </li>
                      <br />
                      <p>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - Linux/Unix 기반 서버에 SSH Key 방식으로 접속
                        </li>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - Public Key 설치 서버에 접속하여 스크립트 배포, 실행,
                          수집, 파싱 수행
                        </li>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - sudoers에 명시된 명령어만 실행 가능하여 위험 명령
                          수행 방지
                        </li>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - 수집된 정보로부터 서버 버전 관리, 디스크, 메모리 등
                          자원 정보 확인 가능
                        </li>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - 필요시 사용자 작성 스크립트 수행 기능
                        </li>
                        <li
                          style={{
                            textAlign: "left",
                            lineHeight: "35px",
                            textIndent: "-15px",
                            paddingLeft: "15px",
                            fontSize: "20px",
                          }}
                        >
                          - 다수 서버의 H/W, S/W 및 자원 정보를 스케줄, SMS,
                          E-mail을 통해 관리 가능
                        </li>
                      </p>
                    </li>

                    <li style={{ float: "left" }}>
                      <img src="../images/nexmore/특.png" />
                    </li>
                    <br />
                    <li style={{ float: "left", display: "inline-block" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          display: "inline-block",
                          lineHeight: "5px",
                          fontSize: "23px",
                          textAlign: "left",
                        }}
                      >
                        <h3>제공 기능</h3>
                      </li>
                      <div>
                        <center>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp;&emsp;&emsp;
                          <img src="./images/nexmore/제공.png" />
                        </center>
                      </div>
                    </li>

                    <li style={{ float: "left", display: "inline-block" }}>
                      <img src="../images/nexmore/box.jpg" />
                      <li
                        style={{
                          display: "inline-block",
                          lineHeight: "5px",
                          fontSize: "23px",
                          textAlign: "left",
                        }}
                      >
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>적용 사례</h3>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <p>
                          -SKT 서버 6천대 이상 관리에 적용
                          &nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;
                        </p>
                      </li>
                    </li>

                    <br />
                    <br />
                    <center>
                      <div className="abc">
                        <div>
                          <img src="./images/nexmore/현황.jpg" />
                          &nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;
                          <figcaption>
                            <h3>
                              &nbsp;&emsp;&emsp;스크립트 수행 작업 등록 및 수집
                              현황&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;
                            </h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/조회.jpg" />
                          &nbsp;&emsp;&emsp; &nbsp;&emsp;&emsp;
                          &nbsp;&emsp;&emsp; &nbsp;&emsp;&emsp;
                          &nbsp;&emsp;&emsp; &nbsp;&emsp;&emsp;
                          <figcaption>
                            <h3>
                              &nbsp;&emsp;&emsp;스크립트 수행 결과
                              조회&nbsp;&emsp;
                            </h3>
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
export default Sims;

import React from "react";

import { Link } from "react-router-dom";

function Fusion() {
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
              <li className="active">빅데이터 융합 서비스</li>
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
                  <li>
                    <Link a data-toggle="pill" to="/bigdata">
                      빅데이터 플랫폼{" "}
                    </Link>
                  </li>
                  <li className="active">
                    <Link a data-toggle="pill" to="/fusion">
                      빅데이터 융합 서비스{"  "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link a data-toggle="pill" to="/tmap">
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
                            <strong>빅데이터 융합서비스</strong>
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
                            - 국내 최대 수준 Big Data와 조사 통계 Small Data를
                            매칭하여 Smart Data로 활용
                            <br />- 각 데이터가 지닌 한계를 최소화 하고 장점은
                            극대화 하는 새로운 접근법
                          </strong>
                          <br />
                          <br />
                          <div className="abc">
                            <center>
                              <img src="../images/nexmore/더하기.png" />
                            </center>
                          </div>
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
                          - Big Data 기반에 리서치 데이터 융합 분석 후 그 결과를
                          광고/판촉/추천 등 수요 기업 마케팅에 적용
                          <br />
                          - SKT 통신 Big Data, KCB 금융 Big Data, 컨슈머인사이트
                          Small Data 등 전문성 있는 데이터 보유 <br />
                          - Big Data는 융합을 통해 Insight 있는 데이터를
                          확보하여 고객 활성화, 충성화, 보상 강화에 활용
                          <br />- Small Data는 Fact 추가로 확신성 있는 데이터를
                          확보하여 마케팅 컨설팅, 리서치 상품 개발 활용
                          <br />- SKT의 위치정보와 행동의 이유, 금융 정보를
                          연결해 유동/유입 데이터에 풍부한 의미의 해석 부여 가능
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
                        <h3>데이터 범위</h3>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <p>
                          - 여행/관광산업 데이터 확보 및 자동차, 통신, 유통,
                          경제 분야로 확대 중
                        </p>
                      </li>
                      <br />
                    </li>

                    <div className="abc">
                      <div>
                        <img src="./images/nexmore/표1.jpg" />
                        &emsp;
                        <img src="./images/nexmore/표2.jpg" />
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
                        <h3>데이터 가공 예시</h3>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <p>
                          - 데이터 특성에 따른 전국 지자체 단위 분석 가능
                          <br />- Web 기반 통계 패키지로 누구나 쉽게 분석
                          가능하며 시각적 결과 보고서 제시
                        </p>
                      </li>
                      <br />
                    </li>

                    <center>
                      <div className="abc">
                        <div>
                          <img src="./images/nexmore/지역관광.jpg" />

                          <figcaption>
                            <h3>
                              지역 관광 기초 환경 보고서 - 17개 시도, 229시군구
                              단위
                            </h3>
                          </figcaption>
                        </div>
                        <div>
                          <img src="./images/nexmore/web.jpg" />

                          <figcaption>
                            <h3>Web 기반 통계 패키지 </h3>
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

export default Fusion;

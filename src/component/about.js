import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";

function About() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>About Us</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="featureStyle1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column testimonial_container">
              <div className="content">
                <h2 className="text-center">
                  고객과 함께 가치를 더해가는 기업
                </h2>
                <br />
                <ul className="text-center">
                  <li style={{ fontSize: "40", marginBottom: "20" }} />
                  Knowledge Leaders
                  <li
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      marginBottom: "20px",
                    }}
                  >
                    넥스모어시스템즈는 스마트시티 5대 연계서비스 개발 및
                    통합플랫폼 공급, 스마트팩토리 설계 및 구축 등 IoT
                    <br />
                    기반 기술을 융합하여 디바이스, 플랫폼 및 어플리케이션 등의
                    소프트웨어를 개발하여 공급하는 ‘IoT 서비스
                    <br />
                    전문회사’입니다. 소프트웨어, 정보통신공사업을 주측으로 ICT
                    Total solution Provider로서 고객의 가치창조를
                    <br />
                    통해 "사회 편익에 기여한다"는 사명감으로 사업을 추진하고
                    있습니다.
                  </li>
                  <li>
                    <img
                      src="../images/nexmore/about-1.png"
                      style={{ marginRight: "30" }}
                    />
                    <img
                      src="../images/nexmore/about-2.png"
                      style={{ marginRight: "30" }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <img src="../images/nexmore/about-3.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column testimonial_container">
          <div className="content">
            <h3 style={{ fontSize: "20px" }} className="text-center">
              넥스모어 시스템즈는 "가치경영 + 고객만족 + 행복경영"의 최고의
              정보통신 회사를 지향합니다.
            </h3>
            <br />
            <ul className="text-center">
              <li>
                고객의 만족을 최우선으로 생각하며, 더욱 세련된 모습으로 모바일
                융합서비스 및 솔루션을 제공하고자 합니다.
              </li>
              <li>
                안으로는 우수한 인재를 소중하게 생각하는 인재경영, 우량한
                재무구조와 부가가치 극대화를 통한 가치 경영 및 고객 만족과
                <br />
                즐거운 직장을 통한 행복경영으로 21세기의 IT분야 최고의
                정보통신회사를 지향합니다.
              </li>
              <li>
                <img src="../images/nexmore/about-con1.png" />
              </li>
              {/* <!-- 주요인증 --> */}
              <div className="border-blue-box1">
                <h4 style={{ color: "black" }} className="text-center">
                  <strong>주요 인증</strong>
                </h4>
              </div>
              <br />
              <div className="abc">
                <div>
                  <img src="../images/nexmore/bencher.jpg" />
                  <figcaption>
                    <strong>[벤처기업]</strong>
                  </figcaption>
                </div>
                <div>
                  <img src="../images/nexmore/giup.jpg" />
                  <figcaption>
                    <strong>[기업부설연구소]</strong>
                  </figcaption>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <img src="../images/nexmore/jeonmon.jpg" />
                  <figcaption>
                    <strong>[전문연구사업자]</strong>
                  </figcaption>
                </div>
                <div>
                  <img src="../images/nexmore/BIZ.jpg" />
                  <figcaption>
                    <strong>[Main-Biz]</strong>
                  </figcaption>
                </div>
              </div>

              <div className="abc">
                <div>
                  <img src="../images/nexmore/위치.jpg" />
                  <figcaption>
                    <strong>[위치정보사업자]</strong>
                  </figcaption>
                </div>
                <div>
                  <img src="../images/nexmore/정보.jpg" />
                  <figcaption>
                    <strong>[정보통신공사업]</strong>
                  </figcaption>
                </div>
                <div>
                  <img src="../images/nexmore/소프트.jpg" />
                  <figcaption>
                    <strong>[소프트웨어사업자]</strong>
                  </figcaption>
                </div>
                <div>
                  <img src="../images/nexmore/inno.jpg" />
                  <figcaption>
                    <strong>[Inno-Biz]</strong>
                  </figcaption>
                </div>
              </div>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

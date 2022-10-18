import React from "react";

import { Link } from "react-router-dom";
function Defaultsection1() {
  return (
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
                  AI기반 실시간 사람, 사물 인식으로 사람의 행동을 이해하는 시각
                  지능 핵심 솔루션
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
                  물류, 교통, 환경 등 도시 문제를 해결하기 위한 스마트 시티 공공
                  분야 서비스 제공
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
                  도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여
                  시민들에게 데이터 기반의 재해재난 대응 서비스 제공
                </div>
                <Link a className="read-more" to="infoComm/business.html">
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
                  RFID시스템을 통한 공장자동화(FA)로 MES와 POP, e-Manufacturing,
                  Mobile-Factory 등 생산현장시스템 솔루션 제공
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
  );
}

export default Defaultsection1;

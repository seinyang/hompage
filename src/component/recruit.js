import React from "react";

function Recruit() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>인재채용</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <a href="../nexmore/about.html">넥스모어</a>
              </li>
              <li className="active">인재채용</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="feature-style-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="incruit-box">
              <ul>
                <li className="clearfix">
                  <h4 className="step01 col-lg-4">STEP01</h4>
                  <div className="col-lg-8 content">
                    <h5>01.지원서작성</h5>
                    당사 홈페이지의 온라인 지원을 통해 입사지원서를 작성하실 수
                    있습니다.
                    <br />
                    경력사원은 입사지원서 작성시 경력 및 수행업무 위주로 상세히
                    기술해 주시기 바랍니다.
                  </div>
                </li>
                <li className="clearfix">
                  <h4 className="step02 col-lg-4">STEP02</h4>
                  <div className="col-lg-8 content">
                    <h5>02.서류전형</h5>
                    입사지원서에 제시된 자격 및 경력 등을 중심으로 살펴봅니다.
                    <br />
                    서류전형 합격 여부는 유선을 통해 개별 통지해 드립니다.
                  </div>
                </li>
                <li className="clearfix">
                  <h4 className="step03 col-lg-4">STEP03</h4>
                  <div className="col-lg-8 content">
                    <h5>03.기술면접</h5>
                    입사지원자가 과거 수행했던 프로젝트 또는 교육받은 분야의
                    지식을 중심으로 실무진을 통해 기술 면접방식으로 진행됩니다.
                    개발업무 지원자에 한해 필기시험이 동반될 수 있습니다.
                  </div>
                </li>
                <li className="clearfix">
                  <h4 className="step04 col-lg-4">STEP04</h4>
                  <div className="col-lg-8 content">
                    <h5>04.임원면접</h5>
                    임원진이 입사지원자의 기본인성 및 가치관을 살펴봅니다.
                  </div>
                </li>
                <li className="clearfix">
                  <h4 className="step05 col-lg-4">STEP05</h4>
                  <div className="col-lg-8 content">
                    <h5>05.결과 안내</h5>
                    최종 합격 여부는 유선을 통해 개별 안내해 드립니다.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recruit;

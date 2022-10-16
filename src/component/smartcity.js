import React from "react";
import {Link} from "react";

function Smartcity(){
    return(
        <div>
<section
    class="page-title"
    style="background-image: url(../images/background/bg-page-title-1.jpg)"
  >
    <div class="auto-container">
      <h1>스마트 서비스</h1>
      <div class="bread-crumb-outer">
        <ul class="bread-crumb clearfix">
          <li><Link to="/smartcity">서비스사업본부</Link></li>
          <li class="active">사업소개</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="feature-style-1">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 company">
          <div class="company-tab">
            <ul class="nav nav-pills nav-justified">
              <li class="active">
                <a data-toggle="pill" href="#menu1">AI 관제서비스 </a>
              </li>
              <li>
                <a data-toggle="pill" href="#menu2"
                  >데이터 인포<br />DataInfo</a
                >
              </li>
              <li>
                <a data-toggle="pill" href="#menu3">포인트캠<br />PointCam</a>
              </li>
              <li>
                <a data-toggle="pill" href="#menu4">LBS<br />위치솔루션</a>
              </li>
              <li>
                <a data-toggle="pill" href="#menu5"
                  >SI 시스템<br />
                  구축 사업</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div id="menu1" class="tab-pane fade in active">
                <!--Title-->
                <div class="sec-title centered">
                  <h2>윤선생 잉글리쉬 스마트베플리서비스</h2>
                  <p>
                    학습자에게 꼭 맞는 학습량과 학습법을 제공하는 맞춤형
                    완전학습 서비스로<br />안드로이드 기반의 회원 앱과 아이폰
                    기반의 교사 앱으로 구성되어 있습니다.
                  </p>
                </div>
                <!-- <div class="row busuness-box ipp">
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">컨텐츠 개발</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">영어교육 프랜차이즈</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">사회공헌</p></div>
                            </div> -->
                <div class="services-style-one">
                  <div class="auto-container text-center">
                    <img src="../images/service/yoons.png" />
                  </div>
                </div>
              </div>
              <div id="menu2" class="tab-pane fade in">
                <!--Title-->
                <div class="sec-title centered">
                  <h2>데이터인포</h2>
                  <p>운영장비 현행화 관리 솔루션</p>
                  <p>
                    SK텔레콤의 전국 7개 운영센터(성수, 분당, 보라매, 부산, 대구,
                    서부&중부) <br />
                    전체에 대한 시설 현황 정보를 실시간으로 집계 솔루션
                  </p>
                </div>
                <!-- <div class="row busuness-box ipp">
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">대학교 학사시스템 연동</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">학생과 기업간의 연계 시스템</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">통계 데이터 자동 수집</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">프로그램 지원 모니터링</p></div>
                            </div> -->
                <div class="services-style-one">
                  <div class="auto-container text-center">
                    <img src="../images/service/datainfo.png" />
                  </div>
                </div>
              </div>
              <div id="menu3" class="tab-pane fade in">
                <!--Title-->
                <div class="sec-title centered">
                  <h2>SK텔레콤 CCTV 서비스</h2>
                  <p>
                    시간과 장소의 제약 없이 휴대폰과 PC를 통하여 원격지에 설치
                    된 CCTV 영상을 <br />
                    실시간으로 제어/확인 할 수 있는 자가 영상 보안 서비스
                    입니다.
                  </p>
                  <p>
                    2014년부터 현재까지 서비스 운영 및 고도화 개발을 진행하여
                    <br />
                    기존 사용자 및 추가 사용자 유치 할 수 있도록 운영하고
                    있습니다.
                  </p>
                </div>
                <!-- <div class="row busuness-box ipp">
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">실시간감시</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">저장 및 검색기능</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">실시간 통보 기능</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">무선제어 기능</p></div>
                            </div> -->
                <div class="services-style-one">
                  <div class="auto-container text-center">
                    <img src="../images/service/pointcam1.png" />
                  </div>
                </div>
              </div>
              <div id="menu4" class="tab-pane fade in">
                <!--Title-->
                <div class="sec-title centered">
                  <h2>LBS 위치솔루션</h2>
                  <p>
                    위치기반 서비스를 위해 필요한 기능 및 컨텐츠를 지원하고 표준
                    인터페이스를 통해 <br />
                    단말 환경이나 전송 프로토콜에 관계없이 차별화면 서비스
                    구축이 가능하도록 지원하는 서버 기반 플랫폼 입니다.
                  </p>
                </div>
                <!-- <div class="row busuness-box ipp">
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">대학교 학사시스템 연동</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">학생과 기업간의 연계 시스템</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">통계 데이터 자동 수집</p></div>
                                <div class="col-md-3 text-center"><span class="func"></span><p class="f-name">프로그램 지원 모니터링</p></div>
                            </div> -->
                <div class="services-style-one">
                  <div class="auto-container text-center">
                    <img src="../images/service/lbs.png" />
                  </div>
                </div>
              </div>
              <div id="menu5" class="tab-pane fade in">
                <!--Title-->
                <div class="sec-title centered">
                  <h2>SI 시스템 구축 사업</h2>
                  <p>
                    LBS 및 Educations, SI형태의 스마트 앱(Android, iOS, Window
                    Mobile) 구축 사업
                  </p>
                  <p>통합 운영 유지보수 사업을 지속적으로 수행</p>
                </div>
                <!-- <div class="row busuness-box ipp centered">
                                <div class="col-md-4 text-center"><span class="func"></span><p class="f-name">통합유지보수</p></div>
                                <div class="col-md-4 text-center"><span class="func"></span><p class="f-name">SI구축</p></div>
                                <div class="col-md-4 text-center"><span class="func"></span><p class="f-name">IT컨설팅</p></div>
                            </div> -->
                <div class="services-style-one">
                  <div class="auto-container text-center">
                    <img src="../images/service/si.png" />
                  </div>
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

export default Smartfactory;
import React from "react";
import Slider from "./slider";
import Defaultsection from "./defaultsection";
import Defaultsection2 from "./defaultsection2";
import News1 from "./news1";
import Download from "./download";
import Smartfactory from "./smartfactory";
import ServiceBox from "./servicebox";


import { Flag } from "react";


function Mainpage() {
  return (
    <div>
      {/* slider.js */}
      <section
        class="main-slider"
        data-start-height="700"
        data-slide-overlay="yes"
      >
        <div class="tp-banner-container">
          <div class="tp-banner">
            <ul>
              <li
                data-transition="fade"
                data-slotamount="1"
                data-masterspeed="1000"
                data-thumb="images/main-slider/1.jpg"
                data-saveperformance="off"
                data-title="Awesome Title Here"
              >
                <img
                  src="images/main-slider/1.jpg"
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <div class="slide-overlay"></div>
                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="-90"
                  data-speed="1500"
                  data-start="0"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text-left">
                    <h2>IT의 가치 넥스모어가 만들어 갑니다.</h2>
                  </div>
                </div>

                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="15"
                  data-speed="1500"
                  data-start="500"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text">
                    끊임없이 변화하는 넥스모어는 더 나은 세상을 만들어 갑니다.
                  </div>
                </div>

                <div
                  class="tp-caption sfb sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="90"
                  data-speed="1500"
                  data-start="1000"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <a href="nexmore/about.html" class="theme-btn btn-style-one">
                    Read More
                  </a>
                  &ensp;&ensp;
                  <a
                    href="service/business.html"
                    class="theme-btn btn-style-two"
                  >
                    NEXMORE SERVICES
                  </a>
                </div>
              </li>
              <li
                data-transition="fade"
                data-slotamount="1"
                data-masterspeed="1000"
                data-thumb="images/main-slider/2.jpg"
                data-saveperformance="off"
                data-title="Awesome Title Here"
              >
                <img
                  src="images/main-slider/2.jpg"
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <div class="slide-overlay"></div>

                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="-90"
                  data-speed="1500"
                  data-start="0"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text-left">
                    <h2>
                      "가치경영, 고객만족, 행복경영" 최고의 IT기업을 추구합니다.
                    </h2>
                  </div>
                </div>

                <div
                  class="tp-caption sft sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="15"
                  data-speed="1500"
                  data-start="500"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <div class="text">
                    고객의 다양한 Needs와 기술력과 특화된 솔루션으로 고객만족에
                    힘쓰겠습니다.
                  </div>
                </div>

                <div
                  class="tp-caption sfb sfb tp-resizeme"
                  data-x="left"
                  data-hoffset="15"
                  data-y="center"
                  data-voffset="90"
                  data-speed="1500"
                  data-start="1000"
                  data-easing="easeOutExpo"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.3"
                  data-endspeed="1200"
                  data-endeasing="Power4.easeIn"
                >
                  <a href="nexmore/about.html" class="theme-btn btn-style-one">
                    Read More
                  </a>{" "}
                  &ensp;&ensp;
                  <a
                    href="infoComm/business.html"
                    class="theme-btn btn-style-two"
                  >
                    NEXMORE SERVICES
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* defaultsection */}
      <section class="default-section">
        <div class="auto-container">
          <div class="sec-title centered">
            <h2>Challenge to Global Business</h2>
            <p>
              넥스모어시스템즈는 체계적이고 고도화된 개발로직으로 성공적인
              E-Business를 최우선으로 생각합니다.
            </p>
          </div>
          <div
            class="services-outer wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div class="clearfix">
              <ServiceBox
                iconclass="icon-graphic"
                title="AI 관제 서비스"
                content="AI기반 실시간 사람, 사물 인식으로 사람의 행동을 이해하는 시각 지능 핵심 솔루션"
                link="service/business.html"
              />

              <ServiceBox
                iconclass="icon-monitor-1"
                title="스마트 시티 서비스"
                content="물류, 교통, 환경 등 도시 문제를 해결하기 위한 스마트 시티 공공 분야 서비스  제공"
                link="service/business.html"
              />

              <ServiceBox
                iconclass="icon-coffee-cup"
                title="안전플랫폼"
                content="도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여 시민들에게 데이터 기반의 재해재난 대응 서비스 제공"
                link="service/business.html"
              />

              <ServiceBox
                iconclass="icon-monitor-1"
                title="빅데이터 플랫폼"
                content="도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여 시민들에게 데이터 기반의 재해재난 대응 서비스 제공"
                link="service/business.html"
              />

              <ServiceBox
                iconclass="icon-users2"
                title="스마트 팩토리"
                content="RFID시스템을 통한 공장자동화(FA)로 MES와 POP, e-Manufacturing, Mobile-Factory 등 생산현장시스템 솔루션 제공"
                link={<Smartfactory />}
                
              />
              

              <ServiceBox
                iconclass="icon-bar-chart"
                title="SIMS"
                content="운영 센터의 자원 정보를 자동 수집해 자산을 현행화하고 효율적으로 관리하기 위한 솔루션"
                link="service/business.html"
              />
            </div>
          </div>
        </div>
      </section>

      {/* defaultsection2 */}
      <section class="testimonial-style-two">
        <div class="auto-container">
          {/* <!--Title--> */}
          <div class="sec-title">
            <h2>넥스모어 솔루션 </h2>
          </div>
          {/* <!--Carousel Outer--> */}
          <div class="carousel-outer">
            <div class="single-item-carousel owl-theme owl-carousel">
              {/* <!--Slide--> */}

              {/* <!--Slide--> */}
              <div class="slide">
                <div class="content">
                  <div class="icon-box">
                    <span class="fa fa-camera"></span>
                  </div>
                  <div class="text">
                    <a href="infoComm/business.html">112연계 CCTV 솔루션</a>
                  </div>
                </div>
              </div>
              {/* <!--Slide--> */}
              <div class="slide">
                <div class="content">
                  <div class="icon-box">
                    <span class="fa fa-database"></span>
                  </div>
                  <div class="text">
                    <a href="service/business.html">데이터 정보 수집 솔루션</a>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="content">
                  <div class="icon-box">
                    <span class="fa fa-address-card"></span>
                  </div>
                  <div class="text">
                    <a href="service/business.html">LBS 위치 솔루션</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Carousel Outer--> */}
        </div>
      </section>

      {/* news1.js */}
      <section class="news-section">
        <div class="auto-container">
          {/* <!--Title--> */}
          <div class="sec-title centered">
            <h2>넥스모어 뉴스</h2>
          </div>

          <div class="row clearfix">
            {/* <!--News Style One--> */}
            <div class="news-style-two col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box">
                <div class="hover-style1">
                  <div class="image-box hover-style1-img">
                    <figure class="image">
                      <img src="images/services/nex.jpg" alt="" />
                    </figure>
                    <div class="hover-style1-view">
                      <a class="link-box" href="blog-single.html">
                        <span class="fa fa-link"></span>
                      </a>
                    </div>
                  </div>
                  <div class="hover-style1-title title-style-1">
                    <span>제3회 세계사이버스페이스 총회 전시회 참석</span>
                  </div>
                </div>

                <div class="lower-box">
                  <h3>
                    <b>112 긴급영상서비스 통합 플랫폼 제공</b>
                  </h3>
                  <div class="text">
                    넥스모어시스템즈(대표 김용걸)는 LBS, RFID/USN, 센서, CCTV 등
                    IoT 기반 기술을 통한 디바이스, 플랫폼, 어플리케이션
                    소프트웨어를 제공하는 IoT 서비스 전문회사이다.
                    넥스모어시스템즈는 ICT 토탈 솔루션 제공자로서 고객의
                    가치창조를 통해 ‘사회 편익 기여’를 지향하고 있다. 특히
                    다양한 프로젝트 수행 경험과 노하우를 바탕으로 서비스 및
                    솔루션 개발사업부, 정보통신사업부, 스마트 팩토리 사업부를
                    운영하고있다. 넥스모어시스템즈는 창사 이래 16년간 안전∙안심
                    분야에 집중해 LBS안심귀가서비스, 위치정보 제공 API개발,
                    자녀안심서비스, 안심드라이브서비스, 안심택시서비스, 차량관제
                    스마트키 개발, 치매관리서비스, RFID 출입통제서비스, CCTV
                    통합관제 시스템 구축, 112연계서비스 등 다양한 IoT 기반
                    서비스를 개발∙제공하고 있다.
                  </div>
                  <div class="post-meta"></div>
                </div>
              </div>
            </div>

            {/* <!--News Style One--> */}
            <div class="news-style-two col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box">
                <div class="hover-style1">
                  <div class="image-box hover-style1-img">
                    <figure class="image">
                      <img
                        src="images/services/nex1.jpg"
                        alt=""
                        width="370"
                        height="260"
                      />
                    </figure>

                    <div class="hover-style1-view">
                      <a class="link-box" href="blog-single.html">
                        <span class="fa fa-link"></span>
                      </a>
                    </div>
                  </div>
                  {/* <div class="hover-style1-title title-style-1"> */}
                  {/* <span>안전안산•안심안산 U-City2단계구축 민자투자사업(BTL) 관제센터 구축 완료</span> */}
                  {/* </div> */}
                </div>

                <div class="lower-box">
                  <h3>
                    <b>사설업체에 긴급신고해도 경찰차 달려온다.</b>
                  </h3>
                  <div class="text">
                    이르면 하반기부터 긴급 상황 발생 시 민간 보안업체와
                    112·119센터 등 공공 안전 기관이 데이터를 공유, 스마트시티
                    안전 서비스를 제공한다. 오·폐수나 악취를 감지하는
                    사물인터넷(IoT) 센서를 지역 스마트시티센터와 연동해 환경오염
                    사고 피해도 줄인다.정부와 지자체는 112·119 등 개별 운용된
                    국가 안전 재난 체계와 지자체 폐쇄회로 CCTV
                    관제센터(스마트시티센터) 등을 연계하기 위해 '스마트시티 통합
                    플랫폼'을 구축·운영했다. 위험물 보호 지원 서비스는
                    주택가·학교 등에서 안전사고 발생 시 위험시설물 관리자에게
                    상황을 전파, 밸브 잠금 등 보호 조치를 취하도록 하는
                    서비스다. 2차 사고를 예방하고, 일반 시민의 신속한 대피를
                    돕는다. 악취와 폐수를 감지하는 센서도 스마트시티센터와 연계,
                    환경오염 사고 발생 시 빠르게 원인을 찾아 오염원을 제거하도록
                    지원한다.
                  </div>
                  <div class="post-meta"></div>
                </div>
              </div>
            </div>

            {/* <!--News Style One--> */}
            <div class="news-style-two col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box">
                <div class="hover-style1">
                  <div class="image-box hover-style1-img">
                    <figure class="image">
                      <img src="images/services/nex3.jpg" alt="" />
                    </figure>

                    <div class="hover-style1-view">
                      <a class="link-box" href="blog-single.html">
                        <span class="fa fa-link"></span>
                      </a>
                    </div>
                  </div>
                  <div class="hover-style1-title title-style-1">
                    <span>Consulting</span>
                  </div>
                </div>

                <div class="lower-box">
                  <h3>
                    <b>스마트시티와 보안·안전산업의 미래를 보다.</b>
                  </h3>
                  <div class="text">
                    대전 전역에 설치된 CCTV를 활용해 범죄와 화재, 재난 등
                    긴급상황이 발생하면 현장의 실시간 영상을 112와 119 상황실,
                    순찰차, 재난상황실 등에 제공함으로써 각 기관이 유기적으로
                    대응해 골든타임을 놓치지 않도록 하는 서비스다. 아울러 이
                    서비스를 구현하기 위해 힘을 합친 기업의 기술과 제품 등도
                    살펴볼 수 있다. 대전광역시 홍보관에는 △넥스모어시스템즈(112
                    긴급 출동 영상 지원 서비스) △루키스(지능형 응급 호출 시스템)
                    △아보네(로고젝터) △안양대학교산학협력단
                    스마트도시공간연구센터 등이 공동 출품해 자사의 경쟁력을
                    보여줄 예정이다. 대전시의 ‘119 긴급구조 지원 서비스’가
                    지난해 글로벌 시장분석 기관(International Data
                    Corporation)가 개최한 ‘스마트시티 아시아퍼시픽 어워드
                    2017’에서 아시아태평양지역 공공안전 분야 최우수 프로젝트에
                    선정되기도 했다.{" "}
                  </div>
                  <div class="post-meta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* download */}
      <section class="sponsors-style-two">
        <div class="auto-container">
          <div class="sec-title">
            <h2>파트너</h2>
          </div>
          {/* <!--Sponsors Slider--> */}
          <ul class="sponsors-carousel-two owl-theme owl-carousel">
            <li>
              <div class="image-box tool_tip">
                <img src="./images/nexmore/client/client-01-01.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="./images/nexmore/client/client-01-02.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="./images/nexmore/client/client-01-03.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-04.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-05.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-06.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-07.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-08.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-09.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-10.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-11.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-01-12.png" alt="" />
              </div>
            </li>

            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-01.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-02.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-03.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-04.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-05.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-06.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-07.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-08.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-09.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-02-10.png" alt="" />
              </div>
            </li>

            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-01.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-02.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-03.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-04.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-05.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-03-06.png" alt="" />
              </div>
            </li>

            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-04-01.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-04-02.png" alt="" />
              </div>
            </li>
            <li>
              <div class="image-box tool_tip">
                <img src="images/nexmore/client/client-04-03.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="call-to-action">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="column col-md-8 col-sm-12 col-xs-12">
              <div class="text">Challenge To Global Business NEXMORE</div>
            </div>
            <div class="column text-right col-md-4 col-sm-12 col-xs-12">
              <a
                href="images/service/intro201804.pdf"
                class="theme-btn btn-style-two"
              >
                <i class="fa fa-download"></i> 회사소개서 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Mainpage;

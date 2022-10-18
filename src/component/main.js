import React from "react";

function Main() {
  return (
    <div>
      {/* slider.js */}
      <section
        className="main-slider"
        data-start-height="700"
        data-slide-overlay="yes"
      >
        <div className="tp-banner-container">
          <div className="tp-banner">
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

                <div className="slide-overlay"></div>
                <div
                  className="tp-caption sft sfb tp-resizeme"
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
                  <div className="text-left">
                    <h2>IT의 가치 넥스모어가 만들어 갑니다.</h2>
                  </div>
                </div>

                <div
                  className="tp-caption sft sfb tp-resizeme"
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
                  <div className="text">
                    끊임없이 변화하는 넥스모어는 더 나은 세상을 만들어 갑니다.
                  </div>
                </div>

                <div
                  className="tp-caption sfb sfb tp-resizeme"
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
                  <a
                    href="nexmore/about.html"
                    className="theme-btn btn-style-one"
                  >
                    Read More
                  </a>
                  &ensp;&ensp;
                  <a
                    href="service/business.html"
                    className="theme-btn btn-style-two"
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

                <div className="slide-overlay"></div>

                <div
                  className="tp-caption sft sfb tp-resizeme"
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
                  <div className="text-left">
                    <h2>
                      "가치경영, 고객만족, 행복경영" 최고의 IT기업을 추구합니다.
                    </h2>
                  </div>
                </div>

                <div
                  className="tp-caption sft sfb tp-resizeme"
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
                  <div className="text">
                    고객의 다양한 Needs와 기술력과 특화된 솔루션으로 고객만족에
                    힘쓰겠습니다.
                  </div>
                </div>

                <div
                  className="tp-caption sfb sfb tp-resizeme"
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
                  <a
                    href="nexmore/about.html"
                    className="theme-btn btn-style-one"
                  >
                    Read More
                  </a>{" "}
                  &ensp;&ensp;
                  <a
                    href="infoComm/business.html"
                    className="theme-btn btn-style-two"
                  >
                    NEXMORE SERVICES
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;

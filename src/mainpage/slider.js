import React from "react";

function Slider() {
  return (
    <section
      className="main-slider"
      data-start-height="700"
      data-slide-overlay="yes"
    >
      <div
        id="categoryExampleSlider"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#categoryExampleSlider"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#categoryExampleSlider" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="images/main-slider/1.jpg" />
            <div className="carousel-caption">
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
                <div className="image-text">
                  <h2>
                    {" "}
                    IT의 가치
                    <br />
                    &nbsp;&nbsp;&nbsp;넥스모어가 만들어 갑니다.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="images/main-slider/2.jpg " />

            <div class="carousel-caption">
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
                <div className="image-text">
                  <h2>
                    {" "}
                    끊임없이 변화하는 넥스모어는
                    <br />
                    &nbsp;&nbsp;더 나은 세상을 만들어 갑니다.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#categoryExampleSlider"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#categoryExampleSlider"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Slider;

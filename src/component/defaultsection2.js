import React from "react";

function Defaultsection2() {
  return (
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
  );
}

export default Defaultsection2;

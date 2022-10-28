import React from "react";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <div>
      <section className="call-to-action">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-md-8 col-sm-12 col-xs-12">
              <div className="text">Challenge To Global Business NEXMORE</div>
            </div>
            <div className="column text-right col-md-4 col-sm-12 col-xs-12">
              <a
                href="http://www.nexmore.co.kr/realtest/images/service/intro202104.pdf
                "
                className="theme-btn btn-style-two"
              >
                <i className="fa fa-download"></i> 회사소개서 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-upper">
          <div className="inner">
            <h2>CONTACT US</h2>

            <p>
              {" "}
              T. 02-556-3379 / F. 02-556-3359
              <br />
              사업자 등록번호 : 220-86-49824 / 서울특별시 성동구 아차산로 103,
              7층 708, 709호
            </p>
            <center>
              <div className="btn_wrap">
                <Link a className="blue" to="map">
                  오시는 길
                </Link>{" "}
              </div>
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Contactus;

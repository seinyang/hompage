import React from "react";

function Footer() {
  return (
    <footer class="main-footer">
      <div class="footer-upper"></div>
      {/* <!--Footer Bottom--> */}
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <p>
                <li style={{ textAlign: "left", float: "left" }}>
                  <img src="images/home/logo3.png" />
                </li>
              </p>
              <center>
                <p>
                  <li style={{ textAlign: "right", float: "right" }}>
                    <div className="footer">
                      &emsp;&emsp;넥스모어시스템즈 대표이사 김용걸&emsp;
                    </div>
                    <br />
                  </li>
                  <li
                    style={{
                      textAlign: "right",
                      float: "right",
                      lineHeight: "35px",
                    }}
                  >
                    <div className="footer">
                      &emsp;&emsp;사업자 등록번호 : 220-86-49824&emsp;&emsp;
                    </div>
                  </li>
                </p>
              </center>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 mt-20">
              <div class="copyright-text">
                <li
                  style={{
                    textAlign: "right",
                    float: "right",
                    position: "absolute",
                    textIndent: "40px",
                    lineHeight: "22px",
                  }}
                >
                  <div className="footer">
                    &nbsp;&nbsp;&emsp;&emsp;대표번호:02-556-3379&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;
                    <br />
                    <br />
                    <br />
                  </div>
                  <br />
                  <div className="footer">
                    사업 및 제휴문의:jinhyuk.jeon@nexmore.co.kr
                    <br />
                    <br />
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

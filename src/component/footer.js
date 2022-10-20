import React from "react";

function Footer() {
  return (
    <section className="call-to-action1">
      <div className="auto-container1">
        <div className="row clearfix">
          <div className="column col-md-8 col-sm-12 col-xs-12">
            <center>
              <li style={{ float: "left" }}>
                <img src="../images/nexmore/넥스모어.png" />
                &emsp;&emsp;&emsp;&emsp;
              </li>
            </center>

            <li style={{ textAlign: "left", float: "left" }}>
              <div className="footer">
                넥스모어시스템즈 대표이사
                김용걸&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
            </li>
            <li style={{ textAlign: "left", float: "left", width: "20" }}>
              <div className="footer">사업자 등록번호 : 220-86-49824</div>
            </li>

            <li
              style={{
                textAlign: "right",
                float: "right",
                position: "absolute",
              }}
            >
              <div className="footer">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;대표번호:02-556-3379
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&nbsp;
              </div>

              <div className="footer">
                사업 및 제휴문의:jinhyuk.jeon@nexmore.co.kr
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

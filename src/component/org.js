import React from "react";

function Org() {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>조직도</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <a href="../nexmore/about.html">넥스모어</a>
              </li>
              <li className="active">조직도</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="featureStyle1">
        <div className="auto-container">
          <div className="row clearfix">
            <div align="center">
              <img src="../images/nexmore/사다리.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Org;

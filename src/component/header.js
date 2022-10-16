import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header header-style-one">
      <div className="header-lower">
        <div className="main-box">
          <div className="auto-container">
            <div className="outer-container clearfix">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/" title="The Finance">
                    <img src="images/home/logo.png" alt="" />
                    </Link>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <Link to="#">Ai&Big Data</Link>

                        <ul>
                          <li>
                          <a href="infoComm/business.html">AI관제 서비스</a>
                          </li>
                          <li>
                            <Link to="default2">빅데이터 플랫폼</Link>
                          </li>
                          <li>
                            <a href="infoComm/product.html">
                              빅데이터 융합서비스
                            </a>
                          </li>
                          <li>
                            <a href="infoComm/product.html">T-map API</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">스마트 서비스</a>
                        <ul>
                          <li>
                            <Link to="smartcity">
                              스마트 시티서비스
                            </Link>
                          </li>
                          <li>
                            <a href="service/incetance.html">안전플랫폼</a>
                          </li>
                          <li>
                            <a href="service/incetance.html">Sims</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">스마트서비스</a>
                        <ul>
                          <li>
                            <Link to="smartfactory">스마트팩토리</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">회사소개</a>
                        <ul>
                          <li>
                            <Link to="about">넥스모어시스템즈</Link>
                          </li>
                          <li>
                            <Link to="history">주요연혁</Link>
                          </li>
                          <li>
                            <Link to="org">조직도</Link>
                          </li>
                          <li>
                            <Link to="partner">파트너</Link>
                          </li>
                          <li>
                            <Link to="recruit">인재채용</Link>
                          </li>
                          <li>
                            <a href="../nexmore/map.html">오시는길</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div className="right-btn">
                  <a href="nexmore/contact" className="btn-style-one">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="absolute"><a href = ""><fontcolor = "white"> ENG</a></div> */}
            {/* <div class="absolute1"><a href = ""><fontcolor= "white"> KOR</a></div> */}
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <a href="main.html" title="consulted">
              <img src="images/home/logo2.png" alt="" />
            </a>
          </div>

          <div className="right-col pull-right">
            <nav className="main-menu">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                  <li className="dropdown">
                    <a href="#">Ai&Big Data</a>
                    <ul>
                      <li>
                        <a href="service/product.html">Ai 관제 서비스</a>
                      </li>
                      <li>
                        <a href="infoComm/product.html">빅데이터 플랫폼</a>
                      </li>
                      <li>
                        <a href="infoComm/product.html">빅데이터 융합서비스</a>
                      </li>
                      <li>
                        <a href="infoComm/product.html">T-map API</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">스마트 서비스</a>
                    <ul>
                      <li>
                        <a href="service/business.html">스마트 시티서비스</a>
                      </li>
                      <li>
                        <a href="service/incetance.html">안전플랫폼</a>
                      </li>
                      <li>
                        <a href="service/incetance.html">Sims</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">스마트서비스</a>
                    <ul>
                      <li>
                        <a href="infoComm/business.html">스마트팩토리</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">회사소개</a>
                    <ul>
                      <li>
                        <a href="../nexmore/about.html">넥스모어시스템즈</a>
                      </li>
                      <li>
                        <a href="../nexmore/history.html">주요연혁</a>
                      </li>
                      <li>
                        <a href="../nexmore/org.html">조직도</a>
                      </li>
                      <li>
                        <a href="../nexmore/partner.html">파트너</a>
                      </li>
                      <li>
                        <a href="../nexmore/recruit.html">인재채용</a>
                      </li>
                      <li>
                        <a href="../nexmore/map.html">오시는길</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="nexmore/contact.html">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* <div class="absolute"><a href = "">< style="white">ENG</a></div> */}
            {/* <div class="absolute1"><a href = ""><fontcolr "black" >KOR</a></div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

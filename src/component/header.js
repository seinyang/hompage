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
                            <Link to="/ai">AI관제 서비스</Link>
                          </li>
                          <li>
                            <Link to="/bigdata">빅데이터 플랫폼</Link>
                          </li>
                          <li>
                            <Link to="/fusion">빅데이터 융합서비스</Link>
                          </li>
                          <li>
                            <Link to="/tmap">T-map API</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">스마트 서비스</a>
                        <ul>
                          <li>
                            <Link to="smartcity">스마트 시티서비스</Link>
                          </li>
                          <li>
                            <Link to="safe">안전플랫폼</Link>
                          </li>
                          <li>
                            <Link to="sims">SIMS</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">스마트 팩토리</a>
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
                  <Link to="/footer" className="btn-style-one">
                    CONTACT US
                  </Link>
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
            <Link to="/" title="consulted">
              <img src="images/home/logo2.png" alt="" />
            </Link>
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
                        <Link to="/ai">AI관제 서비스</Link>
                      </li>
                      <li>
                        <Link to="/bigdata">빅데이터 플랫폼</Link>
                      </li>
                      <li>
                        <Link to="/fusion">빅데이터 융합서비스</Link>
                      </li>
                      <li>
                        <Link to="/tmap">T-map API</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">스마트 서비스</a>
                    <ul>
                      <li>
                        <Link to="smartcity">스마트 시티서비스</Link>
                      </li>
                      <li>
                        <Link to="safe">안전플랫폼</Link>
                      </li>
                      <li>
                        <Link to="sims">SIMS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">스마트 팩토리</a>
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
                  <li>
                    <Link to="/footer">CONTACT US</Link>
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

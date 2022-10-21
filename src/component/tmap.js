// import React from "react";

// import { Link } from "react-router-dom";

// function Tmap() {
//   return (
//     <div>
//       <section
//         className="page-title"
//         style={{
//           backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
//         }}
//       >
//         <div className="auto-container">
//           <h1>AI&BIG DATA</h1>
//           <div className="bread-crumb-outer">
//             <ul className="bread-crumb clearfix">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="active">T-map API</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="feature-style-1">
//         <div className="auto-container">
//           <div className="row clearfix">
//             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 company">
//               <div className="company-tab">
//                 <ul className="nav nav-pills nav-justified">
//                   <li>
//                     <Link a data-toggle="pill" to="/ai">
//                       AI 관제 서비스{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link a data-toggle="pill" to="/bigdata">
//                       빅데이터 플랫폼{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link a data-toggle="pill" to="/fusion">
//                       빅데이터 융합 서비스{"  "}
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link a data-toggle="pill" to="/tmap">
//                       T-map API{"  "}
//                     </Link>
//                   </li>
//                 </ul>
//                 <div className="tab-content">
//                   <div id="menu3" className="tab-pane fade in active">
//                     {/* <!--Title--> */}
//                     <div className="sec-title centered">
//                       <center>
//                         <div className="border-blue-box">
//                           <h4>
//                             <strong>T-map API</strong>
//                           </h4>
//                         </div>
//                       </center>
//                     </div>
//                     <li style={{ float: "left" }}>
//                       <img src="../images/nexmore/box.jpg" />
//                       <li
//                         style={{ display: "inline-block", lineHeight: "5px" }}
//                       >
//                         <h3>개요</h3>
//                       </li>
//                       <p>
//                         <li
//                           style={{
//                             textAlign: "left",
//                             lineHeight: "35px",
//                             fontSize: "23px",
//                           }}
//                         >
//                           <strong>
//                             - 우수한 품질의 실시간 교통정보를 반영하는 경로 안내
//                             내비게이션 서비스
//                             <br />- 스마트폰, 태블릿, 자동차 등 다양한
//                             디바이스에서 서비스 가능
//                             <br />- Map, POI 검색, Geo-fencing 등 다양한 API
//                             제공으로 목적에 맞는 맞춤 서비스 지원
//                           </strong>
//                           <br />
//                         </li>
//                       </p>
//                     </li>
//                     <br />
//                     <li style={{ float: "left" }}>
//                       <img src="../images/nexmore/box.jpg" />
//                       <li
//                         style={{ display: "inline-block", lineHeight: "5px" }}
//                       >
//                         <h3>특장점</h3>
//                       </li>
//                       <br />
//                       <p>
//                         <li
//                           style={{
//                             textAlign: "left",
//                             lineHeight: "35px",
//                             fontSize: "23px",
//                           }}
//                         >
//                           - WEB 방식, 안드로이드, iPhone SDK를 모두 지원하여
//                           다양한 플랫폼에서 활용 가능
//                           <br />- SDK 내 상세한 가이드 문서와 예제 파일 제공으로
//                           개발 편의성이 뛰어남
//                         </li>
//                       </p>
//                     </li>
//                     <div className="abc">
//                       <center>
//                         <img src="../images/nexmore/네모.jpg" />
//                       </center>
//                     </div>

//                     <br />
//                     <li style={{ float: "left", display: "inline-block" }}>
//                       <img src="../images/nexmore/box.jpg" />
//                       <li
//                         style={{
//                           display: "inline-block",
//                           lineHeight: "5px",
//                           textAlign: "left",
//                         }}
//                       >
//                         <h3>T-map API 종류</h3>
//                       </li>
//                     </li>

//                     <div className="abc">
//                       <div>
//                         <img src="./images/nexmore/table.jpg" />
//                       </div>
//                     </div>

//                     <li style={{ float: "left", display: "inline-block" }}>
//                       <img src="../images/nexmore/box.jpg" />
//                       <li
//                         style={{
//                           display: "inline-block",
//                           lineHeight: "5px",
//                           textAlign: "left",
//                         }}
//                       >
//                         <h3>적용사례</h3>
//                       </li>
//                       <li style={{ fontSize: "20px" }}>
//                         <p>
//                           - 이마트 온라인 배송 시스템 : 실시간 경로 탐색으로
//                           고객이 원하는 시간대 배송 서비스 제공
//                           <br />- 동부화재 긴급 출동 서비스 : 지도 API, 실시간
//                           경로로 고객과 가장 가까운 기사 배정 및 도착 시간 안내
//                           <br />- SKT 쿠키즈 서비스 : 아이 위치를 추적하여 이상
//                           발생 시 부모에게 알림 서비스 제공
//                         </p>
//                       </li>
//                       <br />
//                     </li>

//                     <center>
//                       <div className="abc">
//                         <div>
//                           <img src="./images/nexmore/이마트.jpg" />

//                           <figcaption>
//                             <h3>이마트 배송 시스템</h3>
//                           </figcaption>
//                         </div>
//                         &emsp;&emsp;
//                         <div>
//                           <img src="./images/nexmore/동부화재.jpg" />

//                           <figcaption>
//                             <h3>동부화재 긴급 출동 서비스 </h3>
//                           </figcaption>
//                         </div>
//                         &emsp;&emsp;
//                         <div>
//                           <img src="./images/nexmore/키즈.jpg" />

//                           <figcaption>
//                             <h3>SKT쿠키즈 서비스</h3>
//                           </figcaption>
//                         </div>
//                       </div>
//                     </center>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Tmap;

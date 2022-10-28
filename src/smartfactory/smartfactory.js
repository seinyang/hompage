import React from "react";
import { Link } from "react-router-dom";

function Smartfactory(){
    return(
        <div>
        <section
        className="page-title"
        style={{
          backgroundImage: "url(../images/background/bg-page-title-1.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>SMART FACTORY</h1>
          <div className="bread-crumb-outer">
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">스마트 팩토리</li>
            </ul>
          </div>
        </div>
      </section>

<section className="featureStyle1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column testimonial_container">
              <div className="content">
           <br/>
            <li>
                <p>
            <h3 style={{ fontSize: "25px" }}>
                º공장자동화(FA)를 바탕으로 MES와 POP, e-Manufacturing, Mobile-Factory 등 <text className = "blue-text">생산현장시스템 솔루션을 제공</text>
                <br/>
                º생산공정의 원천 데이터 추출 인프라시스템인 <text className = "blue-text">RFID시스템</text>(HW, SW)를 공급
            </h3>
            </p>
            </li>
            <br/>
          </div>

          <div className='left-box'>
            <center>
          <img src="../images/nexmore/넥스.png"/>
          <br/>
          <br/>
          <div className="border"><h4>스마트팩토리 솔루션 기능 고도화(ODC)</h4></div>
          <br/>
          <div className="border"><h4>MCP 과제 수행 (MES 파트너)</h4></div>
          </center>
          <br/>
            
          <h4><strong>현재 미라콤아이앤씨 협력 파트너사</strong></h4>
            <li>•스마트팩토리 구축사업 진행 중 (MES 구축 등)</li>
            <br/>
<p>
            <h4><strong>2022년 Smart factory Co-work Partner 선정</strong></h4>
          <li>•ICT 기반의 지능화 생산체계를 통해 제조 경쟁력 강화</li>
          <li>•Nexplant MESplus 솔루션을 사용하여 제품 생산부터 자재관리, 설비관리, 품질관리 등 생산공정에서 최적의 통합관리 지원</li>
          </p>
         </div>

<div className='right-box'>
                    <center>
                    <img src="../images/nexmore/RFID.png"/>
                    <br/>
                    <h5><strong>[RFID 시스템 구성도]</strong></h5>
                    </center>
                    <br/>
                    <div>
                   <center>
                    <img src="../images/nexmore/nemo1.png"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="../images/nexmore/nemo2.png"/>
                    <h5><strong>[RFID MW 서비스 화면]</strong></h5>
                    </center>
                    <br/>
                    </div>
</div>
                    </div>
                    </div>
                    </div>
                    </section>
                    

        </div>
        
    );
}

export default Smartfactory;
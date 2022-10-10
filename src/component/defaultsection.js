import React from "react";
import ServiceBox from "./servicebox";



function Defaultsection(){
    return(
        <section class="default-section">
        <div class="auto-container">
            
            <div class="sec-title centered">
                <h2>Challenge to Global Business</h2>
                <p>넥스모어시스템즈는 체계적이고 고도화된 개발로직으로 성공적인 E-Business를 최우선으로 생각합니다.</p>
            </div>
            <div class="services-outer wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="clearfix">
                    
                    <ServiceBox iconclass="icon-graphic"
                                title="AI 관제 서비스"
                                content="AI기반 실시간 사람, 사물 인식으로 사람의 행동을 이해하는 시각 지능 핵심 솔루션"
                                link="service/business.html" />
                
                    
                    <ServiceBox iconclass="icon-monitor-1"
                                title="스마트 시티 서비스"
                                content="물류, 교통, 환경 등 도시 문제를 해결하기 위한 스마트 시티 공공 분야 서비스  제공"
                                link="service/business.html" />


                    <ServiceBox iconclass="icon-coffee-cup"
                                title="안전플랫폼"
                                content="도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여 시민들에게 데이터 기반의 재해재난 대응 서비스 제공"
                                link="service/business.html" />
                  
                    <ServiceBox iconclass="icon-monitor-1"
                                title="빅데이터 플랫폼"
                                content="도시 재해재난 발생 시 재난정보를 수집하고 분석, 예측하여 시민들에게 데이터 기반의 재해재난 대응 서비스 제공"                              
                                link="service/business.html" />
                    
                    <ServiceBox iconclass="icon-users2"
                                title="스마트 팩토리"
                                content="RFID시스템을 통한 공장자동화(FA)로 MES와 POP, e-Manufacturing, Mobile-Factory 등 생산현장시스템 솔루션 제공"                           
                                link="service/business.html" />

                    <ServiceBox iconclass="icon-bar-chart"
                                title="SIMS"
                                content="운영 센터의 자원 정보를 자동 수집해 자산을 현행화하고 효율적으로 관리하기 위한 솔루션"                                
                                link="service/business.html" />
                   
                        </div>
                    </div>
                </div>
         
    </section>
    );
}
export default Defaultsection;
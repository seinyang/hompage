import React from "react";


function Header(){
    return(

        <header class="main-header header-style-one">
	
    <div class="header-lower">
        <div class="main-box">
            <div class="auto-container">
                <div class="outer-container clearfix">
					
                    
                    <div class="logo-box">
                        <div class="logo"><a href="main.html" title="The Finance"><img src="images/home/logo.png" alt=""/></a></div>
                    </div>
					
                    
                    <div class="nav-outer clearfix">
                       
						
                        <nav class="main-menu">
                            <div class="navbar-header">
                                
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="dropdown"><a href="#">ai&big data</a>
                                        <ul>
                                            <li><a href="nexmore/about.html">넥스모어소개</a></li>
                                            <li><a href="nexmore/ceo.html">CEO인사말</a></li>
                                            <li><a href="nexmore/history.html">회사연혁</a></li>
                                            <li><a href="nexmore/org.html">조직도</a></li>
                                            <li><a href="nexmore/partner.html">파트너</a></li>
                                            <li><a href="nexmore/recruit.html">인재채용</a></li>
                                            <li><a href="nexmore/map.html">오시는길</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">서비스사업본부</a>
                                        <ul>
                                            <li><a href="service/business.html">사업소개</a></li>
                                            <li><a href="service/incetance.html">구축실적</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">정보통신사업본부</a>
                                        <ul>
                                            <li><a href="infoComm/business.html">사업분야</a></li>
                                            <li><a href="infoComm/incetance.html">구축실적</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">PRODUCT</a>
                                        <ul>
                                            <li><a href="service/product.html">서비스사업</a></li>
                                            <li><a href="infoComm/product.html">정보통신사업</a></li>
                                        </ul>
                                    
                                    </li>
                                    	
                                </ul>
                            </div>
                        </nav>

                        <div class="right-btn">
                            <a href="nexmore/contact" class="btn-style-one">CONTACT US</a>
                        </div>
                    </div>

                </div>
				{/* <div class="absolute"><a href = ""><fontcolor = "white"> ENG</a></div> */}
				{/* <div class="absolute1"><a href = ""><fontcolor= "white"> KOR</a></div> */}
            </div>
        </div>
    </div>

  
	
	
    <div class="sticky-header">
        <div class="auto-container clearfix">
		
			
            
            <div class="logo pull-left">
                <a href="main.html" title="consulted"><images src="images/home/logo2.png" alt=""/></a>
            </div>

            
            <div class="right-col pull-right">
                
                <nav class="main-menu">
                    <div class="navbar-header">
                        
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse clearfix">
                        <ul class="navigation clearfix">
                            <li class="dropdown"><a href="#">넥스모어</a>
                                <ul>
                                    <li><a href="nexmore/about.html">넥스모어소개</a></li>
                                    <li><a href="nexmore/ceo.html">CEO인사말</a></li>
                                    <li><a href="nexmore/history.html">회사연혁</a></li>
                                    <li><a href="nexmore/org.html">조직도</a></li>
                                    <li><a href="nexmore/partner.html">파트너</a></li>
                                    <li><a href="nexmore/recruit.html">인재채용</a></li>
                                    <li><a href="nexmore/map.html">오시는길</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#">서비스사업본부</a>
                                <ul>
                                    <li><a href="service/business.html">사업분야</a></li>
                                    <li><a href="service/incetance.html">구축실적</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#">정보통신사업본부</a>
                                <ul>
                                    <li><a href="infoComm/business.html">사업분야</a></li>
                                    <li><a href="infoComm/incetance.html">구축실적</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#">PRODUCT</a>
                            			<ul>
                                            <li><a href="service/product.html">서비스사업</a></li>
                                            <li><a href="infoComm/product.html">정보통신사업</a></li>
                                        </ul>
                            </li>
                            <li><a href="nexmore/contact.html">CONTACT US</a></li>
							
							
							
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
import React from "react";

function Footer(){
    return(
<footer class="main-footer">
    <div class="footer-upper">
        <div class="inner">
            <h2>CONTACT US</h2>
            <p> T. 02-556-3379 / F. 02-556-3359<br/>
                사업자 등록번호 : 220-86-49824 /
                서울특별시 성동구 아차산로 103, 7층 708, 709호</p>
            <div class="btn_wrap">
                <a class="blue" href="nexmore/map.html">오시는 길</a> <a class="blue" href="nexmore/contact.html">사업제휴 문의</a> </div>
        </div>
    </div>
    {/* <!--Footer Bottom--> */}
    <div class="footer-bottom">
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <p><img src="images/home/logo3.png" /></p>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 mt-20">
                    <div class="copyright-text">Copyright© By NEXMORESYSTEMS INC. All Rights Reserved</div>
                </div>
            </div>
        </div>
    </div>
</footer>


    );
}

export default Footer;
import React, { useState } from "react";
import { Nav } from "react";

function Detail() {
  let [탭, 탭변경] = useState(0);
  return <TabContent />;
}
<Nav variant="tabs" defaultActiveKey="link0">
  <Nav>
    <Nav.Link href="#" eventKey="link0">
      AI관제서비스
    </Nav.Link>
  </Nav>
  <Nav>
    <Nav.Link href="#" eventKey="link1">
      빅데이터 플랫폼
    </Nav.Link>
  </Nav>
  <Nav>
    <Nav.Link href="#" eventKey="link2">
      빅데이터 융합서비스
    </Nav.Link>
  </Nav>
  <Nav>
    <Nav.Link href="#" eventKey="link3">
      T-map API
    </Nav.Link>
  </Nav>
</Nav>;

function TabContent(props) {
  if (props.탭 == 0) {
    <div>
      <link>
        <a href="service/product.html" />
      </link>
    </div>;
  }
  if (props.탭 == 1) {
    <div>
      <link>
        <a href="infoComm/product.html" />
      </link>
    </div>;
  }
}

export default Detail;

import React from "react";
import Img1 from "../../assets/imgs/img_1.jpg";
import Img3 from "../../assets/imgs/img_3.jpg";
import { Col, Row } from "reactstrap";

export default function Intro() {
  return (
    <div style={{ marginBottom: "130px", marginTop: "200px" }}>
      <Row style={{ maxWidth: "100%" }} className=" px-9 py-4 my-5">
        <Col md="6" className="w-10">
          <p className=" fade-in text-6xl font-bold leading-none">
            It's <span className="text-primaryColor">Deepanshu !</span>{" "}
            Beautiful Code & Takeaway Provided to you...😁
          </p>
          <p className="text-gray text-2xl">
            As a passionate React developer with a strong foundation in HTML,
            CSS, and JavaScript, I craft captivating web experiences that
            seamlessly blend functionality and aesthetics.
          </p>
        </Col>
        <Col md="6" className="d-flex justify-content-center">
          <img src={Img1} alt="" className="h-10 w-11" />
        </Col>
      </Row>
    </div>
  );
}

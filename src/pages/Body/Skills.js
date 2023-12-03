import React from "react";
import { Row, Col } from "reactstrap";
import Img3 from "../../assets/imgs/img_3.jpg";
import SkillSlider from "./Crousel/Crousel";

export default function Skills() {
  return (
    <Row
      style={{ maxWidth: "100%" }}
      id="skill_section"
      className=" px-5 py-4 my-5 "
    >
      <Col
        id="skill_scroll"
        style={{ maxWidth: "480px", margin: "auto" }}
        md="6"
        className=" h-12  "
      >
        {/* <img src={Img3} alt="" className="h-10 w-11 rounded-5" /> */}
        <SkillSlider />
      </Col>
      <Col
        md="6"
        className="skill_text w-10 d-flex flex-column justify-content-center"
      >
        <p className="text-start text-5xl font-bold leading-none text-primaryColor">
          The bunch of fresh skills
        </p>
        <p className="text-gray text-2xl text-start">
          My expertise extends to harnessing the power of Tailwind CSS, creating
          elegant, responsive, and user-friendly interfaces. With a commitment
          to clean code and a keen eye for design.
        </p>
      </Col>
    </Row>
  );
}

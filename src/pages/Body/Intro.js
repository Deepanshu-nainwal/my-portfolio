import React from "react";
import Img1 from "../../assets/imgs/img_1.jpg";
import Img3 from "../../assets/imgs/img_3.jpg";
import resume from "../../assets/imgs/Deepanshu_Nainwal_Resume.pdf";
import { Button, Col, Row } from "reactstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePdg";
import { GitHub } from "react-feather";

export default function Intro() {
  const handleDownload = () => {
    // Replace 'your-resume.pdf' with the actual file URL or path
    const fileURL = resume;
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", "your-resume.pdf");
    document.body.appendChild(link);
    link.click();
  };

  const redirectToPortfolio = () => {
    window.open("https://github.com/Deepanshu-nainwal/my-portfolio");
  };
  return (
    <div
      id="intro_section"
      style={{ marginBottom: "130px", marginTop: "200px" }}
    >
      <Row
        id="intro_outer_box_id"
        style={{ maxWidth: "100%" }}
        className=" intro_outer_box px-9 mx-5 py-4 my-5"
      >
        <Col md="6" className="intro_section_text w-10">
          <p className=" fade-in text-5xl font-bold leading-none text-start ">
            It's <span className="text-primaryColor">Deepanshu !</span>{" "}
            Beautiful Code & Takeaway Provided to you...😁
          </p>
          <p className="text-gray text-xl text-start ">
            As a passionate React developer with a strong foundation in HTML,
            CSS, and JavaScript, I craft captivating web experiences that
            seamlessly blend functionality and aesthetics.
          </p>
          <div className="text-start d-flex align-items-center gap-4">
            <Button
              onClick={handleDownload}
              style={{
                backgroundColor: "#35b8be",
                color: "#fff",
                border: "none",
              }}
            >
              {/* <PDFDownloadLink document={<ResumePDF />} fileName="resume.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Resume"
            }
          </PDFDownloadLink> */}
              Resume
            </Button>
            <GitHub
              onClick={redirectToPortfolio}
              className="icon-hover"
              size={32}
            />
          </div>
        </Col>
        <Col md="6" className="intro_section_img d-flex justify-content-center">
          <img
            src={Img1}
            alt=""
            style={{ width: "380px", height: "324px" }}
            className=""
          />
        </Col>
        <Col md="4" className="d-flex justify-content-center"></Col>
      </Row>
    </div>
  );
}

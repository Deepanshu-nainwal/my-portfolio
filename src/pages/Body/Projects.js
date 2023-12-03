import React, { useEffect, useRef } from "react";
import Img3 from "../../assets/imgs/img_3.jpg";
import project1 from "../../assets/Logo/SiyaramLogo.png";
import project2 from "../../assets/Logo/women-logo.png";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setScrollToProject } from "../Header/store/store";

export default function () {
  const scrollTargetRef = useRef(null);
  const dispatch = useDispatch();

  const scrollToTarget = () => {
    // Calculate the Y position of the target element
    const targetY = scrollTargetRef.current.offsetTop;

    // Scroll to the target element's Y position
    window.scrollTo({
      top: targetY,
      behavior: "smooth", // Use smooth scrolling for a smooth transition
    });
  };
  useEffect(() => {
    dispatch(setScrollToProject(scrollToTarget));
  }, []);
  return (
    <div className="project_section" ref={scrollTargetRef}>
      <div className="text-center mb-5 ">
        <p className="m-0 py-1 text-small text-gray fw-bolder">
          Browse My Recent{" "}
        </p>
        <h1 className=" text-5xl text-primaryColor font-bold ">Projects</h1>
      </div>
      <div className="project_outer_box">
        <div className="project_box ">
          <div
            style={{
              height: "180px",
              background: "#ffffff",
              padding: "25px 0px",
            }}
            className="project_img_box project_img Box_shadow  rounded mx-auto "
          >
            <img
              className=" "
              src={project1}
              alt="Project"
              style={{ height: "99px" }}
            />
          </div>
          <div className=" fw-bolder text-xl py-4">Siyaram's Clone</div>
          <Button
            onClick={() => {
              window.open(
                "https://645cc253550a2407a7488be7--fabulous-kangaroo-cab540.netlify.app"
              );
            }}
            className="project_btn"
            color="none"
          >
            Demo
          </Button>
          <Button
            onClick={() => {
              window.open("https://github.com/Deepanshu-nainwal/siyaram-clone");
            }}
            className="project_btn"
            color="none"
          >
            Github
          </Button>
        </div>
        <div className="project_box ">
          <div className="project_img_box rounded ">
            <img
              className="project_img"
              src={project2}
              alt="Project"
              style={{ height: "180px" }}
            />
          </div>
          <div className=" fw-bolder text-xl py-4">Women's Clone</div>
          <Button
            onClick={() => {
              window.open("https://women-clone.netlify.app/");
            }}
            className="project_btn"
            color="none"
          >
            Demo
          </Button>
          <Button
            onClick={() => {
              window.open("https://github.com/Deepanshu-nainwal/womens");
            }}
            className="project_btn"
            color="none"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}

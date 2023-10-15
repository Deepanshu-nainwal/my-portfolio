import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyLogo from "../../assets/Logo/Logo.jpg";
import logo from "../../assets/svg/logo.svg";
import "./Footer.css";
import { setScrollToFooter } from "../Header/store/store";

export default function Footer() {
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
    dispatch(setScrollToFooter(scrollToTarget));
  }, []);
  return (
    <div
      ref={scrollTargetRef}
      className=" App bg-gray-light  d-flex flex-column align-items-center justify-content-center"
      style={{ height: "200px", marginTop: "150px" }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="d-flex align-items-center justify-content-center ">
        <img src={MyLogo} alt="Logo" width={50} />
        <p className="font-bold text-1xl  ms-1 mt-2 ">
          Made By Me With <span className="text-primaryColor">React.</span>
        </p>
      </div>
      {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
    </div>
  );
}

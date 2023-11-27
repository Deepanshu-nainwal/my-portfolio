import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo/Logo.jpg";
import { Button, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setScrollToCompany, setScrollToHome } from "./store/store";
export default function Header() {
  const dispatch = useDispatch();
  const scrollToHome = useSelector((state) => state.scrollReducer.scrollToHome);
  const scrollToThankYou = useSelector(
    (state) => state.scrollReducer.scrollToThankYou
  );
  const scrollToCompany = useSelector(
    (state) => state.scrollReducer.scrollToCompany
  );
  const scrollToFooter = useSelector(
    (state) => state.scrollReducer.scrollToFooter
  );
  const scrollTargetRef = useRef(null);

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
    dispatch(setScrollToHome(scrollToTarget));
  }, []);
  return (
    <div
      ref={scrollTargetRef}
      style={{ width: "100%", top: "0", zIndex: "10" }}
      className="fixed "
    >
      <Row style={{ maxWidth: "100%" }}>
        <Col
          md="12"
          className="bg-primaryColor text-white text-0xl text-center h-7 py-3 "
        >
          We&#x27;re open and available for takeaway &amp; delivery.
          <span
            onClick={() => scrollToThankYou()}
            className="custom_link font-bold  "
          >
            Connect Now
          </span>
        </Col>
        <Col
          md="12"
          className="Box_shadow bg-white mb-3 d-flex justify-content-between px-5 text-0xl text-center h-8 py-3 "
        >
          <div className="cursor-pointer">
            <img
              onClick={() => scrollToHome()}
              className="h-7"
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="d-flex gap-4 text-2xl  cursor-pointer  font-bold">
            <p
              onClick={() => {
                console.log("2");
                scrollToHome();
              }}
              className="hover:text-primaryColor"
            >
              Home
            </p>
            <p className="hover:text-primaryColor">Projects</p>
            <p
              onClick={() => scrollToCompany()}
              className="hover:text-primaryColor"
            >
              Company
            </p>
            <p
              onClick={() => scrollToThankYou()}
              className="hover:text-primaryColor"
            >
              Contact
            </p>
            <p
              onClick={() => scrollToFooter()}
              className="hover:text-primaryColor"
            >
              Footer
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

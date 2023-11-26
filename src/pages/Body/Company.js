import React, { useRef, useEffect } from "react";
import { Badge, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Lock } from "react-feather";
import { setScrollToCompany } from "../Header/store/store";
import Legistify from "../../assets/imgs/legi.jpg";

export default function Company() {
  const scrollTargetRef = useRef(null);
  const dispatch = useDispatch();

  const scrollToTarget = () => {
    const targetY = scrollTargetRef.current.offsetTop;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    dispatch(setScrollToCompany(scrollToTarget));
  }, []);
  return (
    <div ref={scrollTargetRef} id="company_section">
      <div className="text-center mb-7 ">
        <h1 className=" text-5xl text-primaryColor font-bold ">
          Working Journey.
        </h1>
      </div>
      <div className="">
        <Row className="default_Row">
          <Col md="4" className="px-7 d-flex flex-column align-items-center  ">
            <div
              style={{ width: "300px", height: "300px " }}
              className=" level Box_shadow  bg-primaryColor rounded-full   d-flex flex-column justify-content-center"
            >
              <img className=" w-10 h-9 rounded-xl  " src={Legistify} alt="" />
            </div>
            <h3 className="font-bold w-10 mt-4 ">
              Software Developer At{" "}
              <span className="text-primaryColor">Legistify</span>
            </h3>
          </Col>
          <Col md="4" className="px-7 d-flex flex-column align-items-center  ">
            <div
              style={{ width: "300px", height: "300px " }}
              className=" Box_shadow bg-primaryColor_2 rounded-full   d-flex flex-column justify-content-center align-items-center"
            >
              <Lock color="grey" size={180} />
            </div>
            <h3 className="font-bold w-10 mt-4 ">Software Developer At ...?</h3>
          </Col>
          <Col md="4" className="px-7 d-flex flex-column align-items-center  ">
            <div
              style={{ width: "300px", height: "300px " }}
              className=" Box_shadow bg-primaryColor_2 rounded-full   d-flex flex-column justify-content-center align-items-center"
            >
              <Lock color="grey" size={180} />
            </div>
            <h3 className="font-bold w-10 mt-4 ">Software Developer At ...?</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}

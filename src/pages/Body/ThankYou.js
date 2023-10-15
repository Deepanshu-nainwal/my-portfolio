import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ToggleRight, ToggleLeft } from "react-feather";
import thankYou from "../../assets/imgs/thankYou2.jpg";
import toast from "react-hot-toast";
import "./thankYou.css";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import { setScrollToThankyou } from "../Header/store/store";
import { useDispatch } from "react-redux";
const defaultValues = {
  name: "",
  email: "",
  msg: "",
};
export default function ThankYou() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const [touchData, setTouchData] = useState([]);
  const [showInfoData, setShowInfoData] = useState(false);

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

  const onSubmit = (data) => {
    const myObj = { name: data.name, email: data.email, msg: data.msg };
    if (data.name === "" || data.email === "" || data.msg === "") {
      toast.error("Please Fill Details");
    } else {
      localStorage.setItem("Data", JSON.stringify([...touchData, myObj]));
      reset(defaultValues);
    }
  };

  const infoData = JSON.parse(localStorage.getItem("Data"));

  const InfoDetails = () => {
    return (
      <Card
        style={{ height: "400px", border: "none" }}
        className="Box_shadow py-4 border-none rounded-xl overflow-scroll overflow-x-hidden  "
      >
        <div className="d-flex justify-content-end px-3 cursor-pointer">
          <Button
            onClick={() => setShowInfoData(false)}
            color="info"
            size="sm"
            outline
          >
            <ToggleRight size={28} />
          </Button>
        </div>
        <CardBody className=" w-14 p-2 px-4 d-flex flex-column gap-3 ">
          {infoData?.map((val) => {
            return (
              <p className="Box_shadow bg-primaryColor_3 rounded-lg p-2 px-3 m-0   ">
                <Label className="text-gray font-bold me-1">Msg From</Label>
                <Badge color="primaryColor me-1">{val?.name}</Badge>
                <Label className="text-gray font-bold me-1">{val?.email}</Label>
                <Label className="text-gray w-13 ">{val?.msg}</Label>
              </p>
            );
          })}
        </CardBody>
      </Card>
    );
  };

  useEffect(() => {
    dispatch(setScrollToThankyou(scrollToTarget));
  }, []);

  return (
    <div ref={scrollTargetRef} style={{ marginTop: "200px" }}>
      <div className="text-center mb-7 ">
        <h1 className=" text-6xl text-primaryColor font-bold ">
          Get In Touch.
        </h1>
      </div>
      <div className="bg-primaryColor_3 px-7 py-8 ">
        <Row className="default_Row  ">
          <Col md="4" className="px-7 d-flex flex-column align-items-center  ">
            <div className="base ms-5 rounded-full bg-primaryColor_2">
              <div className="holder"></div>
              <div className="thread">
                <div className="knob"></div>
                <div className="pendulum text-6xl font-bold text-left text-white">
                  Thank You..💤
                </div>
              </div>
              <div class="shadow"></div>
            </div>
          </Col>
          <Col
            md="4"
            className="px-7 d-flex flex-column align-items-center  ms-10"
          >
            {!showInfoData ? (
              <Card style={{ borderRadius: "20px" }}>
                <CardBody className="w-14">
                  <Row className="px-4">
                    <Col md="12">
                      {infoData?.length > 0 && (
                        <div className="d-flex justify-content-end cursor-pointer">
                          <Button
                            onClick={() => setShowInfoData(true)}
                            size="sm"
                            color="info"
                            outline
                          >
                            <ToggleLeft size={24} />
                          </Button>
                        </div>
                      )}
                    </Col>
                    <Col md="6">
                      <Label className="font-bold text-gray">Name</Label>
                      <Controller
                        name="name"
                        id="name"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} type="text" placeholder="Name..." />
                        )}
                      />
                    </Col>
                    <Col md="6">
                      <Label className="font-bold text-gray">Email</Label>
                      <Controller
                        name="email"
                        id="email"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} type="text" placeholder="Email" />
                        )}
                      />
                    </Col>
                    <Col className="mt-3 " md="12">
                      <Label className="font-bold text-gray">Message</Label>
                      <Controller
                        name="msg"
                        id="msg"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            className="h-9 "
                            type="textarea"
                            placeholder="Hey There....!"
                          />
                        )}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <div className="text-right">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    style={{ background: "bg-primaryColor" }}
                    //   color="danger"
                    className="w-9 py-2 font-bold text-white rounded-lg bg-primaryColor  m-3 "
                  >
                    Submit
                  </button>
                </div>
              </Card>
            ) : (
              InfoDetails()
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

import React from "react";
import redeem1 from "../../assets/redeem-1.png";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  MobileNumberCheck,
  onlyNumberCheck,
} from "../../ConditionChecks/ConditionChecks";
import { ResetUserMobile } from "../../Utils/Api/ResetUserMobile";
import { useState } from "react";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { userId } from "../../Utils/LocalStorage";
import { toast } from "react-toastify";

const EditMobileNumber = ({ mobile }) => {
  console.log("prop mob", mobile);
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [errdisplay, setErrdisplay] = useState("");
  const [apiErrDisplay, setApiErrDisplay] = useState("");

  const handleMobileChange = (event) => {
    const mobileCheck = onlyNumberCheck(event.target.value);

    if (mobileCheck.validition === true) {
      mobile(event.target.value);
      setMobileNumber(event.target.value);
      setErrdisplay(mobileCheck.err_display);
    } else if (mobileCheck.input === "invalid") {
      setErrdisplay(mobileCheck.err_display);
    }
  };

  const VerificationHandler = (event) => {
    event.preventDefault();
    const mobileCheck = MobileNumberCheck(mobileNumber);
    if (mobileCheck.input === "empty") {
      setErrdisplay(mobileCheck.err_display);
    } else if (mobileCheck.input === "invalid") {
      setErrdisplay(mobileCheck.err_display);
    } else if (mobileCheck.validition === true) {
      const userid = userId();
      let mob = {
        mobile_number: mobileNumber,
        user_id: userid,
      };
      setErrdisplay(mobileCheck.success_display);
      VerificationHandlerApi(mob);
    }
  };

  const VerificationHandlerApi = async (MobileCredentials) => {
    const mobileVer = await ResetUserMobile(MobileCredentials);
    if (mobileVer.status === "200") {
      navigate("/redeemverfication");
      toast.success(mobileVer.p_responseMessage, {
        position: "top-center",
        width: "500px",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (mobileVer.success === false) {
      toast.error(mobileVer.p_responseMessage, {
        position: "top-center",
        width: "500px",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          <p className="page-text">
            <Link to="/my-profile" style={{ color: "black" }}>
              <MdKeyboardArrowLeft className="arrow-left" />
              Back
            </Link>
          </p>
          <p className="page-maintitle">Edit Mobile Number</p>
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <div className="text-center mt-3">
                <Image width={150} src={redeem1}></Image>
                <p className="mt-4 redem-confirm">Change Mobile Number</p>
                <Form
                  className="formmain mt-4 signin-row edit-mainform"
                  onSubmit={VerificationHandler}
                >
                  <Form.Group
                    className="mb-1 text-left"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-label-custom">
                      Enter New Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Mobile Number"
                      className="custom-formcontrol edit-form"
                      onChange={handleMobileChange}
                    />
                  </Form.Group>
                  <div style={{ textAlign: "left", paddingBottom: "0.2rem" }}>
                    <ErrorLabel ErrorDisplay={errdisplay} />
                  </div>
                  <div className="d-flex vou-btns just-center mt-1">
                    <Button
                      variant="primary"
                      type="submit"
                      className="green-btn"
                    >
                      Send Verification code{" "}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col md="4"></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default EditMobileNumber;

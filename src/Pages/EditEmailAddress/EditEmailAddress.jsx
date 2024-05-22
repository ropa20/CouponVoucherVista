import React from "react";
import email from "../../assets/email.png";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { userId } from "../../Utils/LocalStorage";
import { EmailCheck } from "../../ConditionChecks/ConditionChecks";
import { ResetUserEmail } from "../../Utils/Api/ResetUserEmail";
import { useState } from "react";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { toast } from "react-toastify";
const EditEmailAddress = ({ email_prop, flag }) => {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [errdisplay, setErrdisplay] = useState("");
  const [apiErrDisplay, setApiErrDisplay] = useState("");

  const handleEmailChange = (event) => {
    email_prop(event.target.value);
    setEmailAddress(event.target.value);
    setErrdisplay("");
  };

  const VerificationHandler = (event) => {
    event.preventDefault();
    const emailCheck = EmailCheck(emailAddress);
    if (emailCheck.input === "empty") {
      setErrdisplay(emailCheck.err_display);
    } else if (emailCheck.input === "invalid") {
      setErrdisplay(emailCheck.err_display);
    } else if (emailCheck.validition === true) {
      const userid = userId();
      console.log(userid);
      let email_address = {
        email_address: emailAddress,
        user_id: userid,
      };
      console.log(email_address);
      setErrdisplay(emailCheck.success_display);
      VerificationHandlerApi(email_address);
    }
  };

  const VerificationHandlerApi = async (EmailCredentials) => {
    const emailVer = await ResetUserEmail(EmailCredentials);
    console.log("res", emailVer);
    if (emailVer.status === "200") {
      navigate("/redeemverfication");
      toast.success(emailVer.p_responseMessage, {
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
    if (emailVer.success === false) {
      toast.error(emailVer.p_responseMessage, {
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
          <Link className="page-text" to="/my-profile">
            <MdKeyboardArrowLeft className="arrow-left" />
            Back
          </Link>
          <p className="page-maintitle">Edit Email Address</p>
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <div className="text-center mt-3">
                <Image width={150} src={email}></Image>
                <p className="mt-4 redem-confirm">Change E-Mail</p>
                <Form
                  className="formmain mt-4 signin-row edit-mainform"
                  onSubmit={VerificationHandler}
                >
                  <Form.Group
                    className="mb-1 text-left"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-label-custom">
                      Enter new E-Mail
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter e-mail"
                      className="custom-formcontrol edit-form"
                      onChange={handleEmailChange}
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

export default EditEmailAddress;

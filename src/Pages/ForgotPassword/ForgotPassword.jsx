import React from "react";
import "../SignIn/SignIn.css";
import "../ForgotPassword/ForgotPassword.css";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import forgot from "../../assets/forgot.png";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import {
  EmailCheck,
  MobileNumberCheck,
} from "../../ConditionChecks/ConditionChecks";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { Forgotpassword } from "../../Utils/Api/Forgotpassword";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [emailcheck, setEmailCheck] = useState("on");
  const [mobileCheck, setMobileCheck] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [errDisplay, setErrDisplay] = useState("");
  const [apiErrDisplay, setApiErrDisplay] = useState("");
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);

  const onEmailCheck = (e) => {
    setEmailCheck(e.target.value);
    setMobileCheck("");
    setMobile("");
    setErrDisplay("");
    setApiErrDisplay("");
    setChecked(!checked);
  };

  const onMobileCheck = (e) => {
    setMobileCheck(e.target.value);
    setEmailCheck("");
    setEmail("");
    setErrDisplay("");
    setApiErrDisplay("");
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
    setErrDisplay("");
    setApiErrDisplay("");
  };

  const onMobile = (e) => {
    setMobile(e.target.value);
    setErrDisplay("");
    setApiErrDisplay("");
    setChecked(!checked);
  };

  const navigate = useNavigate();

  const ForgotPasswordHandler = async (ForgotPsswordCredentials) => {
    setLoading(true);
    const forgotpassword = await Forgotpassword(ForgotPsswordCredentials);

    if (forgotpassword.status === 200) {
      setLoading(false);
      toast.success(forgotpassword.p_responseMessage, {
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
      navigate("/otp", { state: { data: forgotpassword } });

      setApiErrDisplay("");
    }
    if (forgotpassword.success === false) {
      setLoading(false);
      setApiErrDisplay(forgotpassword.p_responseMessage);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const EmailValidation = EmailCheck(email);
    const MobileNumberValidation = MobileNumberCheck(mobile);

    if (emailcheck === "on" && EmailValidation.input === "empty") {
      setErrDisplay(EmailValidation.err_display);
    } else if (emailcheck === "on" && EmailValidation.input === "invalid") {
      setErrDisplay(EmailValidation.err_display);
    }

    if (mobileCheck === "on" && MobileNumberValidation.input === "empty") {
      setErrDisplay(MobileNumberValidation.err_display);
    } else if (
      mobileCheck === "on" &&
      MobileNumberValidation.input === "invalid"
    ) {
      setErrDisplay(MobileNumberValidation.err_display);
    }

    if (emailcheck === "on" && EmailValidation.validition === true) {
      let ForgetPassword_API_Details = { check: 1, forgot_pwd_input: email };
      ForgotPasswordHandler(ForgetPassword_API_Details);
      console.log(ForgetPassword_API_Details);
    }

    if (mobileCheck === "on" && MobileNumberValidation.validition === true) {
      let ForgetPassword_API_Details = {
        check: 2,
        forgot_pwd_input: parseInt(mobile),
      };
      ForgotPasswordHandler(ForgetPassword_API_Details);
    }
  };

  // console.log(email);
  // console.log(mobile);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="main">
        <Container>
          <Row className="justify-content-md-center py-3">
            <Col md="6" className="page-content-left text-center hide-mobile">
              <Image src={forgot} className="my-5 py-5 imgwidth-100"></Image>
            </Col>
            <Col md="6" className="page-content-right">
              <div className="text-center mb-2">
                <Image src={Logo}></Image>
                <p className="sign-second mt-2 pt-2">Forgot Password</p>
              </div>
              <Row>
                <div className="signemail mt-3 pb-2 formmain signin-row">
                  <p className="text-center recive-text">
                    Recieve a verification Code
                  </p>
                  <Form onSubmit={SubmitHandler} className="passwordcheck mt-4">
                    <div className="emailcheck">
                      <Form.Check
                        name="grouped"
                        required
                        inline
                        type="radio"
                        className={checked === true ? "checked-radio" : ""}
                        isValid
                        defaultChecked={true}
                        onChange={onEmailCheck}
                      />
                      Via Registered Email Address
                    </div>
                    <p className="loginwith pt-3">
                      <span>Or</span>
                    </p>
                    <div className="emailcheck">
                      <Form.Check
                        className={checked === true ? "checked-radio" : ""}
                        name="grouped"
                        required
                        inline
                        type="radio"
                        isValid
                        onChange={onMobileCheck}
                      />
                      Via Registered Mobile number
                    </div>
                    <Form.Group className="mt-4" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        {emailcheck === "on"
                          ? "Email Address "
                          : "Mobile Number "}
                        <span className="star-required">
                          *
                          {/* {emailcheck === "on" ? "Email Address" : "Mobile no."}
                        <span className="star-required">
                          *{" "}
                          <ErrorLabel
                            ErrorDisplay={
                              errDisplay ? errDisplay : apiErrDisplay
                            }
                          /> */}
                        </span>
                      </Form.Label>
                      {emailcheck === "on" ? (
                        <Form.Control
                          type="email"
                          placeholder="Enter Email Address"
                          className="custom-formcontrol"
                          onChange={onEmail}
                          value={email}
                        />
                      ) : (
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          className="custom-formcontrol"
                          onChange={onMobile}
                          value={mobile}
                        />
                      )}
                      <ErrorLabel
                        ErrorDisplay={errDisplay ? errDisplay : apiErrDisplay}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="green-btn mt-2"
                    >
                      Send
                    </Button>
                  </Form>
                </div>
                <Link to="/">
                  <p className="text-center back-btn">
                    <MdArrowBack />
                    Back
                  </p>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;

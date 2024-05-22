import React, { useState } from "react";
import "../SignIn/SignIn.css";
import "../ForgotPassword/ForgotPassword.css";
import "../OTP/OTP.css";
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
import OTPInput, { ResendOTP } from "otp-input-react";
import { MdArrowBack } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { OtpCheck } from "../../ConditionChecks/ConditionChecks";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { ForgotPswdValidateOtp } from "../../Utils/Api/ForgotPswdValidateOtp";
import Loader from "../../Components/Loader/Loader";

const OTP = () => {
  const [Otp, setOtp] = useState("");
  const [errDisplay, setErrDisplay] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const OtpApiData = location.state.data;

  const onOtp = () => {
    setErrDisplay("");
  };

  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const OtpValidation = OtpCheck(Otp);

    if (OtpValidation.input === "empty") {
      setErrDisplay(OtpValidation.err_display);
    }
    if (OtpValidation.input === "LessCharacters") {
      setErrDisplay(OtpValidation.err_display);
    }
    if (OtpValidation.validition === true) {
      let validateOtp = {
        user_id: OtpApiData.user_id,
        token: OtpApiData.token,
        otp: parseInt(Otp),
      };
      ForgotPasswordApiHandler(validateOtp);
    }
  };

  const ForgotPasswordApiHandler = async (validateOtp) => {
    setLoading(true);
    const ForgotPswdApiResponse = await ForgotPswdValidateOtp(validateOtp);
    if (ForgotPswdApiResponse.success === true) {
      setLoading(false);
      setErrDisplay("Successful!");
      setOtp("");
      setTimeout(() => {
        navigate("/createnewpassword", { state: { token: OtpApiData.token } });
      }, 500);
    } else {
      setOtp("");
      setErrDisplay(ForgotPswdApiResponse.message);
    }
  };

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="main">
        <Container>
          <Row className="justify-content-md-center py-3 mobile-main">
            <Col md="6" className="page-content-left text-center hide-mobile">
              <Image src={forgot} className="my-5 py-5 imgwidth-100"></Image>
            </Col>
            <Col md="6" className="page-content-right">
              <div className="text-center mb-2">
                <Image src={Logo}></Image>
                <p className="sign-second mt-5 pt-5 pb-2">Forgot Password</p>
              </div>
              <Row>
                <div className="signemail mt-3 pt-0 pb-3 text-center">
                  <p className="text-center recive-text">
                    Please enter the 6 digit code sent to you
                  </p>
                  <OTPInput
                    className="otp-section mt-4 mb-2"
                    value={Otp}
                    onChange={(val) => {
                      setOtp(val);
                      onOtp();
                    }}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    maxTime={-1}
                  />
                  <div className="p-2">
                    <ErrorLabel
                      ErrorDisplay={errDisplay}
                      color={errDisplay === "Successful!" ? true : false}
                    />
                  </div>
                  <Link to="" className="resendotp-section">
                    <p className="forgot-text">Resend Code</p>
                  </Link>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={SubmitHandler}
                    className="green-btn mt-2 mb-3 otp-submit"
                  >
                    Verify
                  </Button>
                </div>
                <Link>
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

export default OTP;

import React, { useState } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import "../OTP/OTP.css";
import { VerifyUserMobile } from "../../Utils/Api/VerifyUserMobile";
import { VerifyUserEmail } from "../../Utils/Api/VerifyUserEmail";
import { getUser, userId } from "../../Utils/LocalStorage";
import {
  EmailCheck,
  MobileNumberCheck,
  OtpCheck,
} from "../../ConditionChecks/ConditionChecks";
import { VerifyRedeemVoucherApi } from "../../Utils/Api/VerifyRedeemVoucherApi";
import { toast } from "react-toastify";

const RedeemVerification = ({ mobile }) => {
  const parameter = useParams();
  const id = parseInt(parameter.id);

  const [OTP, setOTP] = useState("");
  const [apiErrDisplay, setApiErrDisplay] = useState("");
  const [errdisplay, setErrdisplay] = useState("");
  const navigate = useNavigate();

  const VerificationHandler = (event) => {
    event.preventDefault();
    const user_id = userId();
    const Mobile = mobile;
    if (MobileNumberCheck(mobile).validition === true) {
      let mob = {
        mobile_number: Mobile,
        user_id: user_id,
        otp: parseInt(OTP),
      };
      VerificationHandlerApi_mobile(mob);
    } else if (EmailCheck(mobile).validition === true) {
      let mail = {
        email_address: Mobile,
        user_id: user_id,
        otp: parseInt(OTP),
      };
      VerificationHandlerApi_mail(mail);
    } else if (id) {
      let data = {
        user_id: 18,
        voucher_id: id,
        otp: parseInt(OTP),
      };
      Verificartion(data);
    }
  };

  const VerificationHandlerApi_mobile = async (MobileCredentials) => {
    const mobileVer = await VerifyUserMobile(MobileCredentials);
    if (mobileVer.message === "Mobile Number Updated") {
      console.log("verification successful");
      navigate("/my-profile");
      setApiErrDisplay("");
    }
    if (mobileVer.success === false) {
      setApiErrDisplay(mobileVer.p_responseMessage);
    }
  };
  const VerificationHandlerApi_mail = async (EmailCredentials) => {
    const emailVer = await VerifyUserEmail(EmailCredentials);
    if (emailVer.status === "200") {
      console.log("verification successful");
      navigate("/my-profile");
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
    } else if (emailVer.success === false) {
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

  const Verificartion = async (data) => {
    const ver = await VerifyRedeemVoucherApi(data);
    if (ver.message == "Voucher redeemed successfully") {
      navigate("/my-profile");
    } else {
      setApiErrDisplay(ver.p_responseMessage);
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
            <MdKeyboardArrowLeft className="arrow-left" />
            <Link to={`/redeemconfirmation/${id.toString()}`}>Back</Link>
          </p>
          <p className="page-maintitle">Redeem Voucher</p>
          <div className="text-center mt-3 mb-5   ">
            <Image src={redeem1}></Image>
            <p className="mt-4 redem-confirm">Verification</p>
            <p>You will get the verification code via text message</p>
            <Row className="just-center">
              <OTPInput
                className="otp-section mt-4 otp-redeem"
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                maxTime={-1}
              />
              <Button
                variant="primary"
                type="submit"
                className="green-btn mt-4 mb-3 w-200"
                onClick={VerificationHandler}
              >
                Verify
              </Button>
              <p>
                Didn't receive the verifcation code?
                <Link to="" className="redeem-resend">
                  Resend Code
                </Link>
              </p>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemVerification;

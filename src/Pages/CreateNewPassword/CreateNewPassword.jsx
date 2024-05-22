import React from "react";
import "../SignIn/SignIn.css";
import { Image, Container, Col, Row, Button } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import forgot from "../../assets/forgot.png";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import {
  ConfirmPasswordCheck,
  CreatePasswordCheck,
} from "../../ConditionChecks/ConditionChecks";
import { CreatePswdApi } from "../../Utils/Api/CreatePswdApi";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";
const CreateNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errDisplayNewPswd, setErrDisplayNewPswd] = useState("");
  const [errDisplayConfirmPswd, setErrorDisplayConfirmPswd] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const Api_Token = location.state.token;

  const navigate = useNavigate();

  const onNewPswd = (e) => {
    let NewPswd = e.target.value;
    setNewPassword(NewPswd);
    setErrDisplayNewPswd("");
  };

  const onConfirmPswd = (e) => {
    let ConfirmPswd = e.target.value;
    setConfirmPassword(ConfirmPswd);
    setErrorDisplayConfirmPswd("");
  };

  const SaveHandler = (e) => {
    e.preventDefault();
    const NewPasswordValidation = CreatePasswordCheck(newPassword);
    const ConfirmPasswordValidation = ConfirmPasswordCheck(
      newPassword,
      confirmPassword
    );

    if (NewPasswordValidation.input === "empty") {
      setErrDisplayNewPswd(NewPasswordValidation.err_display);
    } else if (NewPasswordValidation.input === "lesscharacters") {
      setErrDisplayNewPswd(NewPasswordValidation.err_display);
    } else if (NewPasswordValidation.input === "invalid") {
      setErrDisplayNewPswd(NewPasswordValidation.err_display);
    }

    if (ConfirmPasswordValidation.input === "empty") {
      setErrorDisplayConfirmPswd(ConfirmPasswordValidation.err_display);
    } else if (ConfirmPasswordValidation.input === "deosnotmatch") {
      setErrorDisplayConfirmPswd(ConfirmPasswordValidation.err_display);
    }

    if (
      NewPasswordValidation.validition &&
      ConfirmPasswordValidation.validition === true
    ) {
      let NewPswd = {
        token: Api_Token,
        password: confirmPassword,
      };
      CreateNewPasswordHandler(NewPswd);
    }
  };

  const CreateNewPasswordHandler = async (data) => {
    setLoading(true);
    const NewPswdResponse = await CreatePswdApi(data);
    if (NewPswdResponse.status === true) {
      setLoading(false);
      toast.success("Your password has successfully changed", {
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
      setTimeout(() => {
        navigate("/");
      }, 800);
    } else {
      setLoading(false);
      toast.success("Something went wrong! please try again", {
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
      setTimeout(() => {
        navigate("/forgotpassword");
      }, 800);
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
                <p className="sign-second mt-1 pt-1 pb-2">
                  Create New password
                </p>
              </div>
              <Row>
                <div className="signemail pt-0 pb-3">
                  <Form onSubmit={SaveHandler} className="formmain signin-row">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="form-label-custom">
                        New Password <span className="star-required">*</span>
                      </Form.Label>
                      <Form.Control
                        onChange={onNewPswd}
                        type="password"
                        placeholder="New Password"
                        className="custom-formcontrol"
                      />
                      <ErrorLabel ErrorDisplay={errDisplayNewPswd} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="form-label-custom">
                        Confirm Password{" "}
                        <span className="star-required">*</span>
                      </Form.Label>
                      <Form.Control
                        onChange={onConfirmPswd}
                        type="password"
                        placeholder="Confirm Password"
                        className="custom-formcontrol"
                      />
                      <ErrorLabel ErrorDisplay={errDisplayConfirmPswd} />
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="green-btn mt-3"
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
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

export default CreateNewPassword;

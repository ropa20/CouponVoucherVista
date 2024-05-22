import React from "react";
import "../SignIn/SignIn.css";
import { Image, Container, Col, Row, Button } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/facebook.png";
import Gmail from "../../assets/gmail.png";
// import { FaFacebook } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Loginimg from "../../assets/login.png";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { EmailCheck } from "../../ConditionChecks/ConditionChecks";
import { useState } from "react";
import { LoginUser } from "../../Utils/Api/LoginUser";
import Validate from "../SignUp/Alert";
import { RotatingLines } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast } from "react-toastify";

const SignIn = ({ status }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [errEmailDisplay, setErrEmailDisplay] = useState("");
  const [errPasswordDisplay, setErrPasswordDisplay] = useState("");
  const [apiErrDisplay, setApiErrDisplay] = useState("");
  const [loading, setLoading] = useState(false);

  const onEmail = (event) => {
    let email = event.target.value;
    setSignInEmail(email);
    const EmailValidationOnChange = EmailCheck(email);
    if (EmailValidationOnChange.input === "empty") {
      setErrEmailDisplay("");
    } else if (EmailValidationOnChange.input === "invalid") {
      setErrEmailDisplay(EmailValidationOnChange.err_display);
    } else if (EmailValidationOnChange.validition === true) {
      setErrEmailDisplay("");
    }
    // setErrEmailDisplay("");
    setApiErrDisplay("");
  };

  const onPassword = (e) => {
    setSignInPassword(e.target.value);
    setErrPasswordDisplay("");
    setApiErrDisplay("");
  };

  // const ForgotPasswordHandler = () => {
  //   const EmailValidation = EmailCheck(signInEmail);

  //   if (EmailValidation.validition === true) {
  //     onEmailHolder("");
  //   } else {
  //     onEmailHolder("");
  //   }
  // };

  // function used to navigate to other routes
  const navigate = useNavigate();

  // console.log(location.state.status);

  // LoginHandler function is performing API call, sending the parameter through LoginUser function,
  //  setting up the error display and authenticating the user to redirect into dashboard
  const LoginHandler = async (LoginCredentials) => {
    // const userLoginData = await LoginUser(LoginCredentials);
    // if (userLoginData.eu_status === "User successfully logged in") {
    //   toast.success(userLoginData.eu_status, {
    //     position: "top-center",
    //     width: "500px",
    //     autoClose: 2000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    //   setApiErrDisplay("Successful!");
    //   setSignInEmail("");
    //   setSignInPassword("");
    //   setLoading(false);
    //   setTimeout(() => {
    //     navigate("/explore");
    //   }, 200);
    // } else if (userLoginData.eu_status === "Invalid login") {
    //   toast.error(userLoginData.eu_status, {
    //     position: "top-center",
    //     width: "500px",
    //     autoClose: 2000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    //   setLoading(false);
    //   setApiErrDisplay(userLoginData.eu_status);
    // } else if (userLoginData.eu_status === "Incorrect password") {
    //   toast.error(userLoginData.eu_status, {
    //     position: "top-center",
    //     width: "500px",
    //     autoClose: 2000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });

    //   setLoading(false);
    //   setApiErrDisplay(userLoginData.eu_status);
    // }
    setTimeout(() => {
      navigate("/explore");
    }, 200);
  };

  // Sign in handler function which is checking conditions and setting error labels.
  // if its stasisying all the condition its been stored in a variable and sent as parameter to LoginHandler function
  const SignInHandler = (e) => {
    e.preventDefault();
    const EmailValidation = EmailCheck(signInEmail);

    if (EmailValidation.input === "empty") {
      setErrEmailDisplay(EmailValidation.err_display);
    } else if (EmailValidation.input === "invalid") {
      setErrEmailDisplay(EmailValidation.err_display);
    }

    if (!signInPassword) {
      setErrPasswordDisplay("Password is required!");
    }

    if (EmailValidation.validition === true) {
      let LoginCredentials = {
        eu_email: signInEmail,
        eu_password: signInPassword,
      };
      setLoading(true);
      LoginHandler(LoginCredentials);
    }
  };

  return (
    <>
      <div className="main">
        <Container>
          <Row className="justify-content-md-center py-3 mobile-main">
            <Col xs lg="6" className="page-content-left hide-mobile">
              <Image src={Loginimg} width="100%" className="mt-5 pt-5"></Image>
              <p className="login-text1 mt-4">Lorem ipsum dolor sit amet</p>
              <p className="login-text2 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan,{" "}
              </p>
            </Col>
            <Col md="6" className="page-content-right">
              <div className="text-center mb-2">
                {status === true ? <Validate /> : <></>}
                {/* {(location.state) ? <Validate/>: <></>} */}

                <Image src={Logo}></Image>
                <p className="sign-second mt-4 pt-0">Login</p>
              </div>
              <Row>
                <div className="signemail py-3">
                  <Form
                    onSubmit={SignInHandler}
                    className="formmain signin-row"
                  >
                    <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        Email address <span className="star-required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                        className="custom-formcontrol"
                        onChange={onEmail}
                        value={signInEmail}
                      />
                      <ErrorLabel ErrorDisplay={errEmailDisplay} />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicPassword">
                      <Form.Label className="form-label-custom">
                        Password <span className="star-required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="custom-formcontrol"
                        onChange={onPassword}
                        value={signInPassword}
                      />
                      <ErrorLabel ErrorDisplay={errPasswordDisplay} />
                      <Link
                        to="/forgotpassword"
                        className="text-right"
                        // onClick={ForgotPasswordHandler}
                      >
                        <p className="forgot-text">Forgot Password</p>
                      </Link>
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="green-btn"
                      >
                        {loading === true ? (
                          <RotatingLines
                            strokeColor="white"
                            width={20}
                            visible={true}
                          />
                        ) : (
                          "Login"
                        )}
                      </Button>
                      <div
                        className={
                          apiErrDisplay === "Successful!"
                            ? "successful pt-3"
                            : "failed pt-3"
                        }
                      >
                        {apiErrDisplay}
                      </div>
                      {/* <br /> */}
                      {/* <Link to="/explore">Explore</Link> */}
                    </div>
                  </Form>
                  <p className="dont-acc text-center">
                    Don’t have account?{" "}
                    <Link to="/signup" className="signup-text">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Row>
              <p className="loginwith">
                <span>Or Login with</span>
              </p>
              <Row className="p-0">
                <Col md="6" className="social-main social-main1">
                  <button className="signin-social px-3">
                    <Image
                      src={Facebook}
                      width="35px"
                      className="social-icons"
                    ></Image>
                  </button>
                </Col>
                <Col md="6" className="social-main">
                  <button className="signin-social px-3">
                    <Image
                      src={Gmail}
                      width="35px"
                      className="social-icons"
                    ></Image>
                  </button>
                </Col>
              </Row>

              <Row>
                <div className="reg-bussiness mt-3 py-3 px-4">
                  <Row>
                    <Col md="7">
                      <p className="busitext-1">If you are business owner </p>
                      <p className="busitext-2">Register Your Business!</p>
                    </Col>
                    <Col md="5" className="reg-main">
                      <Button variant="primary" className="green-btn mt-2">
                        Register Now
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignIn;

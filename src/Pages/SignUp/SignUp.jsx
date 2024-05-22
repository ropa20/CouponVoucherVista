import "../SignIn/SignIn.css";
import { Image, Container, Col, Row, Button } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/facebook.png";
import Gmail from "../../assets/gmail.png";
// import { FaFacebook } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../../assets/signup.png";
import {
  FirstNameCheck,
  LastNameCheck,
  EmailCheck,
  MobileNumberCheck,
  CreatePasswordCheck,
  ConfirmPasswordCheck,
} from "../../ConditionChecks/ConditionChecks";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { SignUP } from "../../Utils/Api/SignUP";
import { useState } from "react";

const SignUp = ({Status}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false)

  const [validationfirstName, setValidationFirstName] = useState("");
  const [validationlastName, setValidationLastName] = useState("");
  const [validationemail, setValidationEmail] = useState("");
  const [validationmobileNumber, setValidationMobileNumber] = useState("");
  const [validationcreatePassword, setValidationCreatePassword] = useState("");
  const [validationconfirmPassword, setValidationConfirmPassword] =
    useState("");
  const [show, setShow] = useState(false)

  const onFirstName = (event) => {
    setFirstName(event.target.value);
    setValidationFirstName("");
  };

  const onLastName = (event) => {
    setLastName(event.target.value);
    setValidationLastName("");
  };

  const onEmail = (event) => {
    setEmail(event.target.value);
    setValidationEmail("");
  };

  const onMobileNumber = (event) => {
    setMobileNumber(event.target.value);
    setValidationMobileNumber("");
  };

  const onCreatePassword = (event) => {
    setCreatePassword(event.target.value);
    setValidationCreatePassword("");
  };

  const onConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setValidationConfirmPassword("");
  };

  const navigate = useNavigate();

  const SignUpHandler = async (SignUpCredentials) => {
    const SignUpStatus = await SignUP(SignUpCredentials);
    if (SignUpStatus === 200) {
      let s = true;
      Status(s)

      setStatus(true);
      // console.log("status",status);
      navigate("/");
    }
    console.log(SignUpStatus);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    // let formSubmit = true;

    const FirstNameValidation = FirstNameCheck(firstName);
    const LastNameValidation = LastNameCheck(lastName);
    const EmailValidation = EmailCheck(email);
    const MobileNumberValidation = MobileNumberCheck(mobileNumber);
    const CreatePasswordValidation = CreatePasswordCheck(createPassword);
    const ConfirmPasswordValidation = ConfirmPasswordCheck(
      createPassword,
      confirmPassword
    );
    // console.log(FirstNameValidation);

    if (FirstNameValidation.input === "empty") {
      setValidationFirstName(FirstNameValidation.err_display);
    } else if (FirstNameValidation.input === "invalid") {
      setValidationFirstName(FirstNameValidation.err_display);
    }

    if (LastNameValidation.input === "empty") {
      setValidationLastName(LastNameValidation.err_display);
    } else if (LastNameValidation.input === "invalid") {
      setValidationLastName("Enter the valid Last Name!");
    }

    if (EmailValidation.input === "empty") {
      setValidationEmail(EmailValidation.err_display);
    } else if (EmailValidation.input === "invalid") {
      setValidationEmail(EmailValidation.err_display);
    }

    if (MobileNumberValidation.input === "empty") {
      setValidationMobileNumber(MobileNumberValidation.err_display);
    } else if (MobileNumberValidation.input === "invalid") {
      setValidationMobileNumber(MobileNumberValidation.err_display);
    }

    if (CreatePasswordValidation.input === "empty") {
      setValidationCreatePassword(CreatePasswordValidation.err_display);
    } else if (CreatePasswordValidation.input === "lesscharacters") {
      setValidationCreatePassword(CreatePasswordValidation.err_display);
    } else if (CreatePasswordValidation.input === "invalid") {
      setValidationCreatePassword(CreatePasswordValidation.err_display);
    }

    if (ConfirmPasswordValidation.input === "empty") {
      setValidationConfirmPassword("Confirm the Password!");
    } else if (ConfirmPasswordValidation.input === "deosnotmatch") {
      setValidationConfirmPassword("Password did not match!");
    }

    if (
      FirstNameValidation.validition &&
      LastNameValidation.validition &&
      EmailValidation.validition &&
      MobileNumberValidation.validition &&
      CreatePasswordValidation.validition &&
      ConfirmPasswordValidation.validition === true
    ) {
      let SignUpDetails = {
        eu_first_name: firstName,
        eu_last_name: lastName,
        eu_email: email,
        eu_contact_number: parseInt(mobileNumber),
        eu_password: confirmPassword,
        type: 1,
      };
      console.log(SignUpDetails);
      SignUpHandler(SignUpDetails);

      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setCreatePassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className="main">
        <Container>
          <Row className="justify-content-md-center py-3">
            <Col xs lg="6" className="page-content-left">
              <Image src={signupimg} width="100%" className="mt-5 pt-5"></Image>
              <p className="login-text1 mt-4">Lorem ipsum dolor sit amet</p>
              <p className="login-text2 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan,{" "}
              </p>
            </Col>
            <Col md="6" className="page-content-right">
            {/* {show ==true ? <Validate/> : null} */}
              <div className="text-center mb-2">
                <Image src={Logo}></Image>
                <p className="sign-second mt-4 pt-0">Sign Up</p>
              </div>
              <Row>
                <div className="signemail py-3">
                  <Form
                    onSubmit={SubmitHandler}
                    className="formmain signin-row"
                  >
                    <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        First Name{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Enter First Name"
                        className="custom-formcontrol"
                        onChange={onFirstName}
                        value={firstName}
                      />
                      <ErrorLabel ErrorDisplay={validationfirstName} />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        Last Name{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Enter Last Name"
                        className="custom-formcontrol"
                        onChange={onLastName}
                        value={lastName}
                      />
                      <ErrorLabel ErrorDisplay={validationlastName} />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        Email address{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        // type="email"
                        placeholder="Your Email Address"
                        className="custom-formcontrol"
                        onChange={onEmail}
                        value={email}
                      />
                      <ErrorLabel ErrorDisplay={validationemail} />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicEmail">
                      <Form.Label className="form-label-custom">
                        Mobile Number{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Enter Mobile number"
                        className="custom-formcontrol"
                        onChange={onMobileNumber}
                        value={mobileNumber}
                      />
                      <ErrorLabel ErrorDisplay={validationmobileNumber} />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicPassword">
                      <Form.Label className="form-label-custom">
                        Create Password{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder=" "
                        className="custom-formcontrol"
                        onChange={onCreatePassword}
                        value={createPassword}
                      />
                      <ErrorLabel ErrorDisplay={validationcreatePassword} />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicPassword">
                      <Form.Label className="form-label-custom">
                        Confirm Password{" "}
                        <span className="star-required">
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder=" "
                        className="custom-formcontrol"
                        onChange={onConfirmPassword}
                        value={confirmPassword}
                      />
                      <ErrorLabel
                            ErrorDisplay={validationconfirmPassword}
                          />
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="green-btn mt-2"
                        onClick={()=>setShow(!show)}
                      >
                        Sign Up
                      </Button>
                      <p className="dont-acc">
                        Already have an account?{" "}
                        <Link to="/" className="signup-text">
                          Login
                        </Link>
                      </p>
                    </div>
                  </Form>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;

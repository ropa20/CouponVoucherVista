import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Col, Row, Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import {
  ConfirmPasswordCheck,
  CreatePasswordCheck,
} from "../../ConditionChecks/ConditionChecks";
import { BsCheckCircleFill } from "react-icons/bs";

const MyProfileResetPassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [visibleOldPassword, setVisibleOldPassword] = useState(true);
  const [visibleNewPassword, setVisibleNewPassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const [errDisplayOldPassword, seterrDisplayOldPassword] = useState("");
  const [errDisplayNewPassword, seterrDisplayNewPassword] = useState("");
  const [errDisplayConfirmPassword, seterrDisplayConfirmPassword] =
    useState("");
  const [checkRightNewPswd, setCheckRightNewPswd] = useState(false);
  const [checkRightConfirmPswd, setCheckRightConfirmPswd] = useState(false);

  const onOldPassword = (e) => {
    let oldpswd = e.target.value;
    setOldPassword(oldpswd);
  };

  const onNewPassword = (e) => {
    let newPswd = e.target.value;
    setNewPassword(newPswd);
    const NewPasswordValidation = CreatePasswordCheck(newPswd);

    if (NewPasswordValidation.input === "empty") {
      seterrDisplayNewPassword("");
      setCheckRightNewPswd(false);
    } else if (NewPasswordValidation.input === "lesscharacters") {
      seterrDisplayNewPassword(NewPasswordValidation.err_display);
      setCheckRightNewPswd(false);
    } else if (NewPasswordValidation.input === "invalid") {
      seterrDisplayNewPassword(NewPasswordValidation.err_display);
      setCheckRightNewPswd(false);
    }
    if (NewPasswordValidation.validition === true) {
      setCheckRightNewPswd(true);
      seterrDisplayNewPassword("");
    }
  };

  const onConfirmPassword = (e) => {
    let confirmPswd = e.target.value;
    setConfirmPassword(confirmPswd);
    const ConfirmPasswordValidation = ConfirmPasswordCheck(
      newPassword,
      confirmPswd
    );

    if (ConfirmPasswordValidation.input === "empty") {
      seterrDisplayConfirmPassword("");
      setCheckRightConfirmPswd(false);
    } else if (ConfirmPasswordValidation.input === "deosnotmatch") {
      seterrDisplayConfirmPassword(ConfirmPasswordValidation.err_display);
      setCheckRightConfirmPswd(false);
    }
    if (ConfirmPasswordValidation.validition === true) {
      setCheckRightConfirmPswd(true);
      seterrDisplayConfirmPassword("");
    }
  };

  const OldPasswordVisibleHandler = () => {
    setVisibleOldPassword(false);
  };
  const OldPasswordNotVisibleHandler = () => {
    setVisibleOldPassword(true);
  };

  const NewPasswordVisibleHandler = () => {
    setVisibleNewPassword(false);
  };
  const NewPasswordNotVisibleHandler = () => {
    setVisibleNewPassword(true);
  };

  const ConfirmPasswordVisibleHandler = () => {
    setVisibleConfirmPassword(false);
  };
  const ConfirmPasswordNotVisibleHandler = () => {
    setVisibleConfirmPassword(true);
  };

  const ResetPasswordSaveHandler = (e) => {
    e.preventDefault();
    const NewPasswordValidation = CreatePasswordCheck(newPassword);
    const ConfirmPasswordValidation = ConfirmPasswordCheck(
      newPassword,
      confirmPassword
    );
    let OldPasswordValidation = true;

    if (!oldPassword) {
      seterrDisplayOldPassword("Old passwords is required!");
      OldPasswordValidation = false;
    }

    if (NewPasswordValidation.input === "empty") {
      seterrDisplayNewPassword(NewPasswordValidation.err_display);
    } else if (NewPasswordValidation.input === "lesscharacters") {
      seterrDisplayNewPassword(NewPasswordValidation.err_display);
    } else if (NewPasswordValidation.input === "invalid") {
      seterrDisplayNewPassword(NewPasswordValidation.err_display);
    }

    if (ConfirmPasswordValidation.input === "empty") {
      seterrDisplayConfirmPassword(ConfirmPasswordValidation.err_display);
    } else if (ConfirmPasswordValidation.input === "deosnotmatch") {
      seterrDisplayConfirmPassword(ConfirmPasswordValidation.err_display);
    }

    // if (OldPasswordValidation === true) {
    //   seterrDisplayOldPassword("");
    // }

    // if (NewPasswordValidation.validition === true) {
    //   seterrDisplayNewPassword("");
    // }

    // if (ConfirmPasswordValidation.validition === true) {
    //   seterrDisplayConfirmPassword("");
    // }

    if (
      NewPasswordValidation.validition &&
      ConfirmPasswordValidation.validition &&
      OldPasswordValidation === true
    ) {
      let ResetPasswordData = {
        old_Password: oldPassword,
        new_Password: newPassword,
        confirm_Password: confirmPassword,
      };
      console.log(ResetPasswordData);

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setCheckRightConfirmPswd(false);
      setCheckRightNewPswd(false);

      seterrDisplayOldPassword("");
      seterrDisplayNewPassword("");
      seterrDisplayConfirmPassword("");
    }
  };

  return (
    <>
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          <Link to="/my-profile" className="page-text">
            <MdKeyboardArrowLeft className="arrow-left" />
            Back
          </Link>
          <p className="page-maintitle">Reset Password</p>
          <div className="white-bg mt-4 py-5">
            <Row>
              <Col md="4"></Col>
              <Col md="4">
                <Form
                  onSubmit={ResetPasswordSaveHandler}
                  className="formmain mx-5 mb-3 signin-row"
                >
                  <Row>
                    <Col md="12" className="mt-3">
                      <Form.Label className="form-label-custom edit-sec">
                        Old Password
                      </Form.Label>
                      <InputGroup className="mb-1 edit-border">
                        <Form.Control
                          type={visibleOldPassword === true ? "" : "password"}
                          placeholder="Enter Old Password"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          onChange={onOldPassword}
                          value={oldPassword}
                        />
                        {visibleOldPassword === true ? (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={OldPasswordVisibleHandler}
                          >
                            <FaEye className="eye-icon" />
                          </Button>
                        ) : (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={OldPasswordNotVisibleHandler}
                          >
                            <FaEyeSlash className="eye-icon" />
                          </Button>
                        )}
                      </InputGroup>
                      <ErrorLabel ErrorDisplay={errDisplayOldPassword} />
                    </Col>
                    <Col md="12" className="mt-2">
                      <Form.Label className="form-label-custom edit-sec">
                        New Password{" "}
                        {checkRightNewPswd === true ? (
                          <BsCheckCircleFill
                            style={{
                              color: "green",
                              fontSize: "1rem",
                              padding: "0rem 0rem 0.1rem 0rem",
                            }}
                          ></BsCheckCircleFill>
                        ) : (
                          <></>
                        )}
                      </Form.Label>
                      <InputGroup className="mb-1 edit-border">
                        <Form.Control
                          type={visibleNewPassword === true ? "" : "password"}
                          placeholder="Enter New Password"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          onChange={onNewPassword}
                          value={newPassword}
                        />
                        {visibleNewPassword === true ? (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={NewPasswordVisibleHandler}
                          >
                            <FaEye className="eye-icon" />
                          </Button>
                        ) : (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={NewPasswordNotVisibleHandler}
                          >
                            <FaEyeSlash className="eye-icon" />
                          </Button>
                        )}
                      </InputGroup>
                      <ErrorLabel ErrorDisplay={errDisplayNewPassword} />
                    </Col>
                    <Col md="12" className="mt-2">
                      <Form.Label className="form-label-custom edit-sec">
                        Confirm Password{" "}
                        {checkRightConfirmPswd === true ? (
                          <BsCheckCircleFill
                            style={{
                              color: "green",
                              fontSize: "1rem",
                              padding: "0rem 0rem 0.1rem 0rem",
                            }}
                          ></BsCheckCircleFill>
                        ) : (
                          <></>
                        )}
                      </Form.Label>
                      <InputGroup className="mb-1 edit-border">
                        <Form.Control
                          type={
                            visibleConfirmPassword === true ? "" : "password"
                          }
                          placeholder="Re-enter new password"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          onChange={onConfirmPassword}
                          value={confirmPassword}
                        />
                        {visibleConfirmPassword === true ? (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={ConfirmPasswordVisibleHandler}
                          >
                            <FaEye className="eye-icon" />
                          </Button>
                        ) : (
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn px-2"
                            onClick={ConfirmPasswordNotVisibleHandler}
                          >
                            <FaEyeSlash className="eye-icon" />
                          </Button>
                        )}
                      </InputGroup>
                      <ErrorLabel ErrorDisplay={errDisplayConfirmPassword} />
                    </Col>
                  </Row>
                  <div className="text-center reset-btns mt-1">
                    <Button
                      variant="primary"
                      type="submit"
                      className="green-btn mt-3"
                    >
                      Save
                    </Button>
                    <p className="mt-2 view-btn">
                      <Link to="/my-profile" className="redeem-resend ">
                        Cancel
                      </Link>
                    </p>
                  </div>
                </Form>
              </Col>
              <Col md="4"></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileResetPassword;

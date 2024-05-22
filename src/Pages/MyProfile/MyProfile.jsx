import React from "react";
import Navigation from "../Navigation/Navigation";
import "./MyProfile.css";
import {
  MdKeyboardArrowLeft,
  MdOutlineBorderColor,
} from "react-icons/md";
import {
  Image,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import profile from "../../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FirstNameCheck,
  LastNameCheck,
} from "../../ConditionChecks/ConditionChecks";
import ErrorLabel from "../../Components/ErrorLabel/ErrorLabel";
import { UserProfile } from "../../Utils/Api/UserProfile";
import { UpdateName } from "../../Utils/Api/UsrProfileNameUpdate";
import { useEffect } from "react";
import { userId } from "../../Utils/LocalStorage";
import Loader from "../../Components/Loader/Loader";

const MyProfile = (props) => {
  // Boolean values for dynamic representation for edit first name, last name and buttons(save,cancel)
  const [UserData, setUserData] = useState([]);
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);

  //  stored value of inputs(first name, last name)
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  const [errDisplayFirstName, setErrDisplayFirstName] = useState("");
  const [errDisplayLastName, setErrDisplayLastName] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const EditFirstNameHandler = () => {
    setEditFirstName(true);
  };

  const EditLastNameHandler = () => {
    setEditLastName(true);
  };

  const CancelHandler = () => {
    setEditFirstName(false);
    setEditLastName(false);
    setErrDisplayFirstName("");
    setErrDisplayLastName("");
    setInputLastName("");
    setInputFirstName("");
  };

  const onFirstName = (event) => {
    setInputFirstName(event.target.value);
    setErrDisplayFirstName("");
    setErrDisplayLastName("");
  };

  const onLastName = (event) => {
    setInputLastName(event.target.value);
    setErrDisplayFirstName("");
    setErrDisplayLastName("");
  };

  const navigate = useNavigate();

  const EditEmailHandler = () => {
    navigate("/edit-email-address");
  };

  const EditMobileHandler = () => {
    navigate("/edit-mobile-number");
  };

  const UserCredentials = async () => {
    setLoading(true);
    const usercredentials = await UserProfile();
    setLoading(false);
    setUserData(usercredentials[0]);

    // You should set the default value here
    setInputFirstName(usercredentials[0].first_name);
    setInputLastName(usercredentials[0].last_name);
  };

  // console.log(UserData);
  const UpdateNameAPI = async (updateVal) => {
    // console.log(updateVal);
    const updatestatus = await UpdateName(updateVal);
    if (updatestatus.success === true) {
      window.location.reload(false);
      setLoading(true);
    }
    setLoading(false);
  };

  const userid = userId();

  const SaveHandler = (event) => {
    event.preventDefault();
    const FirstNameValidation = FirstNameCheck(inputFirstName);
    const LastNameValidation = LastNameCheck(inputLastName);

    if (editFirstName === true && FirstNameValidation.input === "empty") {
      setErrDisplayFirstName(FirstNameValidation.err_display);
    }

    if (editLastName === true && LastNameValidation.input === "empty") {
      setErrDisplayLastName(LastNameValidation.err_display);
    }

    if (editFirstName === true && FirstNameValidation.validition === true) {
      let FirstName = {
        first_name: inputFirstName,
        last_name: inputLastName ? inputLastName : UserData.last_name,
        user_id: userid,
      };
      UpdateNameAPI(FirstName);
      setEditFirstName(false);
    } else if (
      editLastName === true &&
      LastNameValidation.validition === true
    ) {
      let LastName = {
        first_name: inputFirstName ? inputFirstName : UserData.first_name,
        last_name: inputLastName,
        user_id: userid,
      };
      UpdateNameAPI(LastName);
      setEditLastName(false);
      setErrDisplayFirstName("");
    }

    // setInputLastName("");
    // setInputFirstName("");
  };

  useEffect(() => {
    UserCredentials();
  }, []);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="gray-bg my-profilr-position">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-1 pr-3 pb-4">
          <p className="page-text mt-3">
            <Link to="/explore" style={{ color: "black" }}>
              <MdKeyboardArrowLeft className="arrow-left" />
              Back
            </Link>
          </p>
          <p className="page-maintitle pt-1">My Profile</p>
          <div className="white-bg mt-1 py-5">
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <Form
                  onSubmit={SaveHandler}
                  className="formmain mx-1 mt-1 signin-row"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={imageUploader}
                      style={{
                        display: "none",
                      }}
                    />
                    <div>
                      <Image
                        width={100}
                        src={profile}
                        onClick={() => imageUploader.current.click()}
                        className="mb-3"
                      ></Image>
                      {/* <Image src={uploadedImage}></Image> */}
                    </div>
                  </div>
                  <Row>
                    <Col md="6" className="mt-2">
                      <Form.Group className="mb-0" controlId="formBasicEmail">
                        <Form.Label className="form-label-custom">
                          First Name
                        </Form.Label>

                        <InputGroup className="edit-border">
                          <Form.Control
                            type="text"
                            value={
                              editFirstName === false
                                ? UserData.first_name
                                : inputFirstName
                            }
                            placeholder="Enter First Name"
                            className="custom-formcontrol"
                            disabled={editFirstName === true ? false : true}
                            onChange={onFirstName}
                            maxLength={10}
                          />
                          <Button
                            // to="/edit-mobile-number"
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn p-2"
                            onClick={EditFirstNameHandler}
                          >
                            <MdOutlineBorderColor className="edit-icon" />
                          </Button>
                        </InputGroup>
                        <ErrorLabel ErrorDisplay={errDisplayFirstName} />
                        {/* // */}
                      </Form.Group>
                    </Col>
                    <Col md="6" className="mt-2">
                      <Form.Group className="mb-0" controlId="formBasicEmail">
                        <Form.Label className="form-label-custom">
                          Last Name
                        </Form.Label>
                        <InputGroup className="edit-border">
                          <Form.Control
                            type="text"
                            value={
                              editLastName === false
                                ? UserData.last_name
                                : inputLastName
                            }
                            placeholder="Enter Last name"
                            maxLength={10}
                            className="custom-formcontrol"
                            disabled={editLastName === true ? false : true}
                            onChange={onLastName}
                          />
                          <Button
                            // to="/edit-mobile-number"
                            variant="outline-secondary"
                            id="button-addon2"
                            className="edit-mainn p-2"
                            onClick={EditLastNameHandler}
                          >
                            <MdOutlineBorderColor className="edit-icon" />
                          </Button>
                        </InputGroup>
                        <ErrorLabel ErrorDisplay={errDisplayLastName} />
                      </Form.Group>
                    </Col>
                    <Col md="6" className="mt-1">
                      <Form.Label className="form-label-custom edit-sec">
                        Mobile Number
                      </Form.Label>
                      <InputGroup className="mb-3 edit-border">
                        <Form.Control
                          value={UserData.mobile_number}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          disabled={true}
                        />
                        <Button
                          onClick={EditMobileHandler}
                          // to="/edit-mobile-number"
                          variant="outline-secondary"
                          id="button-addon2"
                          className="edit-mainn p-2"
                        >
                          <MdOutlineBorderColor className="edit-icon" />
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md="6" className="mt-1">
                      <Form.Label className="form-label-custom edit-sec">
                        E-Mail Address
                      </Form.Label>
                      <InputGroup className="mb-3 edit-border">
                        <Form.Control
                          value={UserData.email_address}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          disabled={true}
                        />
                        <Button
                          onClick={EditEmailHandler}
                          // to="/edit-email-address"
                          variant="outline-secondary"
                          id="button-addon2"
                          className="edit-mainn p-2"
                        >
                          <MdOutlineBorderColor className="edit-icon" />
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
                  <div className="text-center small-btns d-flex">
                    {editFirstName || editLastName === true ? (
                      <>
                        <Link onClick={CancelHandler}>
                          <p className="view">Cancel</p>
                        </Link>
                        <Button
                          variant="primary"
                          type="submit"
                          className="green-btn mt-3"
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="mt-3 text-center">
                    <Link
                      to="/myprofile-resetpadssword"
                      className="redeem-resend"
                    >
                      Reset Password
                    </Link>
                  </p>
                </Form>
              </Col>
              <Col md="2"></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

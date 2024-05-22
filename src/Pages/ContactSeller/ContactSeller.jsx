import React from "react";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { VoucherDetailsApi } from "../../Utils/Api/VoucherDetailsApi";
import { CouponDetailsApi } from "../../Utils/Api/CouponDetailsApi";
import { useState } from "react";

const ContactSeller = (props) => {
  const location = useLocation();
  const { id, flag } = location.state;
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApi = () => {
    if (flag === "voucher") {
      const data = {
        voucherId: id,
      };
      VoucherHandler(data);
    } else {
      const data = {
        coupon_id: id,
      };
      CouponsHandler(data);
    }
  };
  const VoucherHandler = async (data) => {
    setLoading(true);
    const activeData = await VoucherDetailsApi(data);
    setLoading(false);
    setApiData(activeData.res[0]);
  };
  const CouponsHandler = async (data) => {
    setLoading(true);
    const activecoupons = await CouponDetailsApi(data);
    setLoading(false);
    setApiData(activecoupons.res[0]);
  };
  useEffect(() => {
    handleApi();
  }, []);
  return (
    <>
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          <p className="page-text">
            <MdKeyboardArrowLeft className="arrow-left" />
            <Link to="/explore">Back</Link>
          </p>
          <p className="page-maintitle">Contact Seller</p>
          <div className="white-bg mt-4 py-5">
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <p className="mb-3">
                  Contact Seller : <b>{apiData.bup_banner}</b>
                </p>
                <p className="">
                  {apiData.flag} :{" "}
                  <b>
                    {flag === "voucher"
                      ? apiData.voucher_title
                      : apiData.coupon_title}
                  </b>
                </p>
                <Form className="formmain mt-5 signin-row">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form-label-custom">
                      Need Help with?
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="custom-select"
                    >
                      <option>Select from the list</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form-label-custom">
                      Your Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      className="custom-textarea"
                      placeholder="Type here..."
                    />
                  </Form.Group>
                  <div className="text-center small-btns d-flex">
                    <Link>
                      <p className="view">Cancel</p>
                    </Link>
                    <Link
                      variant="primary"
                      type="submit"
                      className="green-btn mt-3"
                      to="/messages"
                    >
                      Save
                    </Link>
                  </div>
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

export default ContactSeller;

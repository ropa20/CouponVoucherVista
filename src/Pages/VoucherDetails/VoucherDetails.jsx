import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import BannerDetails from "../../assets/banner-detail.png";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
  Popover,
} from "react-bootstrap";
import Contentimg from "../../assets/content-img.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { MdCall } from "react-icons/md";
import Relateddeals from "../RelatedDeals/RelatedDeals";
import OtherDeals from "../OtherDeals/OtherDeals";
import { OtherDealsApi } from "../../Utils/Api/OtherDealsApi";
import { VoucherDetailsApi } from "../../Utils/Api/VoucherDetailsApi";
import { RelatedDealsApi } from "../../Utils/Api/RelatedDealsApi";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const VoucherDetails = (props) => {
  const voucherdetaildummy = {
    business_name: "ABC Store",
    voucher_title: "50% Off Smartphone",
    voucher_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    voucher_term_condition: [
      "Valid only for new customers.",
      "Expires on June 30, 2024.",
    ],
    voucher_actual_price: 1000,
    voucher_offer_price: 500,
    offered_percent: 50,
    business_id: 123,
    product_id: 456,
    opening_time: "09:00",
    closing_time: "18:00",
    bup_address1: "123 Main St",
    bup_address2: "Suite 100",
    website_url: "www.abcstore.com",
  };
  const deals = [
    {
      product_id: "p1",
      category: "Electronics",
      flag: "Voucher",
      product_name: "Smartphone",
      business_name: "TechGiant",
      product_actual_price: "999",
      product_offer_price: "799",
      offered_percent: "20",
    },
    {
      product_id: "p2",
      category: "Apparel",
      flag: "Offer",
      product_name: "Leather Jacket",
      business_name: "Fashion Forward",
      product_actual_price: "350",
      product_offer_price: "280",
      offered_percent: "20",
    },
    {
      product_id: "p3",
      category: "Beauty",
      flag: "Sale",
      product_name: "Skin Care Set",
      business_name: "Beauty Co",
      product_actual_price: "150",
      product_offer_price: "120",
      offered_percent: "20",
    },
  ];
  const location = useLocation();
  const { id, business_id, status, flag } = location.state;
  const [voucherdetail, setVoucherdetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [otherdeals, setOtherdeals] = useState([]);
  const [relateddeals, setRelateddeals] = useState([]);

  const shareUrl =
    "https://devbusiness.shoplocal.digital/my-account/viewvoucher";

  const otherdata = {
    business_id: business_id,
    city_id: localStorage.getItem("city_id"), //hardcoded
  };
  const relateddata = {
    business_id: business_id,
    city_id: localStorage.getItem("city_id"),
    product_id: id,
    product_flag: "Voucher",
  };

  const OtherDealsHandler = async () => {
    // const otherdealsData = await OtherDealsApi(otherdata);
    setOtherdeals(deals);
  };

  const VoucherDetailsHandler = async () => {
    setLoading(true);
    const vid = { voucherId: id };
    // const voucherdetailData = await VoucherDetailsApi(vid);
    setLoading(false);
    setVoucherdetail(voucherdetaildummy);
  };

  const RelatedDealsHandler = async () => {
    // const relateddealsData = await RelatedDealsApi(relateddata);
    setRelateddeals(deals);
  };
  function tConv24(time24) {
    //18:00:00 to 06:00 PM
    // Check correct time format and split into components
    console.log(time24);
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  }
  const businessHours = (a, b) => {
    if (a && b) {
      return tConv24(a) + " to " + tConv24(b);
    }
  };
  useEffect(() => {
    VoucherDetailsHandler();
    OtherDealsHandler();
    RelatedDealsHandler();
  }, []);

  //view More
  const [viewMore, setviewMore] = useState(false);
  const extraContent = (
    <div>
      <ul className="extra-content">
        {/* <li>Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. </li>
        <li>Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim.  </li> */}
        {/* <FroalaEditorView model={voucherdetail.voucher_description} /> */}
      </ul>
    </div>
  );
  const linkName = viewMore ? "View Less" : "View More";

  //read More
  const [readMore, setreadMore] = useState(false);
  const extraContentRead = (
    <div>
      {/* <p className="extra-content">
        {" "}
        <FroalaEditorView model={voucherdetail.voucher_description} />
      </p> */}
    </div>
  );
  const linkNameRead = readMore ? "Read Less" : "Read More";
  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          {status === 2 ? (
            <Link className="page-text" to="/explore">
              <MdKeyboardArrowLeft className="arrow-left" />
              Back
            </Link>
          ) : (
            <Link className="page-text" to="/myaccount/myvouchers">
              <MdKeyboardArrowLeft className="arrow-left" />
              Back
            </Link>
          )}

          <div className="my-3 inner-banner">
            <p className="banner-title">{voucherdetail.business_name}</p>
          </div>
          <Row className="pt-2">
            <Col md="6" className="vou-content">
              <Image src={Contentimg} width="100%"></Image>
              <div className="tag-main">
                {/* ask */}
                <p className="ribben">{flag}</p>
              </div>
            </Col>
            <Col md="6">
              <p className="vou-title mb-3">{voucherdetail.voucher_title}</p>
              <p className="vou-about mb-3">
                <span className="vou-about-title">About this deal :</span>
                <FroalaEditorView model={voucherdetail.voucher_description} />
              </p>
              <p className="vou-about-title">Terms & Conditions : </p>
              {/* <ul> */}
              {/* <li>Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. </li>
            <li>Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim.  </li> */}
              {voucherdetail.voucher_term_condition &&
                voucherdetail.voucher_term_condition?.map((item) => {
                  return (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  );
                })}
              {/* {viewMore && extraContent} */}
              {/* <p
                  className="read-more-link"
                  onClick={() => {
                    setviewMore(!viewMore);
                  }}
                >
                  {linkName}
                </p> */}
              {/* </ul> */}
              <div className="d-flex mb-4">
                <p className="loc-price-1">
                  ${voucherdetail.voucher_actual_price}
                </p>
                <p className="loc-price-2">
                  ${voucherdetail.voucher_offer_price}
                </p>
                <p className="loc-price-offer">
                  {voucherdetail.offered_percent}% off
                </p>
              </div>
              <Row>
                <Col md="6" className="text-center mb-2">
                  {status == 2 ? (
                    <Link
                      to="/explore/voucherdetail/checkout"
                      state={{
                        id: id,
                        business_id: business_id,
                        status: status,
                        flag: flag,
                      }}
                    >
                      <p className="green-btn">Buy Now</p>
                    </Link>
                  ) : status == 0 ? (
                    <Link to={`/redeemconfirmation/${id.toString()}`}>
                      <p className="green-btn">Redeem</p>
                    </Link>
                  ) : (
                    <p className="view-btn">Redeemed</p>
                  )}
                </Col>
                <Col md="6" className="text-center mb-2">
                  <OverlayTrigger
                    // show={true}
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-positioned-top" title="Share to:">
                        <FacebookShareButton
                          url={`${shareUrl}/${voucherdetail.product_id}`}
                          quote={"Title or jo bhi aapko likhna ho"}
                          hashtag={"#portfolio..."}
                        >
                          <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>

                        <WhatsappShareButton
                          url={`${shareUrl}/${voucherdetail.product_id}`}
                          quote={"Title or jo bhi aapko likhna ho"}
                          hashtag={"#portfolio..."}
                        >
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                      </Popover>
                    }
                  >
                    <button className="view-btn">Share this deal</button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <p className="vou-about mt-4">
              <span className="vou-about-title">
                About Bijou Lash Extension :{" "}
              </span>{" "}
              {voucherdetail.about_business}
            </p>
            {readMore && extraContentRead}
            <p
              className="read-more-link mb-2"
              onClick={() => {
                setreadMore(!readMore);
              }}
            >
              {linkNameRead}
            </p>
            <p className="vou-about mb-2">
              <span className="vou-about-title">Business Hours : </span>
              {businessHours(
                voucherdetail.opening_time,
                voucherdetail.closing_time
              )}
            </p>
            <p className="vou-about mb-2">
              <span className="vou-about-title">Address 1 :</span>{" "}
              {voucherdetail.bup_address1}
            </p>
            <p className="vou-about mb-2">
              <span className="vou-about-title">Address 2 :</span>
              {voucherdetail.bup_address2}
            </p>
            <p className="vou-about mb-2">
              <span className="vou-about-title">Online :</span>{" "}
              {voucherdetail.website_url}
            </p>
            <Link className="contact-btn">
              <p className="view">
                <MdCall /> Contact Seller
              </p>
            </Link>
          </Row>
          <div className="my-5">
            <Relateddeals
              relatedDealsList={relateddeals}
              id={id}
              business_id={business_id}
              status={status}
              flag={flag}
            />
          </div>
          <div className="my-5 other-deals-main">
            <OtherDeals
              otherDealsList={otherdeals}
              id={id}
              business_id={business_id}
              status={status}
              flag={flag}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VoucherDetails;

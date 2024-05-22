import React, { useState } from "react";
import "../LatestLocals/LatestLocal.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import { Image, Col, Row } from "react-bootstrap";
import Local1 from "../../assets/local-1.png";
import { Link } from "react-router-dom";
// import { exploreApi } from "../../Utils/Api/Explore";
import ComponentLoader from "../../Components/ComponentLoader/ComponentLoader";

const LatestLocals = ({
  voucherCouponList,
  searchHandler,
  sortHandler,
  Loading,
  initialState,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (e) => {
    let search = e.target.value;
    setSearchValue(search);
    if (!search) {
      searchHandler(search);
    }
  };

  const SearchHandler = (val) => {
    searchHandler(val);
  };

  const SortHandler = (e) => {
    let sortVal = e.target.value;
    sortHandler(sortVal);
  };

  return (
    <>
      <p className="latestloc-text tab-title">
        <span className="userline-title">Latest</span> Locals
      </p>
      <div className="d-flex mb-4">
        <p className="latestloc-text tab-hide-title">
          <span className="userline-title">Latest</span> Locals
        </p>
        <InputGroup className="search-bar">
          <InputGroup.Text>
            <MdSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search"
            value={searchValue}
            onChange={onSearch}
          />
          <Button variant="outline-secondary" onClick={SearchHandler}>
            Search
          </Button>
        </InputGroup>
        <Form.Select
          value={initialState}
          onChange={SortHandler}
          aria-label="Default select example"
          className="location-select sort-select"
          style={{ cursor: "pointer" }}
        >
          <option value="0">Latest</option>
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
        </Form.Select>
      </div>

      {Loading === true ? (
        <ComponentLoader />
      ) : (
        <div>
          {voucherCouponList?.length !== 0 ? (
            voucherCouponList?.map((list) => {
              return (
                <Row className="local-main" key={list.business_id}>
                  <Col md="2" className="local-1">
                    <Image src={Local1} />
                  </Col>
                  <Col>
                    <p className="loc-detail-1">{list.category}</p>
                    <p className="loc-detail-2">{list.product_name}</p>
                    <p className="loc-detail-3">by Bijou Lash Extensions</p>
                    {list.flag === "Voucher" && (
                      <div className="d-flex">
                        <p className="loc-price-1">
                          ${list.product_actual_price}
                        </p>
                        <p className="loc-price-2">
                          ${list.product_offer_price}
                        </p>
                        <p className="loc-price-offer">
                          {list.offered_percent}% OFF
                        </p>
                      </div>
                    )}
                  </Col>
                  <Col>
                    {list?.flag === "Voucher" ? (
                      <Link
                        className="view-main"
                        to="/explore/voucherdetail"
                        state={{
                          id: parseInt(list.product_id),
                          business_id: parseInt(list.business_id),
                          status: 2,
                          flag: "Voucher",
                        }}
                      >
                        <p className="view">View Details</p>
                      </Link>
                    ) : (
                      <Link
                        className="view-main"
                        to={"/explore/coupondetail"}
                        state={{
                          id: parseInt(list.product_id),
                          business_id: parseInt(list.business_id),
                          status: 2,
                          flag: "Coupon",
                        }}
                      >
                        <p className="view">View Details</p>
                      </Link>
                    )}
                  </Col>
                  <div className="tag-main">
                    <p className="ribben">{list.flag}</p>
                  </div>
                </Row>
              );
            })
          ) : (
            <div className="d-flex justify-content-center pt-1 pb-4">
              <h6>"No Data Available!"</h6>
            </div>
          )}
          <div className="text-center">
            <Button variant="primary" className="green-btn">
              Load More
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LatestLocals;

import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "../Explore/Explore.css";
import { FaLocationArrow } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { MdKeyboardArrowDown } from "react-icons/md";
import ExploreSlider from "../ExploreSlider/ExploreSlider";
import ExploreCategories from "../ExploreCategories/ExploreCategories";
import LatestLocals from "../LatestLocals/LatestLocals";
import PopularDeals from "../PopularDeals/PopularDeals";
import { exploreApi } from "../../Utils/Api/Explore";
import { CountryList } from "../../Utils/Api/CountryList";
import { CategoryList } from "../../Utils/Api/CategoryList";
import { OtherDealsApi } from "../../Utils/Api/OtherDealsApi";
import Loader from "../../Components/Loader/Loader";
import Notifications from "../../Components/Notifications/Notifications";

const Explore = () => {
  const categories = [
    { category_id: 1, category_name: "Books" },
    { category_id: 2, category_name: "Electronics" },
    { category_id: 3, category_name: "Clothing" },
    { category_id: 4, category_name: "Food" },
    { category_id: 5, category_name: "Tools" },
  ];
  const populars = [
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
  const voucherCouponList = [
    {
      business_id: 1,
      category: "Beauty",
      product_name: "Eyelash Extension",
      product_actual_price: 120,
      product_offer_price: 90,
      offered_percent: 25,
      flag: "Voucher",
    },
    {
      business_id: 2,
      category: "Health",
      product_name: "Full Body Checkup",
      product_actual_price: 200,
      product_offer_price: 150,
      offered_percent: 25,
      flag: "Coupon",
    },
    {
      business_id: 3,
      category: "Fitness",
      product_name: "Gym Membership",
      product_actual_price: 300,
      product_offer_price: 250,
      offered_percent: 17,
      flag: "Voucher",
    },
    {
      business_id: 4,
      category: "Beauty",
      product_name: "Eyelash Extension",
      product_actual_price: 120,
      product_offer_price: 90,
      offered_percent: 25,
      flag: "Voucher",
    },
    {
      business_id: 5,
      category: "Health",
      product_name: "Full Body Checkup",
      product_actual_price: 200,
      product_offer_price: 150,
      offered_percent: 25,
      flag: "Coupon",
    },
    {
      business_id: 6,
      category: "Fitness",
      product_name: "Gym Membership",
      product_actual_price: 300,
      product_offer_price: 250,
      offered_percent: 17,
      flag: "Voucher",
    },
  ];

  const [exploreVoucherCouponList, setExploreVoucherCouponList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [popularDealsList, setPopularDealsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState(1);
  const [search, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState(0);
  const [componentLoading, setComponentLoading] = useState(false);

  const SelectHandler = (e) => {
    let selectvalue = e.target.value;
    setSelectValue(selectvalue);
    //   ExploreHandler(selectValue);
  };

  const Searchhandler = (val) => {
    setSearchValue(val);
    if (
      val?.length > 0
        ? voucherCouponList.filter((item) => item.product_name === val)
        : []
    )
      console.log(
        voucherCouponList.filter((item) => item.product_name === val)
      );
    setExploreVoucherCouponList(voucherCouponList);
  };

  const SortHandler = (val) => {
    setSortValue(val);
  };

  console.log(selectValue, "city value");

  const city_id = parseInt(selectValue);
  localStorage.setItem("city_id", city_id);

  const data = {
    offset: 0,
    limit: 2,
    // category_id: 1,
    city_id: city_id,
    search_id: search,
    sort: parseInt(sortValue),
  };

  const data_1 = {
    business_id: 1,
    city_id: 1,
  };

  const ExploreHandler = async () => {
    setLoading(true);
    const CountryListData = await CountryList();
    // const CatogryListData = await CategoryList();
    // const populardealsdata = await OtherDealsApi(data_1);
    setLoading(false);
    setCountryList(CountryListData.res);
    setCategoryList(categories);
    setPopularDealsList(populars);
  };

  const ExploHandler = async () => {
    setComponentLoading(true);
    // if (
    //   search?.length > 0
    //     ? voucherCouponList.filter((item) => item.product_name === search)
    //     : []
    // )
    //   console.log(
    //     voucherCouponList.filter((item) => item.product_name === search)
    //   );
    setExploreVoucherCouponList(voucherCouponList);
    setComponentLoading(false);
  };

  useEffect(() => {
    ExploreHandler();
    // ExploHandler();
  }, []);

  useEffect(() => {
    ExploHandler();
  }, [search, selectValue, sortValue]);

  return (
    <>
      <Notifications />
      {loading === true ? <Loader /> : ""}
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-3 pr-3 pb-4">
          <div className="text-center d-flex justify-content-center mb-3 mt-3 explore-deal">
            <p className="exploretext">Explore Deals in</p>
            <FaLocationArrow className="arrowloacation" />
            <Form.Select
              value={selectValue}
              onChange={SelectHandler}
              style={{ cursor: "pointer" }}
              aria-label="Default select example"
              className="location-select"
            >
              {/* <option>Select Location</option> */}
              {countryList?.length !== 0 ? (
                countryList?.map((country) => {
                  return (
                    <>
                      <option value={country[0]}>{country[1]}</option>
                    </>
                  );
                })
              ) : (
                <option value="">None</option>
              )}
            </Form.Select>
          </div>
          <ExploreSlider />
          <div className="mt-4 pt-2">
            <div className="category-list">
              <ExploreCategories list={categoryList} />
            </div>
            <div className="latest-local px-3">
              <LatestLocals
                voucherCouponList={exploreVoucherCouponList}
                sortHandler={SortHandler}
                searchHandler={Searchhandler}
                Loading={loading === false ? componentLoading : ""}
                initialState={sortValue}
              />
            </div>
            <div className="popular-deals px-3 mb-4">
              <PopularDeals popularDealsList={popularDealsList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;

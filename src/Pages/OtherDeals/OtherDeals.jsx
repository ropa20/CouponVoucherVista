import React from "react";
import "../ExploreSlider/ExploreSlider.css";
import "../PopularDeals/PopularDeals.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarousalCard from "../../Components/CarousalCard/CarousalCard";
import { useLocation } from "react-router-dom";

const OtherDeals = (props) => {
  const { otherDealsList } = props;
  const location = useLocation();
  const { id, business_id, status, flag } = location.state;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const renderAssignedProjects = () =>
    otherDealsList?.map((eachitem, index) => {
      return (
        <CarousalCard
          key={index}
          eachitem={eachitem}
          id={id}
          business_id={business_id}
          status={status}
          flag={flag}
        />
      );
    });

  return (
    <div className="popular-deals_main_container">
      <div className=" mb-4">
        <p className="latestloc-text">
          <span className="userline-title">Other</span> Deals
        </p>
      </div>
      <Carousel
        showDots={false}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        ssr={true}
        renderDotsOutside={true}
        arrows={true}
        // arrows={isActive ? true : false}
        dotListClass="carousel_dot"
        className="slide"
        responsive={responsive}
      >
        {renderAssignedProjects()}
      </Carousel>
      {otherDealsList?.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h6>No Data Avalible!</h6>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OtherDeals;

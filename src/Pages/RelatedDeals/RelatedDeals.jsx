import React from "react";
import "../ExploreSlider/ExploreSlider.css";
import "../PopularDeals/PopularDeals.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarousalCard from "../../Components/CarousalCard/CarousalCard";
import { useLocation } from "react-router-dom";

const RelatedDeals = (props) => {
  const { relatedDealsList } = props;
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
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const renderAssignedProjects = () =>
    relatedDealsList?.map((eachitem, index) => {
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
          <span className="userline-title">Related</span> Deals
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
      {relatedDealsList?.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h6>No Data Avalible!</h6>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RelatedDeals;

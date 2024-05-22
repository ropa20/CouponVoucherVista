import React from "react";
import "../ExploreSlider/ExploreSlider.css";
import "../PopularDeals/PopularDeals.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarousalCard from "../../Components/CarousalCard/CarousalCard";

const PopularDeals = (props) => {
  const { popularDealsList } = props;

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
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  console.log(popularDealsList);

  const renderAssignedProjects = popularDealsList?.map((eachitem, index) => (
    <CarousalCard key={index} eachitem={eachitem} Data={eachitem.product_id} />
  ));

  return (
    <div className="popular-deals_main_container">
      <div className=" mb-4">
        <p className="latestloc-text">
          <span className="userline-title">Popular</span> Deals
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
        {renderAssignedProjects}
      </Carousel>
      {popularDealsList?.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h6>No Data Avalible!</h6>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PopularDeals;

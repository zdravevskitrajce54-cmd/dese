import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "../../Components/Destination/Destination4";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://fastly.picsum.photos/id/835/1920/410.jpg?hmac=eVALUq6OCLB6VZMP-eyUXjlIiXQp8hS57wIXH-xrwPU"
        Title="Naše destinacije"
      ></BreadCumb>
      <Destination4></Destination4>
      <Story1></Story1>
      <FeaturedTour1></FeaturedTour1>
    </div>
  );
};

export default page;

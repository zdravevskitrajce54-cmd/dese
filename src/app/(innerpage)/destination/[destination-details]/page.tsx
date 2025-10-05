import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/DestinationDetails/DestinationDetails";
import destinations from "../../../Components/Destination/data/destination";

const page = async ({
  params,
}: {
  params: Promise<{ destinationDetails: string }>;
}) => {
  const { destinationDetails } = await params;
  // Get the destination name from the URL parameter
  const destinationName = decodeURIComponent(destinationDetails);

  // Find the destination data from all categories
  let destinationData = null;
  for (const category in destinations) {
    const found = destinations[category as keyof typeof destinations].find(
      (dest) => dest.name.toLowerCase() === destinationName.toLowerCase()
    );
    if (found) {
      destinationData = found;
      break;
    }
  }

  return (
    <div>
      <BreadCumb
        bgimg="https://fastly.picsum.photos/id/866/1920/410.jpg?hmac=Ukosc-acEFYInP7MRtnJi0_BQfs8RiU2JBoTv_RPKuM"
        Title={destinationData ? destinationData.name : "Destination Details"}
      ></BreadCumb>

      <DestinationDetails destination={destinationData}></DestinationDetails>
    </div>
  );
};

export default page;

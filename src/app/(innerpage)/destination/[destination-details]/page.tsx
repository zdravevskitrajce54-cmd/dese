import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/DestinationDetails/DestinationDetails";
import destinations from "../../../Components/Destination/data/destination";

interface PageProps {
  params: {
    destinationDetails: string;
  };
}

const Page = ({ params }: PageProps) => {
  const destinationName = decodeURIComponent(params.destinationDetails);

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
      />
      <DestinationDetails destination={destinationData} />
    </div>
  );
};

export default Page;

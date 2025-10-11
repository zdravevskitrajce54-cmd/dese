import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/DestinationDetails/DestinationDetails";
import destinations from "../../../Components/Destination/data/destination";

interface PageProps {
  params: Promise<{ "destination-details": string }>;
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const destinationName = decodeURIComponent(
    resolvedParams["destination-details"]
  );

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
        bgimg={destinationData?.bigImg || ""}
        Title={destinationData ? destinationData.slogan : "Destination Details"}
      ></BreadCumb>

      <DestinationDetails destination={destinationData}></DestinationDetails>
    </div>
  );
};

export default page;

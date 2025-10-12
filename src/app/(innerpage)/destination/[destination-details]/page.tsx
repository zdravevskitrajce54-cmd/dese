import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/DestinationDetails/DestinationDetails";
import destinations from "../../../Components/Destination/data/destination";

interface PageProps {
  params: Promise<{ "destination-details": string }>;
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const destinationTag = decodeURIComponent(
    resolvedParams["destination-details"]
  );

  // Find the destination data from all categories
  let destinationData = null;
  for (const category in destinations) {
    const found = destinations[category as keyof typeof destinations].find(
      (dest) => dest.tag.toLowerCase() === destinationTag.toLowerCase()
    );
    if (found) {
      destinationData = found;
      break;
    }
  }
  console.log(destinationData);
  return (
    <div>
      <BreadCumb
        bgimg={destinationData?.bigImg || ""}
        Title={destinationData ? destinationData.name : "Destination Details"}
      ></BreadCumb>

      <DestinationDetails destination={destinationData}></DestinationDetails>
    </div>
  );
};

export default page;

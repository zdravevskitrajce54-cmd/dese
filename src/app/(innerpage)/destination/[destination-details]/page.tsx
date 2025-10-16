import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/DestinationDetails/DestinationDetails";
import destinations from "../../../Components/Destination/data/destination";

interface PageProps {
  params: Promise<{ "destination-details": string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const destinationTag = decodeURIComponent(
    resolvedParams["destination-details"]
  );

  // 🔍 Search through nested structure: Origin → Continent → Destinations
  let destinationData: any = null;

  for (const origin in destinations) {
    const continents = destinations[origin];

    for (const continent in continents) {
      const found = continents[continent].find(
        (dest: any) => dest?.tag?.toLowerCase() === destinationTag.toLowerCase()
      );

      if (found) {
        destinationData = {
          ...found,
          origin,
          continent,
        };
        break;
      }
    }

    if (destinationData) break;
  }

  // Optional: Handle 404 if no match is found
  if (!destinationData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Destination not found 😢
        </h2>
        <p className="text-gray-600">
          The destination you’re looking for doesn’t exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div>
      <BreadCumb
        bgimg={destinationData?.bigImg || ""}
        Title={destinationData.name}
      />
      <DestinationDetails destination={destinationData} />
    </div>
  );
};

export default Page;

import { Info } from "lucide-react";

const AverageCard = () => {
  return (
     <div className="">
      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-NeuePower text-gray-600"style={{ fontFamily: "Neue Power" }}>
        Average
      </h3>

      {/* Number */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-NeuePowerBold text-[#033701]">
        8,574
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  );
};

export default AverageCard;

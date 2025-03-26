import { Info } from "lucide-react";

const TotalCard = () => {
  return (
    <div className="">
      {/* Info Icon */}
      {/* <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <Info size={20} />
      </button> */}

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-600">Total</h3>

      {/* Number */}
      <p className="text-4xl font-bold text-[#033701]">8,574</p>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  );
};

export default TotalCard;

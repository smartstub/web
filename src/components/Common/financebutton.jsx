import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import stubico from "../../images/stubicon.png";
import summaryico from "../../images/summary.png";
import statementicon from "../../images/statementicon.png";
import taxicon from "../../images/taxicon.png";

const FinanceOptions = () => {
  const navigate = useNavigate();

  const options = [
    { icon: stubico, title: "Pay Stubs", path: "/paystub" },
    { icon: taxicon, title: "Tax Form", path: "/taxform" },
    { icon: statementicon, title: "Statements", path: "/statement" },
    { icon: summaryico, title: "Summaries", path: "/summary" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2 rounded-xl">
      {options.map((item, index) => (
        <div
          key={index}
          className="flex flex-col p-6 rounded-xl transition-all duration-300 cursor-pointer"
          onClick={() => navigate(item.path)}
        >
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center dash_header rounded-full shadow-lg">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3
                className="text-lg font-semibold text-[#fefefe] flex items-center justify-between"
                style={{ fontFamily: "Neue Power" }}
              >
                {item.title} <ArrowUpRight size={18} className="text-[#b4e930]" />
              </h3>
              <hr className="border-[#b4e930] mt-1" />
              <p className="text-[#fefefe] text-[0.6rem] mt-1">
                Lorem ipsum is simply dummy text
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceOptions;

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { FaPhone } from "react-icons/fa";


const PricingList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center gap-10 max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-[#0E0C15] border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-[#FFC876] [&>h4]:even:text-[#AC6AFF] [&>h4]:last:text-[#FF776F]"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-[#ffffff]/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3 glex items-center gap-2">
                  {index === 0 ? " " : index === 1 ? "" : index === 2 ? <a href="tel:+090300000000"><FaPhone className="size-6 text-white ml-2 cursor-pointer" /></a> : ""}
                </div>
                <div className="text-[2.4rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "شروع" : "ارتباط با ما"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;

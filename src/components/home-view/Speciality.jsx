import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import speciality1 from "../../assets/speciality1.png";
import speciality2 from "../../assets/speciality2.png";
import speciality3 from "../../assets/speciality3.png";
import { Button } from "../ui/button";
function Speciality() {
  const data = [
    {
      image: speciality1,
      title: "Fully Secure Payment",
      desc: "Secure Payment Option on our platform",
    },
    {
      image: speciality2,
      title: "No Transaction Charges",
      desc: "Fund transfer is without hidden charges",
    },
    {
      image: speciality3,
      title: "Cashout In A Minute",
      desc: "Withdrawal of fund at our local branches and ATM across the country is instant without delay",
    },
  ];
  return (
    <div className="flex-col items-center justify-center">
      <div>
        <h1 className="text-xl text-center text-blue-600 items-center">
          OUR SPECIALITY
        </h1>
        <h2 className="text-2xl text-center ">
          We Bring Everything In One Place
        </h2>
        <p className="font-muted-foreground text-center">
          Earn 5,000 bonus points as a bonafide customer on Xchangepayglobal
          Terms and conditions applied.
        </p>
      </div>
      <div className="flex mt-10 mb-20 lg:flex-row gap-20 sm:flex-col items-center justify-center ">
        {data.map((item) => (
          <div key={item.desc} className="w-[400px] bg-white ">
            <div className="item-center mb-5 px-35">
              <img alt="" src={item.image} />
            </div>
            <h1 className="text-center mb-3 text-xl">{item.title}</h1>
            <p className="text-center text-muted-foreground mb-5">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Speciality;

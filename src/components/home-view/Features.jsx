import React from 'react'
import safe from '../../assets/safe1.png';
import safe1 from '../../assets/safe.png';
import service from '../../assets/service.png';
import instance from '../../assets/instance.png'
function Features() {
    const features = [
      {
        title: "24/7 Services",
        desc: "We provide 24/7 customer support to ensure you are ahead",
        icon:service, // "🏦",
      },
      {
        title: "Instant Cashout",
        desc: "Our fund transfer is instant without delay",
        icon: instance, //"💸",
      },
      {
        title: "Safe Transactions",
        desc: "Every transactions on Xchangepayglobal is safe and secure with the best data encryption you can ever imagine",
        icon: safe1, //"🔒",
      },
      {
        title: "Safe And Secure",
        desc: "Your fund saved with Xchangepayglobal is secure without hassle",
        icon: safe ,// "🛡️",
      },
    ];
  
    return (
        <div className="flex lg:flex-row sm:flex-col lg:gap-20 md:gap-8  items-center justify-center px-6 py-12 text-center">
          <div className="max-w-2xl mb-10">
            <h1 className="text-3xl md:text-2xl md:w-[350px] text-start font-bold text-gray-800 mb-4">
              Make paying more rewarding, more convenient, and more seamless with the bank you trust.
            </h1>
            <p className="text-gray-600 text-start text-lg">
              Saving and management of your fund is as easy as it can be with Xchangepayglobal.
            </p>
          </div>
          <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full">
            {features.map((feature, idx) => (
              <div key={idx} className="gap-4  justify-start">
                <div className="text-4xl text-blue-600">
                  <img className='' src={feature.icon} alt="" />
                </div>
                <div>
                  <h3 className="text-xl wrap-normal text-start lg:w-[200px] font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 lg:w-[250px] md:w-[200px] sm:w-full text-start wrap-normal">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
  }
export default Features
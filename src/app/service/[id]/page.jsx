
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiFileText } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";

const ServiceDetails = async ({params}) => {
    const param = await params;
  const res = await fetch(`http://localhost:3000/api/service/${param.id}`)
  const service = await res.json()
    return (
        <div className="w-10/12 mx-auto mt-12">
        {/* Details Banner */}
        <section className="relative ">
          <div className="relative">
            <Image
              src={"/assets/images/checkout/checkout.png"}
              className="object-cover rounded-lg w-full"
              width={1137}
              height={300}
              alt={"banner"}
            />
            <div className="absolute bg-black/30 inset-0 bg-opacity-50 flex items-center pl-8 rounded-lg">
              <h1 className="text-white text-5xl font-semibold">
                Service Details
              </h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md">
            <span className="text-sm">Home / Service Details</span>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-8 mt-32">
            {/* Service Image */}
            <div>
              <Image
                src={"/assets/images/banner/3.jpg"}
                className="object-cover rounded-lg w-full"
                width={752}
                height={100}
                alt={"banner"}
              />
            </div>
  
            {/* Service Description */}
            <div className="mt-8">
              <h2 className="text-3xl font-semibold">{service?.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {service?.description}
              </p>
            </div>
  
            {/* Facilities */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {service?.facility?.map((fac, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-lg shadow-md border-t-2 border-red-500"
                >
                  <h4 className="text-lg font-semibold">{fac.name}</h4>
                  <p className="text-gray-600 text-sm mt-2">{fac.details}</p>
                </div>
              ))}
            </div>
  
            {/* Steps */}
            <div className="mt-10">
              <h3 className="text-3xl font-bold">3 Simple Steps to Process</h3>
              <p className="text-gray-600 mt-4 text-justify">
                To process car service-related text, start by extracting key
                details such as the car model, service type, appointment date, and
                customer information. Next, categorize and organize the extracted
                data based on maintenance history, upcoming services, and urgent
                repairs to ensure clarity and easy access. Finally, generate a
                well-structured summary or report, including service details and
                costs, and share it with the customer or service team for a
                seamless and efficient service experience.
              </p>
  
              {/* steps */}
              <div className="flex justify-center gap-6 mt-10">
                {[
                  {
                    title: "Extract Key Information",
                    description:
                      "Identify important details like car model, service type (oil change, tire rotation, engine check), date, and customer name.",
                  },
                  {
                    title: "Categorize & Organize",
                    description:
                      "Sort the information into relevant sections, such as maintenance history, upcoming services, and urgent repairs.",
                  },
                  {
                    title: "Generate & Share Report",
                    description:
                      "Format the processed data into a clear summary or invoice and share it with the customer or service team.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center border-t-2 p-3 rounded-md border-gray-200"
                  >
                    <div className="w-20 h-20 flex items-center justify-center text-white font-bold rounded-full bg-red-500 border-10 border-red-100 shadow-md">
                      0{index + 1}
                    </div>
                    <h3 className="font-bold mt-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Video Section */}
            <div className="mt-8 relative mb-20">
              <iframe
                width="820"
                height="415"
                src="https://www.youtube.com/embed/VTDB3mKx7jM?si=Fyj4kxSlewkXeWb7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
  
          {/* Sidebar */}
          <div className="col-span-4 space-y-6 mt-32">
            {/* Services List */}
            <div className="bg-[#F3F3F3] shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {[
                  "Full Car Repair",
                  "Engine Repair",
                  "Automatic Services",
                  "Engine Oil Change",
                  "Battery Charge",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-4 py-3 bg-white rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition duration-300 group"
                  >
                    <span>{item}</span>
                    <button className="text-red-500 group-hover:text-white transition duration-300">
                      <HiArrowRight className="text-lg" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Download Section */}
            <div className="bg-gray-800 text-white p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Download</h2>
  
              <div className="space-y-4">
                {/* First Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FiFileText className="text-white text-xl" />
                    <div>
                      <p className="font-semibold">Our Brochure</p>
                      <p className="text-gray-400 text-sm">Download</p>
                    </div>
                  </div>
                  <button className="bg-red-500 p-3 rounded-lg">
                    <HiArrowRight className="text-white text-lg" />
                  </button>
                </div>
  
                {/* Second Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FiFileText className="text-white text-xl" />
                    <div>
                      <p className="font-semibold">Company Details</p>
                      <p className="text-gray-400 text-sm">Download</p>
                    </div>
                  </div>
                  <button className="bg-red-500 p-3 rounded-lg">
                    <HiArrowRight className="text-white text-lg" />
                  </button>
                </div>
              </div>
            </div>
  
            {/* Help section */}
            <div className="bg-gray-800 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/assets/icons/logo.svg"
                  alt="Car Doctor"
                  className="w-32 h-20"
                />
              </div>
              <p className="text-white text-xl mt-2 font-bold">
                Need Help? We Are Here <br /> To Help You
              </p>
  
              <div className="relative mb-12">
                <div className="bg-white text-black mt-4 p-3 rounded-md">
                  <h3 className=" text-red-500 font-bold text-xl mt-6">
                    Car Doctor Special
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Save up to{" "}
                    <span className="text-red-500 font-bold">60% off</span>
                  </p>
                </div>
  
                <button className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-4 px-10 rounded-md hover:bg-red-600">
                  Get A Quote
                </button>
              </div>
            </div>
  
            {/* Price & Checkout */}
            <div className="bg-white">
              <h3 className="text-2xl font-bold mb-4">
                Price: ${service?.price}
              </h3>
              <button className="bg-red-500 w-full text-white py-2 px-6 rounded-md hover:bg-red-600">
                <Link href={`/checkout/${service._id}`} className="  ">
                  Proceed Checkout
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ServiceDetails;
import dbConnect, { dbName } from "@/lib/dbConnecter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Services = async () => {
    const servicesCollection = await dbConnect(dbName.servicesCollection);
    const services = await servicesCollection.find({}).toArray();

  return (
    <section className="py-16 text-center w-10/12 mx-auto">
      <h3 className="text-red-500 text-sm font-bold">Service</h3>
      <h2 className="text-3xl font-bold">Our Service Area</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-2">
        The majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services?.map((service) => (
          <div
            key={service._id}
            className="border border-gray-200 p-6 rounded-lg shadow-md"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-52"
            />
            <h3 className="text-lg font-semibold mt-5 text-start">
              {service.title}
            </h3>
            <div className="flex justify-between items-center mt-5">
              <p className="text-red-500 font-semibold">
                Price: {service.price}
              </p>
              <Link
                href={`/service/${service._id}`}
                className="text-red-500 mt-2 flex items-center gap-1 hover:underline"
              >
                <GoArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href={"/"}
          className="border text-red-500 border-red-500 hover:text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          More Services
        </Link>
      </div>
    </section>
  );
};

export default Services;

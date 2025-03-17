"use client";

import { useSession } from "next-auth/react";


const CheckoutForm = ({ service }) => {
    const { data: session } = useSession()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
  
      const payload = {
        customer_Name: form.name.value,
        email: form.email.value,
        date: form.date.value,
        phone: form.phone.value,
        address: form.address.value,
        service_id: service._id,
        service_name: service.title,
        service_img: service.img,
        service_price: form.amount.value,
      };
  
      

      const res = await fetch("http://localhost:3000/api/service", {
        method : "POST",
        body : JSON.stringify(payload)
      })
      const postedResponse = await res.json();
      console.log(postedResponse)
    };
    return (
      <div className="w-10/12 mx-auto bg-[#F3F3F3] p-24 mb-20">
        <h3 className="text-center font-bold text-4xl mb-8">
          Book Service : {service.title}
        </h3>
        <div className="p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 "
          >
            {/* name input field */}
            <input
              type="text"
              name="name"
              defaultValue={session?.user?.name}
              readOnly
              className="p-3 border rounded-lg w-full bg-white"
            />
            {/* email input field */}
            <input
              type="email"
              name="email"
              defaultValue={session?.user?.email}
              readOnly
              className="p-3 border rounded-lg w-full bg-white"
            />
            {/* service amount field */}
            <input
              type="number"
              name="amount"
              defaultValue={service?.price}
              readOnly
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="date"
              name="date"
              defaultValue={new Date().toLocaleDateString("en-CA")}
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Present Address"
              className="p-3 border rounded-lg w-full bg-white"
            />
  
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-red-500 text-white font-semibold p-3 rounded-lg hover:bg-red-600"
            >
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CheckoutForm;
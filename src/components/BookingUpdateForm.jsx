"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const BookingUpdateForm = ({ data }) => {
    const router = useRouter()
    const { data: session } = useSession()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
  
      const payload = {
       
        date: form.date.value,
        phone: form.phone.value,
        address: form.address.value,
        
      };
  
      

      const res = await fetch(`https://next-js-car-doctor-one.vercel.app/api/my-bookings/${data._id}`, {
        method : "PATCH",
        body : JSON.stringify(payload)
      })
      const updatedResponse = await res.json();
      router.push("/my-bookings");

      if (data?.modifiedCount > 0) {
        toast.success("Booking updated successfully");
      }
    };
    return (
      <div className="w-10/12 mx-auto bg-[#F3F3F3] p-24 mb-20">
        <h3 className="text-center font-bold text-4xl mb-8">
          Book Service : {data.service_name}
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
              defaultValue={data?.service_price}
              readOnly
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="date"
              name="date"
              defaultValue={data?.date}
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="text"
              name="phone"
              defaultValue={data?.phone}
              placeholder="Your Phone"
              className="p-3 border rounded-lg w-full bg-white"
            />
            <input
              type="text"
              name="address"
              defaultValue={data?.address}

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
  
  export default BookingUpdateForm;
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa"
import MyBookingButton from '@/app/my-bookings/components/MyBookingButton';
const MyBookingTable = ({data}) => {
  
    return (
        <div className="w-10/12 mx-auto mb-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Service Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((booking, index) => (
                <tr key={booking._id}>
                  <td>
                    <Image
                      src={booking.service_img}
                      width={64}
                      height={80}
                      className=" rounded"
                      alt="service image"
                    />
                  </td>
                  <td>{booking.service_name}</td>
                  <td>{booking.date}</td>
                  <td>{booking.service_price}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.address}</td>
  
                  <td className="text-red-500 pl-6 flex items-center gap-4 cursor-pointer">
                    <Link href={`/my-bookings/${booking._id}`}>
                      <FaEdit size={20} />
                    </Link>
  
                    <MyBookingButton id={booking._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyBookingTable;
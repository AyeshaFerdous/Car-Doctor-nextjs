import BookingUpdateForm from '@/components/BookingUpdateForm';
import { headers } from 'next/headers';
import React from 'react';

const UpdateBookingPage = async({params}) => {
    const param = await params;
    const res = await fetch(`https://next-js-car-doctor-one.vercel.app/api/my-bookings/${param.id}`,{
        headers : await headers()
    })
    const data = await res.json();

    console.log(data)

    return (
        <div>
            <BookingUpdateForm data={data}/>
        </div>
    );
};

export default UpdateBookingPage;
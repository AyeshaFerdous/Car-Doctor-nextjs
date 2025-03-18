import BookingUpdateForm from '@/components/BookingUpdateForm';
import React from 'react';

const UpdateBookingPage = async({params}) => {
    const param = await params;
    const res = await fetch(`http://localhost:3000/api/my-bookings/${param.id}`)
    const data = await res.json();

    console.log(data)

    return (
        <div>
            <BookingUpdateForm data={data}/>
        </div>
    );
};

export default UpdateBookingPage;
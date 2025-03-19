import CheckoutForm from '@/components/CheckoutForm';
import React from 'react';

const CheckoutPage = async ({params}) => {
    const param = await params;
    const res = await fetch(`https://next-js-car-doctor-one.vercel.app/api/service/${param.id}`)
    const service = await res.json()
    console.log(service)
    return (
        <div>
           <CheckoutForm service={service}/>
        </div>
    );
};

export default CheckoutPage;
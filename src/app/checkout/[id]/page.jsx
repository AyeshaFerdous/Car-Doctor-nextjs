import CheckoutForm from '@/components/CheckoutForm';
import React from 'react';

const CheckoutPage = async ({params}) => {
    const param = await params;
    const res = await fetch(`http://localhost:3000/api/service/${param.id}`)
    const service = await res.json()
    console.log(service)
    return (
        <div>
           <CheckoutForm service={service}/>
        </div>
    );
};

export default CheckoutPage;
"use client"
import React, { useEffect, useState } from 'react';
import MyBookingTable from '../Components/table/MyBookingTable';

const MyBookings = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchAllBookings = async()=>{
            const res = await fetch('http://localhost:3000/api/service')
            const service = await res.json();
           
            setData(service)
        }
        fetchAllBookings()
        
    },[])
    console.log(data)

    return (
        <div>
           <MyBookingTable data={data}/>
        </div>
    );
};

export default MyBookings;
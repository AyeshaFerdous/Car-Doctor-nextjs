"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

const MyBookingButton = ({id}) => {

    const router = useRouter()
    const handleDelete = async (id)=>{
       const res = await fetch(`http://localhost:3000/api/service/${id}`,{
        method : 'DELETE'
       })
       const data = await res.json()
       if (data?.deletedCount > 0) {
        router.refresh();
        toast.success("Booking deleted successfully");
      }
    }
    return (
        <>
        <FaTrash onClick={() => handleDelete(id)} size={15} />
      </>
    );
};

export default MyBookingButton;
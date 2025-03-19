
import MyBookingTable from '../Components/table/MyBookingTable';
import { headers } from 'next/headers';


const fetchAllBookings = async()=>{
    const res = await fetch('https://next-js-car-doctor-one.vercel.app/api/service', {
        headers: new Headers(await headers()),
    })
    const service = await res.json();
   
    return service;
}
const MyBookings = async () => {
    
    const data = await fetchAllBookings()
    console.log(data)

    return (
        <div>
           <MyBookingTable data={data}/>
        </div>
    );
};

export default MyBookings;
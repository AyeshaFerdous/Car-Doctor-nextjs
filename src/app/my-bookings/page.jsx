
import MyBookingTable from '../Components/table/MyBookingTable';
import { headers } from 'next/headers';


const fetchAllBookings = async()=>{
    const res = await fetch('http://localhost:3000/api/service', {
        headers : await headers()
    })
    const service = await res.json();
   
    return service
}
const MyBookings = async () => {
    
    const data = await fetchAllBookings()

    return (
        <div>
           <MyBookingTable data={data}/>
        </div>
    );
};

export default MyBookings;
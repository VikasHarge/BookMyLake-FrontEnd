import React, {useEffect, useState} from "react";
import { GoBriefcase } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { BsFillBookmarkPlusFill, BsPatchCheckFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookingData } from "../../../../features/booking/bookingSlice";

const DataDashboard = () => {


  const {loading, allBookings} = useSelector((state) => state.allBookings);
  const totalAmount = allBookings?.totalAmount || 0;
  const totalBookings = allBookings?.bookings?.length || 0;
  const dispatch = useDispatch()

  const [newBookings, setNewBookings] = useState(0)


  useEffect(()=>{

    setNewBookings(()=> {
      const newVal = allBookings?.bookings?.filter((val)=>{
        console.log(val.bookingStatus)
         return val.bookingStatus === 'Processing';
       })

       return newVal
    })
  
    console.log(newBookings);
  },[allBookings])

  useEffect(() => {
    dispatch(fetchAllBookingData());
  }, [dispatch])


  return (
    <>
      <div className="dataDashboard_container">
        <div className="dashboard_card_container">

          <div className="info_cards card_1">
            <div>
              <h1>5</h1>
              <h2>New Bookings</h2>
            </div>
            <BsFillBookmarkPlusFill className="card_icon" />
          </div>
          <div className="info_cards card_3" onClick={()=>dispatch(fetchAllBookingData())} >
            <div>
              <h1>{totalAmount} ₹ </h1>
              <h2>Total Earning</h2>
            </div>
            <GiMoneyStack className="card_icon" />
          </div>

          <div className="info_cards card_2">
            <div>
              <h1>{totalBookings}</h1>
              <h2>Total Bookings</h2>
            </div>
            <GoBriefcase className="card_icon" />
          </div>

          <div className="info_cards card_3">
            <div>
              <h1>126</h1>
              <h2>Completed Bookings</h2>
            </div>
            <BsPatchCheckFill className="card_icon" />
          </div>

          <div className="info_cards card_4">
            <div>
              <h1>3</h1>
              <h2>Cancled Bookings</h2>
            </div>
            <MdCancel className="card_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDashboard;

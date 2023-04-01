import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {FcEditImage,FcDeleteDatabase} from 'react-icons/fc'
import {BsSortDownAlt,BsSortDown} from 'react-icons/bs'
import { IconButton, Tooltip } from "@mui/material";
import { fetchCampSiteData } from "../../../../features/campsites/campsiteSlice";






const Table = () => {

  const {campsiteData, loading, error, campSiteCount} = useSelector(state => state.campSiteData)


  const [data, setData] = useState();
  const [order, setorder] = useState("ASC");
  const [colm, setColm] = useState("");

  const [camps, setCamps] = useState(campsiteData.allCampSites || [])

  const dispatch = useDispatch();

  const sorting = (col)=>{
    // console.log(order);
    if(order === "ASC"){
      const sorted = [...data].sort((a,b)=>{
        // console.log(a[col]);
        return a[col] - b[col];
      })
      setData(sorted);
      setorder("DSC")
    }
    if(order === "DSC"){
      const sorted2 = [...data].sort((a,b)=>{
        return b[col] - a[col];
      })
      setData(sorted2);
      setorder("ASC")
    }
    setColm(col)
  }

  useEffect(() => {
    dispatch(fetchCampSiteData())
  }, [dispatch])




  return (
    <div className="table_container">
      <div className="camp_table widge">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CampSite Name</th>
              <th onClick={()=>sorting("max_price")} >Max Price <span>{order === "ASC" && colm ===  "max_price"? <BsSortDown/> : <BsSortDownAlt/>}</span></th>
              <th onClick={()=>sorting("sale_price")} >Sale Price <span>{order === "ASC" && colm ===  "sell_price"?<BsSortDown/> : <BsSortDownAlt/> }</span></th>
              <th onClick={()=>sorting("total_bookigs")} >Total Bookings <span>{order === "ASC" && colm ===  "total_bookigs" ?<BsSortDown/> : <BsSortDownAlt/> }</span></th>
              <th>Tags</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campsiteData.allCampSites && campsiteData.allCampSites.map((site, i)=>{
                return <tr key={i} >
                <td>{site._id.slice(3,5).toUpperCase()}</td>
                <td><p className="camp_name"><img src={site.images[0].url} className="table_img"/>{site.camp_name}</p></td>
                <td>{"₹"+site.max_price}</td>
                <td>{"₹"+site.sale_price}</td>
                <td>{site.total_bookings}</td>

                <td>
                  <p className="tag_contain" >{site.tags.map((item, i)=>{
                        return <Tooltip title={item} key={i} ><span className="camp_tags" >{item}</span></Tooltip>
                      })}
                  </p>
                </td>

                <td>
                    <Tooltip title={site.status}  >
                        <p 
                            className={site.status == "active" ? "active_status" : "deactive_status" }  
                        >
                            {site.status}
                        </p>
                    </Tooltip>
                </td>
                <td>
                    <Tooltip title="Update"  >
                        <IconButton>
                            <FcEditImage/>
                        </IconButton> 
                    </Tooltip>
                    <Tooltip title="Delete"  >
                        <IconButton>
                            <FcDeleteDatabase/>
                        </IconButton>
                    </Tooltip>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

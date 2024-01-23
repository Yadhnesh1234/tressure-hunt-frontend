import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers,resetUser } from "../utility/action/adminActions";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid } from "@mui/x-data-grid";


export default function Table() {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.resolve(dispatch(getAllUsers()));
  }, [dispatch]);

  useEffect(() => {
    console.log(admin.reg_users);
  }, [admin.reg_users]);

  const columns = [
    { field: "_id", headerName: "User Id", width: 250 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "emailId",
      headerName: "Email",
      width: 300,
    },
    {
      field:"reset",
      headerName:"Reset",
      with:150,
      renderCell:(params)=>{
        const onClickFunc=()=>{
           dispatch(resetUser(params.id))
        }
        return(
          <>
          <button onClick={onClickFunc} style={{border:"2px solid red",borderRadius:"2px",background:"red"}}>Reset</button>
          </>
        )
      }
        
    }
  ];
  if (admin.reg_users.length === 0) {
    return (
      <>
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      </>
    );
  }
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <h2 className="text-5xl text-black-500 ">Registered Users</h2>
        <DataGrid
          rows={admin.reg_users}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          style={{ marginTop: "20px" }}
        />
      </div>
    </>
  );
}

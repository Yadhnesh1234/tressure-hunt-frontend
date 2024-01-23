import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../utility/action/adminActions";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "rank", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "questionsSolved",
    headerName: "Questions solved",
    width: 150,
  },
];

export default function Table() {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.resolve(dispatch(getAllUsers()));
  }, [dispatch]);

  useEffect(() => {
    console.log(admin.reg_users);
  }, [admin.reg_users]);

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
          checkboxSelection
          getRowId={(row) => row.rank}
          style={{ marginTop: "20px" }}
        />
      </div>
    </>
  );
}

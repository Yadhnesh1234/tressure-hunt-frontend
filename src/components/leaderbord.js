import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../utility/action/adminActions";
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';
import "./leaderboard.css"

const columns = [
  { field: 'rank', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'email',
    headerName: 'Email',
    width: 170
  },
  {
     field:'questionsSolved',
     headerName:'Total Solve',
     width:70
  }
];

export default function LeaderBoard() {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch()
  useEffect(() => {
    Promise.resolve(dispatch(getAllUsers()))
  }, [dispatch])

  useEffect(() => {
    console.log(admin.reg_users)
  }, [admin.reg_users])

  const getRowId = (row) => row.rank;

  const getRowClassName = (params) => {
    return params.rowIndex < 3 ? 'top-row' : '';
  };

  if (admin.reg_users.length === 0) {
    return (
      <>
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      </>
    )
  }
  return (
    <>
    <div 
    style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background_dark.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    }}>
    <div className={`hero min-h-screen bg-slate-800  bg-opacity-60 `}>
      <div className="w-full h-screen items-center justify-center flex flex-col">
      <h2 className='text-5xl text-amber-500 hero-heading'>Leaderboard</h2>
      <div style={{ height: '70%', width: '70%' }} className="mt-12 text-3xl font-bold text-center text-white box w-10/12 md:w-3/12 flex items-center justify-center px-12 py-4 rounded-2xl d-flex flex-col shadow-[0px_2px_50px_4px_#de9f14] bg-slate-950/50">
      <DataGrid
        rows={admin.reg_users}
        columns={columns}
        pageSize={10}
        getRowId={getRowId}
        pageSizeOptions={[5,10,50]} 
        getRowClassName={getRowClassName}
        style={{ marginTop: '20px', color: 'white', border: 'none' }}
        classes={{
          root: 'no-border',
          cell: 'no-border',
          row: 'no-border',
          headerCell: 'no-border',
          pagination: 'no-border',
        }}
      />
</div>

    </div>
    </div>
    </div>
    </>
  );
}

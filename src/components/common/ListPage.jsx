import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import NODATA from '../../images/no_data_found.png'




const ListPage = ({
  rows,
  columns,
  currentRowsPerPage,
  loading = false,
  header,
  showToolBar = false,
}) => {
  
  const CustomNoRowsOverlay = () => {
    return (

      !loading &&
      <div className="noDataFound">
        <img src={NODATA} alt="no data" width="400px" />
        <h2>No Data Found!</h2>
      </div>

    );
  }

  function generateRandom() {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  return (
    <div className="listPage">
      <div className="listHeader">
        
      
      </div>

      <div className="listing" >

        <DataGrid
          getRowId={(row) => generateRandom()}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: currentRowsPerPage },
            },
          }}
          total={rows.length}
          pageSizeOptions={[5, 10, 15, 20,]}
          checkboxSelection={false}
          slots={{
            noRowsOverlay: CustomNoRowsOverlay,
            toolbar: showToolBar ? GridToolbar : ''
          }}
          experimentalFeatures={{
            lazyLoading: true,
          }}
        />
      </div>
    </div>
  )
}

export default ListPage

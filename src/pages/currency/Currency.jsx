import React, {useState, useEffect} from 'react'
import { showErrorToast } from './../../utils/commonFun';
import { get } from './../../utils/api';
import { ToastContainer } from 'react-toastify'
import { ACCESS_KEY } from '../data/config.js'
import ListPage from './../../components/common/ListPage';
const Currency = () => {
  const [currencies, setCurrencies] = useState([])
  const [currentRowsPerPage, setCurrentRowsPerPage] = useState(10)
  const [keyword, setKeyword] = useState("MMK")
  useEffect(()=>{
    getCurrencies()
  },[])
  const getCurrencies = async() =>{
    try {
      const { data } = await get(`https://api.fastforex.io/fetch-all?from=${keyword}&api_key=${ACCESS_KEY}`);
      let arr = [];
        Object.keys(data?.results).map((key,index) => {
          const result = {id:(index + 1), name:key, rate:data?.results[key]}
          arr.push(result)
        });
        setCurrencies(arr)
    } catch (error) {
        showErrorToast(error.message)
    }
  }
  
  const columns = [
    {
      field: 'id',
      headerName: 'No',
      width: 80,
      renderCell: (params) =>params.row.id
    },
    {
      field: 'name',
      headerName: 'Country',
      width: 130,
      sortable: true,
      valueGetter: (params) =>params.row.name
    },
    {
      field: 'rate',
      headerName: 'Rate',
      width: 200,
      sortable: true,
      valueGetter: (params) => params.row.rate.toLocaleString()
    },
  ];


  return (
    <div className="container">
    <ToastContainer theme="colored"/>
        <h2>Base On <span className="baseOn">{keyword}</span></h2>
        <ListPage
          rows={currencies?.length > 0 ? currencies : []}
          columns={columns}
          header={"Table List"}
          currentRowsPerPage={currentRowsPerPage}
          keyword={keyword}
        />
    </div>
  )
}

export default Currency

import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import SelectWithSearch from './../../components/common/SelectWithSearch';
import InputBox from '../../components/common/InputBox'
import Button from './../../components/common/Button';
import { showErrorToast } from './../../utils/commonFun';
import { get } from './../../utils/api';
import { ACCESS_KEY } from '../data/config.js'

let initialState = {
  from: '',
  to: '',
  amount: '',
  result: '',
}
const Home = () => {
  const [currency, setCurrency] = useState(initialState)
  const [show, setShow] = useState(false)
  const [rate, setRate] = useState('')
  const times = [1, 5, 10, 25, 50, 100,500];

  const handleReverse = async() =>{
    const { data } = await get(`https://api.fastforex.io/convert?api_key=${ACCESS_KEY}&from=${currency.to}&to=${currency.from}&amount=${currency.amount}`);
    let res = Object.values(data.result)[0];
    setRate(data.result.rate)
    setCurrency((prev) => ({ ...prev, result: res }))
    setCurrency((prev)=>({
      ...prev, 
      from :currency.to, 
      to:currency.from
    })
    )
  }
  const onSubmit = async () => {
    try {
      const { data } = await get(`https://api.fastforex.io/convert?api_key=${ACCESS_KEY}&from=${currency.from}&to=${currency.to}&amount=${currency.amount}`);
      let res = Object.values(data.result)[0];
      setRate(data.result.rate)
      setCurrency((prev) => ({ ...prev, result: res }))
      setShow(true)
    } catch (error) {
      showErrorToast(error.message)
    }
  }

  return (
    <div className="container">
      <Box className="converterCard">
        <Grid container className="converter">
          <Grid item xs={12} md={5} sx={{ my: 2 }}>
            <SelectWithSearch
              label="From"
              value={currency.from}
              onChange={(event, newValue) => setCurrency((prev) => ({ ...prev, from: newValue.code }))}
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ textAlign: 'center', my: 2, alignSelf: 'center', alignItems: 'center' }}>
            <FaArrowRightArrowLeft onClick={handleReverse} />
          </Grid>
          <Grid item xs={12} md={5} sx={{ my: 2 }}>
            <SelectWithSearch
              label="To"
              value={currency.from}
              onChange={(event, newValue) => {
                setCurrency((prev) => ({ ...prev, to: newValue.code }))
              }}
            />
          </Grid>

          <Grid item xs={12} md={5} sx={{ my: 2 }} display="flex" justifyContent="start" flexDirection="column">
            <InputBox
              label={"Amount"}
              value={currency.amount}
              onChange={(e) => {
                setCurrency((prev) => ({ ...prev, amount: e.target.value }))
              }
              }
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ my: 2 }} >
          </Grid>
          <Grid item xs={12} md={5} sx={{ my: 2 }}>
            {
              show &&
              <div>
                <p>
                    {Number(currency.amount).toLocaleString()} <b> {currency.from} </b> 
                    =
                    <span className="result">
                     &nbsp;{currency.result.toLocaleString()} <b>{currency.to}</b>
                    </span>
                </p>
                <p> 1 <b>{currency.from} </b> = {rate} <b>{currency.to}</b> </p>
              </div>
            }
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} alignSelf="end">
          <Button
            label="Convert"
            type='convert'
            onAction={onSubmit}
          />
        </Grid>
      </Box>

      {
        show && 
        <Box className="convertCard">
          <Grid container className="convert">
              <Grid item xs={12} md={6} >
                <h1>Convert {currency.from}  to {currency.to}</h1>
                <table>
                  <thead>
                  <tr>
                    <th>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${currency.from.substring(0, 2).toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${currency.from.substring(0, 2).toLowerCase()}.png`}
                        alt=""
                      />
                      &nbsp;{currency.from}
                    </th>
                    <th>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${currency.to.substring(0, 2).toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${currency.to.substring(0, 2).toLowerCase()}.png`}
                        alt=""
                      />
                      &nbsp;{currency.to}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      times.map((time, index) => {
                        let result = time * rate;
                        return (
                          <tr key={index}>
                            <td>{time} {currency.from}</td>
                            <td>{result.toLocaleString()} {currency.from}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>Convert {currency.to}  to {currency.from}</h1>
                <table>
                  <thead>
                  <tr>
                    <th>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${currency.to.substring(0, 2).toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${currency.to.substring(0, 2).toLowerCase()}.png`}
                        alt=""
                      />
                      &nbsp;{currency.to}
                    </th>
                    <th>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${currency.from.substring(0, 2).toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${currency.from.substring(0, 2).toLowerCase()}.png`}
                        alt=""
                      />
                      &nbsp;{currency.from}
                    </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      times.map((time, index) => {
                        let result = time * (1 / rate);
                        return (
                          <tr key={index}>
                            <td>{time} {currency.to}</td>
                            <td>{result.toLocaleString()} {currency.from}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </Grid>
          </Grid>
        </Box>
      }
    </div>
  )
}

export default Home

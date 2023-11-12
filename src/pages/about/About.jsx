import React from 'react'
import { Box, Grid } from '@mui/material'
import Img from '../../images/exchange2.jpeg'
import Button from './../../components/common/Button';
const About = () => {
  return (
    <div className="container">
      <Box className="aboutCard">
        <Grid container className="about">
          <Grid item xs={12} md={4}>
          <h1>Currency <span>Exchange</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus qui minima nam, quisquam similique vitae sapiente commodi pariatur ex veritatis ducimus voluptas nostrum quas. Culpa quidem architecto mollitia enim.</p>
          <Button type="signup" label="SIGNUP" />
          </Grid>
          <Grid item xs={12} md={8}>
          <img src={Img} alt="exchange" width="90%"/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default About

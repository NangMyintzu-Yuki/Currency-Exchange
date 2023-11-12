import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import {Grid} from '@mui/material'
import Textarea from '../../components/common/Textarea'
import InputWithIcon from '../../components/common/InputWithIcon'
import Button from './../../components/common/Button';
const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <h1>GET IN TOUCH</h1>
        <p>
          <BsFillTelephoneFill /> : 09259599508
        </p>
        <p>
          <AiTwotoneMail /> : nangmyintzu89@gmail.com
        </p>
        <p>
          <MdLocationPin /> : No(65), Kyaung Kone 2 Street, Hlaing Township
        </p>
        <Grid container className="form">
          <Grid item xs={12} md={6}>
          <Grid item xs={12} md={12} sx={{ my:2 }}>
              <InputWithIcon
                label="Username"
                icon={<FaUserCircle fill="var(--second-color)" size="20" />}
              />
          </Grid>
          <Grid item xs={12} md={12} sx={{ my:2 }}>
              <InputWithIcon
                label="Phone"
                icon={<BsFillTelephoneFill fill="var(--second-color)" size="20" />}
              />
          </Grid>
          <Grid item xs={12} md={12} sx={{ my:2 }}>
              <InputWithIcon
                label="Email"
                icon={<AiTwotoneMail fill="var(--second-color)" size="20" />}
              />
          </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: 2 }}>

            <Textarea
              row={5}
              maxRows={10}
              label={"Message"}
              
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button type="send" label="Send Message"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Contact

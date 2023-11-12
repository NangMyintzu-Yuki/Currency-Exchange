import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
const InputWithIcon = ({ icon, value, onChange, error, label, type = "text" }) => {
  let fillColor = 'var(--primary-color)'

  return (
    <TextField
      fullWidth
      type={type}
      size="small"
      value={value}
      onChange={onChange}
      sx={{
        "& .MuiOutlinedInput-root": {
          paddingLeft: 0
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            sx={{
              padding: "19px 12px 20px 12px",
              backgroundColor: fillColor,
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
            }}
            position="start"
          >
            {icon}
          </InputAdornment>
        ),
      }}
    />
  )
}

export default React.memo(InputWithIcon)

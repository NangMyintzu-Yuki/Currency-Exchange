import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './../../pages/data/data';
import { Box } from '@mui/material'
const SelectWithSearch = ({label,value,onChange}) => {
  return (
    <>
    <Autocomplete
      id="country-select-demo"
      fullWidth
      size="small"
      options={countries}
      onChange={onChange}
      autoHighlight
        getOptionLabel={(option) =>  option.code + '-' +option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.substring(0,2).toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.substring(0,2).toLowerCase()}.png`}
            alt=""
          />
          {option.code} - ({option.label})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
    </>
  )
}

export default SelectWithSearch

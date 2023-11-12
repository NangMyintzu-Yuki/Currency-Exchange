import React from 'react';
import { TextareaAutosize } from '@mui/base';

const Textarea = ({ size = 'small', color = "primary", label = 'Default Label', value, onChange, error, errorMsg = "", type = 'text', row = 3, maxRow = 5 }) => {
  return (
    <>
      <TextareaAutosize
        error={error}
        fullwidth="true"
        size={size}
        color={color}
        placeholder={label}
        value={value}
        onChange={onChange}
        style={{ width: "90%",height: '90%', padding: '7px 15px 7px 15px', borderRadius: 4, borderColor: error ? 'red' : 'rgba(0, 0, 0, 0.23)' }}
        aria-label="maximum height"
        type={type}
        multiline="true"
        rows={row}
        maxRows={maxRow}
      />
    </>
  )
}



export default React.memo(Textarea)


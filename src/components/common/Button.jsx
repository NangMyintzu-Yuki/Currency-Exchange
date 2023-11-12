import React, { useContext } from 'react'
import '../css/Button.css'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { ImDownload } from 'react-icons/im'
const Button = ({ label, type, onAction }) => {
  return (
    <button
      className={`actionButton ${type}`}
      onClick={onAction}
    >
      {label}
    </button>
  )
}

export default Button

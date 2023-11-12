import React from 'react'
import '../css/404.css'
import { FaGhost } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    console.log('go back')
    navigate(-1);
  }

  return (
      <div className="errorPageContainer">
        <h1>4<span><FaGhost /></span>4</h1>
        <h2>Page not found !</h2>
        <p>Sorry, the page you're looking for cannot be accessed.</p>
        <Button type="back" label="Back" onAction={goBack} />
      </div>
  )
}

export default ErrorPage

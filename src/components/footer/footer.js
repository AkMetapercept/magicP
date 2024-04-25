import { Link } from 'gatsby'
import React from 'react'

 const Footer = () => {
  return (
    <>

        <footer>
      <div className="social-icons d-flex gap-3 justify-content-center">
        <a href="https://twitter.com/1MagicPixel" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i> 
        </a>
       
        <a href="https://www.facebook.com/1magicpixel" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a href="https://www.linkedin.com/company/magicpixel/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="https://www.youtube.com/channel/UCA08lnOE0hrLgT8PP0zB0_w" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
        </a>

      </div>
      
      <hr></hr>
      <small>© 2024 <Link to='/'>Magic Pixel.</Link> All Rights Reserved</small>
    </footer>
    </>
  )
}

export default Footer
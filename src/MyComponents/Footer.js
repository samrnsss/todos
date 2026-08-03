import React from 'react'
import './footer.css'

export const Footer = () => {
  let footerstyle = {
    position: "absolute ",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light text-center py-3" style={footerstyle}>
      <p className="text-center">
        Copyright &copy; 2026. Samreen's TodosList.com
        All rights reserved.</p>
    </footer>
  )
}

export default Footer

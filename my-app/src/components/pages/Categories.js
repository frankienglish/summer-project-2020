import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <React.Fragment>
      <div style = {linksContainer}>
      <Link style={linkStyle} to="/categories/clothing">Clothing</Link> | 
      <Link style={linkStyle} to="/categories/electronics">Electronics</Link> |  
      <Link style={linkStyle} to="/categories/toys">Toys</Link> |  
      <Link style={linkStyle} to="/categories/outdoors">Outdoors</Link> |  
      <Link style={linkStyle} to="/categories/fitness">Fitness</Link>  |
      <Link style={linkStyle} to="/categories/entertainment">Entertainment</Link> 
      </div>
    </React.Fragment>
  )
}

const linksContainer = {display: "flex", direction: "row", justifyContent: "space-evenly"}
const linkStyle = {
  color: '#000',
  textDecoration: 'none',
}



export default Categories;
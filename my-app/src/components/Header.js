import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Aurelio Sell Yo</h1>
      <div style = {linksContainer}>
      <Link style={linkStyle} to="/">Home</Link> | 
      <Link style={linkStyle} to="/categories">Categories</Link> |  
      <Link style={linkStyle} to="/sell">Sell</Link> |  
      <Link style={linkStyle} to="/account">Account</Link> |  
      <Link style={linkStyle} to="/cart">Cart</Link>  
      </div>
    </header>
  )
}

const headerStyle = {
  background: '#ff69b4',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linksContainer = {display: "flex", direction: "row", justifyContent: "space-evenly"}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}

export default Header;
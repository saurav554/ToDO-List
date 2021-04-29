import React from 'react';
import FormatListNumberedTwoToneIcon from '@material-ui/icons/FormatListNumberedTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header style={headerStyle}>
      <h1>TodoList</h1>
      
      <Link style={linkStyle} to='/'>
        <FormatListNumberedTwoToneIcon/>
      </Link>{' '}
      {' '}
      <Link style={ linkStyle} to='/Users'>
        <AccountCircleIcon/>
      </Link> {' '}
      {' '}
    </header>
     
      );
      
}


const headerStyle = {
  background: '#333',
  color: 'orange',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  color: 'orange',
  textDecoration: 'none'
};

export default Header;

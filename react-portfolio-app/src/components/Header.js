import React from 'react';

export default function Header() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#31343d',
    color: 'white',
  };

  const subHeaderStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    width: '15%',
    height: '50px',
    backgroundColor: 'teal',
  };

  const navStyle = {
    marginRight: '20px',
    /* makes this flex item align with the right of its container */
    marginReft: 'auto',
    fontFamily: 'Gill Sans',
    fontSize: '20px',
  };
  const liStyle = {
    display: 'inlineBlock',
    marginLeft: '25px',
  };
  const aStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <header style={headerStyle}>
      <div style={subHeaderStyle}>'Huiran Lin'</div>
      <nav style={navStyle}>
        <ul style={{ listStyleType: 'none' }}>
          <li style={liStyle}>
            <a style={aStyle} href='#about-me-section'>
              About Me
            </a>
          </li>
          <li style={liStyle}>
            <a href='#work-section'>Work</a>
          </li>
          <li style={liStyle}>
            <a href='#contact-me-section'>Contact Me</a>
          </li>
          <li style={liStyle}>
            <a href='https://drive.google.com/file/d/1yoT7pGKqE1TCA6V_a1D1ZuYYzg0DJ7Zn/view?usp=sharing'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react'

const Link = ({ to, children }) => (
  <a href={to} 
      style={{ color: `white`, 
               textDecoration: `underline`, 
               textDecorationColor: `#73737D`,
               marginLeft: `1em`, marginRight: `1em`
      }}
  >
    {children}
  </a>
);

export default Link

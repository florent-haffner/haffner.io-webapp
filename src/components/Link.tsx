import React from 'react'

const WhiteLink = ({ to, children }) => (
  <a 
    href={to}
    style={{
      color: `white`,
      textDecoration: `underline`,
    }}
  >
    {children}
  </a>
);


const Link = ({ to, children }) => (
  <a 
    href={to}
    style={{
      textDecoration: `underline`,
      color: `#343a40`,
      textDecorationColor: `#343a40`,
    }}
  >
    {children}
  </a>
)

export { WhiteLink, Link }

import React from 'react';

const Footer = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.year}</p>
        </div>
);

Footer.defaultProps = {
    title: "A Nico Magaña Production ©",
    year: "Established 2018"
};

export default Footer;
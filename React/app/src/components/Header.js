import React from 'react';

const Header = (props) => (
    <div>
        <p>{props.title}</p>
        {props.subtitle && <p>{props.subtitle}</p>}
    </div>
);

Header.defaultProps = {
    title: 'dysFUNctional'
};

export default Header;
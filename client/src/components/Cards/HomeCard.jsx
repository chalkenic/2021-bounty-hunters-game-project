import React from 'react';

import classes from './Card.module.css'

const HomeCard = (props) => {
return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
)
}
export default HomeCard;
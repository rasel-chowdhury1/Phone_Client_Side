import React from 'react';
import './Phone.css';
import { Link } from 'react-router-dom';


const Phone = ({phone}) => {
    const {id,image,name,price} = phone
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>Price: {price}</p>
            <Link to={`/phone/${id}`}><button>View Detail</button></Link>
        </div>
    );
};

export default Phone;
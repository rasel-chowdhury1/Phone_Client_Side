import React from 'react';
import './PhoneDetail.css';
import { useLoaderData } from 'react-router-dom';

const PhoneDetail = () => {
    const phone = useLoaderData()
    // console.log(phone)
    return (
        <div className='phone-detail'>
            <img src={phone.image} alt="" />
            <h5>{phone.name}</h5>
            <p>{phone.description}</p>
        </div>
    );
};

export default PhoneDetail;
import React from 'react';
import './Phones.css';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Phones = () => {
    const phones = useLoaderData();
    // console.log(phones)
    return (
        <div>
            <h3>Total Phones</h3>
            <div className="phone-list">
                {
                    phones.map(phone => <Phone
                     key={phone.id}
                     phone={phone}
                    ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;
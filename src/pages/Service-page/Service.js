import React from 'react'
import { Link } from 'react-router-dom';
import './service.css';

const service = () => {
    return (
        <div className="service-container">
              <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
              </p>
        </div>
    )
}

export default service

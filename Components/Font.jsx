import React from 'react';
import { NavLink } from 'react-router-dom';
import './Font.css';

const Font = () => {
    return (
        <div className="outer" style={{color:'white'}}>  <h1>Welcome</h1>
            <div className="inner1">
              
                <ul>

                    <li><NavLink to="/admin">Admin</NavLink></li>
                    <li><NavLink to="/login">User</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Font;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => 
    (<div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
        </div>
    </div>
    )
export default Nav;

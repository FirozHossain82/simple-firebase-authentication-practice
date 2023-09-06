import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center py-12 bg-sky-50' >
          <div>
          <Link className='mr-8 px-4 py-2 border-purple-400 rounded text-base font-medium border'  to='/'>Home</Link>
            <Link className='py-2 px-4 border-purple-400 rounded text-base font-medium border' to='/login'>Login</Link>
          </div>
        </div>
    );
};

export default Header;<h1>This is header</h1>
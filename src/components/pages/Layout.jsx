import React from 'react';
import Sidebar from '../display/Sidebar';
import '../../assets/css/Layout.css';

const Layout = ({ children }) => {

    return (
        <div className='main__container'>
            <Sidebar />
            <section className='router__area' style={{ overflowY: 'auto' }}>
                {children}
            </section>
        </div>
    )
}

export default Layout;
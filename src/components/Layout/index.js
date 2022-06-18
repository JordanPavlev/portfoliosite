import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './style.scss';

const Layout = () => {
    return (
        <div className='app-div'>
        <Sidebar/>
            <div className='page-one'>
                <span className='tag top-tag'>&lt;body&gt;</span>
                    <Outlet/>
                <span className='tag bot-tag'>
                &lt;/body&gt; <br/>
                <span className='bot-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;
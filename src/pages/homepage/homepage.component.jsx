import React from 'react';
import './homepage.styles.scss';
import Directory from '../../component/directory/directory.component';

const HomePage = ()=> (
    <div className='homepage'>
        <h1>Welcome to shopaholic!</h1>
        <Directory />
    </div>
);

export default HomePage;
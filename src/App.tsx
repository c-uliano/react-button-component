import { useState } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons'

// This exports the whole icon packs for Brand and Solid.
library.add(fab, fas);

import Button from './components/Button/Button';

function App() {

    return (
        <>
            <h1>Homepage</h1>
            <h2>Button component testing</h2>
            <div  style={{display: 'flex'}}>
                <div style={{margin: '0 5px'}}><Button text="First Button" /></div>
                <div style={{margin: '0 5px'}}><Button text="Second Button" icon={'user'} /></div>
                <div style={{margin: '0 5px'}}><Button text="Link Button" href={'#'} /></div>
            </div>
        </>
    )
}

export default App

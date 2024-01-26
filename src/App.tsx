import './App.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'

// This exports the whole icon packs for Brand and Solid.
library.add(fas, fab, far);

import Button from './components/Button/Button';

function App() {

    return (
        <div className='container'>
            {/* <div className='row'>
                <div className='col'>
                    <p>testing</p>
                </div>
                <div className='col'>
                    <p>testing</p>
                </div>
            </div> */}
            <h1>React Button Component</h1>
            <h2>Button Variants</h2>
            <h2>Border Radius</h2>
            <h2>Icon Usage & Placement</h2>
            <h2>Additional Style Utilities</h2>
            <h3>Uppercase Text</h3>
            <h3>Disabled</h3>
            <div  style={{display: 'flex'}}>
                <div style={{margin: '0 5px'}}><Button variant='text' color='success' text="First Button" icon={['fas', 'camera-retro']} /></div>
                <div style={{margin: '0 5px'}}><Button text="Second Button" variant='contained' icon={['far', 'envelope']} /></div>
                <div style={{margin: '0 5px'}}><Button text="Link Button" href={'#'} /></div>
            </div>
        </div>
    )
}

export default App

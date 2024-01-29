import './App.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

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
            <div className='row'>
                <div className='col-6'>
                    <h2>Button Variants</h2>
                </div>
                <div className='col-6'>
                    <h2>Border Radius</h2>
                </div>
                <div className='col-6'>
                    <h2>Icon Usage & Placement</h2>
                </div>
                <div className='col-12'>
                    <h2>Additional Style Utilities</h2>
                    <div className='row'>
                        <div className='col-6'>
                            <h3>Uppercase Text</h3>
                        </div>
                        <div className='col-6'>
                            <h3>Disabled</h3>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div  style={{display: 'flex'}}>
                <div style={{margin: '0 5px'}}><Button variant='text' color='success' text="First Button" icon={['fas', 'camera-retro']} /></div>
                <div style={{margin: '0 5px'}}><Button text="Second Button" variant='contained' icon={['far', 'envelope']} /></div>
                <div style={{margin: '0 5px'}}><Button text="Link Button" href={'#'} /></div>
            </div>
        </div>
    )
}

export default App

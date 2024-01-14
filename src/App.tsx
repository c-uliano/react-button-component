import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Homepage</h1>
            <h2>Button component testing</h2>
            <div  style={{display: 'flex'}}>
                <div style={{margin: '0 5px'}}><Button text="First Button" /></div>
                <div style={{margin: '0 5px'}}><Button text="Second Button" /></div>
                <div style={{margin: '0 5px'}}><Button text="Link Button" href={'#'} /></div>
            </div>
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div> */}
        </>
    )
}

export default App

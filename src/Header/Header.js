import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div id='header' style={{ width: '100vw' }}>
            <div className='container'>
                <div className='nav-bar-wrapper' >
                    <h1>
                        julie trinh
                    </h1>
                    <div className='link-wrapper' style={{  }}>
                        <button>projects</button>
                        <button>about me</button>
                        <button>contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
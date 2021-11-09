import React from 'react'
import data from '../data'
import './about.scss'

const AboutMe = () => {
    return (
        <div id='about'>
            <div className='container'>
                <div>
                    <h1 style={{ textAlign: 'right' }} className='section-header'>About Me</h1>
                    <div className='about-wrapper'>
                        <div style={{ width: '50%' }}>
                            <p>{data.paragraph1}</p>
                            <p>{data.paragraph2}</p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
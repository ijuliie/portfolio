import React from 'react'
import data from '../data'
import { Image } from 'semantic-ui-react'
import './about.scss'

const AboutMe = () => {
    return (
        <div id='about'>
            <div className='container'>
                <div>
                    <h1 style={{ textAlign: 'center' }} className='section-header'>About Me</h1>
                    <div className='about-wrapper'>
                        <div style={{ marginBottom: '50px' }}>
                            <Image src={data.image} size='medium' circular />
                        </div>
                        <div>
                            <p>{data.paragraph1}</p>
                            <p>{data.paragraph2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
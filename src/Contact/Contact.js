import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import data from '../data'
import './contact.scss'

const Contact = () => {
    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div id='contact'>
            <div className='container'>
                <h1 className='section-header'>Contact</h1>
                <div className='contact-wrapper'>
                    <Header as='h1'>
                        {data.contactHeading}
                    </Header>
                    <Header as='h1'>
                        <a href='mailto:ijuliie06@gmail.com'>{data.contactEmail}</a>
                    </Header>
                    <div className='buttons'>
                        {
                            data.social.map((info) => {
                                return (
                                    <Button
                                        circular
                                        size='big'
                                        onClick={() => handleClick(info.url)}
                                        key={info.social}
                                        icon={info.social}
                                        color={info.social}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
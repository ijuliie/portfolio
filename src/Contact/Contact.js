import React from 'react'
import { Header, Button, Icon } from 'semantic-ui-react'
import data from '../data'
import './contact.scss'

const Contact = () => {
    return (
        <div id='contact'>
            <div className='container'>
                <h1 className='section-header'>Contact</h1>
                <div className='Contact-wrapper'>
                    <Header as='h1'>
                        <a href='mailto:ijuliie06@gmail.com'>{data.contactEmail}</a>
                    </Header>
                    <div>
                        {
                            data.social.map((info) => {
                                return (
                                    <Button color={info.social}>
                                        <a href={info.url}><Icon name={info.social} />{info.label}</a>
                                    </Button>
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
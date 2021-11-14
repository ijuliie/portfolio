import React from 'react'
import Card from '../Cards/Cards'
import data from '../data'
import './projects.scss'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='container'>
                <div>
                    <h1 style={{ textAlign: 'left' }} className='section-header'>Projects</h1>
                    <div className='project-wrapper'>
                        <div className='grid'>
                            {
                                data.projects.map((info, i) => {
                                    return (
                                        <Card
                                            key={info.title}
                                            heading={info.title}
                                            image={info.image}
                                            description={info.description}
                                            url={info.url}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
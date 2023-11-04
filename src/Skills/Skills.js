import React from 'react'
import data from '../data'
import { Image } from 'semantic-ui-react'
import './skills.scss'

const Skills = () => {
    return (
        <div id='skills'>
            <div className='container'>
                    <h1 className='section-header'>Skills</h1>
                    <div className='skills-wrapper'>
                        {data.skills.map((skill) => {
                            return (
                                <div className='skill' key={skill.language}>
                                    <Image alt={skill.language} src={skill.img} />
                                    <p className='description'>{skill.language}</p>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}

export default Skills
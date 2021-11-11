import React from "react"
import { Button } from "semantic-ui-react"
import './cards.scss'

const Card = (props) => {
    const { heading, description, image, url } = props
    return (
        <div
            className="card"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                    image +
                    ")",
            }}
        >
            <div className="content">
                <Button basic color='grey' size='large'>
                    <a
                        className='link'
                        href={url ? url : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {heading}
                    </a>
                </Button>
                <p className="text">{description}</p>
            </div>
        </div>
    )
}

export default Card

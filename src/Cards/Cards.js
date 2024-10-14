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
            onClick={(e) => {
                window.open(url, "_target")
            }}
        >
            <div className="content">
                <Button 
                    basic 
                    color='black' 
                    size='large' 
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(url, "_target")
                    }}
                >
                        {heading}
                </Button>
                <p className="text">{description}</p>
            </div>
        </div>
    )
}

export default Card

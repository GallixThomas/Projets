import React, { Component } from "react"
import "./../css/slide.css"

class Slide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={this.props.style} className={(this.props.index == this.props.indexActivation) ? 'slide-active slide text-center' : 'slide-noactive slide'}>
                <img src={this.props.image}></img>
            </div>
        )
    }
}

export default Slide
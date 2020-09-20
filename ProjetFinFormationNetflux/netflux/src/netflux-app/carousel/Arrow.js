import React, { Component } from "react"

class Arrow extends Component {
    constructor(props) {
        super(props)
    }

    arrowClick = () => {
        this.props.click()
    }
    render() {
        return(
            <div onClick={this.arrowClick} className="col-1 d-flex align-items-center btn">
                <i className={this.props.type == 'left' ? 'fa fa-chevron-left' : 'fa fa-chevron-right'} aria-hidden="true"></i>
            </div>
        )
    }
}

export default Arrow
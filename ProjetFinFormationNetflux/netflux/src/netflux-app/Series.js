import React, { Component } from "react"
import Programme from './Programme'

import { ApiService } from './ApiService';


class Series extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                {this.props.programmes.filter(a=> (a.category=="serie")).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
        )
    }
}

export default Series
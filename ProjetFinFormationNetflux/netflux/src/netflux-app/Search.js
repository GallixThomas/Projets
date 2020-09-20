import React, { Component } from "react"

class Search extends Component {

    constructor(props) {
        super(props)
    }

    searchFieldChange =(e) => {
        this.props.search(e.target.value)
    }

    render() {
        return(
            <div className="container">
                <div className="row m-1">
                    <input type="search" placeholder={this.props.textSearch} className='form-control col' onChange={this.searchFieldChange} />
                </div>
            </div>
        )
    }
}

export default Search
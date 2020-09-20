import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import { ApiService } from './ApiService';

class Nouveaute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }

    componentDidMount() {
        ApiService.get('programmes').then(response => {
            this.setState({
                programmes : response.data
            })
        })
    }

    render() {
        let current_date = new Date()
        let year = current_date.getFullYear()

        return (
            <section className="container">
                {this.state.programmes.filter(a => (a.release.includes(year)) || (a.release.includes(year-1))).map((element) => {
                    return (
                        <div>
                        <Programme programme={element}></Programme>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default Nouveaute
import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import { ApiService } from './ApiService';

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmsRandom: [],
        }
    }

    // selectFilms = () => {
    //     console.log(this.props.programmes)
    //     let tmpFilmsRandomAll = this.props.programmes.filter(a => (a.category == "film"))
    //     console.log(tmpFilmsRandomAll)

    //     for (let i = 0; i < tmpFilmsRandomAll.length; i++) {
    //         let x = Math.floor(Math.random() * (tmpFilmsRandomAll.length - 1))
    //         let tmp = tmpFilmsRandomAll[x]
    //         tmpFilmsRandomAll[x] = tmpFilmsRandomAll[i]
    //         tmpFilmsRandomAll[i] = tmp
    //     }

    //     let tmpFilmsRandom7 = []
    //     for (let k = 0; k < 7; k++) {
    //         tmpFilmsRandom7.push(tmpFilmsRandomAll[k])
    //     }
    //     console.log(tmpFilmsRandom7)

    //     this.setState({
    //         filmsRandom: tmpFilmsRandom7
    //     })
    //     console.log(this.state.filmsRandom)
    // }

    render() {
        return (
            <div className="row">
                {this.props.programmes.filter(a => (a.category == "film")).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
        )
    }
}

export default Films
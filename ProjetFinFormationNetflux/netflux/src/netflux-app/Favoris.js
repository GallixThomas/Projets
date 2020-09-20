import React, { Component } from "react"
import { DataService } from "./DataService"
// import Programmes from "./Programmes"
import Search from "./Search"

class Favoris extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: []
        }
    }

    search = (text) => {
        let tmpProgrammes
        if(text == '' || text == undefined ) {
            tmpProgrammes = DataService.programmes
        }
        else {
            tmpProgrammes = DataService.programmes.filter(a => (a.title.includes(text) || a.description.includes(text) || a.typeFilm.includes(text) || a.casting.includes(text) || a.category.includes(text)))
        }
        this.setState({
            programmes : tmpProgrammes
        })
    }

    render() {
        return(
            <main>
                <Search textSearch="Tapez votre recherche dans vos favoris..." search={this.search}/>
                {/* <Programmes programmes={this.state.programmes}></Programmes> */}
            </main>
        )
    }
}

export default Favoris
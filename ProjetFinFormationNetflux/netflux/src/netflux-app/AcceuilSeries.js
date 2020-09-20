import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import './css/acceuilFilmsSeries.css'
import { ApiService } from './ApiService';

class AcceuilSeries extends Component {
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
        let ligne = []
        for (let i = 0; i < DataService.categories.length; i++) {
            this.state.programmes.filter(a => (a.category == "serie") && (a.typeFilm.includes(DataService.categories[i]))).map((element) => {
                ligne.push(<div className="titreCategory">
                    {DataService.categories[i]}
                    <Programme programme={element}></Programme>
                </div>)
            })
        }
        return (
            <section className="container">
                <h2 className="text-center">Séries</h2>
                {ligne}
            </section>
        )
    }
}

export default AcceuilSeries
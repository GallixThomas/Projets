import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import './css/formAjout.css'
import { ApiService } from './ApiService';

class FormAjout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programme: [],
            ligneSeries: [],
            castingImage: [],
            castingName: [],
            placeholderTitre: "Titre",
            programmes: [],
        }
    }

    componentDidMount() {
        ApiService.get('programmes').then(response => {
            this.setState({
                programmes: response.data
            })
        })
    }

    setData = (e) => {
        DataService.programme[e.target.name] = e.target.value
    }

    confirm = () => {
        DataService.programme.id = this.state.programmes.length + 1

        ApiService.post('Form', DataService.programme).then(res => {
            this.props.history.push('/')
        })

        DataService.programme = {
            category: "",
            id: 0,
            imageBig: "",
            imageSmall: "",
            title: "",
            rating: 0,
            duration: 0,
            release: "",
            description: "",
            typeFilm: [],
            castingImage: [],
            castingNom: [],
            nbrSaisons: 0,
            nbrEpisodes: 0
        }
    }

    switchFilmSerie = (e) => {
        let ligneSerie = []
        if (e.target.value == "serie") {
            ligneSerie.push(<div className="row m-2 justify-content-around">
                <div className="col-6">
                    <div>Nombre d'épisodes</div>
                    <input type="number" onChange={this.setData} name="nbrEpisodes" className="col-10 form-control form" />
                </div>
                <div className="col-6">
                    <div>Nombre de saisons</div>
                    <input type="number" onChange={this.setData} name="nbrSaisons" className="col-10 form-control form" />
                </div>
            </div>)
            DataService.programme.category = "serie"
            this.setState({
                ligneSeries: ligneSerie,
                placeholderTitre: "Titre de la série"
            })
        }
        else if (e.target.value == "film") {
            ligneSerie.push(<div className="row m-2 justify-content-around"><div className="col-10"><br /><div>Durée</div>
                <input type="number" onChange={this.setData} name="duration" className="col-10 form-control form" /></div></div>)
            DataService.programme.category = "film"
            this.setState({
                ligneSeries: ligneSerie,
                placeholderTitre: "Titre du film"
            })
        }
        else {
            DataService.programme.category = ""
            this.setState({
                ligneSeries: [],
                placeholderTitre: "Titre"
            })
        }
    }

    setCastingImage = (e) => {
        DataService.programme.castingImage[e.target.name] = e.target.value
    }

    setCastingNom = (e) => {
        DataService.programme.castingNom[e.target.name] = e.target.value
    }

    setTypeFilm = (e) => {
        if (e.target.checked == true) {
            DataService.programme.typeFilm.push(e.target.value)
        }
        else {
            let tmpListTypeFilm = []
            for (let type of DataService.programme.typeFilm) {
                if (type != e.target.value) {
                    tmpListTypeFilm.push(type)
                }
            }
            DataService.programme.typeFilm = tmpListTypeFilm
        }
    }

    render() {
        let ligne = []
        for (let i = 0; i < DataService.categories.length; i++) {
            ligne.push(<div>
                <label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value={DataService.categories[i]} />{DataService.categories[i]}</label>
            </div>)
        }
        return (
            <section className="container form">
                <nav className="row">
                    <article className="col-10">
                        <div className="row m-2 justify-content-center">
                            <div className="col-8">
                                <div className="titleBold">Titre</div>
                                <input type="text" onChange={this.setData} name="title" className="col-10 form-control form" placeholder={this.state.placeholderTitre} />
                            </div>
                            <div className="col-3"><br />
                                <select class="form-control" name="category" onChange={this.switchFilmSerie}>
                                    <option>--Categorie--</option>
                                    <option value="film">Film</option>
                                    <option value="serie">Série</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-5">
                                <div>Date de sortie</div>
                                <input type="date" onChange={this.setData} name="release" className="col-10 form-control form" /><br />
                                <div>Note</div>
                                <input type="number" onChange={this.setData} name="rating" className="col-10 form-control form" />
                            </div>
                            <div className="col-5">
                                {this.state.ligneSeries}
                            </div>
                        </div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-10 titleBold">Descrption</div>
                            <textarea onChange={this.setData} name="description" rows="15" className="col-10 form-control form" placeholder="Description"></textarea>
                        </div><br />
                        <div className="text-center titleBold">Casting</div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="0" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="0" placeholder="URL de l'image" />
                            </div>
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="1" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="1" placeholder="URL de l'image" />
                            </div>

                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="2" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="2" placeholder="URL de l'image" />
                            </div>
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="3" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="3" placeholder="URL de l'image" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button onClick={this.confirm} className="btn col-8 btn-success form-control m-2 confirm">Enregistrer</button>
                        </div>
                    </article>
                    <aside className="col-2">
                        <div className="titleBold">Genre</div>
                        {ligne}
                        <br />
                        <div>Grande image
                        <input type='text' onChange={this.setData} className="form-control form" name="imageBig" placeholder="URL de l'image" /></div><br />
                        <div>Image du caroussel
                        <input type='text' onChange={this.setData} className="form-control form" name="imageSmall" placeholder="URL de l'image" /></div>
                    </aside>
                </nav>
            </section>
        )
    }
}

export default withRouter(FormAjout)
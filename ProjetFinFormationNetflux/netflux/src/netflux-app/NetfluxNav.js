import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./Header.js"
import Footer from "./Footer"
import FormAjout from "./FormAjout"
import Acceuil from "./Acceuil.js"
import DetailProgramme from './DetailProgramme';
import Series from "./Series.js"
import AcceuilSeries from "./AcceuilSeries.js"
import AcceuilFilms from "./AcceuilFilms.js"
import Nouveaute from './Nouveaute'
import Compte from './Compte'
import CreationCompte from "./CreationCompte.js"
import ConfirmationCreation from "./ConfirmationCreation.js"
import Perdu from "./Perdu.js"
import RenvoiMail from "./RenvoiMail.js"

export class NetfluxNav extends Component {

    render() {
        return(
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/' exact>
                        <Acceuil></Acceuil>
                    </Route>
                    <Route path='/Form' exact>
                        <FormAjout></FormAjout>
                    </Route>
                    <Route path='/DetailProgramme' exact>
                        <DetailProgramme></DetailProgramme>
                    </Route>   
                    <Route path='/Series' exact>
                        <AcceuilSeries></AcceuilSeries>
                    </Route>   
                    <Route path='/Films' exact>
                        <AcceuilFilms></AcceuilFilms>
                    </Route>  
                    <Route path='/Nouveaute' exact>
                        <Nouveaute></Nouveaute>
                    </Route>
                    <Route path='/Compte' exact>
                        <Compte></Compte>
                    </Route>
                    <Route path='/CreationCompte' exact>
                        <CreationCompte></CreationCompte>
                    </Route>
                    <Route path='/ConfirmationCreation' exact>
                        <ConfirmationCreation></ConfirmationCreation>
                    </Route>
                    <Route path='/Perdu' exact>
                        <Perdu></Perdu>
                    </Route>
                    <Route path='/RenvoiMail' exact>
                        <RenvoiMail></RenvoiMail>
                    </Route>    
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}
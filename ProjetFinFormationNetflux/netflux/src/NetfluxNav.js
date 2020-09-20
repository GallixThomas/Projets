import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from ""

export class Navigation extends Component {

    render() {
        return(
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/' exact>
                        <Acceuil></Acceuil>
                    </Route>
                    <Route  >
                        <DetailProgramme></DetailProgramme>
                    </Route>
                    <Route >
                        <FormAjout ></FormAjout>
                    </Route>
                    <Route >
                        <Search></Search>
                    </Route><Route >
                        <Favoris></Favoris>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}
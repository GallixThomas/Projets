import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class ConfirmationCreation extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row card' id='confirm'>
                    <div className='text-secondary text-center'>Félicitations votre inscription a bien été prise en compte!</div>
                    <a href='/' className='text-danger text-center'>Retour à l'acceuil.</a>
                </div>
            </div>
        )
    }
}

export default ConfirmationCreation
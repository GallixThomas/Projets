import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";


class CreationCompte extends Component{
    render(){

        


        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='card col-6 bg-secondary' id='creation'>
                        <h2 className='card-header row'>Création de Compte</h2>
                        <form className='card-body'>
                            <div className='row'>
                                <input type='text' className='col' placeholder='Nom' required></input>
                                <input type='text' className='col' placeholder='Prénom' required></input>
                                
                            </div>
                            <div className='row'>
                                <input type='email' className='col' placeholder='email' required></input>
                                <input type='password' className='col-4' placeholder='Mot de passe' required></input>
                                <input type='password' className='col-4' placeholder='Validation du mot de passe' required></input>
                            </div>
                            <div className='row'>
                                <input type='tel' classname='col-5' placeholder='Téléphone' required></input>
                                <div className='col text-right' required>Date de naissance :</div>
                                <input type='date' className='col' required></input>
                            </div>
                            <div className='row'>
                                <input type='text' placeholder='Adresse' className='col' required></input>
                                <input type='text' placeholder='Ville' className='col' required></input>
                                <input type='number' min='1000' max='99999' placeholder='Code postal' className='col-2' required></input>
                            </div>
                            <div classname='row'>
                                <button type='submit' formaction='/ConfirmationCreation'>Valider</button>
                            </div>
                        </form>
                    </div>
                </div>







            </div>
            
        )
    }
}

export default CreationCompte
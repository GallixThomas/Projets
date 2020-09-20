import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";


class Perdu extends Component{
    render(){
        return(

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='card col-6' id='perdu'>
                        <div className='col text-light'>Entrez votre mail de récupération.</div>
                        <input type="email" className='col'></input>
                        <a href='/RenvoiMail'><button className='col'>Valider</button></a>
                    </div>
                    
                </div>
                <div className='row text-light text-center' >BAH BRAVO CHAMPION!</div> 
            </div>


        )
    }
}

export default Perdu
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import './css/footer.css'


class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <hr/>

                <div className="row">
                <div className="col-2">
                    <a href="http://www.facebook.com"><i className="fa fa-facebook-square btnSocial"></i></a>
                    <a href="http://www.twitter.com"><i className="fa fa-twitter-square btnSocial"></i></a>
                    <a href="http://www.instagram.com"><i className="fa fa-instagram btnSocial"></i></a>
                    <a href="http://www.youtube.com"><i className="fa fa-youtube-square btnSocial"></i></a>
                </div>
                <div className="col-3">
                    &copy; Tomu, Elena, Thomas
                </div>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)
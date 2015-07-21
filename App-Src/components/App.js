import React from 'react';
import {Router, RouteHandler} from 'react-router';
import NavBar from './common/NavBar';
import Footer from './common/Footer';

const   App = React.createClass({
            displayName: 'App',
            render: function() {
                return (
                    <div>
                        <NavBar />
                        <RouteHandler />
                        <Footer/>
                    </div>
                );
            }
        });

module.exports = App;

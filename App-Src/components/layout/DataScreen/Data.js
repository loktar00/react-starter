import React from 'react';
import {Grid} from 'react-bootstrap';

// components
import Filler from '../../common/Filler';

const   viewModel = window.viewModel || {},
        Home = React.createClass({
            displayName: 'Data',
            render: function() {
                return (
                    <Grid>
                        <h2>Data Page</h2>
                    </Grid>
                );
            }
        });

module.exports = Home;

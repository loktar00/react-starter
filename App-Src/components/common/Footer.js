import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Footer = React.createClass({
    displayName: 'Footer',
    render: function() {
        return (
            <footer className='somesite-footer'>
                <Grid>
                    <col xs={12}>
                        &copy; 2015 SomeSite.com, All rights reserved.
                    </col>
                </Grid>
            </footer>
        );
    }
});

module.exports = Footer;

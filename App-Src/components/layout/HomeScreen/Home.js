import React from 'react';

// components
import Filler from '../../common/Filler';

const   viewModel = window.viewModel || {},
        Home = React.createClass({
            displayName: 'Home',
            render: function() {
                return (
                    <div>
                        <Filler/>
                    </div>
                );
            }
        });

module.exports = Home;

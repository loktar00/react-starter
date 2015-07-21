import React from 'react';
import Router from 'react-router';
import routes from './routes';

const styles = require('./less/styles.less');

Router.run(routes, (Root) => {
    React.render(<Root/>, document.getElementById('app-container'));
});

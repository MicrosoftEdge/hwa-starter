// Require static content
require.context('./', true, /\.(html|webmanifest|te?xt)$/);
require.context('./', true, /\.(png|jpe?g|gif|svg|ico)$/);

// Require styles
require('normalize.css');
require('./css/styles.scss');

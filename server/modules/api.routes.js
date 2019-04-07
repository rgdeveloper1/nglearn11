var apiRoute = require('express').Router();
var admin = require('./admin/admin.routes');
var core = require('./core/core.routes');

module.exports = function bindApiRoutes(app) {
    apiRoute.use('/admin', admin);
    apiRoute.use("/core", core);
    app.use("/api", apiRoute);
}
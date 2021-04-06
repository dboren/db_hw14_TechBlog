const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const sequelize = require('./config/connection');
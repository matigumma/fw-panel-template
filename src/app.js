import './styles/styles.scss';
import './static/img/banana.jpg';

const $ = require('jquery');
import 'bootstrap';

$(document).ready(()=>console.log('$ ready from app.js'));
$('form').submit((e)=>e.preventDefault());

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SampleClass from './sample-service.js'

$(document).ready(function() {
SampleClass.getSampleApiCall();
});
// CSS Imports
// –– Root Styles
import './main.css!'

// JS Imports
// –– Vue
import Vue from 'vue'

// –– Filters
import 'app/filters/currency'

// –– Panels
import ContactPanel from 'app/panels/contact_panel/contact'
import InvoicePanel from 'app/panels/invoice_panel/invoice'

// Configs
// –– Vue
Vue.config.debug = true


// Begin
var app = new Vue({
    el: '#Main',
    components: {
        'contact-panel': ContactPanel,
        'invoice-panel': InvoicePanel,
    },
    data: {},
})

// DEBUG
window.app = app;

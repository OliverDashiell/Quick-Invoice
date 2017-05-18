// Panel Imports
import './invoice.css!'
import template from './invoice.html!text'

// JS Imports
// –– Vue
import Vue from 'vue'

// –– Dependecies
import autosize from 'autosize'
import _ from 'lodash'
import dateFns from 'date-fns'

// –– Components
import CurrencyInput from 'app/components/currency_input/currency'
import NumberInput from 'app/components/number_input/number'
import TextInput from 'app/components/text_input/text'

// TEMPORARY DATA
// import invoice_json from './invoice.json!text'


export default Vue.extend({
    template,
    components: {
        'currency': CurrencyInput,
        'number': NumberInput,
        'textline': TextInput,
    },
    data() {
        return {
            recipient: null,
            sender: null,
            date: dateFns.format(new Date(), 'DD/MM/YYYY'),
            ref: "001-001",
            items: [],
            payment_details: "",
            paid: 0
        }
    },
    computed: {
        subtotal() {
            var subtotal = 0
            var i, item, items = this.items

            for (i = 0; i < items.length; i++) {
                item = items[i]
                subtotal += item.unit_cost * item.quantity
            }

            return subtotal
        },
        total() {
            return this.subtotal - this.paid
        },
    },
    methods: {
        add_recipient(event) {
            this.recipient = JSON.parse(event.dataTransfer.getData("contact"))
        },
        add_sender(event) {
            this.sender = JSON.parse(event.dataTransfer.getData("contact"))
        },
        add_line(line_index) {
            line_index = (typeof line_index !== 'undefined') ? line_index : this.items.length
            this.items.splice(line_index, 0, {unit_cost:0,quantity:0})

            this.$nextTick(() => {
                // initialise autosize for all texareas
                autosize(document.querySelectorAll('textarea'))
            })
        },
        remove_line(line_index) {
            if(typeof line_index !== 'undefined' && line_index < this.items.length) {
                this.items.splice(line_index, 1)
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            // add first blank line item
            this.add_line()
        })
    }
})

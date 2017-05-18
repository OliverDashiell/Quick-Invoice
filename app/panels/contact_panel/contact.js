// Panel Imports
import './contact.css!'
import template from './contact.html!text'

// JS Imports
// –– Vue
import Vue from 'vue'

// –– Dependecies
import autosize from 'autosize'

// TEMPORARY DATA
import contacts_json from './contacts.json!text'


export default Vue.extend({
    template,
    data() {
        return {
            contacts: [],
            address_placeholder: "Street \nCity \nPostal Code \nCountry"
        }
    },
    methods: {
        set_drag_data(contact, event) {
            event.dataTransfer.setData("contact", JSON.stringify(contact))
        },
        add_contact() {
            this.contacts.push({
                name: null,
                address: null,
                phone: null,
                email: null
            })

            this.$nextTick(() => {
                // initialise autosize for all texareas
                autosize(document.querySelectorAll('textarea'))
            })
        },
        draggable_contact(contact) {
            return (contact.name || contact.address || contact.phone || contact.email)
        },
    },
    mounted() {
        this.contacts = JSON.parse(contacts_json)

        this.$nextTick(() => {
            // initialise autosize for all texareas
            autosize(document.querySelectorAll('textarea'))
        })
    }
})

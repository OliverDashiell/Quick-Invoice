// Panel Imports
import './number.css!'
import template from './number.html!text'

// JS Imports
// –– Vue
import Vue from 'vue'

// –– Dependecies


export default Vue.extend({
    template,
    props: {
        value: {
            type: Number,
            default: 0
        },
    },
    methods: {
        update_value(value) {
            this.$emit('input', this.validate_number(value))
        },
        increment() {
            this.$emit('input', this.validate_number(this.value) + 1)
        },
        decrement() {
            this.$emit('input', this.validate_number(this.value) - 1)
        },
        validate_number(value) {
            var number = Number(value)
            if(isNaN(number)) number = 0
            return Math.floor(number)
        },
        select_all(event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(() => { event.target.select() }, 0)
        }
    },
    computed: {
        size() {
            return String(this.value).length
        }
    }
})

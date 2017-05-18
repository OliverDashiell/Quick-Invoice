// Panel Imports
import './currency.css!'
import template from './currency.html!text'

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
    mounted() {
        this.format_value()
    },
    methods: {
        update_value(value) {
            var result = currencyValidator.parse(value, this.value)
            this.$emit('input', result.value)
        },
        format_value() {
            this.$refs.input.value = currencyValidator.format(this.value)
        },
        select_all(event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(() => { event.target.select() }, 0)
        },
    },
    computed: {
        size() {
            return String(currencyValidator.format(this.value)).length
        }
    }
})

// Panel Imports
import './text.css!'
import template from './text.html!text'

// JS Imports
// –– Vue
import Vue from 'vue'

// –– Dependecies


export default Vue.extend({
    template,
    props: {
        value: {
            type: String,
            default: null
        },
    },
    methods: {
        update_value(value) {
            this.$emit('input', value)
        },
        select_all(event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(() => { event.target.select() }, 0)
        }
    },
    computed: {
        size() {
            var length = String(this.value).length

            if(length > 0) {
                return length
            }
            else {
                // use placeholder size if blank
                return this.$refs.input.placeholder.length
            }
        }
    }
})

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faArrowRightLong as fasArrowRightLong,
    faMagnifyingGlass as fasMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import {
	} from '@fortawesome/free-regular-svg-icons'

library.add(
    fasArrowRightLong,
    fasMagnifyingGlass
	)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

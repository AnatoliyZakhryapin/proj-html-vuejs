import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faArrowRightLong as fasArrowRightLong,
    faArrowLeftLong as fasArrowLeftLong,
    faMagnifyingGlass as fasMagnifyingGlass,
    faList as fasList,
    faTag as fasTag,
    faPlay as fasPlay,
    faLocationDot as fasLocationDot,
    faPhone as fasPhone,
    faEnvelope as fasEnvelope
} from '@fortawesome/free-solid-svg-icons'

import { 
    faClock as farClock,
    faUser as farUser,
    } from '@fortawesome/free-regular-svg-icons'

import {
    faLinkedinIn as fabLinkedinIn,
    faFacebookF as fabFacebookF,
    faTwitter as fabTwitter,
	} from '@fortawesome/free-brands-svg-icons'

library.add(
    fasArrowRightLong,
    fasArrowLeftLong,
    fasMagnifyingGlass,
    fasList,
    fabLinkedinIn,
    fabFacebookF,
    fabTwitter,
    farClock,
    farUser,
    fasTag,
    fasPlay,
    fasLocationDot,
    fasPhone,
    fasEnvelope,
	)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

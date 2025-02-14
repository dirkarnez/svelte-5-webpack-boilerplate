// import './global.css';

// import { mount } from 'svelte';
// import App from './App.svelte';



// const app = mount(new App( {
// 	target: document.body,
// 	props: { name: 'world' }
// }));

import App from './App.svelte';
import { mount } from 'svelte';

export default mount(App, { 
	target: document.body,
	props: {
		name: 'world'
	}
});
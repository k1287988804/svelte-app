import App from './App.svelte';
import T1 from './test_ts/t1.svelte'

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

const app = new T1({
	target: document.body,
	props: {
		name: 'world'
	}
})

export default app;
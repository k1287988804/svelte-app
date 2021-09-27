<script lang="typescript">
	import { fly } from 'svelte/transition'
	import Say from './components/Say.svelte'
	export let name: string;
	let age: number = 18;
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>{age}</h2>
	<p in:fly={{ y: 200, duration: 2000 }}>aaa</p>
	<Say />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
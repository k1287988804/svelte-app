<script lang="ts">

	interface User {
		name: string,
		age: 18
	}

	interface Say {
		(name: string): void
	}

	type Play = (name: string) => void

	const say:Say = (name) => { console.log(name) }

	const play:Play = (name) => { console.log('I\'m playing, name is ' + name) }

	say('xiaowang')
	play('xiaozhang')
</script>

<div>
	<h1>Welcome!</h1>
</div>
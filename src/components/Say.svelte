<script lang="ts">
	import './style.scss'
	let count = 1
	let arr = [0]
	const tmp = '<p style="color:red;">测试</p>'
	const add = () => count++
	const addArr = () => {
		arr.push(arr.length)
		arr = arr
	}

	$:doubled = count * 2
	// $:console.log(count)
</script>
<main>
	<div>
		{@html tmp}
		<span class="title">{count}</span>
		<span>{doubled}</span>
		<span>{arr}</span>
		<button on:click={add}>点击</button>
		<button on:click={addArr}>数组添加</button>
	</div>
	<div>
		saying...
	</div>
</main>
<script lang="ts">
	type NaiveFlat<T extends any[]> = T[number] extends any[] ? T[number][number] : T[number]

	// 测试用例：
	type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]> // 'a' | 'b' | 'c' | 'd'
</script>
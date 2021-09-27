<script lang="ts">
	type NonEmptyArray<T> = {
    	[P in (keyof T[] & 0)]: P extends number ? T : T[][P]
	}

	// 测试用例
	const a: NonEmptyArray<string> = [] // 将出现编译错误
	const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
</script>
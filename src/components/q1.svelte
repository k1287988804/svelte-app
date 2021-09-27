<script lang="ts">
	// type User = {
	// 	id: number;
	// 	kind: string;
	// };

	// function makeCustomer<T extends User>(u: T): T {
	// 	// Error（TS 编译器版本：v4.4.2）
	// 	// Type '{ id: number; kind: string; }' is not assignable to type 'T'.
	// 	// '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
	// 	// but 'T' could be instantiated with a different subtype of constraint 'User'.
	// 	return {
	// 		id: u.id,
	// 		kind: 'customer'
	// 	}
	// }

	// 以上代码为什么会提示错误，应该如何解决上述问题？

	type User = {
		id: number,
		kind: string
	}

	const makeCustomer = <T extends User>(u: T):T => {
		return {
			...u,
			id: u.id,
			kind: 'customer'
		}
	}
	
	console.log(makeCustomer({id: 111, kind: 'yyy', fff: 'ggg'}))
</script>
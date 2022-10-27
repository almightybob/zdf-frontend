<script lang="ts">
	import { goto } from '$app/navigation';
	import { GQL_LoginUser } from '$houdini';

	import { form, field } from 'svelte-forms';
	import { min, required } from 'svelte-forms/validators';
	import user from '$lib/user';

	const id = field('id', '', [required(), min(3)]);
	const pw = field('pw', '', [required(), min(3)]);

	const myForm = form(id, pw);

	async function handleSubmit() {
		const data = myForm.summary();
		console.log(data);
		const res = await GQL_LoginUser.mutate({ identifier: data.id, password: data.pw });

		console.log(res);
		if (res?.login.jwt) {
			localStorage.setItem('token', res.login.jwt);
			if (res.login.user) {
				$user = res.login.user;
				goto('/');
			}
		} else {
			const data: { message: { messages: { message: string }[] }[] } = await res.json();
			if (data?.message?.[0]?.messages?.[0]?.message) {
				alert(data.message[0].messages[0].message);
			}
		}
	}
</script>

<section>
	<input type="text" bind:value={$id.value} />
	<input type="password" bind:value={$pw.value} />

	<button on:click={handleSubmit}>Send form</button>
</section>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { GQL_LoginUser } from '$houdini';

	import { form, field } from 'svelte-forms';
	import { min, required } from 'svelte-forms/validators';
	import user from '$lib/user';

	const id = field('id', '', [required(), min(3)]);
	const pw = field('pw', '', [required(), min(3)]);

	const myForm = form(id, pw);
	let message = ' ';
	let idref;

	async function handleSubmit() {
		const data = myForm.summary();

		try {
			const res = await GQL_LoginUser.mutate({ identifier: data.id, password: data.pw });
			localStorage.setItem('token', res.login.jwt);
			if (res?.login.user) {
				$user = res.login.user;
				goto('/');
			}
		} catch (e) {
			console.log('Errrrrr', e);
			id.reset();
			pw.reset();
			idref.focus();
			message = 'Da stimmt was nicht';
		}
	}

	document.onkeydown = async (event) => {
		const valid = await myForm.validate();

		if (event.code === 'Enter' && $myForm.valid) {
			handleSubmit();
		}
	};
</script>

<!-- The button to open modal -->
<label for="login-modal" class="btn modal-button">Login</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="login-modal" class="modal-toggle" />
<label for="login-modal" class="modal cursor-pointer">
	<label class="modal-box relative max-w-sm" for="">
		<label for="login-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h3 class="text-lg font-bold text-primary text-center">Sali Du!</h3>
		<input
			type="text"
			class="input input-bordered w-full mt-4 text-primary-content"
			bind:value={$id.value}
			placeholder="username"
			bind:this={idref}
		/>
		<input
			type="password"
			class="input input-bordered w-full mt-2 text-primary-content"
			bind:value={$pw.value}
			placeholder="passwort"
		/>
		<h5 class="text-error text-center h-3 mt-1">{message}</h5>
		<button
			disabled={!$myForm.valid || !$id.value || !$pw.value}
			class="btn btn-primary w-full mt-4"
			on:click={handleSubmit}>Login</button
		>
	</label>
</label>

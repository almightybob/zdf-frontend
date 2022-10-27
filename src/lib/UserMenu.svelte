<script lang="ts">
	import { goto } from '$app/navigation';
	import user from '$lib/user';

	async function logout() {
		localStorage.clear();
		$user = undefined;
		goto('/');
	}

	console.log($user);
</script>

<div class="dropdown dropdown-end">
	<label tabindex="0" class="btn btn-small">Hallo {$user?.username}</label>
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
		<li><a href="#" on:click={logout}>Ausloggen</a></li>
		<li><a href="/admin/create-event">Veranstaltung hinzufügen</a></li>
	</ul>
</div>

<script lang="ts">
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte';
	import FaGlobe from 'svelte-icons/fa/FaGlobe.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaTelegramPlane from 'svelte-icons/fa/FaTelegramPlane.svelte';
	import FaFrog from 'svelte-icons/fa/FaFrog.svelte';
	import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';

	export let plattform: string;
	export let url: string;
	let link: string = url;

	if (plattform === 'email') {
		link = 'mailto://' + url;
	}
</script>

<a href={link}>
	<button class="btn btn-circle btn-outline mr-2">
		<div class="w-8 h-8">
			{#if plattform === 'email'}
				<FaEnvelope />
			{:else if plattform === 'facebook' || plattform === 'fbevent'}
				<FaFacebookF />
			{:else if plattform === 'linkedin'}
				<FaLinkedinIn />
			{:else if plattform === 'instagram'}
				<FaInstagram />
			{:else if plattform === 'website'}
				<FaGlobe />
			{:else if plattform === 'telegram'}
				<FaTelegramPlane />
			{:else if plattform === 'eventfrog'}
				<FaFrog />
			{:else if plattform === 'whatsapp'}
				<FaWhatsapp />
			{/if}
		</div>
	</button>
</a>

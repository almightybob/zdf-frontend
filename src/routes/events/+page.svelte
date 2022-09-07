<script>
	import EventGridCard from '$lib/EventGridCard.svelte';
	import { getCloudinarySquareUrl } from '$lib/utils';
	// @ts-ignore
	export /**
	 * @type {any}
	 */
	let data;

	$: ({ Events } = data);
</script>

<div class="hero bg-base-200 rounded-lg mb-4">
	<div class="hero-content">
		<div>
			<h1 class="text-5xl font-bold">Veranstaltungen im Zentrum der Fülle</h1>
			<p class="py-6">event.subtitle</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
	{#each $Events.data.events.data as event}
		<EventGridCard {event} />
	{/each}
</div>

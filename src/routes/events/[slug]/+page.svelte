<script>
	import HumanGridCard from '$lib/HumanGridCard.svelte';
	import HumanInfoCard from '$lib/HumanInfoCard.svelte';
	import LinkRow from '$lib/LinkRow.svelte';
	import { Lightbox } from 'svelte-lightbox';

	export let data;
	const event = data.event.data.event.data.attributes;
</script>

<div
	class="hero bg-base-200 rounded-lg mb-4"
	style="background-image:url({event.cover.data.attributes.url}); min-height:50vh;"
>
	<div class="hero-overlay bg-opacity-50 rounded-lg">
		<div class="hero-content text-center text-neutral-content">
			<div class="pt-36">
				<h1 class="text-5xl font-bold">{event.title}</h1>
				<h3 class="text-3xl font-bold">{new Date(event.start).toLocaleDateString('de')}</h3>
				<p class="py-6">{event.subtitle}</p>
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</div>
</div>
<div class="card card-compact bg-base-200 mb-4">
	<div class="card-body flex flex-row">
		<LinkRow links={event.links} />
		<p class="text-lg">{event.desc}</p>
	</div>
</div>
<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
	{#each event.content as content}
		<div class="card card-compact card-side bg-base-200 mb-4">
			<figure class="w-1/2">
				<Lightbox description="Simple lightbox">
					<img src={content.media.data.attributes.url} alt="" />
				</Lightbox>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{content.header}</h2>
				<p class="text-lg">{content.content}</p>
			</div>
		</div>
	{/each}
</div>
{#if event.humans.data.length > 3}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		{#each event.humans.data as human}
			<HumanGridCard human={human.attributes} />
		{/each}
	</div>
{:else}
	<div class="card card-compact bg-base-200">
		<div class="card-body">
			<h2 class="card-title">Diese Veranstaltung ist von:</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each event.humans.data as human}
					<HumanInfoCard human={human.attributes} />
				{/each}
			</div>
		</div>
	</div>
{/if}

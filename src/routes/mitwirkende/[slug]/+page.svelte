<script>
	import EventCard from '$lib/EventCard.svelte';
	import LinkRow from '$lib/LinkRow.svelte';

	export let data;

	const human = data.human.data.human.data.attributes;
</script>

<div class="hero flex mb-4">
	<div class="hero-content flex-one">
		<div class="flex-none">
			{#if human.avatar.data}
				<div class="avatar">
					<div class="w-64 mask mask-squircle">
						<img
							src={human.avatar.data?.attributes.url}
							class="max-w-sm rounded-lg shadow-2xl"
							alt="{human.slug}-avatar"
						/>
					</div>
				</div>
			{:else}
				<div class="avatar placeholder">
					<div class="bg-neutral-focus text-neutral-content mask mask-hexagon w-64">
						<span class="text-3xl">{human.name.charAt(0)}</span>
					</div>
				</div>
			{/if}
		</div>
		<div class="flex-one">
			<h1 class="text-5xl font-bold">{human.name}</h1>
			<div class="divider" />
			<LinkRow links={human.links} />
		</div>
	</div>
</div>
<div class="grid grid-cols-2 gap-4">
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title">Mehr über {human.name}</h2>
			<p>{human.bio}</p>
		</div>
	</div>
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title pb-2">Events von {human.name}</h2>
			<div class="grid grid-cols-1 gap-4">
				{#each human.events.data as event}
					<EventCard event={event.attributes} />
				{/each}
			</div>
		</div>
	</div>
</div>

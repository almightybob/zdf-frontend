<script>
	// @ts-ignore
	export /**
	 * @type {any}
	 */
	let data;

	$: ({ Humans } = data);
</script>

<div class="hero bg-base-200 rounded-lg mb-4">
	<div class="hero-content">
		<div>
			<h1 class="text-5xl font-bold">Mitwirkende</h1>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
	{#each $Humans.data.humans.data as human}
		<a href="/mitwirkende/{human.attributes.slug}">
			<div class="bg-base-200 shadow-l p-4 rounded-3xl text-center ">
				<div class="avatar mask mask-squircle h-72 w-72">
					<img
						src={human.attributes.avatar.data?.attributes.url}
						class="h-full"
						alt="{human.slug}-Mitwirkender"
					/>
				</div>
				<h2 class="text-2xl">{human.attributes.name}</h2>
				<p>{human.attributes.position}</p>
			</div>
		</a>
	{/each}
</div>

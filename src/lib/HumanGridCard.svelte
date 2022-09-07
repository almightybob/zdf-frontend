<script lang="ts">
	export let human: {
		name: string;
		slug: string;
		avatar: { data: { attributes: { url: string } } };
		position: string;
		bio: string;
		links: any;
	};
</script>

<a href="/mitwirkende/{human.slug}">
	<div class="bg-base-200 h-52 flex">
		<div class="avatar mask mask-squircle flex-none">
			<img src={human.avatar.data.attributes.url} class="h-full" alt="{human.slug}-avatar" />
		</div>
		<div class="flex-1">
			<h2 class="card-title">{human.name}</h2>
			<h3 class="card-title">{human.position}</h3>
			<p>{human.bio.substring(0, 200)}...</p>
		</div>
	</div>
</a>

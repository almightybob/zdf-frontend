<script lang="ts">
	export let event: {
		slug: string;
		cover: { data: { attributes: { url: string } } };
		title: string;
		start: string;
		subtitle: string;
	};
</script>

<a href="/events/{event.slug}">
	<div class="card bg-base-100 image-full h-52">
		<figure>
			<img src={event.cover.data.attributes.url} class="object-cover h-full" alt="Event" />
		</figure>
		<div class="card-body">
			<a href="/events/{event.slug}"> <h2 class="card-title">{event.title}</h2></a>
			<h3 class="card-title">{new Date(event.start).toLocaleDateString('de')}</h3>
			<div class="card-actions justify-end">
				<a href="/events/{event.slug}">
					<button class="btn btn-primary">Mehr dazu...</button>
				</a>
			</div>
		</div>
	</div>
</a>

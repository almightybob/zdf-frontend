<script lang="ts">
	import { getCloudinarySquareUrl } from './utils';

	export let event: {
		attributes: { slug: string; cover: any; title: string; start: string; subtitle: string };
	};
</script>

<div class="card card-compact bg-base-100 shadow-xl glass">
	<a href="/events/{event.attributes.slug}">
		<figure>
			<img src={getCloudinarySquareUrl(event.attributes.cover.data?.attributes.url)} alt="Event" />
		</figure>
	</a>
	<div class="card-body">
		<a href="/events/{event.attributes.slug}">
			<h2 class="card-title">{event.attributes.title}</h2></a
		>
		<h3 class="card-title">{new Date(event.attributes.start).toLocaleDateString('de')}</h3>
		<p>{event.attributes.subtitle}</p>
		<div class="card-actions justify-end">
			<a href="/events/{event.attributes.slug}">
				<button class="btn btn-primary">Mehr dazu...</button>
			</a>
		</div>
	</div>
</div>

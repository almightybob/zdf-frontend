<script lang="ts">
	import Link from './Link.svelte';
	export let links: [{ url: string; plattform: string }];
</script>

{#each links as link}
	<Link url={link.url} plattform={link.plattform} />
{/each}

import { GQL_Event } from '$houdini';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	try {
		const slug = params.slug;
		if (!slug) throw Error('Invalid event url');
		const event = await GQL_Event.fetch({ fetch, variables: { slug } });

		return {
			event: event
		};
	} catch (e) {
		throw Error(e);
	}
}

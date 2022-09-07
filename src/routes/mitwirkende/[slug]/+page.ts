import { GQL_Human } from '$houdini';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	try {
		const slug = params.slug;
		if (!slug) throw Error('Invalid event url');
		const human = await GQL_Human.fetch({ fetch, variables: { slug } });

		return {
			human: human
		};
	} catch (e) {
		throw Error(e);
	}
}

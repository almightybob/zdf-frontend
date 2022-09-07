import { browser } from '$app/environment';
import type { RequestHandlerArgs } from '$houdini';
import { HoudiniClient } from '$houdini';

// For Query & Mutation
async function fetchQuery({ fetch, text = '', variables = {} }: RequestHandlerArgs) {
	const result = await fetch('http://localhost:1337/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});

	return await result.json();
}

// Export the Houdini client
export default new HoudiniClient(fetchQuery);

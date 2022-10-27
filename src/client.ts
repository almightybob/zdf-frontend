import type { RequestHandlerArgs } from '$houdini';
import { HoudiniClient } from '$houdini';

// For Query & Mutation
async function fetchQuery({ fetch, text = '', variables = {}, session }: RequestHandlerArgs) {
	const token = localStorage.getItem('token') as string;
	const headers = { 'Content-Type': 'application/json' } as any;

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}
	const result = await fetch('http://localhost:1337/graphql', {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			query: text,
			variables
		})
	});

	return await result.json();
}

// Export the Houdini client
export default new HoudiniClient(fetchQuery);

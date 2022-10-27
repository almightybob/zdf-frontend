import houdiniClient from './client';

export async function handle({ event, resolve }) {
	const session_token = localStorage.get('token') as string;

	// Grab the `Authorization: Bearer <token>` header for API requests:
	const bearer_token = event.request.headers.get('Authorization')?.split(' ')[1];
	const token = session_token ?? bearer_token;

	console.log('seeting sessiontoken to houdini', token);

	houdiniClient.setSession(event, { token });

	return await resolve(event);
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface Locals {
		user?: User;
	}

	interface Session {
		token?: string | null;
	}
}

interface Post {
	id: number;
	title: string;
	description: string;
	content: string;
	author: Author;
	created_at: string;
	updated_at: string;
}

interface User {
	username: string;
	// identifier: string;
	// email: string;
	// confirmed: boolean;
	// blocked: boolean;
	// role: Role;
	// created_at: string;
	// updated_at: string;
	// posts: Post[];
}

interface Role {
	id: number;
	name: string;
	description: string;
	type: string;
}

interface Author extends Omit<Omit<User, 'posts'>, 'role'> {
	role: Role['id'];
}

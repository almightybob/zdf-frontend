import type { User } from 'src/app';
import { writable } from 'svelte/store';

const user = writable<User | null>(null);

export default user;

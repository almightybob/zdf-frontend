/** @type {import('houdini').ConfigFile} */
const config = {
	client: './src/client.ts',
	apiUrl: 'http://localhost:1337/graphql',
	scalars: {
		DateTime: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			}
		},
		Date: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			}
		}
	}
};

export default config;

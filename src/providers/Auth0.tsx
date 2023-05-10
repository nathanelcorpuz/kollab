"use client";

import { Auth0Provider } from "@auth0/auth0-react";

export default function Auth0({ children }: { children: React.ReactNode }) {
	return (
		<Auth0Provider
			domain="dev-0s1hn06egrzy2tv2.us.auth0.com"
			clientId="kdLea08aHD2y8cDeW8JyZjGgnK1HdB93"
			authorizationParams={{
				redirect_uri: "http://localhost:3000",
			}}
		>
			{children}
		</Auth0Provider>
	);
}

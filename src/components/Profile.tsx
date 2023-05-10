"use client";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (isAuthenticated) {
		console.log("\n\n");
		console.log("user");
		console.log(user);
		console.log("\n\n");
	}

	return isAuthenticated ? (
		<div>
			<h2>{user?.name}</h2>
			<p>{user?.email}</p>
		</div>
	) : null;
};

export default Profile;

import LoginButton from "@/components/LoginButton";
import Link from "next/link";

export default function Home() {
	return <main>
		<LoginButton />
		<Link href="profile">Profile</Link>
	</main>;
}

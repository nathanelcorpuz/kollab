import "./globals.css";
import { Inter } from "next/font/google";
import Auth0 from "@/providers/Auth0";
import LogoutButton from "@/components/LogoutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kollab",
	description: "Collaborative task management app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Auth0>
					<LogoutButton />
					{children}
				</Auth0>
			</body>
		</html>
	);
}

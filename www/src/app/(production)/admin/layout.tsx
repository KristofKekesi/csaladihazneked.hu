"use client";

import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";
import { useState } from "react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * Admin panel layout.
 * @return Admin panel layout.
 */
export default function Adminlayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [password, setPassword] = useState<string>("");

	// Guard closes
	if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
		throw new Error("Must provide NEXT_PUBLIC_WORDPRESS_API_URL environmental variable!");
	}

	return (
		<>
			<div className="flex flex-col sm:flex-row gap-4 px-6 pt-4 justify-between">
				<div className="flex gap-4 overflow-x-auto">
					<Link href={ `/admin/hirlevel/uj?password=${ password }` }>
						<Button variant="secondary">
							Hírlevél írása
						</Button>
					</Link>
					<Link href={ `/admin/hirlevel/lista?password=${ password }` }>
						<Button variant="secondary">
							Feliratkozók
						</Button>
					</Link>
					<Link
						href={ `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-admin` }
						target="_blank"
					>
						<Button>
							Tartalomkezelő oldal<ExternalLink className="size-4 ml-2" />
						</Button>
					</Link>
				</div>
				<div className="flex gap-4 w-full sm:w-auto">
					<div className="bg-secondary rounded-md w-full sm:w-auto">
						<Input
							type="password"
							className="w-full sm:w-auto"
							value={ password }
							onChange={ (event) => {
								setPassword(event.target.value);
							}}
							placeholder="Jelszó"
						/>
					</div>
				</div>
			</div>
			<Separator className="mt-4" />
			{ children }
		</>
	);
}

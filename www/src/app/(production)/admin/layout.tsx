"use client";

import { Button } from "@/components/ui/Button";
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
 * Newsletter layout.
 * @return Newsletter layout.
 */
export default function Adminlayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [password, setPassword] = useState("");

	return (
		<>
			<div className="flex gap-4 px-6 pt-4 justify-between">
				<div className="flex gap-4">
					<Link href={ `/admin/korlevel/uj?password=${ password }` }>
						<Button variant="secondary">
							Körlevél írása
						</Button>
					</Link>
					<Link href={ `/admin/korlevel/lista?password=${ password }` }>
						<Button variant="secondary">
							Feliratkozók
						</Button>
					</Link>
				</div>
				<div className="flex gap-4">
					<div className="bg-secondary rounded-md">
						<Input
							type="password"
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

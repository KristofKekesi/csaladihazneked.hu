"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import getStatusCode from "@/lib/get_status_code";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";

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
	const [CMSStatus, setCMSStatus] = useState<number|undefined>(undefined);

	// Guard closes
	if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
		throw new Error("Must provide NEXT_PUBLIC_WORDPRESS_API_URL environmental variable!");
	}

	useEffect(() => {
		const getCMSStatusCode = async () => {
			const status: number =
				await getStatusCode({url: process.env.NEXT_PUBLIC_WORDPRESS_API_URL!});

			setCMSStatus(status);
		};

		getCMSStatusCode();
		
	}, []);

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
						<Button className="flex gap-2" 
						disabled={ !(CMSStatus === 200 ||CMSStatus === undefined) }>
							<div className={cn(
								"size-2 rounded-full transition-colors",
								CMSStatus === undefined ? "bg-slate-400" : 
								(CMSStatus === 200 ? "bg-green-500" : "bg-red-500")
							)} />
							Tartalomkezelő oldal
							<ExternalLink className="size-4" />
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

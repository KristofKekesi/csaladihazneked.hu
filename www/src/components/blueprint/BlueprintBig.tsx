import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/Card";
import { Blueprint } from "@/types/Blueprint";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Featureset from "@/components/blueprint/Featureset";
import Image from "next/image";
import Link from "next/link";
import { subtitleClassNames } from "@/components/general/Typography";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	blueprint: Blueprint,
	className?: string
}

/**
 * @param blueprint A `Blueprint` `Object` to populate the component with.
 * @param className A `string` which contains CSS classes.
 * @returns A component with many info about the blueprint given.
 */
export default function BlueprintBig(params: Params) {
	return (
		<Card className="flex rounded-t-3xl">
			<div className="w-full md:w-2/3">
				<CardHeader className="backdrop-blur-2xl bg-black/5 
				rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none">
					<CardTitle className="flex flex-nowrap justify-between items-baseline gap-4">
						<span className="line-clamp-2 h-12 select-auto">
							{ params.blueprint.title }
						</span>
						<span className={cn( subtitleClassNames,
						"text-xl whitespace-nowrap select-auto" )}>
							{Intl.NumberFormat("hu-HU").format(params.blueprint.price!)} Ft
						</span>
					</CardTitle>
					<CardDescription className="h-16 line-clamp-3 flex items-end select-auto">
						{ params.blueprint.description }
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6 grid grid-cols-3">
					<Featureset
						blueprint={ params.blueprint }
						type="general"
						maxReturn={4}
						className="col-span-1"
					/>
					<Featureset
						blueprint={ params.blueprint }
						type="rooms"
						maxReturn={4}
						className="col-start-3 sm:col-start-2"
					/>
					<Featureset
						blueprint={ params.blueprint }
						type="features"
						maxReturn={4}
						className="col-span-1 hidden sm:inline"
					/>
				</CardContent>
				<CardFooter className="flex justify-between pt-6">
					{ //TODO(KristofKekesi): Implement
					//<Button variant="link">
					//	<span className="inline md:hidden">Hasonlók</span>
					//	<span className="hidden md:inline">Hasonló tervrajzok</span>
					//</Button>
					}
					<Link href={`/tervrajzok/${ params.blueprint.slug }`}>
						<Button>
							Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
						</Button>
					</Link>
				</CardFooter>
			</div>
			<div
				className="w-1/3 rounded-tr-3xl rounded-br-md hidden md:inline relative"
			>
				<Image
					src={ params.blueprint.highlightedImage.src } fill
					alt={ params.blueprint.title } className="object-cover"
				/>
			</div>
		</Card>
	);
}

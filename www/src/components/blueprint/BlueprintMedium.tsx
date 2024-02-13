import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Blueprint } from "@/types/Blueprint";
import { Button } from "@/components/ui/button";
import { ChevronRight} from "lucide-react";
import { cn } from "@/lib/utils";
import Featureset from "./Featureset";
import Image from "next/image";
import Link from "next/link";
import { Subtitle } from "../general/Typography";

type Params = {
	blueprint: Blueprint,
	className?: string
}

/**
 * 
 * @param blueprint A `Blueprint` object containing essential 
 * 					informations about the blueprint displayed.
 * @param className A `String` containing CSS classes.
 * 
 * @returns 
 */

export default function BlueprintMedium({ blueprint, className }: Params) {
	return (
		<Card
			className={cn("group rounded-b-3xl bg-cover", className)}
		>
			<CardHeader className="p-0 flex flex-col aspect-video backdrop-blur-none
			 bg-transparent group-hover:bg-black/05 transition-all" >
				<div className="relative">
					<div className="absolute w-full">
						<div className="w-full aspect-video relative group-hover:blur
						group-hover:opacity-40 transition-all">
							<Image
								src={ blueprint.highlightedPhoto.src }
								alt={ blueprint.title } fill
								className="rounded-t-md object-cover"
							/>
						</div>
					</div>
					<div className="absolute opacity-0 group-hover:opacity-10
					bg-black w-full aspect-video rounded-t-md" />
					<div className="flex flex-col justify-between aspect-video w-full p-6">
						<div className="flex justify-between w-full items-baseline opacity-0
						group-hover:opacity-100 transition-opacity gap-4 relative">
							<Subtitle className="line-clamp-2 select-auto">
								{ blueprint.title }
							</Subtitle>
							{ blueprint.price ? 
								<Subtitle className="text-xl select-auto">
									{ Intl.NumberFormat("hu-HU").format(blueprint.price) } Ft
								</Subtitle>
							: null }
						</div>
						<div className="text-ellipsis select-auto">
							{ blueprint.description }
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent className="pt-6 grid grid-cols-2 bg-white">
			<Featureset blueprint={ blueprint } type="general" className="col-span-1" />
				<Featureset blueprint={ blueprint } type="rooms" maxReturn={4} />
			</CardContent>
			<CardFooter className="bg-white flex justify-end pt-6 rounded-b-3xl">
				{ //TODO(KristofKekesi): Implement
				//<Button variant={"link"}>
				//	<span className="hidden md:inline">Hasonló tervrajzok</span>
				//	<span className="inline md:hidden">Hasonlók</span>
				//</Button>
				}
				<Link href={`/tervrajzok/${ blueprint.slug }`}>
					<Button variant={"secondary"}>
						Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Blueprint } from "@/types/Blueprint";
import { Button } from "@/components/ui/button";
import { ChevronRight} from "lucide-react";
import { cn } from "@/lib/utils";
import Featureset from "./Featureset";
import Link from "next/link";
import { subtitleClassNames } from "../general/Typography";

type Props = {
	blueprint: Blueprint,
	className?: string
}

export default function BlueprintMedium(props: Props) {
	return (
		<Card
			className={cn("group rounded-b-3xl bg-cover", props.className)}
			style={{backgroundImage: `url(${ props.blueprint.imageURL })`}}
		>
			<CardHeader className="flex flex-col aspect-video backdrop-blur-none
			group-hover:backdrop-blur-2xl bg-transparent group-hover:bg-black/05 transition-all" >
				<CardTitle className="flex justify-between items-baseline opacity-0
				group-hover:opacity-100 transition-opacity gap-4">
					<span className="line-clamp-2 select-auto">
						{props.blueprint.title}
					</span>
					{ props.blueprint.price ? 
						<span className={cn(subtitleClassNames, "text-xl select-auto")}>
							{Intl.NumberFormat("hu-HU").format(props.blueprint.price)} Ft
						</span>
					: null }
				</CardTitle>
				<CardDescription className="opacity-0 group-hover:opacity-100
				transition-opacity text-ellipsis select-auto">
					{props.blueprint.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="pt-6 grid grid-cols-2 bg-white">
			<Featureset blueprint={ props.blueprint } type={"general"} className="col-span-1" />
				<Featureset blueprint={props.blueprint} type={"rooms"} maxReturn={4} />
			</CardContent>
			<CardFooter className="bg-white flex justify-between pt-6 rounded-b-3xl">
				<Button variant={"link"}>
					<span className="hidden md:inline">Hasonló tervrajzok</span>
					<span className="inline md:hidden">Hasonlók</span>
				</Button>
				<Link href={`/tervrajzok/${props.blueprint.id}`}>
					<Button variant={"secondary"}>
						Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}

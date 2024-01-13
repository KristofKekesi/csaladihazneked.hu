import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, ChevronRight, Home, Layers } from "lucide-react";
import Featureset from "./Featureset";
import { Blueprint } from "@/types/Blueprint";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
				group-hover:opacity-100 transition-opacity">
					<span>{props.blueprint.title}</span>
					<span className="text-lg">{ props.blueprint.price } Ft</span>
				</CardTitle>
				<CardDescription 
				className="opacity-0 group-hover:opacity-100 transition-opacity text-ellipsis">
					{props.blueprint.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="pt-6 grid grid-cols-2 bg-white">
				<ul className="col-span-1">
					<li className="flex items-baseline"><Home className="h-4 w-4 mr-2" />
						{ props.blueprint.type }
					</li>
					<li className="flex items-baseline"><Box className="h-4 w-4 mr-2" />
						{ props.blueprint.squarem } m<sup>2</sup></li>
					<li className="flex items-baseline"><Layers className="h-4 w-4 mr-2" />
						2 emelet
					</li>
				</ul>
				<Featureset blueprint={props.blueprint} type={"rooms"} maxReturn={4} />
			</CardContent>
			<CardFooter className="bg-white flex justify-between pt-6 rounded-b-3xl">
				<Button variant={"link"}>
					<span className="hidden md:inline">Hasonló tervrajzok</span>
					<span className="inline md:hidden">Hasonlók</span>
				</Button>
				<Link href={`./tervrajzok/${props.blueprint.id}`}>
					<Button variant={"secondary"}>
						Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}

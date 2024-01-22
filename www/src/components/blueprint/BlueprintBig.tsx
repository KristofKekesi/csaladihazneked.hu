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
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Featureset from "./Featureset";
import Link from "next/link";
import { subtitleClassNames } from "../general/Typography";


export default function BlueprintBig(props: {blueprint: Blueprint}) {
	return (
		<Card className="flex rounded-t-3xl">
			<div className="w-full md:w-2/3">
				<CardHeader className="backdrop-blur-2xl bg-black/5 
				rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none">
					<CardTitle className="flex flex-nowrap justify-between items-baseline gap-4">
						<span className="line-clamp-2 h-12 select-auto">
							{props.blueprint.title}
						</span>
						<span className={cn( subtitleClassNames,
						"text-xl whitespace-nowrap select-auto")}>
							{Intl.NumberFormat("hu-HU").format(props.blueprint.price!)} Ft
						</span>
					</CardTitle>
					<CardDescription className="h-16 line-clamp-3 flex items-end select-auto">
						{props.blueprint.description}
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6 grid grid-cols-3">
					<Featureset
						blueprint={props.blueprint}
						type={"general"}
						maxReturn={4}
						className="col-span-1"
					/>
					<Featureset
						blueprint={props.blueprint}
						type={"rooms"}
						maxReturn={4}
						className="col-start-3 sm:col-start-2"
					/>
					<Featureset
						blueprint={props.blueprint}
						type={"features"}
						maxReturn={4}
						className="col-span-1 hidden sm:inline"
					/>
				</CardContent>
				<CardFooter className="flex justify-between pt-6">
					<Button variant={"link"}>
						<span className="inline md:hidden">Hasonlók</span>
						<span className="hidden md:inline">Hasonló tervrajzok</span>
					</Button>
					<Link href={`/tervrajzok/${props.blueprint.id}`}>
						<Button>
							Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
						</Button>
					</Link>
				</CardFooter>
			</div>
			<div
				className="w-1/3 rounded-tr-3xl rounded-br-md hidden md:inline bg-cover"
				style={{backgroundImage: `url(${ props.blueprint.imageURL })`}}
			/>
		</Card>
	);
}

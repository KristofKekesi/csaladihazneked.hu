import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import { cn } from "@/lib/utils";
import Featureset from "./Featureset";
import Image from "next/image";
import Link from "next/link";

type Props = {
	blueprint: Blueprint,
	className?: string
}

export default function BlueprintSmall(props: Props) {
	return (
		<Link href={`/tervrajzok/${props.blueprint.id}`}>
			<Card className={
				cn("w-fit rounded-3xl hover:bg-slate-50 transition-colors", props.className)
			}>
				<CardHeader className="flex flex-row items-center gap-4 pl-2 pr-6 py-2">
					<Image src={"/images/1.png"} height={32} width={32}
					alt="" className="object-cover rounded-full aspect-square" />
					<CardTitle className={"text-base"}>
						<span className="line-clamp-2 max-w-sm select-auto"><Balancer>
							{props.blueprint.title}
						</Balancer></span>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-center w-full pt-2">
					<Featureset blueprint={props.blueprint} type={"rooms"} />
				</CardContent>
			</Card>
		</Link>
	);
}

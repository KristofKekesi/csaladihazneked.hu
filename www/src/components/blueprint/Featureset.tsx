import { Cuboid, Fan, ShowerHead, Sofa } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureProps = {
	children: JSX.Element,
	number: number,
	label: string
};

function Feature( {children, number, label} : FeatureProps) {
	return (
		<li className="flex items-baseline">{ children }<span>{ number } { label }</span></li>
	);
}


type FeaturesetProps = {
	blueprint: Blueprint,
	type: "rooms" | "features",
	maxReturn: number,
	className?: string
};

// TODO(KristofKekesi): get maxReturn working
export default function Featureset({blueprint, type, maxReturn, className} : FeaturesetProps) {
	return (
		<ul className={cn(className)}>
			{type == "rooms" ? <>
				<Feature number={blueprint.rooms.rooms} label="szoba"><Cuboid className="h-4 w-4 mr-2" /></Feature>
				<Feature number={blueprint.rooms.livingroom} label="nappali"><Sofa className="h-4 w-4 mr-2" /></Feature>
				<Feature number={blueprint.rooms.bathroom} label="fürdő"><ShowerHead className="h-4 w-4 mr-2" /></Feature>
				<Feature number={blueprint.rooms.wc} label="mosdó"><Fan className="h-4 w-4 mr-2" /></Feature>
			</> : <>
			</>}
		</ul>
	);
}
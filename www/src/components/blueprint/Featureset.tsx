import { Box, Building, Cuboid, Factory, Fan, Home, Layers, ShowerHead, Sofa, Store } from "lucide-react";

import { cn } from "@/lib/utils";
import { Blueprint } from "@/types/Blueprint";

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
	type: "rooms" | "features" | "general",
	maxReturn?: number,
	className?: string
};

export default function Featureset(props: FeaturesetProps) {
	return (
		<ul className={cn(props.className)}>
			{ props.type === "rooms" ? <>
				<Feature number={props.blueprint.rooms.rooms} label="szoba">
					<Cuboid className="h-4 w-4 mr-2" /></Feature>
				<Feature number={props.blueprint.rooms.livingroom} label="nappali">
					<Sofa className="h-4 w-4 mr-2" /></Feature>
				<Feature number={props.blueprint.rooms.bathroom} label="fürdő">
					<ShowerHead className="h-4 w-4 mr-2" /></Feature>
				<Feature number={props.blueprint.rooms.wc} label="mosdó">
					<Fan className="h-4 w-4 mr-2" /></Feature>
			</> : null }

			{ props.type === "features" ? <>
				{props.blueprint.features.american_kitchen ? 
				<li className="flex items-baseline list-disc">Amerikai konyha</li> : null}
				{props.blueprint.features.basement ? 
				<li className="flex items-baseline">Alagsor</li> : null}
			</> : null }

			{ props.type === "general" ? <>
				<li className="flex items-baseline">
					{ props.blueprint.type === "Bolt" ?
					<Store className="h-4 w-4 mr-2" /> : null }
					{ props.blueprint.type === "Családihaz" ?
					<Home className="h-4 w-4 mr-2" /> : null }
					{ props.blueprint.type === "Ipar" ?
					<Factory className="h-4 w-4 mr-2" /> : null }
					{ props.blueprint.type === "Lakás" ?
					<Building className="h-4 w-4 mr-2" /> : null }
					{ props.blueprint.type }
				</li>
				<li className="flex items-baseline">
					<Box className="h-4 w-4 mr-2" />85 m<sup>2</sup>
				</li>
				<li className="flex items-baseline">
					<Layers className="h-4 w-4 mr-2" />{ props.blueprint.floors } emelet
				</li>
			</> : null }
		</ul>
	);
}

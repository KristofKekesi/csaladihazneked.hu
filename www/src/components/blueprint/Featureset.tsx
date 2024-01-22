import {
	Box, Building,
	Cuboid,
	Factory,
	Home,
	Layers,
	ShowerHead, Sofa, Store
} from "lucide-react";
import { Blueprint } from "@/types/Blueprint";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ToiletPaper from "./toiletPaper.svg";


type FeatureProps = {
	children: JSX.Element,
	number: number,
	label: string
};

function Feature( {children, number, label} : FeatureProps) {
	return (
		<li className="flex items-baseline">
			{ children }
			<span className="select-text">{ number } { label }</span>
		</li>
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
					<Image src={ ToiletPaper } alt="" className="h-4 w-4 mr-2" /></Feature>
			</> : null }

			{ props.type === "features" ? <>
				{props.blueprint.features.american_kitchen ? 
				<li className="flex items-baseline select-text">Amerikai konyha</li> : null}
				{props.blueprint.features.basement ? 
				<li className="flex items-baseline select-auto">Alagsor</li> : null}
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
					<span className="select-auto">{ props.blueprint.type }</span>
				</li>
				<li className="flex items-baseline">
					<Box className="h-4 w-4 mr-2" />
					<span className="select-auto">85 m<sup>2</sup></span>
				</li>
				<li className="flex items-baseline">
					<Layers className="h-4 w-4 mr-2" />
					<span className="select-auto">{ props.blueprint.floors } emelet</span>
				</li>
			</> : null }
		</ul>
	);
}

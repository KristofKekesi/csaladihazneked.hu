import {
	Box, Building, Building2, Cuboid, Home, Layers, ShowerHead, Sofa, Warehouse
} from "lucide-react";
import { Blueprint } from "@/types/Blueprint";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ToiletPaper from "@/components/blueprint/toiletPaper.svg";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type FeatureParams = {
	children?: JSX.Element,
	label: string
};

/**
 * A component to display a numbered feature with a name.
 * @param children An HTML element. Optionally an icon.
 * @param label A `string` to name the feature.
 * @returns A component with an icon or any HTML element and a label.
 */
function Feature(params: FeatureParams) {
	return (
		<li className="flex items-baseline">
			{ params.children }
			<span className="select-text">{ params.label }</span>
		</li>
	);
}


type FeaturesetParams = {
	blueprint: Blueprint,
	type: "rooms" | "features" | "general",
	maxReturn?: number,
	className?: string
};

/**
 * A list of `Feature`s to display in `blueprint`s.
 * @param blueprint 
 * @param type 
 * @param blueprint 
 * @returns A component with many features from a given `blueprint` based on a category.
 */
export default function Featureset(params: FeaturesetParams) {
	return (
		<ul className={ cn(params.className) }>
			{ params.type === "rooms" ? <>
				<Feature label={`${ params.blueprint.rooms.rooms } szoba`}>
					<Cuboid className="h-4 w-4 mr-2" /></Feature>
				<Feature label={`${ params.blueprint.rooms.livingroom } nappali`}>
					<Sofa className="h-4 w-4 mr-2" /></Feature>
				<Feature label={`${ params.blueprint.rooms.bathroom } fürdő`}>
					<ShowerHead className="h-4 w-4 mr-2" /></Feature>
				<Feature label={`${ params.blueprint.rooms.wc } mosdó`}>
					<Image src={ ToiletPaper } alt="" className="h-4 w-4 mr-2" /></Feature>
			</> : null }

			{ params.type === "features" ? <>
				{ params.blueprint.features.hasAttic ? 
					<Feature label="Padlás" /> : null }
				{ params.blueprint.features.hasBasement ? 
					<Feature label="Alagsor" /> : null }
				{ params.blueprint.features.hasGarage ? 
					<Feature label="Garázs" /> : null }
			</> : null }

			{ params.type === "general" ? <>
				<li className="flex items-baseline">
					{ params.blueprint.type === "Családiház" ?
					<Home className="h-4 w-4 mr-2" /> : null }
					{ params.blueprint.type === "Társasház" ?
					<Building2 className="h-4 w-4 mr-2" /> : null }
					{ params.blueprint.type === "Egyéb" ?
					<Warehouse className="h-4 w-4 mr-2" /> : null }
					{ params.blueprint.type === "Lakás" ?
					<Building className="h-4 w-4 mr-2" /> : null }
					<span className="select-auto">{ params.blueprint.type }</span>
				</li>
				<li className="flex items-baseline">
					<Box className="h-4 w-4 mr-2" />
					<span className="select-auto">{ params.blueprint.squarem } m<sup>2</sup></span>
				</li>
				<li className="flex items-baseline">
					<Layers className="h-4 w-4 mr-2" />
					<span className="select-auto">{ params.blueprint.floors } emelet</span>
				</li>
			</> : null }
		</ul>
	);
}

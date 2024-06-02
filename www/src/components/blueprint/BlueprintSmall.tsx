import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import { cn } from "@/lib/utils";
import CustomImage from "@/components/general/Image";
import Featureset from "@/components/blueprint/Featureset";
import { TervrajzokSlug } from "@/routes";

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
 * A component to show minimal info of a `blueprint`.
 * @param blueprint 
 * @param className An optional `string` containing CSS classes. 
 * @returns Minimal information about a given `blueprint`.
 */
export default function BlueprintSmall(params: Params): JSX.Element {
	return (
		<TervrajzokSlug.Link slug={ params.blueprint.slug }>
			<Card className={
				cn("w-fit rounded-3xl hover:bg-slate-50 transition-colors", params.className)
			}>
				<CardHeader className="flex flex-row items-center gap-4 pl-2 pr-6 py-2">
					<CustomImage
						alt={ params.blueprint.title }
						src={ params.blueprint.highlightedImage.src }
						className="size-8"
						imageClassName="object-cover rounded-full aspect-square"
					/>
					<CardTitle className="text-base">
						<span className="line-clamp-2 max-w-sm select-auto"><Balancer>
							{ params.blueprint.title }
						</Balancer></span>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-center w-full pt-2">
					<Featureset blueprint={ params.blueprint } type="rooms" />
				</CardContent>
			</Card>
		</TervrajzokSlug.Link>
	);
}

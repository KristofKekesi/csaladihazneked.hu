import CustomImage from "@/components/general/Image";
import { type Partner as PartnerType } from "@/types/Partner";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	partner: PartnerType
}

/**
 * @param partner A `Partner` Object to display
 * @returns A component with an optional link displaying the given `Partner`.
 */
export default function Partner(params: Params): JSX.Element {
	return (
		<div className="flex flex-col items-center gap-2">
			<CustomImage
				alt={ params.partner.name }
				src={ params.partner.image.src }
				className="rounded-full size-32"
				imageClassName="rounded-full object-cover"
			/>
			<p>{ params.partner.name }</p>
		</div>
	);
}

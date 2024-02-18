import Image from "next/image";
import { Partner } from "@/types/Partner";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	partner: Partner
}

/**
 * @param partner A `Partner` Object to display
 * @returns A component with an optional link displaying the given `Partner`.
 */
export default function Partner(params: Params) {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="rounded-full bg-slate-100 w-32 h-32 relative">
				<Image
					src={ params.partner.image.src }
					alt={ params.partner.name }
					fill
					className="rounded-full object-cover"
				/>
			</div>
			<p>{ params.partner.name }</p>
		</div>
	);
}

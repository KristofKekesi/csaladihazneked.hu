import Image from "next/image";
import { Partner } from "@/types/Partner";

type Props = {
	partner: Partner
}

export default function Partner(props: Props) {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="rounded-full bg-slate-100 w-32 h-32 relative">
				<Image
					src={ props.partner.imageURL }
					alt={ props.partner.name }
					fill
					className="rounded-full object-cover"
				/>
			</div>
			<p>{props.partner.name}</p>
		</div>
	);
}

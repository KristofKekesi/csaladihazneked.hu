import { cn } from "@/lib/utils";

type Props = {
	title?: string,
	description?: string,
	children: JSX.Element,
	className?: string
}

export default function ExtendedFooter(props: Props) {
	return (
		<div className={cn(
			"mx-6 -mb-6 px-6 pt-6 pb-6", // padding, margin
			"grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2", // content spacing
			"rounded-t-3xl text-black/75 bg-[#BABEAE]",
			props.className
		)}>
			<div className="col-span-5 flex flex-col ml-2 mb-4">
				<h3 className="text-2xl font-bold font-serif">{ props.title }</h3>
				<p className="text-black/75">{ props.description }</p>
			</div>
			{ props.children }
		</div>	
	);
}

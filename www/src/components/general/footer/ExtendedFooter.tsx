import { cn } from "@/lib/utils";

type Props = {
	title?: string,
	description?: string,
	children: JSX.Element,
	className?: string
}

/**
 * A component styled to be used with the `Footer` component to display additional small actions.
 * @param title An optional title to be displayed with proper style. 
 * @param description An optional description to be displayed with proper style. 
 * @param childern Component to be displayed inside the `ExtendedFooter`.
 * @param className Optional CSS classes to modify the component.
 * @returns A styled component to be used only with the `Footer` component to display aditional
 * 			actions.
 */
export default function ExtendedFooter(props: Props) {
	return (
		<div className={cn(
			"extendedFooter mx-6 -mb-6 px-6 pt-6 pb-6", // padding, margin
			"grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2", // content spacing
			"rounded-t-3xl text-black/75 bg-customGreen",
			props.className
		)}>
			<div className="col-span-5 flex flex-col ml-2 mb-4">
				<h3 className="text-2xl font-bold font-serif select-auto">{ props.title }</h3>
				<p className="text-black/75 select-auto">{ props.description }</p>
			</div>
			{ props.children }
		</div>	
	);
}

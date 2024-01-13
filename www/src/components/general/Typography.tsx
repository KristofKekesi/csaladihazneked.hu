import { cn } from "@/lib/utils";

type Props = {
	value: string,
	id?: string,
	className?: string
}

export function Title(props: Props) {
	return(
		<h1
			id={ props.id }
			className={cn("text-6xl px-6 font-caprasimo", props.className)}
		>
			{ props.value }
		</h1>
	);
}

export function Subtitle(props: Props) {
	return(
		<h2
			id={ props.id }
			className={cn("text-2xl font-bold font-serif px-6",
			props.className)}
		>
			{ props.value }
		</h2>
	);
}

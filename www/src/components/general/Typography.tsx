import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

type Props = {
	value: string,
	id?: string,
	className?: string
}

export function Title(props: Props) {
	return (
		<h1
			id={ props.id }
			className={cn("text-6xl px-6 font-caprasimo", props.className)}
		>
			<Balancer>{ props.value }</Balancer>
		</h1>
	);
}

export const subtitleClassNames: string = "text-2xl font-bold font-serif px-6";

export function Subtitle(props: Props) {
	return (
		<h2
			id={ props.id }
			className={cn(subtitleClassNames, props.className)}
		>
			<Balancer>{ props.value }</Balancer>
		</h2>
	);
}

export const headerClassNames: string = "text-lg font-bold font-serif px-6";

export function Header(props: Props) {
	return (
		<h3
			id={ props.id }
			className={cn(headerClassNames, props.className)}
		>
			<Balancer>{ props.value }</Balancer>
		</h3>
	);
}

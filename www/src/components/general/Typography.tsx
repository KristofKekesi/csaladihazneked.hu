import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

export const titleClassNames: string = "text-6xl font-caprasimo select-auto";

export function Title(props: any) {
	return(
		<h1
			{ ...props }
			id={ props.id }
			className={ cn(titleClassNames, props.className) }
		>
			<Balancer>{ props.children }</Balancer>
		</h1>
	);
}

export const subtitleClassNames: string = "text-2xl font-bold font-serif select-auto";

export function Subtitle(props: any) {
	return(
		<h2
			{ ...props }
			id={ props.id }
			className={ cn(subtitleClassNames, props.className) }
		>
			<Balancer>{ props.children }</Balancer>
		</h2>
	);
}

export const headerClassNames: string = "text-lg font-bold font-serif select-auto";

export function Header(props: any) {
	return (
		<h3
			{ ...props }
			id={ props.id }
			className={ cn(headerClassNames, props.className) }
		>
			<Balancer>{ props.children }</Balancer>
		</h3>
	);
}

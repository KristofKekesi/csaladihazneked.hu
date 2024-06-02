import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const titleClassNames: string = "text-6xl font-caprasimo select-auto";

/**
 * A general title component.
 * @param params 
 * @returns A title with all the available properties from the HTML `h1` element.
 */
export function Title(params: any): JSX.Element {
	return(
		<h1
			{ ...params }
			id={ params.id }
			className={ cn(titleClassNames, params.className) }
		>
			<Balancer>{ params.children }</Balancer>
		</h1>
	);
}

export const subtitleClassNames: string = "text-2xl font-bold font-serif select-auto";

/**
 * A general subtitle component.
 * @param params 
 * @returns A subtitle with all the available properties from the HTML `h2` element.
 */
export function Subtitle(params: any): JSX.Element {
	return(
		<h2
			{ ...params }
			id={ params.id }
			className={ cn(subtitleClassNames, params.className) }
		>
			<Balancer>{ params.children }</Balancer>
		</h2>
	);
}

export const headerClassNames: string = "text-lg font-bold font-serif select-auto";

/**
 * A general header component.
 * @param params 
 * @returns A header with all the available properties from the HTML `h3` element.
 */
export function Header(params: any): JSX.Element {
	return (
		<h3
			{ ...params }
			id={ params.id }
			className={ cn(headerClassNames, params.className) }
		>
			<Balancer>{ params.children }</Balancer>
		</h3>
	);
}

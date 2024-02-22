import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { titleClassNames } from "./Typography";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	title?: string,
	children: JSX.Element
	action: JSX.Element
	className?: string
}

/**
 * A component to call the users to an action mid-page.
 * @param title An optional title to the call action.
 * @param children The content of the component.
 * @param action The action button of the component.
 * @param className An optional `string` containing CSS classes.
 */
export default function MidPageAction(params: Params) {
	return (
		<Card className={ cn("flex flex-col xl:flex-row justify-between xl:items-end", 
		params.className) }>
			<CardHeader>
				<CardTitle
					className={ cn(titleClassNames, "text-2xl font-normal") }
				>
					{ params.title }
				</CardTitle>
				{ params.children }
			</CardHeader>
			<CardFooter>{ params.action }</CardFooter>
		</Card>
	);
}

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { titleClassNames } from "./Typography";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	id?: string,
	title?: string,
	children: JSX.Element
	action: JSX.Element
	footer?: JSX.Element
	className?: string
}

/**
 * A component to call the users to an action mid-page.
 * @param id An optional id for the returned component.
 * @param title An optional title to the call action.
 * @param children The content of the component.
 * @param action The action button of the component.
 * @param footer Optional footer element. Mostly for small texts.
 * @param className An optional `string` containing CSS classes.
 */
export default function MidPageAction(params: Params): JSX.Element {
	return (
		<Card id={ params.id } className={ cn("flex flex-col", params.className) }>
			<div className="flex flex-col xl:flex-row justify-between xl:items-end w-full">
				<CardHeader>
					<CardTitle
						className={ cn(titleClassNames, "text-2xl font-normal") }
					>
						{ params.title }
					</CardTitle>
					{ params.children }
				</CardHeader>
				<CardContent>{ params.action }</CardContent>
			</div>
			{ params.footer ? <CardFooter className="pt-0">{ params.footer }</CardFooter> : null }
		</Card>
	);
}

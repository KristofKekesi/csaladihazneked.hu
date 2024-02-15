import { NodeHtmlMarkdown } from "node-html-markdown";


const nhm = new NodeHtmlMarkdown(
	/* options (optional) */ {}, 
	/* customTransformers (optional) */ undefined,
	/* customCodeBlockTranslators (optional) */ undefined
  );

type Props = {
	html: string
}

/**
 * A function to convert html to Markdown.
 * @param html A `string` containing html code.
 * @returns The Markdown equivalent of the given html code.
 */
export default async function html2md(props: Props) {
	return(
		nhm.translate( props.html )
	);
}

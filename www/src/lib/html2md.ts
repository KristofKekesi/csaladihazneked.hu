import { NodeHtmlMarkdown } from "node-html-markdown";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

const nhm = new NodeHtmlMarkdown(
	/* options (optional) */ {}, 
	/* customTransformers (optional) */ undefined,
	/* customCodeBlockTranslators (optional) */ undefined
  );

type Params = {
	html: string
}

/**
 * A function to convert html to Markdown.
 * @param html A `string` containing html code.
 * @returns The Markdown equivalent of the given html code.
 */
export default async function html2md(params: Params) {
	return(
		nhm.translate( params.html )
	);
}

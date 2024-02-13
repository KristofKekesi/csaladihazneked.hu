import { NodeHtmlMarkdown } from "node-html-markdown";


const nhm = new NodeHtmlMarkdown(
	/* options (optional) */ {}, 
	/* customTransformers (optional) */ undefined,
	/* customCodeBlockTranslators (optional) */ undefined
  );

type Props = {
	html: string
}


export default async function html2md(props: Props) {
	//console.log(props.html );
	//console.log(nhm.translate( props.html ));

	return(
		nhm.translate( props.html )
	);
}

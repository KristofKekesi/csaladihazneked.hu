import { Header, Subtitle, Title } from "@/components/general/Typography";
import ReactMarkdown, { Components } from "react-markdown";
import { cn } from "@/lib/utils";
import ImageRenderer from "@/components/general/ImageRenderer";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	children: string,
	className?: string
}

/**
 * A component to render Markdown.
 * @param children A `string` containing Markdown.
 * @returns Returns HTML based on the `children` Mardown parameter.
 */
export default function Markdown(params: Params): JSX.Element {
    const components: Partial<Components> = {
        h1: Title,
        h2: Subtitle,
        h3: Header,
        //h4, h5, h6, a
        img: ImageRenderer
    };

    return (
        <ReactMarkdown components={components}
		 className={ cn("reactMarkDown select-auto", params.className) }>
            { params.children }
        </ReactMarkdown>
    );
}

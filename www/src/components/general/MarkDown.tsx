import { Header, Subtitle, Title } from "./Typography";
import ReactMarkdown, { Components } from "react-markdown";
import { cn } from "@/lib/utils";
import ImageRenderer from "./ImageRenderer";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


type Props = {
	children: string,
	className?: string
}

export default function Markdown(props: Props) {
    const components: Partial<Components> = {
        h1: Title,
        h2: Subtitle,
        h3: Header,
        //h4, h5, h6, a
        img: ImageRenderer
    };

    return (
        <ReactMarkdown components={components}
		 className={cn("reactMarkDown select-auto", props.className)}>
            {props.children}
        </ReactMarkdown>
    );
}

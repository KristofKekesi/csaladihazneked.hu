import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Page() {
	return (
		<div className="w-full flex justify-center items-center mt-6">
			<Button>Tartalomkezelő oldal<ExternalLink className="size-4 ml-2" /></Button>
		</div>
	);
}

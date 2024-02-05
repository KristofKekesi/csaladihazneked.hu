import { getAllBlueprint, getAllPost } from "./api";
import { Blueprint } from "@/types/Blueprint";
import { Post } from "@/types/Post";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


type PostProps = {
	id?: string,
	slug?: string
}

export async function getPost({id, slug}: PostProps) {
	const posts: Array<Post> = await getAllPost();

	return posts.filter((post) => {
		if (id !== undefined && post.id !== id) { return 0; }
		if (slug !== undefined && post.slug !== slug) { return 0; }

		return 1;
	})[0];
}

type BlueprintProps = {
	id?: string,
	slug?: string
}

export async function getBlueprint({id, slug}: BlueprintProps) {
	const blueprints: Array<Blueprint> = await getAllBlueprint();

	return blueprints.filter((blueprint) => {
		if (id !== undefined && blueprint.id !== id) { return 0; }
		if (slug !== undefined && blueprint.slug !== slug) { return 0; }

		return 1;
	})[0];
}

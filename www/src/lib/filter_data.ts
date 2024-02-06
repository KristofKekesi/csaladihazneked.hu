import { getAllBlueprints, getAllPages, getAllPosts } from "./api";
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
	const posts: Array<Post> = await getAllPosts();

	const filteredPosts = posts.filter((post) => {
		if (id !== undefined && post.id !== id) { return 0; }
		if (slug !== undefined && post.slug !== slug) { return 0; }

		return 1;
	});

	if (filteredPosts.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	return filteredPosts[0];
}

type BlueprintProps = {
	id?: string,
	slug?: string
}

export async function getBlueprint({id, slug}: BlueprintProps) {
	const blueprints: Array<Blueprint> = await getAllBlueprints();

	const filteredBlueprints = blueprints.filter((blueprint) => {
		if (id !== undefined && blueprint.id !== id) { return 0; }
		if (slug !== undefined && blueprint.slug !== slug) { return 0; }

		return 1;
	});

	if (filteredBlueprints.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	return filteredBlueprints[0];
}


type PageProps = {
	title: string
}

export async function getPage({title}: PageProps) {
	const pages = await getAllPages();

	const filteredPages = pages.filter((page) => {
		if (page.title !== title) { return 0; }

		return 1;
	});

	if (filteredPages.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	return filteredPages[0];
}

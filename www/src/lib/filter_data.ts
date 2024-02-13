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
	slug?: string,
	isHighlighted?: boolean,
	limit?: number,
	page?: number,
	unique?: boolean
}

/**
 * @param id Filters the posts by ID.
 * @param slug Filters the posts by slug.
 * @param isHighlighted Filters the posts by `Blueprint.isHighlighted`.
 * @param limit Sets a limit to the number of `Post`s in the `Array<Post>`.
 * @param page Sets the page if a `limit` parameter is provided.
 * @param unique Throws an error if there are multiple results with the filters provided.
 * 
 * @returns All posts from `getAllPost()` where the parameters 
 * 			provided pass.
*/

export async function getPosts(
	{id, slug, isHighlighted, limit, page, unique}: PostProps
) : Promise<Array<Post>> {
	// Set default values
	if (page === undefined) { page = 0; }
	if (limit === undefined) { limit = 10; }

	const posts: Array<Post> = await getAllPosts();

	// Filter posts
	const filteredPosts = posts.filter((post) => {
		if (id !== undefined && post.id !== id) { return 0; }
		if (slug !== undefined && post.slug !== slug) { return 0; }
		if (isHighlighted !== undefined && post.isHighlighted !== isHighlighted) { return 0; }

		return 1;
	});

	// Throw error if not unique
	if (unique && filteredPosts.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	// Pagination
	const start = page * limit;
	const end = ((page + 1) * limit) - 1;

	return filteredPosts.slice(start, end);
}

type BlueprintParams = {
	id?: string,
	slug?: string,
	isHighlighted?: boolean,
	limit?: number,
	page?: number,
	unique?: boolean
}

/**
 * @param id Filters the blueprints by ID.
 * @param slug Filters the blueprints by slug.
 * @param isHighlighted Filters the blueprints by `Blueprint.isHighlighted`.
 * @param limit Sets a limit to the number of `Blueprint`s in the `Array<Blueprint>`.
 * @param page Sets the page if a `limit` parameter is provided.
 * @param unique Throws an error if there are multiple results with the filters provided.
 * 
 * @returns All blueprints from `getAllBlueprints()` where the parameters 
 * 			provided pass.
*/

export async function getBlueprints(
	{id, slug, isHighlighted, limit, page, unique} : BlueprintParams
) : Promise<Array<Blueprint>> {
	// Set default values
	if (page === undefined) { page = 0; }
	if (limit === undefined) { limit = 10; }

	const blueprints: Array<Blueprint> = await getAllBlueprints();

	// Filter blueprints
	const filteredBlueprints = blueprints.filter((blueprint) => {
		if (id !== undefined && blueprint.id !== id) { return 0; }
		if (slug !== undefined && blueprint.slug !== slug) { return 0; }
		if (isHighlighted !== undefined && blueprint.isHighlighted !== isHighlighted) { return 0; }

		return 1;
	});

	// Throw error if not unique
	if (unique && filteredBlueprints.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	// Pagination
	const start = page * limit;
	const end = ((page + 1) * limit) - 1;

	return filteredBlueprints.slice(start, end);
}

type PageParams = {
	title: string
	unique?: boolean
}

/**
 * @param id Filters the pages by ID.
 * @param unique Throws an error if there are multiple results with the filters provided.
 * 
 * @returns All pages from `getAllBlueprints()` where the parameters 
 * 			provided pass.
*/

export async function getPages({title, unique}: PageParams) {
	const pages = await getAllPages();

	// Filter pages
	const filteredPages = pages.filter((page) => {
		if (page.title !== title) { return 0; }

		return 1;
	});

	// Throw error if not unique
	if (unique && filteredPages.length > 1) {
		throw new Error("Multiple instances were found.");
	}

	return filteredPages;
}

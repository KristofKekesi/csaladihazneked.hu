"use server";

import { Blueprint } from "@/types/Blueprint";
import { Image } from "@/types/Image";
import { Partner } from "@/types/Partner";
import { Post } from "@/types/Post";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

const API_URL = process.env.WORDPRESS_API_URL!;

/**
 * Function to fetch the WordPress Graphql API
 * @param query The graphql query string.
 * @param values 
 * @returns The response with the query from the WordPress Graphql api.
 */
async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
	// Guard closes
	const API_FETCH_REVALIDATE = process.env.API_FETCH_REVALIDATE;
	if (!API_FETCH_REVALIDATE) {
		throw new Error("API_FETCH_REVALIDATE environmental variable is not provided.");
	}
	if (Number.isNaN(parseInt(API_FETCH_REVALIDATE))) {
		throw new Error("API_FETCH_REVALIDATE environmental variable is not a number.");
	}

	type HeaderType = {"Content-Type": string, "Authorization"?: string};

	const headers: HeaderType = { "Content-Type": "application/json" };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	// WPGraphQL Plugin must be enabled
	const res = await fetch(API_URL, {
		headers,
		next: {
			revalidate: parseInt(API_FETCH_REVALIDATE)
		},
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		throw new Error("Failed to fetch API");
	}

	return json.data;
}

/**
 * Get all posts from the WordPress API.
 * @returns Returns `Promise<Array<Post>>` from the response from the WordPress API.
 */
export async function getAllPosts(): Promise<Array<Post>> {
	const data = await fetchAPI(`
		{
			customPosts(first: ${ process.env.API_GET_POST_NUMBER_LIMIT }) {
				edges {
					node {
						id
						title
						slug
						content
						date
						modified
						lastEditedBy {
							node {
							  	firstName
								lastName
							}
						} 
						postMeta {
							isHighlighted
							highlighted_image {
								node {
									sourceUrl
									altText
									title
								}
		  					}
							description
						}
					}
				}
			}
		}
	`);

	let posts: Array<Post> = [];
	data.customPosts.edges.map((post: any) => {
		const postMeta = post.node.postMeta;

		posts.push({
			id: post.node.id,
			isHighlighted: postMeta.isHighlighted,
			slug: post.node.slug,
			description: post.node.description,
			title: post.node.title,
			highlightedImage: {
				src: postMeta.highlighted_image.node.sourceUrl,
				alt: postMeta.highlighted_image.node.alftText,
				width: postMeta.highlighted_image.node.title.split("×")[0],
				height: postMeta.highlighted_image.node.title.split("×")[0]
			},
			content: post.node.content,
			author:
				`${post.node.lastEditedBy.node.lastName} ${post.node.lastEditedBy.node.firstName}`,
			published: post.node.date,
			modified: post.node.modified
		}); 
	});

	return posts;
}

/**
 * Get all blueprints from the WordPress API.
 * @returns Returns `Promise<Array<Blueprint>>` from the response from the WordPress API.
 */
export async function getAllBlueprints(): Promise<Array<Blueprint>> {
	const data = await fetchAPI(`
		{
			blueprints(first: ${ process.env.API_GET_BLUEPRINT_NUMBER_LIMIT }) {
				edges {
					node {
						id
						title
						slug
						content
						blueprintMeta {
							subtitle
							price
							description
							isHighlighted
							highlighted_image {
								node {
									sourceUrl
									title
									altText
								}
							}
							image1 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image2 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image3 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image4 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image5 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image6 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image7 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image8 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image9 {
								node {
									sourceUrl
									title
									altText
								}
							}
							image10 {
								node {
									sourceUrl
									title
									altText
								}
							}
							type
							squarem
							floors
							rooms
							livingroom
							bathroom
							wc
							hasAttic
							hasGarage
							hasBasement
							youtubeVideoURL
						}
					}
				}
			}
		}
	`);

	let blueprints: Array<Blueprint> = [];
	data.blueprints.edges.map((blueprint: any) => {
		const blueprintMeta = blueprint.node.blueprintMeta;

		const images: Array<Image> = [];
		if (blueprintMeta.image1 !== null) {
			images.push({
				src: blueprintMeta.image1.node.sourceUrl,
				alt: blueprintMeta.image1.node.altText,
				width: blueprintMeta.image1.node.title.split("×")[0],
				height: blueprintMeta.image1.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image2 !== null) {
			images.push({
				src: blueprintMeta.image2.node.sourceUrl,
				alt: blueprintMeta.image2.node.altText,
				width: blueprintMeta.image2.node.title.split("×")[0],
				height: blueprintMeta.image2.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image3 !== null) {
			images.push({
				src: blueprintMeta.image3.node.sourceUrl,
				alt: blueprintMeta.image3.node.altText,
				width: blueprintMeta.image3.node.title.split("×")[0],
				height: blueprintMeta.image3.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image4 !== null) {
			images.push({
				src: blueprintMeta.image4.node.sourceUrl,
				alt: blueprintMeta.image4.node.altText,
				width: blueprintMeta.image4.node.title.split("×")[0],
				height: blueprintMeta.image4.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image5 !== null) {
			images.push({
				src: blueprintMeta.image5.node.sourceUrl,
				alt: blueprintMeta.image5.node.altText,
				width: blueprintMeta.image5.node.title.split("×")[0],
				height: blueprintMeta.image5.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image6 !== null) {
			images.push({
				src: blueprintMeta.image6.node.sourceUrl,
				alt: blueprintMeta.image6.node.altText,
				width: blueprintMeta.image6.node.title.split("×")[0],
				height: blueprintMeta.image6.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image7 !== null) {
			images.push({
				src: blueprintMeta.image7.node.sourceUrl,
				alt: blueprintMeta.image7.node.altText,
				width: blueprintMeta.image7.node.title.split("×")[0],
				height: blueprintMeta.image7.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image8 !== null) {
			images.push({
				src: blueprintMeta.image8.node.sourceUrl,
				alt: blueprintMeta.image8.node.altText,
				width: blueprintMeta.image8.node.title.split("×")[0],
				height: blueprintMeta.image8.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image9 !== null) {
			images.push({
				src: blueprintMeta.image9.node.sourceUrl,
				alt: blueprintMeta.image9.node.altText,
				width: blueprintMeta.image9.node.title.split("×")[0],
				height: blueprintMeta.image9.node.title.split("×")[1],
			});
		}
		if (blueprintMeta.image10 !== null) {
			images.push({
				src: blueprintMeta.image10.node.sourceUrl,
				alt: blueprintMeta.image10.node.altText,
				width: blueprintMeta.image10.node.title.split("×")[0],
				height: blueprintMeta.image10.node.title.split("×")[1],
			});
		}

		blueprints.push({
			id: blueprint.node.id,
			subtitle: blueprintMeta.subtitle,
			slug: blueprint.node.slug,
			isHighlighted: blueprintMeta.isHighlighted,
			price: blueprintMeta.price,
			description: blueprintMeta.description,
			content: blueprint.node.content,
			title: blueprint.node.title,
			highlightedImage: {
				src: blueprintMeta.highlighted_image.node.sourceUrl,
				alt: blueprintMeta.highlighted_image.node.altText,
				width: blueprintMeta.highlighted_image.node.title.split("×")[0],
				height: blueprintMeta.highlighted_image.node.title.split("×")[1]
			},
			images,
			type: blueprintMeta.type[0],
			squarem: blueprintMeta.squarem,
			floors: blueprintMeta.floors,
			rooms: {
				rooms: blueprintMeta.rooms,
				livingroom: blueprintMeta.livingroom,
				bathroom: blueprintMeta.bathroom,
				wc: blueprintMeta.wc
			},
			features: {
				hasAttic: blueprintMeta.hasAttic,
				hasBasement: blueprintMeta.hasBasement,
				hasGarage: blueprintMeta.hasGarage
			},
			youtubeVideoURL: blueprintMeta.youtubeVideoURL
		}); 
	});

	return blueprints;
}

/**
 * Get all images from the WordPress API.
 * @returns Returns `Promise<Array<Image>>` from the data fethed from the WordPress API.
 */
export async function getAllImages(): Promise<Array<Image>> {
	const data = await fetchAPI(`
		{
			mediaItems(first: ${ process.env.API_GET_IMAGE_NUMBER_LIMIT }) {
				edges {
					node {
						id
						title
						altText
						sourceUrl
					}
				}
			}
		}
	`);	

	let images: Array<Image> = [];
	data.mediaItems.edges.map(async (image: any) => {
		const width = image.node.title.split("×")[0] ?? 0;
		const height = image.node.title.split("×")[1] ?? 0;

		images.push({
			alt: image.node.altText,
			src: image.node.sourceUrl,
			width: width,
			height: height,
		});
	});

	return images;
}

/**
 * Get all partners from the WordPress API.
 * @returns Returns `Promise<Array<Post>>` from the data fethed from the WordPress API.
 */
export async function getAllPartners() {
	const data = await fetchAPI(`
		{
			partners(first: ${ process.env.API_GET_PARTNER_NUMBER_LIMIT }) {
				edges {
					node {
						id
						title
						partnerMeta {
							link
							image {
								node {
									sourceUrl
									altText
									title
								}
							}
						}
					}
				}
			}
		}
	`);	

	let partners: Array<Partner> = [];
	data.partners.edges.map((partner: any) => {		
		const partnerMeta = partner.node.partnerMeta;
		
		partners.push({
			name: partner.node.title,
			id: partner.node.id,
			image: {
				alt: partnerMeta.image.node.altText,
				src: partnerMeta.image.node.sourceUrl,
				width: partnerMeta.image.node.title.split("×")[0] ?? 0,
				height: partnerMeta.image.node.title.split("×")[1] ?? 0,
			},
			link: partner.node.partnerMeta.link,
		});
	});

	return partners;
}

/**
 * Get all images from the WordPress API.
 * @returns Returns `Promise<Array<Image>>` from the data fethed from the WordPress API.
 */
export async function getAllPages() {
	type Page = {
		title: string,
		content?: string,
		lastEdit?: string
	}

	const data = await fetchAPI(`
		{
			customPages(first:100) {
				edges {
					node {
						title
						content
						modifiedGmt
					}
				}
			}
		}
	`);

	let pages: Array<Page> = [];
	data.customPages.edges.map((page: any) => {
		pages.push({
			title: page.node.title,
			content: page.node.content,
			lastEdit: page.node.modifiedGmt
		});
	});

	return pages;
}

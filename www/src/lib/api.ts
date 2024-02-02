import { API_FETCH_REVALIDATE } from "../../config";
import { Blueprint } from "@/types/Blueprint";
import { Photo } from "@/types/Photo";

const API_URL = process.env.WORDPRESS_API_URL!;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
	type HeaderType = {"Content-Type": string, "Authorization"?: string};

	const headers: HeaderType = { "Content-Type": "application/json" };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	// WPGraphQL Plugin must be enabled
	const res = await fetch(API_URL, {
		headers,
		next: {
			revalidate: API_FETCH_REVALIDATE
		},
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error("Failed to fetch API");
	}

	return json.data;
}

export async function getAllBlueprints() {
	const data = await fetchAPI(`
		{
			blueprints {
				edges {
					node {
						id
						title
						content
							blueprintMeta {
								price
								isHighlighted
								imageURL {
									node {
										sourceUrl
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
						}
					}
				}
			}
		}
	`);

	let blueprints: Array<Blueprint> = [];
	data.blueprints.edges.map((blueprint: any) => {
		blueprints.push({
			id: blueprint.node.id,
			isHighlighted: blueprint.node.blueprintMeta.isHighlighted,
			price: blueprint.node.blueprintMeta.price,
			description: blueprint.node.content,
			title: blueprint.node.title,
			imageURL: blueprint.node.blueprintMeta.imageURL.node.sourceUrl,
			type: blueprint.node.blueprintMeta.type[0],
			squarem: blueprint.node.blueprintMeta.squarem,
			floors: blueprint.node.blueprintMeta.floors,
			rooms: {
				rooms: blueprint.node.blueprintMeta.rooms,
				livingroom: blueprint.node.blueprintMeta.livingroom,
				bathroom: blueprint.node.blueprintMeta.bathroom,
				wc: blueprint.node.blueprintMeta.wc
			},
			features: {
				hasAttic: blueprint.node.blueprintMeta.hasAttic,
				hasBasement: blueprint.node.blueprintMeta.hasBasement,
				hasGarage: blueprint.node.blueprintMeta.hasGarage
			}
		}); 
	});

	return blueprints;
}

export async function getImages() {
	const data = await fetchAPI(`
		{
			mediaItems {
				edges {
					cursor
					node {
						id
						title
						altText
						sourceUrl
						mediaType
					}
				}
			}
		}
	`);	

	let photos: Array<Photo> = [];
	data.mediaItems.edges.map(async (photo: any) => {		
		photos.push({
			title: photo.node.altText,
			alt: photo.node.altText,
			src: photo.node.sourceUrl,
			width: photo.node.title.split("×")[0] ?? 16,
			height: photo.node.title.split("×")[1] ?? 9
		});
	});

	return photos;
}

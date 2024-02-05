import { API_FETCH_REVALIDATE } from "../../config";
import { Blueprint } from "@/types/Blueprint";
import { Partner } from "@/types/Partner";
import { Photo } from "@/types/Photo";
import { Post } from "@/types/Post";

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

export async function getAllPost() {
	const data = await fetchAPI(`
		{
			customPosts {
				edges {
					node {
						id
						title
						slug
						content
						dateGmt
						postMeta {
							isHighlighted
							highlighted_imageURL {
								node {
									srcSet
									sourceUrl
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
		posts.push({
			id: post.node.id,
			isHighlighted: post.node.postMeta.isHighlighted,
			slug: post.node.slug,
			description: post.node.description,
			title: post.node.title,
			imageURL: post.node.postMeta.highlighted_imageURL.node.sourceUrl,
			imageSrcSet: post.node.postMeta.highlighted_imageURL.node.imageSrcSet,
			content: post.node.content
		}); 
	});

	return posts;
}

export async function getAllBlueprint() {
	const data = await fetchAPI(`
		{
			blueprints {
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
							imageURL {
								node {
									sourceUrl
								}
							}
							image1 {
								node {
									sourceUrl
								}
							}
							image2 {
								node {
									sourceUrl
								}
							}
							image3 {
								node {
									sourceUrl
								}
							}
							image4 {
								node {
									sourceUrl
								}
							}
							image5 {
								node {
									sourceUrl
								}
							}
							image6 {
								node {
									sourceUrl
								}
							}
							image7 {
								node {
									sourceUrl
								}
							}
							image8 {
								node {
									sourceUrl
								}
							}
							image9 {
								node {
									sourceUrl
								}
							}
							image10 {
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
							youtubeVideoURL
						}
					}
				}
			}
		}
	`);

	let blueprints: Array<Blueprint> = [];
	data.blueprints.edges.map((blueprint: any) => {
		const blueprintMeta =blueprint.node.blueprintMeta;
		blueprints.push({
			id: blueprint.node.id,
			subtitle: blueprintMeta.subtitle,
			slug: blueprint.node.slug,
			isHighlighted: blueprintMeta.isHighlighted,
			price: blueprintMeta.price,
			description: blueprintMeta.description,
			content: blueprint.node.content,
			title: blueprint.node.title,
			imageURL: blueprintMeta.imageURL.node.sourceUrl,
			images: [
				blueprintMeta.image1 !== null ? blueprintMeta.image1.node.sourceUrl : null,
				blueprintMeta.image2 !== null ? blueprintMeta.image2.node.sourceUrl : null,
				blueprintMeta.image3 !== null ? blueprintMeta.image3.node.sourceUrl : null,
				blueprintMeta.image4 !== null ? blueprintMeta.image4.node.sourceUrl : null,
				blueprintMeta.image5 !== null ? blueprintMeta.image5.node.sourceUrl : null,
				blueprintMeta.image6 !== null ? blueprintMeta.image6.node.sourceUrl : null,
				blueprintMeta.image7 !== null ? blueprintMeta.image7.node.sourceUrl : null,
				blueprintMeta.image8 !== null ? blueprintMeta.image8.node.sourceUrl : null,
				blueprintMeta.image9 !== null ? blueprintMeta.image9.node.sourceUrl : null,
				blueprintMeta.image10 !== null ? blueprintMeta.image10.node.sourceUrl : null,
			].filter((string) => { return string !== null; }),
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


export async function getAllImage() {
	const data = await fetchAPI(`
		{
			mediaItems(first: 500) {
				edges {
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
			width: photo.node.title.split("×")[0] ?? 0,
			height: photo.node.title.split("×")[1] ?? 0
		});
	});

	return photos;
}

export async function getAllPartner() {
	const data = await fetchAPI(`
		{
			partners {
				edges {
					node {
						id
						title
						partnerMeta {
							link
							imageURL {
								node {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
	`);	

	let partners: Array<Partner> = [];
	data.partners.edges.map(async (partner: any) => {		
		partners.push({
			name: partner.node.title,
			id: partner.node.id,
			imageURL: partner.node.partnerMeta.imageURL.node.sourceUrl,
			link: partner.node.partnerMeta.link
		});
	});

	return partners;
}

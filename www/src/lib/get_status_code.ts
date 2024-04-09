"use server";

type getStatusCodeParams = {
	url: string
}

/**
 * A function to check the http status code of a given website.
 * @param url The url of the website to get the status code from.
 */
export default async function getStatusCode(
	{url} : getStatusCodeParams
) : Promise<number> {
	const data = await fetch(
		url,
		{ method: "get" , cache:"no-store" , headers: {
		"Cache-Control": "no-cache"
	}});

	return data.status;
}

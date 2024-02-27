//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	youTubeVideoURL: string
}

/**
 * A YouTube video embeder
 * @param youTubeVideo The YouTube video you want to embed. 
 * @returns The given YouTube video embeded.
 */
export default function YouTubeEmbed(params: Params) {
	return (
			<iframe
				id="youtube-embed"
				className="w-full h-full rounded-lg"
				src={ params.youTubeVideoURL }
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
				gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
	);
}

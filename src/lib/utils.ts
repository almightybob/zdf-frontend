export function getCloudinaryRectUrl(url: string) {
	return getCloudinaryTransformUrl(url, 700, 500);
}

export function getCloudinarySquareUrl(url: string) {
	return getCloudinaryTransformUrl(url, 500, 500);
}

export function getCloudinaryTransformUrl(url: string, width: number, height: number) {
	// https://res.cloudinary.com/habakuku/image/upload/v1662131261/pexels_jackson_david_2868441_13ad38c013.jpg
	const base = url.substring(0, url.indexOf('upload/') + 7);
	const image = url.substring(url.indexOf('upload/') + 7);
	return base + '/c_fill,w_' + width + ',h_' + height + '/' + image;
}

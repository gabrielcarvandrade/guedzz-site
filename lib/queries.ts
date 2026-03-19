export const releasesQuery = `*[_type == "release"] | order(year desc) {
  "id": _id,
  title,
  type,
  year,
  "coverImage": coverImage.asset->url,
  spotifyUrl,
  soundcloudUrl,
  description,
  bpm,
  genre
}`;

export const eventsQuery = `*[_type == "event"] | order(date asc) {
  "id": _id,
  title,
  date,
  venue,
  city,
  ticketUrl,
  past
}`;

export const productsQuery = `*[_type == "product"] | order(name asc) {
  "id": _id,
  name,
  "slug": slug.current,
  price,
  "images": images[].asset->url,
  sizes,
  description,
  featured,
  category
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  "id": _id,
  name,
  "slug": slug.current,
  price,
  "images": images[].asset->url,
  sizes,
  description,
  featured,
  category
}`;

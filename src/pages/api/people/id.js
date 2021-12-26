// import { people } from '../../../data';

// export default function personHandler({ query: { slug } }, res) {
// 	const filtered = people.filter((p) => p.slug === slug);

// 	// User with slug exists
// 	if (filtered.length > 0) {
// 		res.status(200).json(filtered[0]);
// 	} else {
// 		res.status(404).json({ message: `User with slug: ${slug} not found.` });
// 	}
// }

import Link from 'next/link';

export default function Person({ person }) {
	return (
		<li>
			<Link href='/[slug]' as={`/${person.slug}`}>
				<a>{person.name}</a>
			</Link>
		</li>
	);
}

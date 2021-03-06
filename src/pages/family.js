import useSWR from 'swr';
import Person from '../components/Person';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Family() {
	const { data, error } = useSWR('/api/people', fetcher);
	console.log(data);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<ul>
			{data.map((p, i) => (
				<Person key={i} person={p} />
			))}
		</ul>
	);
}

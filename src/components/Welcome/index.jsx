export default function Welcome({ name }) {
	if (name === "Test") {
		return (<div>Coucou! </div>);
	}

	return (<div>Welcome {name}</div>);
}
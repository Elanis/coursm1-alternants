import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Counter from "../../components/Counter";

export default function Home() {
	const data = useMemo(() => [
		{
			id: 1,
			name: 'Axel',
			isActive: true
		},
		{
			id: 2,
			name: 'Foo',
			isActive: true
		},
		{
			id: 3,
			name: 'Bar',
			isActive: false
		}
	], []);
	const { t } = useTranslation();

	if (data.length === 0) {
		return (<span>J'ai pas de données</span>);
	}

	return (
		<>
			<span>{t('home:welcome-react')}</span>
			<Counter />
			<ul>
				{data.map((item) =>
					<li key={item.id}>
						<span>{item.name}</span>
						{item.isActive && <b>Actif</b>}
					</li>
				)}
			</ul>
		</>
	);
}
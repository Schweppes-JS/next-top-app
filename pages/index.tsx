import { useState } from "react";
import axios from "axios";

import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

const Home = ({ menu, asd }: HomeProps): JSX.Element => {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Text</Htag>
			<Button appearance="primary" className="dsdasf" arrow="right">
				Button
			</Button>
			<Button appearance="ghost" arrow="right">
				Button
			</Button>
			<P size="l">big</P>
			<P>Midle</P>
			<P size="s">Smole</P>
			<Tag size="s">Little</Tag>
			<Tag size="m" color="red">
				Little
			</Tag>
			<Tag size="s" color="red">
				Red
			</Tag>
			<Tag size="s" color="green">
				Green
			</Tag>
			<Tag color="primary">Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
		firstCategory,
	});
	return {
		props: { menu, firstCategory, asd: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)) },
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

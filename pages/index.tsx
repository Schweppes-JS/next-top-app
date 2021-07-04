import { Htag, Button, P, Tag, Rating } from "../components";

const Index = (): JSX.Element => {
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
			<Rating rating={4} />
		</>
	);
};

export default Index;

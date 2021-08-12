import cn from "classnames";

import { useState } from "react";
import { SearchProps } from "./Search.props";
import { useRouter } from "next/router";
import styles from "./Search.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import GlassIcon from "./glass.svg";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSeatch] = useState<string>("");
	const router = useRouter();

	const goToSearch = () => {
		router.push({ pathname: "/search", query: { q: search } });
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSeatch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button appearance="primary" className={styles.button} onClick={goToSearch}>
				<GlassIcon />
			</Button>
		</div>
	);
};

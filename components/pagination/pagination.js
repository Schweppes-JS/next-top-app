import { Fragment } from "react";
import { useState } from "react";

import styles from "./pagination.module.scss";

const Pagination = ({ pagiantionRange = 19, uniqueStyles }) => {
	const [activePages, setActivePages] = useState([1]);
	console.log(activePages);

	const goToPreviousPage = () => {
		activePages[activePages.length - 1] > 1 && setActivePages([activePages[activePages.length - 1] - 1]);
	};

	const changeActivePage = (nextPage) => {
		setActivePages([nextPage]);
	};

	const goToNextPage = () => {
		activePages[activePages.length - 1] < pagiantionRange && setActivePages([activePages[activePages.length - 1] + 1]);
	};

	const insertDots = (index) => {
		if (activePages[activePages.length - 1] < pagiantionRange - 3 && activePages[activePages.length - 1] < pagiantionRange - 4) {
			return (
				<>
					<li
						className={`${styles.item} ${activePages.includes(index + 1) ? styles.active : ""}`}
						onClick={() => changeActivePage(activePages[activePages.length - 1] + 3)}
					>
						<span className={styles.integer}>...</span>
					</li>
				</>
			);
		}
	};

	const renderRangeAfterActive = (index) => {
		if (
			(index < activePages[activePages.length - 1] + 2 && index + 1 >= activePages[activePages.length - 1]) ||
			index + 1 === pagiantionRange ||
			(index + 2 === pagiantionRange && activePages[activePages.length - 1] + 4 === pagiantionRange)
		) {
			return (
				<li
					className={`${styles.item} ${activePages.includes(index + 1) ? styles.active : ""}`}
					onClick={() => changeActivePage(index + 1)}
				>
					<span className={styles.integer}>{index + 1}</span>
				</li>
			);
		}
	};

	const renderRangeBeforeActive = () => {
		const rangeBeforeActive = activePages[activePages.length - 1] + 4 - pagiantionRange;
		console.log(rangeBeforeActive);
		return (
			<>
				{[...Array(rangeBeforeActive).keys()].reverse().map((pageNumber) => (
					<li className={`${styles.item}`} onClick={() => changeActivePage(activePages[activePages.length - 1] - (pageNumber + 1))}>
						<span className={styles.integer}>{activePages[activePages.length - 1] - (pageNumber + 1)}</span>
					</li>
				))}
			</>
		);
	};

	return (
		<ul className={`${styles.list} ${uniqueStyles}`}>
			{pagiantionRange > 6 && (
				<button className={`${styles.button} ${styles.item}`} onClick={goToPreviousPage}>
					<Arrow />
				</button>
			)}
			{activePages[activePages.length - 1] + 3 >= pagiantionRange && renderRangeBeforeActive()}
			{[...Array(pagiantionRange)].map((pageNumber, index) => (
				<Fragment key={index}>
					{index === pagiantionRange - 1 && insertDots(index)}
					{pagiantionRange > 6 && renderRangeAfterActive(index)}
				</Fragment>
			))}
			{pagiantionRange > 6 && (
				<button className={`${styles.button} ${styles.item}`} onClick={goToNextPage}>
					<Arrow />
				</button>
			)}
		</ul>
	);
};

const Arrow = () => (
	<svg className={styles.arrow} width="20" height="20" viewBox="0 0 20 20" fill="#FE5E2D" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.8329 16.3272C11.4187 16.913 11.4187 17.8628 10.8329 18.4485C10.2471 19.0343 9.29733 19.0343 8.71155 18.4485L10.8329 16.3272ZM2.20076 9.81638L1.1401 10.877L0.0794409 9.81638L1.1401 8.75572L2.20076 9.81638ZM8.71158 1.18424C9.29737 0.59845 10.2471 0.59845 10.8329 1.18424C11.4187 1.77002 11.4187 2.71977 10.8329 3.30556L8.71158 1.18424ZM8.71155 18.4485L1.1401 10.877L3.26142 8.75572L10.8329 16.3272L8.71155 18.4485ZM1.1401 8.75572L8.71158 1.18424L10.8329 3.30556L3.26142 10.877L1.1401 8.75572Z" />
	</svg>
);

export default Pagination;

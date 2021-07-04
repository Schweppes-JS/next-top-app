import { useEffect, useState, KeyboardEvent } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";
import StarIcon from "./Star.tsx";
import styles from "./Rating.module.css";

export const Rating = ({ isEditable = true, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRattingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, { [styles.filled]: i < currentRating, [styles.editable]: isEditable })}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					key={i}
				>
					<StarIcon onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)} tabIndex={isEditable ? 0 : -1} />
				</span>
			);
		});
		setRattingArray(updatedArray);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		e.code === "Space" && setRating && setRating(i);
	};

	const changeDisplay = (i: number) => {
		isEditable && constructRating(i);
	};

	const onClick = (i: number) => {
		isEditable && setRating && setRating(i);
	};

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};

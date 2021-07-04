import { useEffect, useState } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";
import StarIcon from "./Star.tsx";
import styles from "./Rating.module.css";

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRattingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return <StarIcon className={cn(styles.star, { [styles.filled]: i < currentRating })} key={i} />;
		});
		setRattingArray(updatedArray);
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

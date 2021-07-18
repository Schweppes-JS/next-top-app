import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem } from "../../interfaces/menu.interface";
import CoursesIcon from "../../helpers/icons/courses.svg";
import ServicesIcon from "../../helpers/icons/services.svg";
import BooksIcon from "../../helpers/icons/books.svg";
import ProductsIcon from "../../helpers/icons/products.svg";
import styles from "./Menu.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from "classnames";

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: "services", name: "Сервисы", icon: <CoursesIcon />, id: TopLevelCategory.Services },
	{ route: "books", name: "Книги", icon: <CoursesIcon />, id: TopLevelCategory.Books },
	{ route: "products", name: "Продукты", icon: <CoursesIcon />, id: TopLevelCategory.Products },
];

const Menu = (): JSX.Element => {
	const { menu, setmenu, firstCategory } = useContext(AppContext);
	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: menu.id === firstCategory,
								})}
							>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
					</div>
				))}
			</>
		);
	};
	// const buildSecondLevel = () => {};
	// const buildThirdLevel = () => {};
	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;

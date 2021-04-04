import React, {
	FunctionComponent,
	useContext,
	useState,
	useEffect,
} from "react";
import { Link } from "gatsby";

import * as styles from "./MenuItem.module.styl";
import { SubMenu } from "../SubMenu";
import { Context } from "@/context";
import { Icon, className } from "@/utils";

export const MenuItem: FunctionComponent<MenuItem> = props => {
	const {
		id,
		page_id,
		title,
		submenu_is_open,
		is_active,
		sibling_is_active,
		path,
	} = props;

	const is_page = page_id !== "";

	const { menu, setMenu } = useContext(Context);

	const [submenu, setSubmenu] = useState<Menu>([]);

	const toggleSubmenu = () => {
		setMenu(menu =>
			menu.map(item => {
				if (item.id !== id) {
					return item;
				}

				return {
					...item,
					submenu_is_open: !item.submenu_is_open,
				};
			})
		);
	};

	useEffect(() => {
		const submenu = menu.filter(
			item => item.path.join("/") === [...path, id].join("/")
		);

		setSubmenu(submenu);
	}, [menu]);

	return (
		<li className={styles.container}>
			<div
				className={className({
					[styles.header]: true,
					[styles.is_active]: is_active,
					[styles.sibling_is_active]: sibling_is_active,
					[styles.is_root]: path.length === 0,
				})}
			>
				{is_page && (
					<Link
						className={styles.link}
						to={`/${page_id === "home" ? "" : page_id}`}
					>
						<span>{title}</span>
					</Link>
				)}

				{!is_page && (
					<div className={styles.link}>
						<span>{title}</span>
					</div>
				)}

				{!!submenu.length && (
					<button
						onClick={toggleSubmenu}
						className={styles.button}
						aria-label="Toggle submenu"
					>
						<Icon icon={submenu_is_open ? "collapse" : "expand"} />
					</button>
				)}
			</div>

			{!!submenu.length && (
				<SubMenu items={submenu} is_open={submenu_is_open} />
			)}
		</li>
	);
};

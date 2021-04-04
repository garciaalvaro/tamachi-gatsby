import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

import * as styles from "./HomeList.module.styl";

interface Props {
	items: { id: PageId; title: PageTitle }[];
}

export const HomeList: FunctionComponent<Props> = props => {
	const { items } = props;

	return (
		<ul className={styles.container}>
			{[...items].map(({ id, title }) => (
				<li key={id} className={styles.item}>
					{id === "home" ? (
						<h1>
							<Link to="/">{title}</Link>
						</h1>
					) : (
						<Link to={`/${id}`}>{title}</Link>
					)}
				</li>
			))}
		</ul>
	);
};

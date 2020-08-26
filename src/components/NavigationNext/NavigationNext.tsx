import React, {
	FunctionComponent,
	useEffect,
	useState,
	useContext,
} from "react";
import { Link } from "gatsby";

import styles from "./NavigationNext.module.styl";
import { Context } from "@/context";

export const NavigationNext: FunctionComponent = () => {
	const { menu } = useContext(Context);

	const [next_item, setNextItem] = useState<PageLink | null>();

	useEffect(() => {
		const active_item_index = menu.findIndex(({ is_active }) => is_active);
		const active_item = menu[active_item_index];
		const active_item_path = active_item?.path.join("/");
		const next_item = menu[active_item_index + 1];
		const next_item_path = next_item?.path.join("/");

		if (!next_item || !active_item) {
			setNextItem(null);

			return;
		}

		const next_is_sibling = active_item_path === next_item_path;

		const next_is_first_child = active_item_path
			? `${active_item_path}/${active_item.id}` === next_item_path
			: active_item.id === next_item_path;

		if (next_is_sibling || next_is_first_child) {
			setNextItem(next_item);
		} else {
			setNextItem(null);
		}
	}, [menu]);

	if (!next_item || !next_item.page_id) {
		return null;
	}

	return (
		<div className={styles.container}>
			<span className={styles.label}>Next</span>

			<Link to={`/${next_item.page_id}`} className={styles.link}>
				{next_item.title}
			</Link>
		</div>
	);
};

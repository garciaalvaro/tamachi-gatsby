import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

interface Props {
	page_id: PageId;
	title: PageTitle;
	use_span: boolean;
}

export const NavigationBreadcrumbsItem: FunctionComponent<Props> = props => {
	const { page_id, title, use_span } = props;

	return (
		<li>
			{use_span ? (
				<span>{title}</span>
			) : (
				<Link to={`/${page_id}`}>{title}</Link>
			)}
		</li>
	);
};

import React, { FunctionComponent } from "react";

import * as styles from "./LinkList.module.styl";

export const LinkList: FunctionComponent = props => {
	return <div className={styles.container}>{props.children}</div>;
};

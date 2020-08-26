import { createContext } from "react";

export const initial_props: ContextProps = {
	menu: [],
	setMenu: () => null,
	path: "",
	color: "light",
	setColor: () => null,
};

export const Context = createContext<ContextProps>(initial_props);

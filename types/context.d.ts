interface ContextProps {
	menu: Menu;
	setMenu: React.Dispatch<React.SetStateAction<Menu>>;
	path: string;
	color: Color;
	setColor: (color: Color) => void;
}

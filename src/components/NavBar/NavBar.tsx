import { FC } from 'react';
import { NavBarWrapper } from './NavBar.style';

type NavBarProps = {}

const NavBar: FC<NavBarProps> = () => {
	return (
		<NavBarWrapper data-testid="NavBar">
			NavBar Component
		</NavBarWrapper>
	);
};

export default NavBar;

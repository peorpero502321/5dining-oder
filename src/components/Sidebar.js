import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import styled from 'styled-components';

const Side = styled.div`
	display: flex;
	border-right: 1px solid #e0e0e0;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 30%;
`;

const Menu = styled.div`
	margin-top: 30px;
	width: 200px;
	display: flex;
	flex-direction: column;
`;

function Sidebar() {
	const menus = [
		{ name: 'Home', path: '/' },
		{ name: 'Pasta & Steack', path: '/food' },
		{ name: 'Drink', path: '/drink' },
		{ name: 'Beer', path: '/beer' },
		{ name: 'Coktail', path: '/coktail' },
		{ name: 'Wine', path: '/wine' },
	];
	return (
		<Side>
			<Menu>
				{menus.map((menu, index) => {
					return (
						<NavLink
							exact
							style={{ color: 'gray', textDecoration: 'none' }}
							to={menu.path}
							key={index}
							activeStyle={{ color: 'black' }}>
							<SidebarItem menu={menu} />
						</NavLink>
					);
				})}
			</Menu>
		</Side>
	);
}

export default Sidebar;

import Item from '../components/Item';
import menu from '../json/food.json';

console.log(menu.파스타);

function Food() {
	return (
		<div>
			{menu.파스타.map((pasta, index) => (
				<Item
					key={index}
					img={pasta.img}
					name={pasta.name}
					text={pasta.text}
					cost={pasta.cost}
				/>
			))}
		</div>
	);
}

export default Food;

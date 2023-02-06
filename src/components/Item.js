const itemstyle = {
	height: '20vw',
	width: '68vw',
	border: '1px solid lightgrey',
	borderRadius: '30px',
};

const imagestyle = {
	height: '20vw',
	width: '20vw',
	borderRadius: '30px',
};

function Item({ img, name, text, cost }) {
	return (
		<div style={itemstyle}>
			<table>
				<tbody>
					<tr>
						<td rowSpan={3}>
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/${img}.jpg`}
								alt='React'
								style={imagestyle}></img>
						</td>
						<td>
							<span>
								<b>{name}</b>
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>{text}</span>
						</td>
					</tr>
					<tr>
						<td> cost: {cost} \</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Item;

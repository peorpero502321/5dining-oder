const imagestyle = {
	height: '100%',
	width: '68vw',
	borderRadius: '30px',
};

function Home() {
	return (
		<div>
			<img
				src={`${process.env.PUBLIC_URL}/assets/img/1.jpg`}
				alt='React'
				style={imagestyle}></img>
		</div>
	);
}

export default Home;

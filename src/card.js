import React from 'react';

//Destructuring the input so that the properties can be used directly
const Card = ({ name, email, id }) => {

	return(

		<div className = 'tc bg-light-green dib br3 ps3 ma2 grow bw2 shadow-5'>
			<img alt='Robot' src= {`http://robohash.org/${id}?set=set3`} />
			<div>

				<h2>{name}</h2>
				<p>{email}</p>

			</div>

		</div>

	);

}

export default Card;
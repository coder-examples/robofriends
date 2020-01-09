import React from 'react';

const GoodScroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
}

export default GoodScroll;
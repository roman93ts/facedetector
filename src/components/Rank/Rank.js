import React from 'react';

const Rank = ({name, entries}) =>{
	return (
		<div>
			<p className='f3 white'>
				{`${name}, your current number of scanned images is `}
				<span className='f2 white'>
					{entries}	
				</span>
			</p>
		</div>
	);
}

export default Rank;
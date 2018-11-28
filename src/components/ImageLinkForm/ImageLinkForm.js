import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
	return (
		<div>
			<p className="f3">
				{'This application will try to detect a face in your picture'}
			</p>
			<div className='linkForm shadow-5 center'>
				<input className="field" type='text' placeholder='type url here' onChange={onInputChange}/> 
				<button className="click grow pointer" onClick={onButtonSubmit}>
					{'Detect'}
				</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;

// onClick и onChange - стандартные html атрибуты
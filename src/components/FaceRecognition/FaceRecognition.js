import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box,imageURL }) =>{
	return (
		<div className='faceBox ma'>
      		<div className='relative mt2'>
        		<img id='faceID' alt='' src={imageURL} width='700px' heigh='auto'/>
        		<div className='bounding-box' style={{
        			top: box.topRow, 
        			right: box.rightCol, 
        			bottom: box.bottomRow, 
        			left: box.leftCol}}>
        		</div>
      		</div>
   		 </div>
	);
}

export default FaceRecognition;
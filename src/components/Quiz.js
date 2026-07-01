import Question from './Question';

const Quiz = () => {
	return (
		<div className='quiz'>
			<div>
				<div className='score'>Question 1/8</div>
				<Question />
				<div className='next-button'>NEXT QUESTION</div>
			</div>
		</div>
	);
};

export default Quiz;

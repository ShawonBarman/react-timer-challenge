import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const forDialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    console.log(timeRemaining);
    console.log(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000);
    console.log(timeIsActive);

    if (timeRemaining <= 0){
        forDialog.current.open();
        clearInterval(timer.current);
    }
    
    const handleTimer = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    const handleReset = () => {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
    }

    const handleStoper = () => {
        forDialog.current.open();
        clearInterval(timer.current);
    }
  return (
    <>
        
        <ResultModal ref={forDialog} targetTime={targetTime} remainingTime={timeRemaining} onClose={handleReset} />
        <section className='challenge'>
            <h2> {title} </h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's': ''}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStoper : handleTimer}>
                    {timeIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeIsActive ? 'active' : ''}>
                {timeIsActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    </>
  )
}

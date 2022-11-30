import React, {useState, useEffect} from 'react'

export default function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 1), 1000)
		}
	},[filled, isRunning])
  return (
	  <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
      <div className='div-btn'>
    <button className='btn' onClick={()=> setIsRunning(true)}>Run</button>
    <button className='btn' onClick={()=> setIsRunning(false)}>Stop</button>
    <button className='btn' onClick={()=> setFilled(0)}>Restart</button>
  </div> 
	</div>
  )
}


 
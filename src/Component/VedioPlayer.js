import { useRef, useState } from 'react';
import vedio from './radhe.mp4'

function VedioPlayer() {
  

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <h2>Vedio player</h2>
      <div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      </div>
      <video width="520" height="240" src={vedio} autoSave autoPlay  ref={videoRef} controls>
        {/* <source src={vedio}/> */}
      </video>
    </div>
  );
}

export default VedioPlayer;
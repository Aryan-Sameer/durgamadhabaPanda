import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio("/spiderman-meme-song.mp3");
      audio.play().catch(error => {
        console.log("Autoplay blocked, will wait for user interaction.");
      });
    };

    playAudio();

    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => document.removeEventListener('click', handleUserInteraction);
  }, []);

  return (
    <main className='main'>
      <Spline scene="https://prod.spline.design/FpuWYfiE2UJxfxS4/scene.splinecode" />
    </main>
  )
}

export default App

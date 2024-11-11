import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spline from '@splinetool/react-spline';
import Card from 'react-bootstrap/Card';

function App() {

  const [passInput, setPassInput] = useState(true)
  const [showMain, setShowMain] = useState(false)
  const [password, setPassword] = useState("")

  const music = () => {
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

    setPassInput(false)
    setShowMain(true)

  }

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <main className='main'>

      {passInput ? <div className='password'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Enter Password</Card.Title>
            <Form.Floating>
              <Form.Control
                onChange={e => handleChange(e)}
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                value={password}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button onClick={music} disabled={password == "123578" ? false : true} variant="secondary">Open</Button>
          </Card.Body>
        </Card>
      </div > : ""}

      {showMain ? <div className='main'>
        <Spline scene="https://prod.spline.design/FpuWYfiE2UJxfxS4/scene.splinecode" />
      </div> : ""}

    </main>
  )
}

export default App

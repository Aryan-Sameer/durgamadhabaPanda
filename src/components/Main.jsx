import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';

const Main = () => {

    const [entered, setEntered] = useState(false)

    const handleEnter = () => {
        setEntered(true)
        const audio = new Audio("./assets/spiderman.mp3")
        audio.play()
        sessionStorage.setItem("user", true)
    }

    const user = sessionStorage.getItem("user")

    return (
        <main>

            {!entered && <div>
                <button onClick={handleEnter} className='enter'>Enter The Multiverse</button>
            </div>}

            {entered && <div className='main'>
                <Spline scene="https://prod.spline.design/FpuWYfiE2UJxfxS4/scene.splinecode" />
            </div>}
        </main>
    )
}

export default Main

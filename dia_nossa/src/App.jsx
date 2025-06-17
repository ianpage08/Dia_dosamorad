import './styles/main.scss'
import StarBackground from './components/StarBackground'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import MusicPlayer from './components/MusicPlayer';
import Galeria from './components/LoveLatter';
import Quiz from './components/Quiz';
import Load from './components/Load';






function App() {
  

  return (
    <>
    <StarBackground/>
    <MusicPlayer/>
    <Galeria/>
    <Quiz/>
    <Load/>

    </>
  )
}

export default App

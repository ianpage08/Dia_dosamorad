import { useState } from 'react';
import carta from '../assets/imagens_static/carta.png';
import icon from  '../assets/icons/coracao.png'

export default function StarBackground() {

  // Função para lidar com o clique na carta
  const [cartaVisible, setCartaVisible] = useState(false)

  const toglleClick = () => {
    setCartaVisible((prev) => !prev); // Alterna a visibilidade da carta
  }

  return (
    
      <div className="star-background scontainer">
        <div className="blur">
          <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className=" pt-4 animacao_text "><span className='animate__animated animate__pulse '>✨</span> Bem vinda, Meu Universo! <span>✨</span> </h1>
            </div>
            
              <div className="animate__fadeInLeftBig animate__animated d-flex justify-content-center align-items-center flex-column carta-container">
                <img src={carta} alt="carta" className="img-fluid carta-img carta " />
                <button onClick={toglleClick} className='btn-carta' > <img src={icon} alt="" /> </button>
                <div className={ ` ${cartaVisible ? 'carta-visible' :'carta-invisible'} `} >
                  <div className='carta-content'>
                    <h2 className="text-center ">Você é a estrela mais brilhante do meu universo! 🌟</h2>
                    <p className="text-center ">Neste dia especial, quero celebrar você e tudo o que você significa para mim. Que este aniversário seja repleto de amor, alegria e momentos inesquecíveis. Você merece todo o carinho do mundo! 💖</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </div>
      
    
    
  )
}

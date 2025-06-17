import foto1 from '../../public/assets/imagens/1.png'
import foto2 from '../../public/assets/imagens/2.png'
import foto3 from '../../public/assets/imagens/3.png'
import foto4 from '../../public/assets/imagens/4.png'
import foto5 from '../../public/assets/imagens/5.png'


export default function Galeria(){
    return(
        <>
        <section className="galeria">
            <div>
                <div>
                    <h1 className="text-center ">Galeria de Fotos</h1>
                    <p className="text-center">Aqui estão algumas fotos especiais do nosso dia juntos!</p>
                </div>
                <div className=" d-flex justify-content-center align-items-center flex-wrap gap-4 p-4 animate_galeria">
                    <img src={foto1} />
                    <img src={foto2} />
                    <img src={foto3} />
                </div>
                <div className=" d-flex justify-content-center align-items-center flex-wrap gap-4 p-4 animate_galeria">
                    <img src={foto4} />
                    <img src={foto5} />
                    <img src={foto2} />
                </div>
                <div className=" d-flex justify-content-center align-items-center flex-wrap gap-4 p-4 animate_galeria">
                    <img src={foto3} />
                    <img src={foto5} />
                    <img src={foto3} />
                </div>
            </div>
        </section>
        </>
    )
} 
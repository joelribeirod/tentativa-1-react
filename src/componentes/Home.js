import {useState} from 'react'

import NeutralA0000 from '../imagens/NeutralA0000.jpg'
import tempo from '../imagens/tempo.jpg'
import dois13 from '../imagens/dois13.jpg'
import jetso from '../imagens/jetso.jpg'

function Home(){
    const [image, setImage] = useState(null)
    const images = [
        {id: 1, src: tempo, alt: "imagem 1", desc: "O jogo possui um sistema discreto de climas, que muda com o proprio tempo do mundo. E em vários casos, cada mapa possui um clima mais proprício para acontecer"},
        {id: 2, src: dois13, alt: "imagem 2", desc: "Cada raça no jogo tem um Quartel General, onde todos os players começam no jogo, e duas aréas auxiliares"},
        {id: 3, src: jetso, alt: "imagem 3", desc: "Existem mapas mais hardcore que outros, onde possuem seus proprios bosses e monstros de nivel elevado, onde para caçar, o ideal é ter um grupo"}
    ]

    const clicou = (imagem) => {
        setImage(imagem)
    }

    const desclicou = () => {
        setImage(null)
    }


    return (
        <main id='mainHome'>
            
            <div id='caixacont'>
                <section id='caixa1'>
                    <h1>Surgimento</h1>
                    <p>
                        RF Online ou Rising Force Online (em coreano: 라이징 포스 온라인 RF온라인), é um MMORPG desenvolvido pela CCR Inc. A primeira versão do jogo foi lançada na Coreia do Sul, e depois traduzido para línguas chinesa, japonesa e inglesa. O lançamento da versão americana foi em 21 de fevereiro de 2006.
                        </p>

                    <img src={NeutralA0000} alt="teste" />
                    
                    <p>
                        No Brasil o jogo entrou na fase open beta dia 28 de novembro de 2006. O servidor brasileiro é de responsabilidade da empresa <a href="https://pt.wikipedia.org/wiki/Level_Up!_Games" target='blank'>Level Up! Games</a>, e teve o lançamento comercial no dia 1 de fevereiro de 2007 e término em 24 de novembro de 2011.[1] No dia 18 de abril de 2016 foi anunciado a sequência do jogo, intitulado RF Online 2.[2]
                        </p>
                </section>
                <section id='caixa2'>
                    <h2>Como funciona</h2>
                    <p>O jogo tem um sistema de 3 raças, onde cada uma tem como objetivo, Grind e CW. São elas:
                    </p>
                    <p><strong>Acreccia:</strong> Meio Humanos e meio Robôs que vieram de um mundo devastado por uma pandemia, tem como sua especialidade, a tecnologia e estão a procura de minerios raros</p>
                    
                    <p><strong>Bellato:</strong> Anões que usam magia, onde, por origem na já viviam no planeta em que a guerra acontece, e que se adaptaram a usar magia em conjunto com a tecnologia</p>
                    
                    <p><strong>Cora:</strong> Elfos mágicos que, como os acrecianos, vieram de outro sistema solar, que tem o mesmo objetivo de adquirir minerios raros do planeta de Novus para crescer a raça</p>
                </section>
            </div>
            <div id='caixaimg'>
                {!image ? (
                    <div>
                        <div id='various'>
                            {images.map((image) => (
                                <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => clicou(image)}
                                />
                            ))}
                        
                        </div>
                        <p id='view'>Clique em uma imagem para vizualiza-la</p>
                    </div>
                ): (
                    <div id='unic'>
                        <div>
                            <img src={image.src} alt={image.alt} />
                            <p>{image.desc}</p>
                            
                        </div>
                        <button onClick={desclicou}>Voltar</button>
                    </div>
                )} 
                
            </div>
        </main>
        
    )
}

export default Home

//<p>O jogo possui um sistema discreto de climas, que muda com o proprio tempo do mundo. E em vários casos, cada mapa possui um clima mais proprício para acontecer</p> img1

//<p>Existem mapas mais hardcore que outros, onde possuem seus proprios bosses e monstros de nivel elevado, onde para caçar, o ideal é ter um grupo</p> im2

//<p>Cada raça no jogo tem um Quartel General, onde todos os players começam no jogo, e duas aréas auxiliares</p> img3

//<img src={tempo} alt="" className='imagens' />

//<img src={jetso} alt="" className='imagens'/>

//<img src={dois13} alt="" className='imagens'/>
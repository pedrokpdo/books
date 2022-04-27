import { AlugarItem } from "./Components/AlugarItem"
import NavBar from "./Components/NavBar"
import harry from '../public/hp.webp'
import aslam from '../public/aslam.jpg'
import narnia from '../public/narnia.webp'
import sombra from '../public/sombra.webp'
import zaratustra from '../public/zaratustra.jpg'
import hobbit from '../public/hobbit.jpg'
import { useState } from "react"



export default function () {

  const [harryEstado, setHarryEstado] = useState('disponivel')
  const [aslamEstado, setAslamEstado] = useState('disponivel')
  const [narniaEstado, setNarniaEstado] = useState('disponivel')
  const [sombraEstado, setSombraEstado] = useState('disponivel')
  const [zaratustraEstado, setZaratustraEstado] = useState('disponivel')
  const [hobbitEstado, setHobbitEstado] = useState('disponivel')


  return (
    <>
      <NavBar />
      <div style={{ maxWidth: '1120px', margin: '0 auto', height: '700px' }}>
        <br />
        <h1 style={{ marginLeft: '400px' }}>Alugue seus livros:</h1>
        <div style={{ marginLeft: '200px' }}>

          {harryEstado === 'disponivel' ?
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
              imgLivro={harry}
              setEstado={setHarryEstado}
            /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={harry}
              setEstado={setHarryEstado}
            />
          }


          {aslamEstado === 'disponivel' ?
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
              imgLivro={aslam}
              setEstado={setAslamEstado}
            /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={aslam}
              setEstado={setAslamEstado}
            />
          }
          {narniaEstado === 'disponivel' ?
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
              imgLivro={narnia}
              setEstado={setNarniaEstado}
            /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={narnia}
              setEstado={setNarniaEstado}
            />
          }
          {sombraEstado === 'disponivel' ?
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
              imgLivro={sombra}
              setEstado={setSombraEstado}
            /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={sombra}
              setEstado={setSombraEstado}
            />
          }
          {zaratustraEstado === 'disponivel' ?
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
              imgLivro={zaratustra}
              setEstado={setZaratustraEstado}
            /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={zaratustra}
              setEstado={setZaratustraEstado}
            />
          }
          {hobbitEstado === 'disponivel' ? <AlugarItem
            nomeLivro='Harry Potter ea pedra filosofal'
            descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
            imgLivro={hobbit}
            setEstado={setHobbitEstado}
          /> :
            <AlugarItem
              nomeLivro='Harry Potter ea pedra filosofal'
              descricaoLivro='Alugado'
              imgLivro={hobbit}
              setEstado={setHobbitEstado}
            />
          }
        </div>
      </div>
    </>
  )
}
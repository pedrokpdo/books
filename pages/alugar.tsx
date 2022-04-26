import AlugarItem from "./Components/AlugarItem"
import NavBar from "./Components/NavBar"
import harry from '../public/hp.webp'
import aslam from '../public/aslam.jpg'
import narnia from '../public/narnia.webp'
import sombra from '../public/sombra.webp'
import zaratustra from '../public/zaratustra.jpg'
import hobbit from '../public/hobbit.jpg'

export default function () {
    return (
        <>
            <NavBar />
            <div style={{ maxWidth: '1120px', margin: '0 auto', height: '700px' }}>
                <br />
                <h1 style={{ marginLeft: '400px' }}>Alugue seus livros:</h1>
                <div style={{marginLeft:'200px'}}>
                    <AlugarItem 
                    nomeLivro='Harry Potter ea pedra filosofal'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={harry}
                    />
                      <AlugarItem 
                    nomeLivro='Narnia'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={narnia}
                    />
                      <AlugarItem 
                    nomeLivro='Assim falou Zaratustra'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={zaratustra}
                    />
                      <AlugarItem 
                    nomeLivro='Aslam'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={aslam}
                    />
                      <AlugarItem 
                    nomeLivro='Hobbit'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={hobbit}
                    />
                      <AlugarItem 
                    nomeLivro='Sombra'
                    descricaoLivro='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    imgLivro={sombra}
                    />
                </div>
            </div>
        </>
    )
}
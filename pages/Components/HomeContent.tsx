import { Card, Carousel, } from 'antd';
import React from 'react';
import harry from '../../public/hp.webp'
import aslam from '../../public/aslam.jpg'
import narnia from '../../public/narnia.webp'
import zaratustra from '../../public/zaratustra.jpg'
import CarouselItem from './CarouselItem';

function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
}

export default function HomeContent() {


    return (
        <>
            <h1 style={{ marginLeft: '329px' }}>Veja nossos destaques disponiveis</h1>
            <Carousel style={{ width: '1120px', height: '490px' }} afterChange={onChange}>
                <CarouselItem
                    sinopse='Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
                    img={harry}
                />
                <CarouselItem
                    sinopse='Se você é fã das Crônicas de Nárnia, com certeza já percebeu que elas são recheadas de lições morais e, mais do que isso, são repletas de referências bíblicas. Algumas mais claras, outras bem discretas, mas elas estão lá
                    Por outro lado, eu posso estar escrevendo para alguém que acha tudo isso distração do diabo ou pura besteira, embora, talvez nem se tenha dado o trabalho de lê-las ou pesquisar sobre.                
                    Se você se identificou tanto com o primeiro quanto o segundo grupo que citei acima, eu tenho um recado: ESSE LIVRO É PRA VOCÊ!
'
                    img={aslam}
                />
                <CarouselItem
                    sinopse='Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.'
                    img={narnia}
                />
                <CarouselItem
                    sinopse='O livro conta a história de um pensador que desce das montanhas para ensinar aos homens o que descobriu em seu isolamento. Nietzsche usa linguagem poética e aforismos para trazer seus preceitos, como a famosa frase: “Deus morreu”'
                    img={zaratustra}
                />
            </Carousel>
        </>
    )
}
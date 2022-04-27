import { Card } from 'antd';
import Image from 'next/image';

export const AlugarItem = ({ nomeLivro, descricaoLivro, imgLivro, setEstado }:any) =>  {

    


    function handleState () {
       let res = confirm('deseja alugar o livro?')
       if (res === true) {setEstado('alugado')}else ''
    }


    return (
        <>  
            <Card title={nomeLivro} extra={<a href="#">More</a>} style={{ width: 800 }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <Image height='300px' src={imgLivro} width='250px' />
                    </div>
                    <div style={{ width: '400px' }}>
                        <p>{descricaoLivro}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <a onClick={handleState}>Alugar</a>
                            <a href="">Comprar</a>
                        </div>
                    </div>
                </div>

            </Card>
            <br />
            <br />
        </>
    )
}
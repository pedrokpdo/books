import { Card } from 'antd';
import Image from 'next/image';

export default function AlugarItem({ nomeLivro, descricaoLivro, imgLivro }: any) {

    return (
        <>
            <Card title={nomeLivro} extra={<a href="#">More</a>} style={{ width: 800 }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <Image height='300px' src={imgLivro} width='250px' />
                    </div>
                    <div style={{ width: '400px' }}>
                        <p>{descricaoLivro}</p>
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <a onClick={() => confirm('deseja alugar o livro?')}>Alugar</a>
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
import { Card } from "antd";
import Image from "next/image";

export default function CarouselItem({ sinopse, img }: any) {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    } as any;


    return (
        <>
            <div>
                <Card style={contentStyle} title="Harry Potter e a pedra filosofal" style={{ width: '800px', height: '430px', marginLeft: '150px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Image height='300px' src={img} width='250px' />
                        <div style={{ width: '350px', height: '200px', marginLeft: '50px' }}>
                            <p>{sinopse}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
                                <a href="">Alugar</a>
                                <a href="">Comprar</a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}
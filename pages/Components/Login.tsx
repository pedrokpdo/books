import { Button, Input } from "antd";

export default function () {
    return (
        <>
            <div>
                <div className="didi"
                    style={{
                        marginTop: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '500px',
                        width: '300px',
                        padding: '25px',
                    }}>
                    <h2>Login:</h2>
                    <Input />
                    <br />
                    <h2>Senha:</h2>
                    <Input />
                    <br />
                    <Button
                        href='/home'>Submit</Button>
                </div>
            </div>
        </>
    )
}
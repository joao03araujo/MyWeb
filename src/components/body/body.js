import Link from "next/link";

const Body = () => {

    return (
        <div>
            <div className="principal" style={{}}>

                <div className="objetivo" style={{ padding: '50px' }}>
                    <p style={{ textAlign: 'center', fontSize: '33px' }}>Objetivo</p>
                    <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}>O objetivo principal do MyWebApp, é proporcionar facilidade e uma opção de consulta, </p>
                    <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}>na hora de criar uma aplicação em Next.js.</p>
                    <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}>E apresentar o seu criador. </p>
                </div>

                <div>
                <p style={{ textAlign: 'center', fontSize: '33px' }}>MyWebApp</p>
                        <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}> O MyWebApp é um website feito em Next.js, HTML5 e CSS3, ele foi criado com o intuito de ajudar e </p> 
                        <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}> facilitar o aprendizado de programadores iniciantes,que queiram aprender a utilizar o Next.js.</p>
                        <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}>Ele se encontra no repositório do github a seguir.</p>
                        <Link href="https://github.com/joao03araujo/MyWeb">
                            <button type="button" target="_blank" class="btn btn-outline-dark" style={{ marginLeft: '43%', marginTop:'15px', marginBottom:'15px'}} >Repositório do GitHub</button>
                        </Link>
                </div>

            </div>
        </div>
    );
};

export default Body;
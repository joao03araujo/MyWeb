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
                        <button type="button" target="_blank" class="btn btn-outline-dark" style={{ marginLeft: '43%', marginTop: '15px', marginBottom: '15px' }} >Repositório do GitHub</button>
                    </Link>
                </div>

                <div className='desc_pessoal'>
                    <div className='direita' style={{ width: '40%', float: 'right' }}>
                        <img src="/imagem1.jpg" alt="Banner Lateral" style={{ width: '80%', padding: '50px' }} />
                    </div>
                    <div className='esquerda' style={{ width: '60%', float: 'left', padding: '50px' }}>
                        <p style={{ textAlign: 'center', fontSize: '22px' }}>Criador</p>
                        <p style={{ textAlign: 'center', marginBottom: '0px', fontSize: '20px' }}>Olá, me chamo João Paulo e estou cursando o último ano do Ensino Médio e Técnico, no colégio ETEP em SJC.</p>
                        <p style={{ textAlign: 'center', fontSize: '20px' }}> Sou uma pessoa apaixonada por tecnologia de forma em geral.</p>
                        <p style={{ textAlign: 'center', fontSize: '20px' }}> O MyWebApp é um dos meus repositórios no GitHub, da uma conferida lá nos outros, só clicar no botão abaixo.</p>

                        <Link href="https://github.com/joao03araujo/MyWeb">
                            <button type="button" target="_blank" class="btn btn-outline-dark" style={{ marginLeft: '43%', marginTop: '5px', marginBottom: '15px' }} >GitHub</button>
                        </Link>

                    </div>

                </div>

                <div className="skills">
                    <p style={{ textAlign: 'center', fontSize: '33px', clear:'both'}}>Skills</p>
                    <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px' }}> As minhas skills de programção, são voltadas tanto para front-end, <br></br>quanto back-end e banco de dados.</p>
                    <p style={{ marginBottom: '0px', textAlign: 'center', fontSize: '20px', marginBottom:'20px'}}> São elas:</p>
                    <ul style={{marginLeft:'450px'}}>
                        <li>HTML5-CSS3</li>
                        <li>Asp.net</li>
                        <li>Next.js</li>
                        <li>Reactjs</li>
                        <li>Node.js</li>
                    </ul>
                    <ul style={{marginLeft:'650px', marginTop:'-130px'}}>
                        <li>MySQL</li>
                        <li>SPA-SSR</li>
                        <li>Android</li>
                        <li>JavaScript</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Body;
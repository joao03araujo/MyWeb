import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <div className="RodaPe" style={{ backgroundColor: '#DCDCDC', height: '150px', width: '100%', marginTop: '25px' }}>
                <div className="Logo">

                </div>
                <div>
                    <p style={{ textAlign: 'center', padding: '35px' }}>Repositórios e Redes sociais</p>

                    <Link href="https://github.com/joao03araujo">
                        <p style={{ marginTop:'-15px', marginLeft:'650px' }}><i class="fa fa-github fa-2x" aria-hidden="true" style={{ marginLeft: '40px' }}></i></p>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jo%C3%A3o-paulo-pereira-605b241aa/">
                        <p style={{ marginTop:'-49px', marginLeft:'600px' }}><i class="fa fa-linkedin fa-2x" aria-hidden="true" style={{ marginLeft: '40px' }}></i></p>
                    </Link>
                    <Link href="https://www.instagram.com/_jao03/">
                        <p style={{ marginTop:'-50px', marginLeft:'550px' }}><i class="fa fa-instagram fa-2x" aria-hidden="true" style={{ marginLeft: '40px' }}></i></p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
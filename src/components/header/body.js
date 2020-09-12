import Link from "next/link";

const Header = () => {
    return (
        <div>
            <div className='principal' style={{ height: "500px", width: "100%" }}>
                <img src="/bannerPrincipal.jpeg" alt="Sem imagem" style={{ height: '100%', width: '100%' }} />
                <p style={{ marginTop: '-250px', textAlign: 'center', color: 'white', fontSize: '3em' }}>Seja Bem Vindo ao MyWebApp</p>
                <Link href="#">
                 <img src="/logo.png" style={{width:'65px', height:'65px', marginTop:'-500px', marginLeft:'27px'}}/>
                </Link>
                <Link href="https://github.com/joao03araujo">
                <p style={{marginTop:'-225px', marginLeft:''}}><i class="fa fa-github fa-3x" aria-hidden="true" style={{ marginLeft: '40px'}}></i></p>
                </Link>
            </div>  
        </div>
    );
};

export default Header;
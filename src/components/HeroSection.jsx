import Botao from "./Botao.jsx";
import cachorro from "../assets/pastor.jpg"

function HeroSection() {
    return (
        <section>
            <div >
                <h1 >Ola,Seja Bem-Vindo !</h1>
                <h2> Obrigado desde já pela confiança !</h2>
                <h3>Sou Estudante de Programação e trabalho como autonomo no momento !</h3>
                <Botao />
            </div>
            <div className="flex">
                <img collor="blue20.0px" src={cachorro} width="500px" />
            </div>
        </section>
    )
}
export default HeroSection;
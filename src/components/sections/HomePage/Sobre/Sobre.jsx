import casal from "../../../../assets/img/imgSobre.png";
import "./Sobre.css";
function Sobre() {
  return (
    <section className="container_about" id="sobre">
      <div className="container_text">
        <h3 className="title">Sobre</h3>

        <p className="about_text">
          Primeiro grupo de danças folclóricas germânicas criado no estado do
          Espírito Santo, o Bergfreunde estreou em 25 de fevereiro de 1984 com o
          objetivo de resgatar, preservar e divulgar a cultura trazida pelos
          imigrantes germânicos à região de Domingos Martins, que estava sendo
          esquecidas como consequência da II Guerra Mundial e da campanha de
          nacionalização de Vargas.
        </p>
        <p className="about_text">
          Além da divulgação da cultura em nosso estado, pelo país e pelo mundo,
          o Grupo Folclórico Bergfreunde atuou e atua junto à comunidade
          oferecendo oportunidades para que os cidadãos possam desenvolver
          atividades culturais , que lhes propiciem novas experiências
          culturais, o relacionamentos com pessoas de diferentes esferas
          culturais, intelectuais e sociais.
        </p>

        <div>
          <p className="destaque">
            {" "}
            <span> 40+</span> Anos de história
          </p>
        </div>
      </div>
      <div>
        <img className="img_casal" src={casal} alt="Casal dançando!" />
      </div>
    </section>
  );
}

export default Sobre;

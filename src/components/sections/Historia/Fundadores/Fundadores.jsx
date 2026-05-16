import "./Fundadores.css";

import idealizadoresData from "../../../../data/idealizadores.json";

const fundadores = idealizadoresData;

function Fundadores() {
  return (
    <section className="historia_fundadores">
      <h2 className="historia_section_titulo">Idealizadores</h2>
      <div className="fundadores_grid">
        {fundadores.map((f, index) => (
          <div key={index} className="fundador_card">
            <img
              src={`https://placehold.co/200x200/c8a96e/fff?text=${f.nome.split(" ")[0]}`}
              alt={f.nome}
              className="fundador_foto"
            />
            <h4 className="fundador_nome">{f.nome}</h4>
            <p className="fundador_papel">{f.papel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fundadores;

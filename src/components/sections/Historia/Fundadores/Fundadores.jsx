import styles from "./Fundadores.module.css";

import idealizadoresData from "../../../../data/idealizadores.json";

const fundadores = idealizadoresData;

function Fundadores() {
  return (
    <section className={styles.historia_fundadores}>
      <h2 className="historia_section_titulo">Idealizadores</h2>
      <div className={styles.fundadores_grid}>
        {fundadores.map((f, index) => (
          <div key={index} className={styles.fundador_card}>
            <img
              src={`https://placehold.co/200x200/c8a96e/fff?text=${f.nome.split(" ")[0]}`}
              alt={f.nome}
              className={styles.fundador_foto}
            />
            <h4 className={styles.fundador_nome}>{f.nome}</h4>
            <p className={styles.fundador_papel}>{f.papel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fundadores;

import "../DataCadastro/DataCadastro";
import "../CardCadastro/CardCadastro";
import DataCadastro from "../DataCadastro/DataCadastro";
import CardCadastro from "../CardCadastro/CardCadastro";

const Cadastro = () => {
  return (
    <div>
      {DataCadastro.map((props) => (
        <CardCadastro
          key={props.id}
          paragraph1={props.paragraph1}
          paragraph2={props.paragraph2}
          paragraph3={props.paragraph3}
          placeholder1={props.placeholder1}
          placeholder2={props.placeholder2}
          placeholder3={props.placeholder3}
          button={props.button}
          span={props.span}
        />
      ))}
    </div>
  );
};

export default Cadastro;

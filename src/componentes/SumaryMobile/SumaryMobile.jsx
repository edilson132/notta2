import DataMenuMobile from "../DataMenuMobile/DataMenuMobile";
import "../DataMenuMobile/DataMenuMobile";

const SumaryMobile = () => {
  return (
    <div>
      {DataMenuMobile.map((props) => (
        <details>
          <summary>{props.nome}</summary>
          <summary>{props.nome2}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
          <summary>{props.nome3}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
          <summary>{props.nome4}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
          <summary>{props.nome5}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
          <summary>{props.nome6}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
          <summary>{props.nome7}</summary>
          <p>{props.option1}</p>
          <p>{props.option2}</p>
          <p>{props.option3}</p>
          <p>{props.option4}</p>
          <p>{props.option5}</p>
          <p>{props.option6}</p>
        </details>
      ))}
    </div>
  );
};

export default SumaryMobile;

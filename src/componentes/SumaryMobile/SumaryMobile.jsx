import { useState } from "react";
import DataMenuMobile from "../DataMenuMobile/DataMenuMobile";
import "../DataMenuMobile/DataMenuMobile";
import "./SumaryMobile.css";

const SumaryMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSummary = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {DataMenuMobile.map((props) => (
        <details className="containerItens">
          <summary className="item1">{props.nome}</summary>
          <details>
            <summary
              className={`item2 ${isOpen ? "open" : "closed"}`}
              onClick={toggleSummary}
            >
              {props.nome2}
            </summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>

          <details>
            <summary className="item2">{props.nome3}</summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>
          <details>
            <summary className="item2">{props.nome4}</summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>
          <details>
            <summary className="item2">{props.nome5}</summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>
          <details>
            <summary className="item2">{props.nome6}</summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>

          <details>
            <summary className="item2">{props.nome7}</summary>
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
          </details>
        </details>
      ))}
    </div>
  );
};

export default SumaryMobile;

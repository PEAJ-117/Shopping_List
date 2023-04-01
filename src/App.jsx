import { useState } from "react"

function App() {
  const [checkboxValue, setCheckboxValue] = useState({chbox1:false});

  const handleCheckboxChange = (e) => {
    setCheckboxValue(
      {
        ...checkboxValue,
        [e.target.name]: !checkboxValue[e.target.name]
      }
    );
  }

  return (
    <div class="container text-center">
      
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <h3>Shopping List</h3>
        </div>

        <div className="col-2 text-end">
          <button type="button" className="btn btn-outline-primary">
            <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-1">
          <input
          type="checkbox"
          name="chbox1"
          onChange={(e) => handleCheckboxChange(e)}
          checked={checkboxValue.chbox1} />
        </div>
        
        <div className="col text-start">
          {checkboxValue.chbox1 ?
            <s>
              1 KG
            </s> : '1 KG'
          }
        </div>
        
        <div className="col-5 col-md-7 text-start">
          { checkboxValue.chbox1 ?
            <s>
              Tortillas
            </s> :'Tortillas'
          }
        </div>

        <div className="col-2">
          <div className="btn-group" role="group" aria-label="Large button group">
            <button type="button" className="btn btn-outline-success"><i class="bi bi-files"></i></button>
            <button type="button" className="btn btn-outline-primary"><i class="bi bi-pencil-square"></i></button>
            <button type="button" className="btn btn-outline-danger"><i class="bi bi-trash2-fill"></i></button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App

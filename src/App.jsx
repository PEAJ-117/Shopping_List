import { useState } from "react"

function App() {
  const [listItems, setListItems] = useState([
    {
      id:"1",
      name: "Tortillas",
      quantity: 2,
      unit: "Kg",
      checked: false,
    }
  ]);

  const handleCheckboxChange = (e) => {
    const newList = listItems.map(item => {
      if (item.id === e.target.name) {
        item.checked = !item.checked;
      }
      return item
    })
    setListItems(newList);
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
          name={listItems[0].id}
          onChange={(e) => handleCheckboxChange(e)}
          checked={listItems[0].checked} />
        </div>
        
        <div className="col text-start">
          {
            listItems[0].checked ?
            <s>
              {`
              ${listItems[0].quantity}
              ${listItems[0].unit}`
              }
            </s> : `${listItems[0].quantity} ${listItems[0].unit}`
          }
        </div>
        
        <div
        className="col-5 col-md-7 text-start"
        style={{ textDecoration: listItems[0].checked && "line-through" }}>
          {`${listItems[0].name}`}
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

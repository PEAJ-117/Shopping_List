import { useState } from "react";
import ListItem from "./components/ListItem";
import NewListItemButton from "./components/NewListItemButton";
import Swal from "sweetalert2";
import ClearListButton from "./components/ClearListButton";

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

  const handleNewListItemButtom = async () => {
    const { value } = await Swal.fire({
      title: "New Item information",
      html: `<input 
              tipe='text' 
              id='name' 
              name='name' 
              class='swal2-input' 
              placeholder='Item' 
             />
             <input 
             tipe='text' 
             id='quantity' 
             name='quantity' 
             class='swal2-input' 
             placeholder='Qt' 
            />
            <input 
              tipe='text' 
              id='unit' 
              name='unit' 
              class='swal2-input' 
              placeholder='unit' 
             />`,
      confirmButtonText: "Add item",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const quantity = Swal.getPopup().querySelector('#quantity').value;
        const unit = Swal.getPopup().querySelector('#unit').value
        if (!name || !quantity || !unit) {
          Swal.showValidationMessage('Please enter an item name');
        }
        return { name, quantity, unit };
      },
    })

    if (!value.name || !value.quantity || !value.unit) return

    setListItems([
      ...listItems,
      { id: (listItems.length + 1).toString(), ...value, checked: false }
    ])
  }

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
    <div className="container text-center">
      
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <h3>Shopping List</h3>
          <br />
        </div>

        <div className="col-2 text-end">
          <ClearListButton setListItems={setListItems}/>
          <NewListItemButton handleButton={handleNewListItemButtom} />
        </div></div>
      <hr />

      {
        listItems.map((listItem) => (
          <ListItem
            id={listItem.id}
            name={listItem.name}
            quantity={listItem.quantity}
            unit={listItem.unit}
            checked={listItem.checked}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))
      }

      <hr />
      <div className="row">
        <div className="col text-end">
          <ClearListButton setListItems={setListItems}/>
          <NewListItemButton handleButton={handleNewListItemButtom} />
        </div></div></div>
  )
}

export default App

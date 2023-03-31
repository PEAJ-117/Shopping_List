function App() {
  return (
    <div class="container text-center">
      
      <div class="row">
        <div class="col">
          <p><h3>Shopping List</h3></p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <input type="checkbox" />
        </div>
        <div class="col">
          1 KG
        </div>
        <div class="col-5 col-md-3">
          Tortillas
        </div>
        <div class="col-2">
          <div className="btn-group" role="group" aria-label="Large button group">
            <button type="button" className="btn btn-outline-success"><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="btn btn-outline-danger"><i className="bi bi-trash2-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

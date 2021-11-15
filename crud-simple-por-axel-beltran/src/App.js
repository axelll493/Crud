import React from 'react'

function App() {
  return (
    <div class = "container">
      <h1 className = "text-center">CRUD Simple</h1>
      <hr/>
      <div className = "row">
        <div className = "col-8">
          <h4 className = "text-center">Listas De Tareas</h4>
          <ul className = "list-group">
            <li className = "list-group-item">
              <span className = "lead">Nombre De La Tarea</span>
              <button className = "btn btn-danger btn-sm mx-2">Eliminar</button>
              <button className = "btn btn-warning btn-sm">Editar</button>
            </li>
          </ul>
        </div>
        <div className = "col-4">
        <h4 className= "text-center">Formulario</h4>
        <form>
          <input type = "text" className = "form-control mb-2"/>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;

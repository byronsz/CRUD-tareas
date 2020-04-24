import React, {useState, useEffect} from 'react';
import shortid from 'shortid';

function App() {

  const [tarea, setTarea] = useState('');
  const [error, setError] = useState(null);
  const [tareas, setTareas] = useState([]);
  const [editar, setEditar] = useState(false);
  const [editando, setEditando] = useState({});

  // Almacenar tarea en el state
  const crearTarea = (e) => {
    setTarea(
      e.target.value
    )
  }

  // Guardar en cache
  
  // Actualiza el local estorage
  useEffect( () => {
    if(tareas.length > 0){
      localStorage.setItem( 'tareas', JSON.stringify(tareas) );
    }
    
  }, [tareas] )

  // Se ejecuta una vez y carga el local storage
  useEffect( () => {
    if(localStorage.getItem('tareas')){
      setTareas( JSON.parse(localStorage.getItem('tareas')) )
    }
  }, [])

  // Guardar tarea en el objeto
  const guardarTarea = (e) => {
    e.preventDefault();
    // Validar formulario
    if(!tarea.trim()){
      setError('Debes ingresar una tarea')
      return
    }
    setError(null);
    setTareas([
      ...tareas,
      { id : shortid.generate(), nombreTarea: tarea }
    ])
    

    setTarea('');    
  }

  // Eliminar tarea
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter( item => item.id !== id)
    setTareas(tareasFiltradas);
    setTarea('')
  }

  // Tranformar formulario y preparar la edición
  const prepararEdicion = item => {
    setEditar(true);
    setTarea(item.nombreTarea);
    setEditando({
       id : item.id, nombreTarea: item.nombreTarea 
    })
  }

  // Cancelar la edicion
  const cancelarEdicion = () => {
    setEditar(false);
    setTarea('')
  }

  const editarTarea = (e) => {
    e.preventDefault()
    if(!tarea.trim()){
      setError('Debes ingresar una tarea')
      return
    }
    const nuevoArreglo = tareas.map( item => editando.id === item.id ? { id: item.id, nombreTarea: tarea} : item );
    setTareas(nuevoArreglo);
    setTarea('');
    setEditar(false)
    setEditando({})    
  }

return (
  <>
    <div className="container-fluid bg-warning py-3 text-center text-dark">
        <h1>CRUD SIMPLE</h1>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h3>Lista Tareas</h3>
          <ul className="list-group">
            { !tareas.length > 0 ? <li className="list-group-item fadeIn bg-light mb-2" style={{boxShadow: "0px 3px 3px rgba(0,0,0,.2)", border: "none", borderRadius: "3px"}} >Agregar tareas</li> : null}
            { tareas.map( item => (
              <li key={item.id} className="list-group-item fadeIn bg-light mb-2" style={{boxShadow: "0px 3px 3px rgba(0,0,0,.2)", border: "none", borderRadius: "3px"}} >
                {item.nombreTarea}
                <button 
                  className="btn btn-danger btn-sm float-right"
                  onClick = {() => eliminarTarea(item.id) }
                >Eliminar</button>
                <button 
                  className="btn btn-warning btn-sm float-right mr-2"
                  onClick = {() => prepararEdicion(item)}
                >editar</button>
              </li>
            ) ) }
            
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <div className="bg-light px-3 py-4" style={{boxShadow: "0px 10px 10px rgba(0,0,0,.2)"}}>
            <h3 className="text-center mb-3">{editar ? "Editar tarea" : "Agregar Tarea"}</h3>
            <form onSubmit = { editar ?  editarTarea : guardarTarea }>
              { error ? <div className="alert alert-danger alerta" role="alert">{error}</div> : null}
              <input 
                type="text"
                className="form-control mb-2"
                placeholder="Agregar tarea"
                value={tarea}
                onChange={ crearTarea }
              />
              {editar 
              ?
              <div className="row">
                <div className="col-6">
                  <button className="btn-warning btn-block btn-lg">Editar</button>
                </div>
                <div className="col-6">
                <button className="btn-dark btn-block btn-lg" onClick={cancelarEdicion}>Cancelar</button>
                </div>
              </div>              
              : 
              <button className="btn-dark btn-block btn-lg">Agregar tarea</button>}
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default App;

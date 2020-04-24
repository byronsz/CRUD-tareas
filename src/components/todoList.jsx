import React, {useState} from 'react';
import shortid from 'shortid';

function App() {

  const [tarea, setTarea] = useState('');
  const [error, setError] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [id, setId] = useState('');

  const agregarTarea = e => {
    e.preventDefault();
    // Validar el formulario
    if( !tarea.trim() ) {
      setError(true)
      return
    }
    setError(false);

    // Agregar la tarea al array de tareas
    setTareas([
      ...tareas,
      {id: shortid.generate() , nombreTarea: tarea}
    ])

    // Reiniciar el formulario
    setTarea('');
  }

  // Elimina una tarea
  const eliminarTarea = (id) => {
    const arrayFiltrado = tareas.filter( tarea => tarea.id !== id );
    setTareas(arrayFiltrado);
  }

  // Edita las tareas
  const editarTarea = tarea => {
    setModoEdicion(true)
    setTarea(tarea.nombreTarea);
    setId(tarea.id)
  }

  const editarTareas = e => {
    e.preventDefault();

    if( !tarea.trim() ){
      setError(true)
      return
    }
    setError(false);

    const arrayEditado = tareas.map(item => {
      if(item.id === id){
        let tareaEditada = {id: id, nombreTarea: tarea.trim()}
        return tareaEditada
      } else {
        console.log('tarea eliminada')
        return item
      }
    });

    console.log(arrayEditado);

    setTareas(arrayEditado);

    setModoEdicion(false);
    setTarea('');
    setId('');

  }

  return (
    <div className="container mt-5">
      <h1 className="text-center pb-5">CRUD Simple</h1>
  
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tareas.length === 0 ? (<li className="list-group-item">Agregar tareas</li>) : 
            (tareas.map( tarea => (
              <li className="list-group-item fadeIn" key={tarea.id}>
                <span className="lead">{tarea.nombreTarea}</span>
                <button 
                  className="btn btn-danger btn-sm float-right mx-2"
                  onClick={ () => eliminarTarea(tarea.id) }
                >Eliminar</button>
                <button 
                  className="btn btn-warning btn-sm float-right"
                  onClick={() => editarTarea(tarea)}
                >Editar</button>
              </li>
            ) )
            )}
          </ul>
        </div>
        <div className="col-md-4">
          <div className="px-3 py-3 bg-light" style={{ boxShadow: "0px 2px 3px rgba(0,0,0,.2) " }}>
            <h4 className="text-center mb-3">
              {
                modoEdicion ? <span className="fadeIn" >Editar Tarea</span> : <span className="fadeIn" >Agregar Tarea</span>
              }
            </h4>
            <form onSubmit={ modoEdicion ? editarTareas : agregarTarea }>
              { error ? <div className="alert alert-danger alerta" role="alert">Debe agregar una tarea</div> : null}
              <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={e => setTarea(e.target.value)}
                value={tarea}
              />
              <button type="submit" className={`btn ${ modoEdicion ? 'btn-warning' : 'btn-dark'} btn-block`}>{!modoEdicion ? 'Agregar tarea' : 'Editar tarea'}</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

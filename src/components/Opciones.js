import { Link } from 'react-router-dom';

import('../css/App.css')

function Opciones() {
    return (
        <>
            <div className="opciones-container">
                <div className='opcion-uno'>
                <Link to="/intro" className='opcion-uno-p'>Investigate</Link>
                </div>
                <div className='opcion-dos'>
                <Link to="/cv" className='opcion-dos-p'>Use Notebook</Link>
                </div>
                <div className='opcion-tres'>
                <Link to="/portfolio" className='opcion-tres-p'>Visit Crime Lab</Link>
                </div>
                <div className='opcion-cuatro'>
                <Link to="/contact" className='opcion-cuatro-p'>Go to Airport</Link>
                </div>
            </div>
        </>
    );
}

export default Opciones;
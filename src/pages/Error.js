import { Link } from 'react-router-dom';
import('../css/App.css');

function Error() {
    return (
        <>
            <div className='descripcion-container'>
                <p>ERROR 404</p>
                <p>Page not found</p>
                <Link to="/" className='resume-link'> - HOME - </Link>
            </div>
        </>
    );
};

export default Error;
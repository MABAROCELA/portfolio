import { Link } from 'react-router-dom';

import('../css/App.css')

function Home() {
    return (
        <>
            <div className='descripcion-container'>
                <p>Recently graduated Full Stack Developer. Looking for her first job. Still managed to make quite a decent website!</p>
                <Link className="perita-link" target="_blank" rel="noopener noreferrer" to='https://perita-front.vercel.app'>- CHECK THAT DEPLOY -</Link>
            </div>
        </>
    );
};

export default Home;
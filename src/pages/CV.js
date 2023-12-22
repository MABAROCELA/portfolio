import cvMartaBarocela from '../resources/CV_MartaBarocela.pdf';
import('../css/App.css');

function CV() {
    return (
        <>
            <div className='descripcion-container'>
                <p>I hear she recently changed carrers. Where will she go next? Better retrace her steps!</p>
                <a href={ cvMartaBarocela } download="CV_MartaBarocela.pdf" className='resume-link'>- INSPECT RESUME - </a>
            </div>
        </>
    );
};

export default CV;
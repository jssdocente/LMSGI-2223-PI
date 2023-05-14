import { loader } from '../assets';

const Loader = ({ title }) => (
    <div className="loader">
        <img src={loader} alt="loader" className="loader_image" />
        <h1 className="loader_image__title">
            {title || 'Cargando...'}
        </h1>
    </div>
);

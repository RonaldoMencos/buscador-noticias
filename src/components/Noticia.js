import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
//extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <a class="btn-floating halfway-fab waves-effect waves-light red"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="material-icons">visibility</i>
            </a>

    </div>
    : null;
    return ( 
        <div className="col s12 m6 l4">
            <div className="card" style={{height:25+ 'em'}}>
                {imagen}
                <div className="card-content">
                    <span className="card-title" style={{fontSize: 1 + 'em'}}>{source.name}</span>
                    <h5 style={{fontSize: 1.2 + 'em'}}>{title} </h5>
                    
                </div>  
            </div>
        </div>
    );
}
 
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticia;
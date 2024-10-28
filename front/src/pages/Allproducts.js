import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AllProducts() {
    return (
        <div className="App">
            <div>
                
            </div>
            <div className="col-lg-6 mx-auto text-left">
                <form>
                    <div className="d-flex justify-content-between align-items-end">
                        {/* Lieu de départ */}
                        <div className="form-group me-3">
                            <label htmlFor="departure">Lieu de départ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="departure"
                                placeholder="Lieu de départ"
                            />
                        </div>
                        
                        {/* Date de début */}
                        <div className="form-group me-3">
                            <label htmlFor="start-date">Date de début</label>
                            <input type="date" className="form-control" id="start-date" />
                        </div>
                        
                        {/* Date de fin */}
                        <div className="form-group me-3">
                            <label htmlFor="end-date">Date de fin</label>
                            <input type="date" className="form-control" id="end-date" />
                        </div>
                        
                        {/* Bouton de recherche sans fond */}
                        <button 
                            type="submit" 
                            className="btn p-0 border-0"  // Supprimer la bordure et le padding
                            style={{ backgroundColor: 'transparent' }} // Bouton transparent
                        >
                            <img 
                                src="/icon_search.png" 
                                alt="Rechercher" 
                                style={{ width: '30px', height: '30px' }} 
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AllProducts;

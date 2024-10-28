import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header-footer/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from '../pages/Allproducts';
import CarForm from './CarForm'; // Importer AllProducts

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/app"
                        element={
                            <>
                                <div>
                                    <img
                                        src="/img_header_rent.webp"
                                        style={{
                                            width: '100vw',
                                            height: '100vh',
                                            objectFit: 'cover',
                                        }}
                                        alt="img_header"
                                    />
                                </div>

                                <div
                                    className="form-header"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '400px',
                                        padding: '20px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        zIndex: 1,
                                    }}
                                >
                                    <div className="text-left">
                                        <h4>La solution idéale pour votre location de voiture</h4>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="departure">Lieu de départ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="departure"
                                                    placeholder="Lieu de départ"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="start-date">Date de début</label>
                                                <input type="date" className="form-control" id="start-date" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="end-date">Date de fin</label>
                                                <input type="date" className="form-control" id="end-date" />
                                            </div>
                                            <button className="bouton-header btn btn-success mt-4">Rechercher</button>
                                        </form>
                                    </div>
                                </div>
                            </>
                        }
                    />
                    
                    <Route path="/allproducts" element={<AllProducts />} />
                    <Route path="/addcar" element={<CarForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

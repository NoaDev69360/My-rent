import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarForm() {
    const [immatriculation, setImmatriculation] = useState('');
    const [couleur, setCouleur] = useState('');
    const [puissance, setPuissance] = useState('');
    const [prixParJour, setPrixParJour] = useState('');
    const [nom, setNom] = useState('');
    const [imageFile, setImageFile] = useState(null); // Pour stocker le fichier image

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('immatriculation', immatriculation);
        formData.append('couleur', couleur);
        formData.append('puissance', puissance);
        formData.append('prixParJour', prixParJour);
        formData.append('nom', nom);
        formData.append('image', imageFile); // Ajout du fichier image

        // Envoyer les données au serveur (exemple avec fetch)
        fetch('http://localhost:3000/api/voitures', { // Remplace par ton endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
        })
        .then(response => response.json())
        .then(data => {
            // Traiter la réponse du serveur
            console.log('Success:', data);
            alert('Voiture ajoutée avec succès!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="container mt-5">
            <h2>Ajouter une voiture</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="immatriculation">Immatriculation</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="immatriculation"
                        placeholder="Immatriculation"
                        value={immatriculation}
                        onChange={(e) => setImmatriculation(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="couleur">Couleur</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="couleur"
                        placeholder="Couleur"
                        value={couleur}
                        onChange={(e) => setCouleur(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="puissance">Puissance (en chevaux)</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="puissance"
                        placeholder="Puissance"
                        value={puissance}
                        onChange={(e) => setPuissance(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="prixParJour">Prix par jour (€)</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="prixParJour"
                        placeholder="Prix par jour"
                        value={prixParJour}
                        onChange={(e) => setPrixParJour(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nom">Nom de la voiture</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="nom"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image de la voiture</label>
                    <input 
                        type="file"
                        className="form-control"
                        id="image"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Ajouter la voiture</button>
            </form>
        </div>
    );
}

export default CarForm;

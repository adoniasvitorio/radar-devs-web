import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

    const [github_username, setGithubusername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (error) => {
                console.log(error)
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleFormSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubusername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuario Github</label>
                <input name="github_username" id="github_username" value={github_username} required onChange={e => setGithubusername(e.target.value)} />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" value={techs} required onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="lat">Latitude</label>
                    <input type="number" name="lat" id="lat" value={latitude} required onChange={e => setLatitude(e.target.value)} />
                </div>

                <div className="input-block">
                    <label htmlFor="long">Longitude</label>
                    <input type="number" name="long" id="long" value={longitude} required onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;
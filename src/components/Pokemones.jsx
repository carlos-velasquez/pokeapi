import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const PokemonSelect = () => {

    const endPoint = 'https://pokeapi.co/api/v2/pokemon'
    const navigate = useNavigate()

    const [result, setResults] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('')

    const irAPokemon = () => {
        navigate(`/pokemon/${selectedPokemon}`)
    }

    useEffect(() => {
        fetch(endPoint).then(resp => resp.json())
            .then(data => {
                setResults(data.results.map(result => result.name))
                
            })
    }, [])

   
    return (
        <div>
            <h1>Seleciona un Pokemon</h1>
            <select onChange={(e) => setSelectedPokemon(e.target.value)}>
                <option value='' > Seleciona tu Pokemon</option>
                {
                    result.map(name => {
                        return <option key={name} value={name}>{name}</option>
                    })
                }
            </select>
            <button onClick={irAPokemon}>Ver Detalle</button>
            {/* {result} */}
        </div>
    )
}

export default PokemonSelect; 
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const InformacionPokemon = () => {

    const endPoint = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(`${endPoint}/${id} `).then(resp => resp.json())
            .then(data => {

                const userData = {
                    img: data.sprites.front_default,
                    abilities: data.abilities[0].ability.name,
                    name: data.forms[0].name,
                    type: data.types[0].type.name,
                }
                setPokemon(userData)
                console.log(userData)
            })
    }, [id])


    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <div>
                <img src={pokemon.img} alt="imagen_pokemon" />

            </div>
            <div>
                <ul>
                    <li>{pokemon.name}</li>
                    <li>{pokemon.abilities}</li>
                    <li>{pokemon.type}</li>
                </ul>
            </div>


        </div>


    )
}




export default InformacionPokemon;
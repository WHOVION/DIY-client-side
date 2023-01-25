import { useState, useEffect } from "react";
import axios from "axios";



const Home = () => {
    // store the details and list of all players in one state variable
    const [players, setPlayers] = useState([]) // array of all players
    const [detailId, setDetailId] = useState('') // id of the last clicked player
        
    // show all players when the page first loads
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/players`)
                setPlayers(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPlayers()
    }, []) // empty dependancy array will run this use effect only once

        // map out our players, each will need a onClick that shows their details (set their id in state)
        const playerComponents =  players.map(player => {
            return (
                <div key={`player-${player._id}`}>
                    <h3>{player.name}</h3>
                    <p>{player.club}</p>
                    <p>{player.country}</p>
                    <button
                    onClick={() => setDetailId(player.id)}
                    >
                        Details
                    </button>
                </div>
            )
        })
        // find the index of the player base on our id state, show its details, if player is not found, conditinally render
        const detailPlayer = players.find(player => player._id === detailId)
        console.log(detailPlayer)

        // optional chaining 
        const details = (
            <>
                <h3>{detailPlayer?.name}</h3>

                <p>{detailPlayer?.club}</p>
                <p>{detailPlayer?.country}</p>
                <p>{detailPlayer?.age}</p>
                <h3>{detailPlayer?.rating}</h3>
            </>
        )

    return ( 
        <div style={{display: 'flex'}}>
            <div style={{width: '50vw'}}>
                <h2>All players:</h2>
                {playerComponents}
            </div>

            <div style={{ width: '50vw'}}>
                <h2>Details</h2>

                {detailPlayer ? details : 'Click on a Player'}
            </div>
        </div>
     );
}
 
export default Home;
import { getAllStarShips } from "../../services/apiCalls"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const Starships = () => {
const [starships, setStarShips] = useState([])

useEffect(()=>{
    const fetchStarships = async ()=>{
      const starshipData = await getAllStarShips()
      setStarShips(starshipData.results)
    }
    fetchStarships()
  }, [])

return (
<>
  <div className="icon-container">
    <div class="card1" >
      <div class="card-body">
      {starships.map(starshipsTitle =>
        <div className="class-div" key={starshipsTitle.index}>
          <Link to='/starship-details' state={{starshipsTitle}}>
          {starshipsTitle.name}
          </Link>
          </div>
        )}
      </div>
    </div>
  </div>
  </>
)
}
export default Starships
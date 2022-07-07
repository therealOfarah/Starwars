import { useEffect, useState } from "react"
import { getDetails } from "../../services/apiCalls"
import { useLocation} from "react-router-dom"
import { Link } from "react-router-dom"


const StarshipsDetails= () =>  {
  const [details, setDetails] = useState([])
  const location = useLocation()
  useEffect(()=>{
    const fetchDetails = async() => {
      const detailData = await getDetails(location.state.starshipsTitle.url)
      setDetails(detailData)
    }
    fetchDetails()
  },[location.state.starshipsTitle.url])
  return (
    <>
    {details.name ? 
    <>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">{details.name}</h5>
          <h5 class="card-title">{details.model}</h5>
          <h5 class="card-title">{details.manufacturer}</h5>
          <h5 class="card-title">{details.cost_in_credits}</h5>
          <button type="button" class="btn btn-outline-primary"><Link to="/" > Return</Link></button>
        </div>
      </div>
      </>
    :
    <h3>Please wait</h3>
    }
    </>
  )
}
export default StarshipsDetails
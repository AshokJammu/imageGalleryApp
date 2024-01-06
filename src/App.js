import React,{useState} from 'react'
import axios from 'axios'
import { GalleryList } from './GalleryList';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    setSearch(search)
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then((response)=>{
      console.log(response.data.photos.photo,"Photos")
      setData(response.data.photos.photo);
      setSearch("")
    }).catch((err)=>{
      console.log("err",err)
    })

  }
  return (
    <div>
      <center>
        <h1>Showing GalleryList</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='search.....'/>
          <br />
          <br />
          <input type='submit' name="Search"/>
        </form>
        <br />
        {data.length >=1 ? <GalleryList data= {data}/>: <h4>Data not yet loaded</h4>}
      </center>
    </div>
  )
}

export default App
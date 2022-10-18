import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './Loading';
import Axios from 'axios';
import Search from './Search';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  console.log(query)


  // const search = (title) =>{
  //   const newData = data.filter(dat => dat.title === title);
  //   setData(newData);
  //   setQuery(newData);
  // }

  const fetchData = async () => {
    setLoading(true);

    try {
      setLoading(false);
      const response = await Axios.get(`http://localhost:5000/users?q=${query}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [query])

  if(loading) {
    return (
      <Loading/>
    )
  }
  return (
    <section>
      <div>
        <input type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)} className="inputText"/>
        
      </div>
      <Search data={data} query={query} />
    </section>
  );
}

export default App;

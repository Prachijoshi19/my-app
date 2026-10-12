
import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import AllQuotes from './components/AllQuotes';
import AddQuote from './components/AddQuote';
import EditQuote from './components/EditQuote';

function App() {
  let [quote,setQuote] = useState([])
  let [editFlag,setEditFlag] = useState(false)
  let [selectedQuote,setSelectedQuote] = useState(null)
  useEffect(()=>{
      axios.get('https://dummyjson.com/quotes')
      .then((response)=>{
        console.log('In app----'+response.data)
        setQuote(response.data.quotes)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])
  return (
    <div className="App">
      {editFlag?<EditQuote selectedQuote={selectedQuote} 
                          quote={quote} 
                          setQuote={setQuote} setEditFlag={setEditFlag} >
                </EditQuote>:
      <>
        <AddQuote quote={quote} setQuote={setQuote} 
                  editFlag={editFlag} 
                  setEditFlag={setEditFlag}>
        </AddQuote>
        <AllQuotes quote={quote} setQuote={setQuote} 
                  editFlag={editFlag} 
                  setEditFlag={setEditFlag} setSelectedQuote={setSelectedQuote}>
        </AllQuotes>
        
      </>
      }
      
    </div>
  );
}

export default App;

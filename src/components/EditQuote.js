import { useEffect, useState } from "react"

export default function EditQuote({selectedQuote,quote,setQuote,setEditFlag})
{
    console.log(selectedQuote.author)
    let [formData,setFormData] = useState({quote:"",author:"author"})
    useEffect(()=>{
        setFormData({
            quote:selectedQuote.quote,
            author:selectedQuote.author
        })
    },[selectedQuote])

    function handleChange(e)
    {
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    return(<>
        <form>
            Quote:<input type="text" name="quote" onChange={handleChange} value={formData.quote} /><br></br><br></br>
            Author:<input type="text" name="author" onChange={handleChange} value={formData.author} /><br></br><br></br>
            <input type="submit" value="EDIT QUOTE" />
        </form>
    </>)
}
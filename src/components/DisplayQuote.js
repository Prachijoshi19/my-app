
export default function DisplayQuote({rec,quote,setQuote,editFlag,setEditFlag,setSelectedQuote})
{
    console.log(rec)
    function handleEdit(rec)
    {
        setEditFlag(true)
        setSelectedQuote(rec)
    }
    return(<>
        <div>
            <h3>{rec.quote}</h3>
            <h4><address>{rec.author}</address></h4>
            <h3><button onClick={()=>handleEdit(rec)}>UPDATE</button></h3>
        </div>
    </>)
}

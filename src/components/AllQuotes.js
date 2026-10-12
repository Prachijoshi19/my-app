import DisplayQuote from "./DisplayQuote"

export default function AllQuotes({quote,setQuote,editFlag,setEditFlag,setSelectedQuote})
{
    //console.log('in all quotes component--'+quote.length)
    return(<>
        {quote.map((ele)=><DisplayQuote rec={ele} quote={quote} setQuote={setQuote} editFlag={editFlag} setEditFlag={setEditFlag} setSelectedQuote={setSelectedQuote}></DisplayQuote>)}
    </>)
}
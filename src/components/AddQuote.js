
export default function AddQuote({quote,setQuote,editFlag,setEditFlag}){
    return(<>
        <form>
            Quote:<input type="text" name="quote" /><br></br><br></br>
            Author:<input type="text" name="author" /><br></br><br></br>
            <input type="submit" value="ADD QUOTE" />
        </form>
    </>)
}
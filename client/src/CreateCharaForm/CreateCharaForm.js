

const CreateCharaForm=(props)=>{
 return(
   <div className="min-h-screen flex items-center justify-center bg-green-600">
       <div className="bg-white p-8 rounder shadow-2x1 w-1/2"></div>
       <h2>Create a Charater</h2>
       <form>
        <div>
            <label>Name</label>
            <input type="text"></input>
        </div>

       </form>


   </div>

 )


}

export default CreateCharaForm;
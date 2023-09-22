import mongoose from "mongoose"
import app from './app'

const port:number = 5000



async function main() {
   try{
    await mongoose.connect('mongodb+srv://user11:kv5d8uXPRsu6ZEzx@cluster0.cfrtdkt.mongodb.net/?retryWrites=true&w=majority');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
    console.log('monoose connect success')
   }catch(err){
    console.log(`(This mongoose connect fail) ${err}`)
   }
  
}
  main()




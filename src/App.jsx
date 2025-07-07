import man from '../images/man.png'
import search from '../images/search.png'
import banner from '../images/banner.jpg'
import './App.css'
import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import Cooks from './Cooks'
import PreparingList from './PreparingList'

function App() {
const[recipes,setRecipe]=useState([])
const[cooks,setCooks]=useState([])
const [preparingList,setPreparingList]=useState([])

useEffect(()=>{
  fetch('recipe.json')
  .then(res=>res.json())
  //.then(data=>console.log(data))
   .then(data=>setRecipe(data))
},[])
const handleAddCook=(recipe)=>{
  //console.log('clicked')
  const newCook=[...cooks,recipe]
  setCooks(newCook)  //Already created one more array of object
}
const handlePreparing=(item)=>{
const remainingRecipe=cooks.filter(recipe=>recipe.recipe_id!==item.recipe_id)
setCooks(remainingRecipe)
const newRecipe=[...preparingList,item]
setPreparingList(newRecipe)
}
const totalTime = preparingList.reduce((sum, item) => sum + parseInt(item.preparing_time), 0);
const totalCalories = preparingList.reduce((sum, item) => sum + parseInt(item.calories), 0);
  return (
    <>
   
      <div className='flex justify-between items-center mx-24 my-12'>
        <div><h1 className='text-3xl font-bold'>Recipe Calories</h1></div>
        <div className='flex gap-4 items-center list-none text-xl'>
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Search</li>
        </div>
        <div className='flex gap-4 items-center'>
         <div className='relative'>
           <input className='pl-10 pr-4 py-2 rounded-xl bg-[#150B2B0D]' type="text" placeholder='Search'/>
           <img className='absolute left-2 top-2' src={search} alt="" />
         </div>
         <button> <img className='w-10' src={man} alt="" /></button>
        </div>
      </div>
      <div className='mx-24 my-12'>
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
  <img
    className="w-full h-full object-cover"
    src={banner}
    alt="Banner"
  />
  
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

  {/* Text on banner */}
  <div className="absolute inset-0 top-16 left-8">
    <h1 className="text-white text-[52px] font-bold mx-auto w-[900px] text-center">Discover an exceptional cooking class tailored for you!</h1>
    <p className='text-white text-xl text-center my-6 w-[900px] mx-auto '>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
    <div className='flex gap-12 justify-center items-center'>
      <button className='rounded-2xl bg-lime-600 p-4  hover:bg-black hover:text-white '>Explore Now</button>
      <button className='rounded-2xl bg-transparent border-white border-2 text-white p-4 hover:bg-black hover:text-white '>Our Feedback</button>
    </div>
  </div>
</div>
      </div>
      <div>
      <div className='my-6'>
          <h2 className='text-center text-4xl font-bold'>Our Recipe</h2>
        <p className='text-center text-xl my-4 w-[960px] mx-auto text-[#878787]'>A delightful collection of flavorful and diverse recipes, ranging from classic Italian pasta and spicy Asian stir-fries to rich Indian curries and light, healthy salads — each crafted with fresh ingredients, balanced nutrition, and easy-to-follow preparation.</p>
      </div>
      <div className='flex justify-between mx-24 my-12'>
        <div className='w-3/4 grid grid-cols-2 gap-4'>
{
  recipes.map(recipe=><Recipe handleAddCook={handleAddCook} recipe={recipe}></Recipe>)
}
        </div>
        <div>
          <h2 className='text-4xl mt-10 text-center my-4'>Want to cook:  {}</h2>
          <hr className='border-x-2 w-full' />
          
            <table style={{ border: '1px solid black' }}>
    <thead>
      <tr>
        <th className='w-8'></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
     </table>

      
        {
          cooks.map((cook,index)=><Cooks handlePreparing={handlePreparing} index={index+1} cook={cook}></Cooks>)
        }
      
    <h2 className='text-4xl mt-10 text-center my-4'>Currently cooking:  {preparingList.length}</h2>
          <hr className='border-x-2 w-full' />
    
       <table style={{ border: '1px solid black' }}>
    <thead>
      <tr>
        <th className='w-8'></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    </table>

{/*      
{
  preparingList.map((preparingLists,index)=><PreparingList index={index} preparingLists={preparingLists}></PreparingList>)
}
  */}<table style={{ border: '1px solid black' }}>
 <tbody>
    {preparingList.map((item, index) => (
      <PreparingList key={item.recipe_id} index={index+1} preparingLists={item} />
    ))}
    {/* Total row */}
    <tr className='font-bold text-black bg-[#f0f0f0]'>
      <td className='w-8'></td>
      <td>Total</td>
      <td>{totalTime} min</td>
      <td>{totalCalories} cal</td>
    </tr>
  </tbody></table>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App

import time from '../images/time.png'
import fire from '../images/fire.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Recipe = ({recipe,handleAddCook}) => {
    const{recipe_id,recipe_image,recipe_name,description,preparing_time,calories}=recipe;
    const[a,b,c,d,e]=recipe.ingredients
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 1) {
      handleAddCook(recipe); // first time: add
    } else {
      //toast.warning('Already added to cook list!');
      alert('Already added to cook list!');
    }
  };
    return (
        <div className='border-2 border-slate-800 rounded-2xl p-5 m-4'>
            <img className='rounded-2xl' src={recipe_image} alt="" />
            <h2 className='text-2xl font-bold my-4'>{recipe_name}</h2>
            <h4 className='text-xl text-[#878787]'>{description}</h4>
            <h3 className='text-xl font-bold my-4'>Ingredients : {recipe.ingredients.length}</h3>
          
            <div className='text-[#878787] '>
              <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
            <li>{e}</li>
            </div>
        
          <div className="flex justify-between my-4">
            <div className='flex gap-4'>
            <img src={time} alt="" />
            <p><span>{preparing_time}</span></p>
            </div>
            <div className='flex gap-4'>
            <img src={fire} alt="" />
            <p><span>{calories}</span></p>
            </div>
          </div>
      <button
        onClick={handleClick}
        className='bg-[#0BE58A] text-black p-4 rounded-3xl'
      >
        Want to Cook
      </button>
        </div>
    );
};

export default Recipe;
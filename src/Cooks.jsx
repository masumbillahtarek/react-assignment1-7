import './App.css'

const Cooks = ({cook,index,handlePreparing}) => {
    const{recipe_name,preparing_time,calories}=cook;
    
    return ( 
        <div className='flex items-center gap-1'>
           <table>
            <tr className='text-xs'>
             <td className='w-8'>{index}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minute</td>
        <td>{calories} Calories</td>
     
           </tr>
           </table>
           <button onClick={()=>handlePreparing(cook)} className='bg-[#0BE58A] text-black w-24 h-10 rounded-2xl'>Preparing</button>
        </div>
    );
};

export default Cooks;
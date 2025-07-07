

const PreparingList = ({preparingLists,index}) => {
     const{recipe_name,preparing_time,calories}=preparingLists
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
           
        </div>
    );
};

export default PreparingList;
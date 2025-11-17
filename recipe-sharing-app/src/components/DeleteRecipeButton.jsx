import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ must be here

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ must be used here

  const handleDelete = (event) => {
    event.preventDefault(); // optional but safe
    deleteRecipe(recipeId);
    navigate('/'); // go back to home after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

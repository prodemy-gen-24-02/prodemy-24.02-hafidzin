

const apiRecipes = "https://dummyjson.com/recipes";

const getRecipes = async() => {
    try{
        const response = await axios.get(apiRecipes + `?limit=10`)
        console.log(response.data.recipes);
    } catch (error) {
        console.log(error);
    };
    
}

getRecipes();

const newRecipes = {
    userId: 1,
    name: "Soto Lamongan"
};

const addRecipes = async(newRecipes) => {
    try {
        const response = await axios.post(
            'https://dummyjson.com/posts/add',
             newRecipes);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

addRecipes(newRecipes);

const recipesUpdate = {
    name: "Soto Lamongan"
}

const updateRecipesById = async (id, recipesUpdate) => {
    try{
        const response = await axios.put(
            `https://dummyjson.com/posts/${id}`,
            recipesUpdate
        
        )
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

updateRecipesById(2, recipesUpdate)

const deleteRecipesById = async (id) => {
    try{
        const response = await axios.delete(
            `https://dummyjson.com/posts/${id}`)
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

deleteRecipesById(8);
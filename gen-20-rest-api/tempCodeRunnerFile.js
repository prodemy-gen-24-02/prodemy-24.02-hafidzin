ync (id, recipesUpdate) => {
    try{
        const response = await axios.put(
            `https://dummyjson.com/posts/${id}`,
            recipesUpdate
        )
    } catch (error) {
        console.log(error);
    }
}

updateRecipesById(2, recipesUpdate)
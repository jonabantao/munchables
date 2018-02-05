export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    data: { recipe },
  })
);

export const fetchRecipe = id => (
  $.ajax({
    method: "GET",
    url: `/api/recipes/${id}`,
  })
);

export const fetchRecipes = () => (
  $.ajax({
    method: "GET",
    url: "/api/recipes",
  })
);

export const updateRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: `/api/recipes/${recipe.id}`,
    data: { recipe }
  })
);

export const deleteRecipe = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/recipes/${id}`
  })
);

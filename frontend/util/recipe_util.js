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
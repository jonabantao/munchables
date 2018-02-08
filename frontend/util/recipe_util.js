export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    processData: false,
    contentType: false,
    data: recipe,
  })
);

export const fetchRecipe = id => (
  $.ajax({
    method: "GET",
    url: `/api/recipes/${id}`,
  })
);

export const fetchRecipes = search => (
  $.ajax({
    method: "GET",
    url: "/api/recipes",
    data: { search }
  })
);

export const updateRecipe = (recipe, id) => (
  $.ajax({
    method: "PATCH",
    url: `/api/recipes/${id}`,
    processData: false,
    contentType: false,
    data: recipe,
  })
);

export const deleteRecipe = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/recipes/${id}`
  })
);

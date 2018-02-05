export const createStep = step => (
  $.ajax({
    method: "POST",
    url: "/api/steps",
    data: { step },
  })
);

export const fetchStep = id => (
  $.ajax({
    method: "GET",
    url: `/api/steps/${id}`,
  })
);

export const fetchSteps = recipeId => (
  $.ajax({
    method: "GET",
    url: "/api/steps",
    data: { step: { recipe_id: recipeId } }
  })
);

export const updateStep = step => (
  $.ajax({
    method: "POST",
    url: `/api/steps/${step.id}`,
    data: { step }
  })
);

export const deleteRecipe = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${id}`
  })
);

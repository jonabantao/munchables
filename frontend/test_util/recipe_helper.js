export const recipeTestIndex1 = {
  recipes: {
    1: {
      id: 1,
      title: 'Test Recipe 1',
      author_id: 1,
      published: false,
      recipe_img_url: 'testurl1',
    },
  },
  authors: {
    1: {
      username: 'Test Author 1',
    },
  },
};

export const recipeTestIndex2 = {
  recipes: {
    2: {
      id: 2,
      title: 'Test Recipe 2',
      author_id: 2,
      published: true,
      recipe_img_url: 'testurl2',
    },
  },
  authors: {
    2: {
      username: 'Test Author 2',
    }
  }
};

export const newRecipe = {
  recipe: {
    id: 3,
    title: 'Test Recipe 3',
    body: 'Test Body 3',
    author_id: 3,
    recipe_video_url: 'testvideourl',
    recipe_img: 'testimgurl',
    recipe_img_url: 'testimgpath',
    created_at: 'Sun, 01 Jan 2018',
  },
  author: {
    id: 3,
    username: 'Test Helper 3',
    profile_img_url: 'Profile Test Img',
  },
  steps: {},
};


export const testRecipesPayload = {
  recipeTestIndex1,
};

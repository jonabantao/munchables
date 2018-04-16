[<img src="https://i.imgur.com/ujt7Utj.png">](https://makemunchables.com)

[Munchables](https://makemunchables.com) is a single page web application clone inspired by [Instructables](https://www.instructables.com/) where users can post and share recipes and comment on other users' creations. Munchables uses Ruby on Rails on the backend, BCrypt handling user's password security, PostgreSQL for its database, and React/Redux for the front end. 


# Features
## Search
<div align="center">
  <img src="https://i.imgur.com/G5Yxn8f.gif">
</div>

Similiar to Instructable's Search, Munchables allows you to search for multiple words and return recipe titles that match with any words that you've input. In addition, like Instructables, search terms that have been input on the navigation search bar are stored in the main search bar in the Search page to help remember what the user was looking for.

The search parameter is handling in the backend through ActiveRecord and basic regex, which removes trims any whitespace, removes all punctuation except for any hyphens and checks if the word is anywhere in the title text. For example, while 'chicken' will match all chicken recipes, typing 'hicken' will not return the same results.


```
# recipe.rb

  def self.search_all_words(query)
    search = query.to_s.downcase.gsub(/[^a-z0-9\s-]/i, ' ').strip.split
    search.map! { |word| "title ILIKE '#{word}%' OR title ILIKE '% #{word}%'"}
    term = search.join(" OR ")
    self.where(term)
  end
```
## Munchables Creation

<div align="center">
  <img src="https://i.imgur.com/rlu4UQG.jpg" style="width: 500px;">
</div>

Users are able to access the Write a New Munchable page through the navbar or through the user dropdown menu on the top left. The same container was used for before and after Munchable creation. In order for the steps to keep track of which Munchable they were attached to, a user has to first submit the initial recipe information before continuing. 

```
  handleInitialSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;
    let formData = new FormData();
    formData.append('recipe[body]', this.state.body);
    formData.append('recipe[title]', this.state.title);
    formData.append('recipe[recipe_video_url]', this.checkValidYouTubeUrl());
    if (file) {
      formData.append('recipe[recipe_img]', this.state.imageFile);
    }

    this.props.createRecipe(formData)
      .then(newRecipe => (
        this.props.history.replace(`/recipes/${newRecipe.recipe.id}/edit`)));
  }
```
The backend protects users from unauthorized AJAX PATCH requests to their Munchables by checking if the author's id of the Munchable is the same as the currentUser's id.

In the front-end, the user is redirected back to the root page if they are not the author of the Munchable, but in order for the prevent the actual author from being redirected on a page reload, this check comes after the promise returns from the AJAX GET request.

```
  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.requestRecipe(this.props.ownProps.match.params.recipeId)
        .then(recipe => {
          if (recipe.author_id === this.props.currentUser.id) {
            return this.updateEditedState();
          } else {
            this.props.history.replace("/");
          }
        });
    }
```


## Loading Spinners
<div align="center">
  <img src="https://i.imgur.com/wMhKNyy.gif">
</div>
There are times where the AJAX promise is not returned quickly enough before a render. In these cases, the webpage would crash because some of the rendering relies on the object being already stored in the state. In order to fix this, a null check was created along with certain AJAX requests sending Loading actions to the Loading reducer. Components that rely on this first check if they are waiting for the promise.

```
render() {
    if (this.props.isLoadingRecipe || !this.props.recipe) {
      return <LoadingRecipes />;
    }

    const recipe = this.props.recipe;
    const author = this.props.authors[recipe.author_id].username;

    return (
      <article className="detail">
        <header className="detail__header">
          <h2 className="detail__title">{recipe.title}</h2>
          <h4 className="detail__author">By: {author}</h4>
          <small>Posted: {recipe.creation}</small>
        </header>
        <section className="detail__intro-container">
          {this.displayVideo()}
    ...
```

# Planned Features
* **User Profile Page** (DONE)

  Users should be able to edit their profile, check which Munchables they have created and favorited.
* **Add more images to one recipe** 

  Currently, a user is able to upload one video and one image per Munchable. 
* **Categories**

  Users will be able to navigate through Munchables and tag their own creations through categories.
* **Add infinite scrolling for recipe index views**
* **Feature recipes ordered by how many users have favorited the Munchable, then randomized and selected**

* **Testing**
  Coverage of Jest and Enzyme in the frontend, Rspec for backend tests
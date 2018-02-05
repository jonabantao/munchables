User.destroy_all
Recipe.destroy_all

# Guest usernames to be used for demo login (found in frontend/util) #
guest_users = User.create([
  { 
    username: "chef_excellence", 
    email: "chefex@example.com",
    password: "anexcellentpw"
  }, {
    username: "rocklobster", 
    email: "rockex@example.com",
    password: "testing123"
  }, {
    username: "aa_student", 
    email: "student@ex.com",
    password: "1student1"
  }, {
    username: "jigglybuff", 
    email: "poke@example.net",
    password: "pokemonpw"
  }, {
    username: "mambo", 
    email: "just@example.com",
    password: "jmonika"
  }
])
#############
recipes = Recipe.create([
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[0].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[3].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[1].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[4].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[1].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    author_id: guest_users[3].id
  },
])

steps = Step.create([
  {
    title: Faker::Hacker.noun,
    body: Faker::Hacker.say_something_smart,
    order: 1,
    recipe_id: recipes[0].id,
  },
  {
    title: Faker::Hacker.noun,
    body: Faker::Hacker.say_something_smart,
    order: 2,
    recipe_id: recipes[0].id,
  },
  {
    title: Faker::Hacker.noun,
    body: Faker::Hacker.say_something_smart,
    order: 3,
    recipe_id: recipes[0].id,
  },
])
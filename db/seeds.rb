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
RECIPE_MAIN_PHOTOS = [
  "http://i.imgur.com/EJZip9T.jpg"
];

recipes = Recipe.create([
  {
    title: "Russian Salmon Pie", 
    body: "The Russians call it kulebyaka, but in Alaska it is pirok, perok or peroche — all amendments of pirog, the more general Russian word for pie. Inside the flaky crust, wild salmon from Alaskan waters is layered with rice and cabbage, crops introduced to the 18th-century natives of Kodiak Island by fur traders from across the strait. Long after the Russians gave up the hunt for sea otter pelts and sold their claim to the territory to the United States, the frontier fish-camp dish remained a staple of the Alaskan table.",
    recipe_img: open(RECIPE_MAIN_PHOTOS[0]),
    published: true,
    author_id: guest_users[0].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[3].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[1].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[4].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description, 
    published: true,
    author_id: guest_users[1].id
  },
  {
    title: Faker::Food.dish, 
    body: Faker::Food.description,
    published: true,
    author_id: guest_users[3].id
  },
])

recipe_one_steps = Step.create([
  {
    body: "Heat oven to 375 degrees. Melt butter in a large nonstick skillet over medium-low heat. Add onion and cook, stirring occasionally, until tender, about 7 minutes. Stir in mushrooms, cabbage and vinegar; increase heat to medium. Cover pan and cook 4 minutes; uncover, toss and cook 2 more minutes. Remove vegetables from pan, season with salt and pepper to taste, and set aside.",
    order: 1,
    recipe_id: recipes[0].id,
  },
  {
    body: "Wipe out skillet, add olive oil and set over medium-high heat. Add salmon and season lightly with salt and pepper. Cook salmon 5 minutes per side; remove to a plate and let cool. Flake salmon into large chunks and set aside.",
    order: 2,
    recipe_id: recipes[0].id,
  },
  {
    body: "Set a sheet of puff pastry on a lightly floured surface. Gently roll out until it is large enough to fit a 9-inch deep-dish pie plate. Transfer pastry to pie plate, allowing extra dough to drape over edge.",
    order: 3,
    recipe_id: recipes[0].id,
  },
  {
    body: "Spread brown rice over bottom of pastry. Peel and chop the hard-boiled egg, then add to pie, followed by flaked salmon. Sprinkle with cheese, then bread crumbs. Mound vegetable mixture on top. Sprinkle with parsley and drizzle cream over top.",
    order: 4,
    recipe_id: recipes[0].id,
  },
  {
    body: "Roll out remaining sheet of puff pastry on a lightly floured surface until it is large enough to cover pie. Brush rim of bottom pastry with water and place second sheet of pastry directly on top. Using kitchen scissors or a paring knife, trim off excess dough. Use a fork to crimp the edges of the pie together and help the sheets of pastry adhere.",
    order: 5,
    recipe_id: recipes[0].id,
  },
  {
    body: "Cut a few small slits in the top of the pie to allow steam to escape. Brush top of pie with beaten egg. Bake until pastry is puffed and golden brown, 35 to 40 minutes.",
    order: 6,
    recipe_id: recipes[0].id,
  },
])
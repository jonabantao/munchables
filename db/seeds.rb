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
Recipe.create(title: "Test", body: "testbody", author_id: guest_users[0].id)
Recipe.create(title: "Tesfast", body: "testbody", author_id: guest_users[3].id)
Recipe.create(title: "Tesfsafsat", body: "testbody", author_id: guest_users[2].id)
Recipe.create(title: "Tesfsafsat", body: "testbody", author_id: guest_users[1].id)
Recipe.create(title: "Testsa", body: "testbody", author_id: guest_users[4].id)
Recipe.create(title: "Tesfsat", body: "testbody", author_id: guest_users[2].id)
Recipe.create(title: "Testa", body: "testbody", author_id: guest_users[1].id)

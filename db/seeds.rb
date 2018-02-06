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
    title: "Russian Salmon Pie", 
    body: "The Russians call it kulebyaka, but in Alaska it is pirok, perok or peroche — all amendments of pirog, the more general Russian word for pie. Inside the flaky crust, wild salmon from Alaskan waters is layered with rice and cabbage, crops introduced to the 18th-century natives of Kodiak Island by fur traders from across the strait. Long after the Russians gave up the hunt for sea otter pelts and sold their claim to the territory to the United States, the frontier fish-camp dish remained a staple of the Alaskan table.",
    recipe_img: open("http://i.imgur.com/EJZip9T.jpg"),
    published: true,
    author_id: guest_users[0].id
  },
  {
    title: "Grape Salad", 
    body: "This grape salad, which falls into the same category of old-fashioned party dishes as molded Jell-O salad, comes from a Minnesota-born heiress, who tells me it was always part of the holiday buffet in her family. It couldn’t be simpler to prepare and has only three ingredients: grapes, sour cream and brown sugar.

Rather like a creamy fruit salad with a crisp sugar topping, it really is delicious, though the concept sounded strange to me before I first tasted it. Other versions, I hear, call for softened cream cheese and nondairy “whipped topping”; I can’t say I’ll be trying that. Some cooks caramelize the brown sugar under the broiler and some don’t, but I definitely recommend this step, which gives the dish a crème brûlée aura.", 
    published: true,
    recipe_video_url: "https://www.youtube.com/watch?v=_-r0jUj6SXI",
    recipe_img: open("https://i.imgur.com/cjhTAQs.jpg"),
    author_id: guest_users[3].id
  },
  {
    title: "Portuguese Egg Custard Tarts", 
    body: "These diminutive egg tarts — pasteis de nata — a specialty all over Portugal, have a cinnamon flavored custard nestled in a flaky puff pastry crust. The trick here is to bake them in a very hot oven, which causes the custard to puff and the pastry to turn brown and crunchy. You can make the crust and filling ahead, but don’t bake them more than an hour or two before serving. They’re at their best still warm.", 
    recipe_img: open("https://i.imgur.com/qwMhYBQ.jpg"),
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: "Well Done Steak",
    body: "Ever since i was a kid i was always obsessed with how good the food on animes looked. One in particular was a well known piece of meat that had a bone poking out either end, it was caveman meat etc. This kind of meat can be seen in many animes, mangas and games, including monster hunter. I decided to have a go at making my own version of this tasty dish!

This would be perfect for anime/games/geek night! Impress your friends :D", 
    recipe_video_url: "https://www.youtube.com/watch?v=BofLbbh_gPU",
    recipe_img: open("https://i.imgur.com/xLHLFtS.jpg"),
    published: true,
    author_id: guest_users[1].id
  },
  {
    title: "Roast Lamb", 
    body: "If you haven't cooked a whole leg of lamb before, here is the place to start. This is not a revolutionary recipe, but slathering on butter and (take our word for it) anchovies makes this version truly essential. It is excellent for the Easter feast — lamb has ancient associations with springtime, and it pairs well with sharp spring vegetables like asparagus, dandelion greens and artichokes. Lamb is also popular for Passover, but the leg is not considered kosher unless the sciatic nerve is removed. Some kosher butchers offer that, but we also give options for other cuts like shoulder and double loin. The butter can be replaced by duck or goose fat, or olive oil, but the gravy (made from pan drippings) will need to be adjusted. For roasting, meaty American lamb is preferable to cuts from Australia and New Zealand. Most American lambs are fed both grass and grain, yielding meat that is fine-grained, earthy and mild.", 
    recipe_img: open("https://i.imgur.com/38qja3sr.jpg"),
    published: true,
    author_id: guest_users[4].id
  },
  {
    title: "Buffalo Chicken Wings", 
    body: "Americans are a wing-loving people. The Buffalo variety, by most accounts “invented” at the Anchor Bar in, yes, Buffalo, is the official food of our most sacred event of the year: the Super Bowl. These can be made on the grill or in the oven.", 
    recipe_img: open("https://i.imgur.com/hslD8Pe.jpg"),
    recipe_video_url: "https://www.youtube.com/watch?v=wuJdS_0aeAs",
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: "Crisp Peanut Butter Sandwich Cookies", 
    body: "Inspired by two recipes in Maida Heatter’s “Book of Great Cookies,” these crisp treats are the best peanut butter cookies I’ve ever tasted.", 
    recipe_img: open("https://i.imgur.com/gB3yMeC.jpg"),
    published: true,
    author_id: guest_users[2].id
  },
  {
    title: "Beer Braised Beef and Onions", 
    body: "This hearty, warming beef and onion stew is flavored with Belgian beer, bay leaves and sweet paprika. A variation on a traditional Flemish carbonnade, it’s rich and homey but still lively, with a ruddy color from the paprika. The very large quantity of onions adds sweetness, and also helps make the sauce velvety soft. Serve it over potatoes, noodles or polenta.",
    recipe_img: open("https://i.imgur.com/0KGh2Igr.jpg"),
    published: true,
    author_id: guest_users[1].id
  },
  {
    title: "Slow-Cooker Butter Chicken", 
    body: "Not every version of butter chicken uses butter. Coconut milk gives this slow-cooker chicken its creamy richness. This is a fast recipe for the cook: Just prep it earlier in the day, even during your morning routine, getting your onion and spices going on the stove while simultaneously making lunches for grumpy children, folding dish towels, feeding the dogs and wondering once again why no one else has done any of the above. If you're preparing pork or beef in the slow cooker, you'll want to brown the meat first, but that's not necessary with boneless cuts of chicken. The meat will be cooked within 4 1/2 or 5 hours, but if you need to let it sit a little longer — up to 7 hours total, on low heat — it will still be delicious, though the chicken may be very soft and shred a tad.",
    recipe_img: open("https://i.imgur.com/Fgry7V7.jpg"),
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

recipe_two_steps = Step.create([
  {
    body: "Heat broiler. Put grapes in a large mixing bowl. Add sour cream and stir with a wooden spoon or spatula, making sure all grapes are well coated.",
    order: 1,
    recipe_id: recipes[1].id,
  },
  {
    body: "Transfer mixture to a 2-quart ceramic soufflé dish or other baking dish. Sprinkle brown sugar evenly over top. Place dish under broiler as far from heat source as possible and broil until sugar is caramelized and crispy, about 5 minutes (be vigilant or you’ll risk a burnt black topping). Rotate dish as necessary for even browning. Chill for at least one hour. May be prepared up to 24 hours ahead. Just before serving, sprinkle with toasted pecans, if using.",
    order: 2,
    recipe_id: recipes[1].id,
  },
])

recipe_three_steps = Step.create([
  {
    title: "Roll the puff pastry",
    body: "On a lightly floured surface, roll puff pastry into an 18-inch/46-centimeter square. Starting with the edge closest to you, tightly roll the dough into a log. Wrap in plastic wrap and refrigerate until very firm, at least 30 minutes and preferably overnight.",
    order: 1,
    recipe_id: recipes[2].id,
  },
  {
    title: "Prepare the oven",
    body: "Heat the oven to 500 degrees and arrange the oven racks in the top third and lower third of the oven. Place 2 cookie sheets on the oven racks while the oven heats.",
    order: 2,
    recipe_id: recipes[2].id,
  },
  {
    body: "In a medium saucepan, combine sugar, cinnamon stick and 2/3 cup/165 milliliters water. Bring to a boil and cook 1 minute. Turn off heat and let stand until you’re ready to use it.",
    order: 3,
    recipe_id: recipes[2].id,
  },
  {
    body: "Roll the firm log of pastry on a lightly floured surface until 1 inch/2 1/2 centimeters in diameter. Trim the ends, then cut the log into 1/2-inch/12-millimeter slices. (You should have 48.)",
    order: 4,
    recipe_id: recipes[2].id,
  },
  {
    body: "Using a rolling pin, roll one of the pastry rounds into a 2 1/2-inch/63-millimeter circle. Place pastry into the cavity of a mini-muffin tin, and press to evenly flatten the dough against the bottom and sides of the cavity, extending about 1/16 inch/3 millimeters above the rim of the pan. The dough should be about 1/16 inch/3 millimeters thick, with the bottom a bit thicker than the sides. Repeat with the remaining dough, chilling the cut rounds if dough becomes difficult to roll. Refrigerate crusts until firm, at least 10 minutes.  ",
    order: 5,
    recipe_id: recipes[2].id,
  },
  {
    body: "While the dough chills, finish the filling: In a small saucepan, heat 1 cup plus 1 tablespoon/255 milliliters milk over medium-low heat until bubbles begin to form around the edges.",
    order: 6,
    recipe_id: recipes[2].id,
  },
  {
    body: "In a large bowl, whisk flour with the remaining 5 tablespoons/75 milliliters milk. Continue whisking while adding the hot milk in a slow, steady stream. Discard the cinnamon stick from the sugar syrup and whisk the syrup into the milk mixture in a steady stream. Return to the saucepan and cook over medium-low heat, whisking constantly, until thickened, 5 to 10 minutes.",
    order: 7,
    recipe_id: recipes[2].id,
  },
  {
    body: "Place the yolks in a large bowl. Whisking constantly, add hot milk mixture to eggs in a slow stream until fully incorporated. Strain through a fine-mesh sieve. Pour warm filling into pastry shells until they’re three-quarters full.",
    order: 8,
    recipe_id: recipes[2].id,
  },
  {
    body: "Transfer tarts to the cookie sheets in oven and bake until the shells are golden brown and crisp, and the custards are golden brown and darkened in spots, 15 to 19 minutes.",
    order: 9,
    recipe_id: recipes[2].id,
  },
  {
    body: "Let cool in the pans on a wire rack for 5 minutes, then pop out tarts to continue cooling on the racks for another 5 minutes. Sprinkle with cinnamon and serve warm.",
    order: 10,
    recipe_id: recipes[2].id,
  }
])

recipe_four_steps = Step.create([
  {
    title: "What you will need",
    body: "1) Mixing bowl
2) Chicken wings or drumsticks
3) 3 Eggs
4) Sake
5) Soy
6) Salt and Pepper
7) Onion
8) Breadcrumbs
9) Spices - Cumin, Paprika, Garlic Powder, Ginger, Nutmeg
10) 300g Ground/Minced Pork
11) 6 Slices Bacon
12) Chopping Board, sharp knife, and scissors. (A must for the deboning.)
13) Basting brush",
    order: 1,
    recipe_id: recipes[3].id,
  },
  {
    title: "Chicken Bones",
    body: "This first step is really fiddly so i did it first and just put them in the fridge when i was finished.

If your chicken leg has skin on it, its fairly easy to remove, if you pull on it hard enough, half the time it will just rip off. When it gets to the base of the drumstick, cutting the skin off as you go, you will need to dig your scissors in and cut the joint off the end to reveal that nice looking bone which will be one of the bones sticking out of your Well Done Steak.

Once thats gone you can start snipping the meat in a few places to push it upward and expose more of the bone. Turning it kind of inside out in a way. Please remember in a drumstick theres actually 2 bones, one is very very fine, you WILL need to remove this just to be on the safe side, but its easy enough to cut it out.",
    order: 2,
    recipe_id: recipes[3].id,
  },
  {
    title: "Boil Eggs",
    body: "Grab 2 of your 3 eggs and put small holes in the end with a pin, this makes them easier to peel. Bring a pot of water to the boil and with a ladle gently drop your eggs into the hot water and start to stir. The stirring should hopefully cause the egg yolk to cook in the middle of the egg. You dont need to do this the whole time they are cooking, just for the first few minutes. Leave them boiling and watch them while you prepare your meat. About 8 minutes.",
    order: 3,
    recipe_id: recipes[3].id,
  },
  {
    title: "Making the Middle Meat",
    body: "Cut up about 1/4 of your onion, fairly fine, doesn't hurt to add a little more.
Add half a teaspoon of salt.
A decent sprinkle of sugar.
1/4 of a teaspoon of Cumin, Garlic powder and Nutmeg
add 1/2 teaspoon of Paprika

You can always add more garlic! depends how much you like. Give that a stir through.

Add in 3 tablespoons of bread crumbs
and 1 beaten egg.

Mix again!

Now add your 300g of ground/minced pork.
You will probably want to mix this part with your fingers and make sure everything is evenly put through the meat.

Dont forget your eggs! you can drain and peel them ready for the next step.",
    order: 4,
    recipe_id: recipes[3].id,
  },
  {
    title: "Assembling",
    body: "Preheat your oven to 180c/350f

This part can be all kinds of tricky. It took my two goes to do my first one so be prepared to stuff it up.

You want to lay down your bacon to form a sheet as you can see in the photos. My bacon was really long so i actually cut it in half and only used 3 slices instead of 6, but most bacon isnt that long which is why i recommend 6 pieces.

Lump about half of your mixture down and spread it evenly, i used a spatula to start with but then found it was easier to do it with my hands. Make it all nice and even and spread out like picture 2

Take 2 of your drumstick bones and lay them down either side of the bacon, bone side out and make sure a majority of the meat is in the middle. If your drumsticks were very meaty, you may need to trim some of the meat off and move it, or remove it completely. Once your bones are placed, put your boiled and peeled egg in the centre, and work it in so the chicken is somewhat cocooning the egg.

Now comes the hard part, starting from the bottom and rolling away from you, you need to roll this whole thing up. Expect it to break, it may take a couple times to get it working for you. Once rolled, place into an oiled baking dish. I used spray on coconut baking oil.

Repeat this process for the second one. Bake them for about 30 minutes.
While they are cooking, make your basting sauce.",
    order: 5,
    recipe_id: recipes[3].id,
  },
  {
    title: "Baste it!",
    body: "The liquid i made to baste with is very easy.

2 tbsp of Soy sauce.
1 tsp of sake
1/4 tsp of powdered ginger
1/2 tsp of garlic powder.

Just roughly mix it all together with your basting brush, and when its been 30ish mins, take out the meat and baste it. Now is the time to also sprinkle with cracked black pepper to taste, then return the meat to the oven. I rebasted mine about 5 - 7 mins later again, then returned it once more for another 5 minutes.",
    order: 6,
    recipe_id: recipes[3].id,
  },
  {
    title: "Finish!",
    body: "I served up the Well done steak on lettuce as i felt like it added a caveman flair, i also dressed the plate up a bit with some roasted potatoes and Asparagus lightly fried in oil and herbs.

This was a serious hit with my household! Everyone enjoyed it and there was many food comas afterwards.

Thanks for reading, please share your food pics if you use this recipe!",
    order: 7,
    recipe_id: recipes[3].id,
  }
])

recipe_five_steps = Step.create([
  {
    body: "Heat oven to 425 degrees. Use a small sharp knife to make about a dozen incisions, each about 2 inches deep, through the fat that covers the top of the meat. Using a mortar and pestle or a blender, blend 2/3 of the anchovies (or 2/3 of the mustard if using), the rosemary leaves and the garlic cloves into a chunky paste. Using your fingers, press paste deeply into incisions.",
    order: 1,
    recipe_id: recipes[4].id,
  },
  {
    body: "Mix remaining anchovies (or mustard) and the butter into a paste. Smear this mixture all over the surface of the roast. Season liberally with black pepper. (Do not add salt; the anchovies are salty enough, and so is the mustard.) Place the lamb on a rack in a roasting pan, fat side up, and squeeze the lemon halves over. Pour the wine around the roast into the pan.",
    order: 2,
    recipe_id: recipes[4].id,
  },
  {
    body: "Roast 15 minutes, then reduce heat to 350 degrees and roast until internal temperature reaches 130 to 135 degrees (for medium-rare or medium meat), about another 60 to 90 minutes. Baste every 20 minutes or so with the wine and drippings in the pan, adding more wine as needed to keep the liquid from scorching. If possible, for the last 15 minutes of cooking, use convection or a broiler to crisp the fat on the roast.",
    order: 3,
    recipe_id: recipes[4].id,
  },
  {
    body: "Remove pan from the oven, remove rack from the pan, and let the roast rest on the rack for at least 15 to 20 minutes in a warm place, tented with foil. The internal temperature will rise to about 140 to 145 degrees.",
    order: 4,
    recipe_id: recipes[4].id,
  },
  {
    body: "To make sauce from the pan drippings, remove a few tablespoons of fat by tipping the pan and spooning off the top layer. Put the pan over medium heat until the liquid simmers. Taste the simmering liquid and whisk in more wine, 1/4 cup at a time, until the consistency and flavor are right. Do not let the mixture become syrupy; it should be a sharp jus, not a thick gravy.",
    order: 5,
    recipe_id: recipes[4].id,
  },
  {
    body: "Carve lamb into 1/2-inch-thick slices and arrange on a heated platter, decorated with rosemary sprigs. Serve with piping hot gravy.",
    order: 6,
    recipe_id: recipes[4].id,
  }
])

recipe_six_steps = Step.create([
  {
    title: "Prep those wings.",
    body: "Cut 3 pounds of chicken wings into 3 sections; save the wing tips for stock. Toss the wings with a little neutral oil to keep them from sticking.",
    order: 1,
    recipe_id: recipes[5].id,
  },
  {
    title: "Heat up that grill.",
    body: "Heat a charcoal or gas grill; the fire should be moderately hot and the rack 4 to 6 inches from the heat. Leave one side of the grill cooler for indirect cooking.",
    order: 2,
    recipe_id: recipes[5].id,
  },
  {
    title: "Wings on that grill.",
    body: "Put the wings on the cool side of the grill. Cover the grill and cook, checking and turning once or twice, until most of the fat has been rendered and the wings are cooked through, 15 to 20 minutes. (You can also broil in the oven on a sheet pan, flipping wings halfway through.)",
    order: 3,
    recipe_id: recipes[5].id,
  },
  {
    title: "Prep that sauce.",
    body: "While the wings cook, combine 1/3 cup relatively mild hot sauce, 4 tablespoons melted butter, 1 tablespoon sherry vinegar or white vinegar, 1 tablespoon minced garlic, salt and pepper in a large bowl.",
    order: 4,
    recipe_id: recipes[5].id,
  },
  {
    title: "Cook those wings.",
    body: "When the wings are cooked, add them to the bowl with the sauce, and toss to coat. Now put the wings on the hot part of the grill and cook, uncovered, turning as necessary, until they’re nicely browned on both sides. (Or return to the broiler for a few minutes.)",
    order: 5,
    recipe_id: recipes[5].id,
  }
])

recipe_seven_steps = Step.create([
  {
    body: "Sift together the flour, baking soda and salt.",
    order: 1,
    recipe_id: recipes[6].id,
  },
  {
    body: "Cream the butter and 1/2 cup of peanut butter in a mixer fitted with the paddle attachment. Scrape down the sides of the bowl, add the raw sugar and beat on medium speed for 1 to 2 minutes. Add the egg and beat together. Scrape down the sides of the bowl and gradually add the flour mixture, beating at low speed.",
    order: 2,
    recipe_id: recipes[6].id,
  },
  {
    body: "Place a piece of parchment or wax paper on your work surface and spoon the dough onto the paper in a strip 12 to 14 inches long and about 2 inches thick. Fold the paper over the dough and shape the strip of dough into a log. Wrap in plastic and refrigerate several hours or, preferably, overnight.",
    order: 3,
    recipe_id: recipes[6].id,
  },
  {
    body: "Preheat the oven to 350 degrees Fahrenheit with racks positioned in the middle and lower portions. Line baking sheets with parchment. Remove the log of dough from the refrigerator and cut it in half. Rewrap one half and return to the refrigerator. Cut the remaining half into thin rounds, no thicker than 1/4 inch, and place them on the parchment-lined baking sheets about 1 inch apart, with the rows staggered. Place 1/4 teaspoon of peanut butter in the center of each round. Remove the other half of the dough from the refrigerator and slice in rounds. Place each round on top of a peanut butter-topped round. When all of the rounds are covered, lightly flour your fingertips and seal the cookies by pressing down gently all the way around. It won’t matter if the top cracks a little. Your rounds should be about 2 1/2 inches in diameter.",
    order: 4,
    recipe_id: recipes[6].id,
  },
  {
    body: "Bake in the middle of the oven for 15 to 16 minutes, or until the cookies are lightly colored and semi-firm to the touch, switching the baking sheets top to bottom and front to back halfway through. Remove from the heat and allow to cool completely before eating. They won’t be crisp until they cool.",
    order: 5,
    recipe_id: recipes[6].id,
  }
])

recipe_eight_steps = Step.create([
  {
    body: "In a large bowl, combine salt, pepper, bay leaves and paprika. Toss meat to coat, then cover, refrigerate and marinate at least 2 hours or overnight.",
    order: 1,
    recipe_id: recipes[7].id,
  },
  {
    body: "Heat oven to 325 degrees. In a large (8-quart) Dutch oven or other heavy pot, heat butter and oil over medium-high until shimmering. Working in batches, brown beef on two sides until dark and crusty, transferring to a bowl when browned (reserve bay leaves). As you cook, add more oil and adjust heat if necessary to prevent burning.",
    order: 2,
    recipe_id: recipes[7].id,
  },
  {
    body: "When all the meat is browned, add onions to the empty pot and raise heat to medium-high. Cook, stirring and scraping up the brown coating on the bottom of the pan as the onions release their liquid.",
    order: 3,
    recipe_id: recipes[7].id,
  },
  {
    body: "Continue cooking until onions are deeply golden brown and soft, 20 to 30 minutes, stirring occasionally.",
    order: 4,
    recipe_id: recipes[7].id,
  },
  {
    body: "Meanwhile, make a bouquet garni by tying thyme, parsley and reserved bay leaves together with kitchen string (or just throw them in the pot and warn your guests not to eat them).",
    order: 5,
    recipe_id: recipes[7].id,
  },
  {
    body: "Push the onions to the sides, then add tomato paste, coriander and cinnamon to the bottom of the pan. Cook, stirring, 1 minute, until paste is darkened and fragrant. Stir in flour, cook another minute, then add stock, beer, 1 cup water and bouquet garni. Return beef and any juices in the bowl to the pot, bring to a simmer, then cover and transfer to oven. Cook until beef is tender, about 2 1/2 to 3 hours, turning it over halfway through.",
    order: 6,
    recipe_id: recipes[7].id,
  },
  {
    body: "If the sauce seems thin, remove the meat with a slotted spoon; cover with foil to keep warm. Return pot with liquid to stove and simmer until thickened to taste, 5 to 10 minutes. Return the meat to pot and stir to heat through. Serve from the pot or a platter. Garnish with chopped parsley, flaky sea salt, pepper and paprika. Serve with mustard on the side.",
    order: 7,
    recipe_id: recipes[7].id,
  }
])

recipe_nine_steps = Step.create([
  {
    body: "In medium skillet, heat oil over medium-high heat. Add onions to skillet, and cook until softened, about 3 minutes. Reduce heat to medium, add garlic and ginger, and cook another 2 minutes. Add garam masala, tomato paste and salt; cook and stir 2 minutes.",
    order: 1,
    recipe_id: recipes[8].id,
  },
  {
    body: "Place chicken pieces in a slow cooker, then add tomato paste mixture, lime zest and juice, coconut milk and chicken stock. Stir everything together, cover and cook on low heat setting for 4 1/2 to 5 hours, until the chicken is cooked through. (You may let it cook up to 7 hours if necessary, but the chicken may be very soft and shred.) Garnish with cilantro and serve with basmati or jasmine rice, and naan if you have some.",
    order: 2,
    recipe_id: recipes[8].id,
  }
])
export const randomGuest = () => {
  const GUESTS = [{
    username: 'chef_excellence',
    password: 'anexcellentpw',
  }, {
    username: 'rocklobster',
    password: 'testing123',
  }, {
    username: 'aa_student',
    password: '1student1',
  }, {
    username: 'jigglybuff',
    password: 'pokemonpw',
  }, {
    username: 'mambo',
    password: 'jmonika',
  }];

  return GUESTS[Math.floor(Math.random() * GUESTS.length)];
};
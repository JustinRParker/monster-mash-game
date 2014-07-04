// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.
// e.g. function Monster(){};
// e.g. function Player(){};
function Player(options){
  options = options || {};
  this.name = options.name;
}

function Monster(options){
  options = options || {};
  this.name = options.name;
  this.health = 0;
}
// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };

var nun = new Player({
  name: 'nun'
});

var priest = new Player({
  name: 'priest'
});

var godzilla = new Monster({
  name: 'godzilla'
});

// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };

$('.nunPlayer').click(function(){
  event.preventDefault();
  $(".Player").hide();
  alert('Nun FIGHT!');
  $(".nunImage").show();
});

$('.priestPlayer').click(function(){
  event.preventDefault();
  alert('Priest FIGHT!');
  (".priestImage").show();
});

$(".btnAttack").button();
var health = health + 5;
var attackMode = function ( event ){
    if (Monster.health === 20) {
      return Monster.health = health + 5;
      alert(Monster.health)
    }
  else
    {
      alert('You Won!');
      window.prompt('Play again?')
    }

};

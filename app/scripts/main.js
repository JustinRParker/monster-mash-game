// Allows page to load before running scripts
//http://api.jquery.com/ready/

$(function(){

  $(".ninjaTurtleImage").hide();
  $(".ninjaImage").hide();
  $(".godzillaMonster").hide();
  // CONSTRUCTORS
  // Here is where you'll create your constructors for you player and monster.

  function Player(options){
    options = options || {};
    this.name = options.name;
  }

  function Monster(options){
    options = options || {};
    this.name = options.name;
    this.health = 100;
  }
  // GLOBAL VARIABLES
  // You'll also want to create variables for the specific players and monsters.

  var ninjaTurtle = new Player({
    name: 'Ninja Turtle'
  });

  var ninja = new Player({
    name: 'Ninja'
  });

  var godzilla = new Monster({
    name: 'Godzilla'
  });

  // ACTIONS
  // This is where jQuery will come into play and where you'll set a lot of your
  // interactions for players and monsters. (e.g. player selection, attack interactions)
  // e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };

  $('.ninjaTurtlePlayer').click(function(){
    event.preventDefault();

    $(".Player").hide();
    alert('Ninja Turtle FIGHT! \nCLick on Godzilla to kill him!');
    $(".ninjaTurtleImage").show();
    $(".godzillaMonster").show();
  });

  $('.ninjaPlayer').click(function(){
    event.preventDefault();
    $(".Player").hide();
    alert('Ninja FIGHT! \nCLick on Godzilla to kill him!');
    $(".ninjaImage").show();
    $(".godzillaMonster").show();
  });

  $('.attackGodzilla').click(function(){
    event.preventDefault();
    //Change health of monster
    godzilla.health = godzilla.health - 20;

    //Check to see if monster's health is 0
    if (godzilla.health === 0){

      //If true alert player that they won.
      $('.health').html("You won!");  

      if (window.confirm("Play Again?")) {
        window.open("", "_self");
      }
    }
    else
    {
      //else show health of monster
      $('.health').html("Godzillia's Health: " + godzilla.health);
    }

  });
});

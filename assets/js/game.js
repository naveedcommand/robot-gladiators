var playername = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playername, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

/* function fight() {
    window.alert("Welcome to Robot Gladiators");
}
 */
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playername + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playername + ". " + playername + " now has " + playerHealth + " health remaining.");

    // Check your health
    if (playerHealth <=0) {
        window.alert(playername + " has died!");
    }
    else {
        window.alert(playername + " still has " + playerHealth + " health left.");
    }
}

fight();
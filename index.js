zakatNisaab = 1821645;  // Copied the value from google.
name = prompt("Enter Your Name");
totalWealth = prompt("Enter your Total Wealth");
debt = prompt("Enter the amount of debt on you");

netWealth = totalWealth - debt;

if (netWealth >= zakatNisaab) {
    let zakat = netWealth * 0.025;
    document.write(name + " Aap pr Rs." + zakat.toFixed(2) + " zakat wajib ha... ")
} else {
    document.write(name + " Zakat isn't farz on you right now :)")
}
var details = {
    displayDetails: function (regNum, brand) {
        console.log(
            this.name + " is the owner of bike " + regNum + " and " + brand
        );
    },
};
var person1 = { name: "hanif" };
var details1 = details.displayDetails.bind(person1, "1223", "hero");
details1();

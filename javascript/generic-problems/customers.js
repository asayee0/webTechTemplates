//Question 1
function getMostValuable(customers) {
    var mostValuable = 0;
    var mostValuablePos;
    for (var key in customers) {
        if (customers[key].products.value > mostValuable) {
            mostValuable = customers[key].products.value;
            mostValuablePos = key;
        }
    }
    return mostValuablePos;
}

//Question 2
function addCustomer(customers, newCustomer) {
    var i = 0;
    for (var key in customers) {
        if (newCustomer.name < customers[key].name) {
            customers.splice(i, 0, newCustomer);
            break;
        }
        i++;
    }
    return customers;
}

//Question 3
function getBySex(customers, sex) {
    var arr = [];
    if (sex === "male") sex = "m";
    else if (sex === "female") sex = "f";

    if (sex != "m" && sex != "f") {
        return "Invalid parameter";
    }

    for (var key in customers) {
        if (customers[key].sex === sex)
            arr.push(customers[key]);
    }
    return arr;
}

//Question 4
function getCustomerWhoBought(customers, productToQuery) {
    var arr = [];
    for (var key in customers) {
        if (customers[key].products.name === productToQuery)
            arr.push(customers[key]);
    }
    return arr;
}

//Question 5
function convertDate(dates) {
    var re = /\d\d\d\d\-\d\d\-\d\d/;
    var arr = [];
    for (var d in dates) {
        if (re.test(dates[d])) arr.push(new Date(dates[d]));
    }
    return arr;
}

//Question 6
function convertProductDates(customers) {
    var dates = [];
    for (var key in customers) {
        dates.push(customers[key].products.date);
    }
    return convertDate(dates);
}
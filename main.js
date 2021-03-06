// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8] ;
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// console.log(" ///// fonction Validate Cred /////")

const validateCred = function (array) {

    //crée une copie du tableau et l'inverse, et enlève le chiffre le plus à gauche (anciennement le plus à droite)
    let modifiedArray = array.slice(0);
    modifiedArray = modifiedArray.reverse();
    // console.log("array :", array);
    // console.log("modifiedArray :", modifiedArray);

    modifiedArray = modifiedArray.splice(1);
    // console.log(" retrait du premier chiffre: " + modifiedArray); 
   
    // double chaque element du tableau
    modifiedArray = modifiedArray.map((element, index) => {
        
        // As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.    
            const doubling = (element) => {
                if ((element*2) > 9) {
                    return element*2 - 9;
                }
                return element*2;
            };

            return (index % 2 === 0) 
                ? doubling(element)
                : element;
            
        }
    );
    
    // console.log(" chaque element restant dans le tableau est doublé et si il est > 9, on lui enlève 9: " + modifiedArray);
     
    // ajoute le dernier element du array original au modified array
    modifiedArray = modifiedArray.concat(array[array.length - 1]);    
    // console.log( "modifiedArray auquel on rajoute le dernier element de array :" + modifiedArray);
    
    // // fait la somme de tous les chiffres du tableau
    const add = function (a,b) {return a + b}; 
    let reducedValue = modifiedArray.reduce(add);
    // let initialReducedValue = array.reduce(add);
    // console.log(" valeur somme de tous les chiffres du tableau " + reducedValue);    
    // console.log( "modifiedArray après réduction du tableau: " + reducedValue); 

    // la somme modulo 10
    if (reducedValue % 10 === 0) {
        return true;
    }else {
        return false;
    }
        
};

// console.log("la fonction renvoie : " + validateCred(valid1));


console.log(" ///// fonction Find Invalid Card /////");

const findInvalidCards = (nestedArray) => {
    
    let invalidArray = [];
    // console.log("InvalidArray en début de fonction : ", invalidArray);
    // console.log("nestedArray :", nestedArray);
    
    nestedArray.forEach(currentArray => {
        
        // console.log("current Array through loop ", currentArray);
        
        const testing = validateCred(currentArray);
        // console.log("current Array through loop ", currentArray);
        // console.log("résultat du test : ", testing);
        
        if (!testing) {
            // console.log("currentArray (dans if) :", currentArray);
            invalidArray.push(currentArray);
        }
        
    })
    console.log("InvalidArray en fin de fonction ", invalidArray);
    return invalidArray; 
};

// console.log(findInvalidCards(batch));


console.log(" ///// fonction ID companies /////");

const idInvalidCardCompanies = (nestedArray) => {
    

    let companyArray = [];

    nestedArray.forEach ( element => {
        console.log("current element : ", element );
        let firstDigit = element[0];
        console.log("first digit of the array" , firstDigit);
       

            if (firstDigit !== 3 && firstDigit !== 4 && firstDigit !== 5 && firstDigit !== 6   ) {

                console.log("Company not found");
            }
            
            switch (firstDigit) {
                case 3 : companyArray.push("Amex");
                break;

                case 4 : companyArray.push("Visa");
                break;

                case 5 : companyArray.push("Mastercard");
                break;

                case 6 : companyArray.push("Discover");
                break;

                default : "Company not found"
            }

    })

    console.log("company array", companyArray)
    let finalCompanyArray = new Set(companyArray);
    console.log("company array après le set", finalCompanyArray)
    return finalCompanyArray;

};

console.log(idInvalidCardCompanies(findInvalidCards(batch)));





const cats = ["Milo", "Otis", "Garfield"]
 
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(name) {
    cats.push('Ralph');

    return  [cats, name];

}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');

    return [cats, name];
}


function destructivelyRemoveFirstCat(name) {
    cats.shift()

    return [cats, name];
}

function destructivelyRemoveLastCat(name) {
    cats.pop();

    return [cats, name];
}

function appendCat(name) {
    const copyOfcats = [...cats, name]

    return copyOfcats;
}

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, -1);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}



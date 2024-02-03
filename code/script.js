function sayYes() {
    let saidYes = document.getElementById("main-div");
    let imageUrl = "../gifs/love-milk-and-mocha-bear.gif";

    saidYes.innerHTML = '';

    const yaay = document.createElement("h2");
    const text = document.createTextNode("YAAAAAAAAAAAAY!!!!!");
    const YES = document.createElement("img");

    yaay.append(text);

    YES.setAttribute('src', imageUrl);
    YES.setAttribute('height', '186px');
    YES.setAttribute('width','auto');

    saidYes.append(yaay);
    saidYes.append(YES);
}
let clicked =0;

function sayNo() {
    let textArray = [];
    textArray[0] = 'R U sure?';
    textArray[1] = 'Really sure?';
    textArray[2] = 'Is this your final answer?';
    textArray[3] = 'Do U even love me?';
    textArray[4] = 'R U breaking up with me????';

    let yes = document.getElementById("sayYes");
    let no = document.getElementById("sayNo");

    if (clicked === 0) {
        no.innerHTML = textArray[0];
        yes.setAttribute('style','font-size:30px;');
    }
    else if (clicked === 1) {
        no.innerHTML = textArray[1];
        yes.setAttribute('style','font-size:40px;');
    }
    else if (clicked === 2) {
        no.innerHTML = textArray[2];
        yes.setAttribute('style','font-size:50px;');
    }
    else if (clicked === 3) {
        no.innerHTML = textArray[3];
        yes.setAttribute('style','font-size:60px;');
    }
    else if (clicked === 4) {
        no.innerHTML = textArray[4];
        yes.setAttribute('style','font-size:70px;');

    } else {
        no.innerHTML = '';
        no.outerHTML = '';
    }
    clicked++;
}
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
let triangle = document.getElementById('triangle');

let topDiv = document.querySelector('.top');

let bottomDiv = document.querySelector('.bottom');

let againBtn = document.querySelector('.desktop-button');

let resetBtn = document.querySelector('.reset-button');

let result = document.getElementById('result');

let puan = 0 ;

let changePuan = document.getElementById('puan');

let hareketler = [rock, paper, scissors];

let rastgeleSayi = Math.round(Math.random() * 2);


let bilgisayarHamlesi = hareketler[rastgeleSayi];

changePuan.innerText = `${puan}`;

console.log(changePuan);



console.log(bilgisayarHamlesi.outerHTML);



againBtn.setAttribute('style', 'display:none;');


function reset() {

    bottomDiv.setAttribute('style', 'display:flex; justify-content:center');
    scissors.setAttribute('style', 'display:block;');
    rock.setAttribute('style', 'display:block;');
    triangle.setAttribute('style', 'display:block;');
    bilgisayarHamlesi.setAttribute('style', 'display:block;');
    topDiv.innerHTML = (` <img id="paper" src="./assets/img/paper.png" alt="paper"> <img id="scissors" src="./assets/img/makas.png" alt="scissors"> ` );
    topDiv.children[0].addEventListener('click', game);
    topDiv.children[1].addEventListener('click', game1);

    changePuan.innerText = `${puan}`;

    bilgisayarHamlesi = hareketler[Math.round(Math.random() * 2)];

};

resetBtn.addEventListener('click', reset);







console.log(againBtn.outerHTML)
function game() {

    bottomDiv.setAttribute('style', 'display:none;');
    scissors.setAttribute('style', 'display:none;');
    rock.setAttribute('style', 'display:none;');
    triangle.setAttribute('style', 'display:none;');
    bilgisayarHamlesi.setAttribute('style', 'display:block');

    

    if (bilgisayarHamlesi === rock) {

        result.innerText = 'YOU WİN'

        againBtn.setAttribute('style', 'display:block;');
      
        topDiv.innerHTML = (` <img id="paper" src="./assets/img/paper.png" alt="paper"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        topDiv.children[1].children[1].addEventListener('click', reset);
        
        
        

        puan++
        console.log(puan);

        
        
    
       

    };


    if (bilgisayarHamlesi === scissors) {

        result.innerText = 'YOU LOSE';

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (` <img id="paper" src="./assets/img/paper.png" alt="paper">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        topDiv.children[1].children[1].addEventListener('click', reset)
        
        puan--

        console.log(puan);
        
        
    };


    if (bilgisayarHamlesi === paper) {

        result.innerText = `IT'S A DRAW`

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (` <img id="paper" src="./assets/img/paper.png" alt="paper">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);

        topDiv.children[1].children[1].addEventListener('click', reset)

        

    };







};



paper.addEventListener('click', game);




function game1() {

    bottomDiv.setAttribute('style', 'display:none');
    scissors.setAttribute('style', 'display:none;');
    rock.setAttribute('style', 'display:none;');
    triangle.setAttribute('style', 'display:none;');
    bilgisayarHamlesi.setAttribute('style', 'display:block');




    if (bilgisayarHamlesi === paper) {

        result.innerText = 'YOU WİN'

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (` <img id="scissors" src="./assets/img/makas.png" alt="scissors">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset)

        puan++

        console.log(puan);

    }


    if (bilgisayarHamlesi === rock) {

        result.innerText = 'YOU LOSE'

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (` <img id="scissors" src="./assets/img/makas.png" alt="scissors">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset);

        puan--

        console.log(puan);



    }


    if (bilgisayarHamlesi === scissors) {

        result.innerText = `IT'S A DRAW`

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (`<img id="scissors" src="./assets/img/makas.png" alt="scissors"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset)

    }







};

scissors.addEventListener('click', game1);


function game2() {

    bottomDiv.setAttribute('style', 'display:none');
    scissors.setAttribute('style', 'display:none;');
    rock.setAttribute('style', 'display:none;');
    triangle.setAttribute('style', 'display:none;');
    bilgisayarHamlesi.setAttribute('style', 'display:block');




    if (bilgisayarHamlesi === scissors) {

        result.innerText = 'YOU WİN';

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (`  <img id="rock" src="./assets/img/rock.png" alt="rock">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset);

        puan++

    }


    if (bilgisayarHamlesi === paper) {

        result.innerText = 'YOU LOSE';

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (`  <img id="rock" src="./assets/img/rock.png" alt="rock">  ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset);

        puan--




    }


    if (bilgisayarHamlesi === rock) {

        result.innerText = `IT'S A DRAW`;

        againBtn.setAttribute('style', 'display:block;');

        topDiv.innerHTML = (` <img id="rock" src="./assets/img/rock.png" alt="rock"> ${againBtn.outerHTML} ${bilgisayarHamlesi.outerHTML}`);
        
        topDiv.children[1].children[1].addEventListener('click', reset)

    }

};

rock.addEventListener('click', game2);










console.log(resetBtn);











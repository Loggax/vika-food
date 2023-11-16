// function test() {
//     let container = document.querySelector('.testing');
//     let num = document.querySelector('.in').value;
//     num = +num;
//     console.log(num + num);
//     if(num == 12) {
//         let content = `
//             <div>
//                 <p>це дійсно ${num}</p>
//             </div>
//         `;
//         container.insertAdjacentHTML('beforeend', content);
//     } else {
//         let content = `
//             <div>
//                 <p>це не 12!!!</p>
//             </div>
//         `;
//         container.insertAdjacentHTML('beforeend', content);
//     }
// }



function calc() {
    let weight = document.querySelector('.weight').value;
    weight = +weight;
    let height = document.querySelector('.height').value;
    height = +height;
    let years = document.querySelector('.old').value;
    years = +years;
    let content = document.querySelector('.result');
    let results;
    if(weight && height && years) {
        results = (10 * weight) + (6.25 * height) - (5 * years) + 5;
        let contentRes = `
            <p>${results} калорій.</p>
        `;
        content.insertAdjacentHTML('beforeend', contentRes);
    } else {
        alert("Заповніть поля!")
    }
}

// let yes = document.querySelector('.yes');
// let no = document.querySelector('.no');

// function test() {
    
// }



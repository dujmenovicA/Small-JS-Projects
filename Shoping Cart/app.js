let dodajBtns = document.querySelectorAll('.dodaj')
let lista = document.querySelector('#lista');
let totalVrijednost = document.querySelector('#totalVrijednost')
let totalIspis = document.querySelector('#total');


for (let btn of dodajBtns) {
    btn.addEventListener('click', function () {
        let vrijednostUnosa = btn.previousElementSibling.valueAsNumber
        let namirnice = btn.parentElement.parentElement
        let imeArtikla = namirnice.children[1].children[0].innerText
        let cijena = namirnice.children[1].children[1].innerText
        let cijenaBroj = parseInt(cijena[1] + cijena[2])
        let newLi = document.createElement('li');
        let ukloniBtn = document.createElement('button');
        ukloniBtn.innerText = 'Ukloni';
        newLi.innerHTML = `<b>${imeArtikla}</b> - ${cijena} x ${vrijednostUnosa} = $${cijenaBroj * vrijednostUnosa}`
        newLi.append(ukloniBtn);
        lista.append(newLi);
        btn.disabled = true;
        btn.innerText = 'Dodano'
        totalVrijednost.innerText = parseInt(totalVrijednost.innerText) + (cijenaBroj * vrijednostUnosa);
        console.log(totalVrijednost);

        totalIspis.style.display = 'block'


        ukloniBtn.addEventListener('click', function () {
            let listElement = this.parentElement;
            lista.removeChild(listElement)
            btn.disabled = false;
            btn.innerText = 'Dodaj';
            totalVrijednost.innerText = parseInt(totalVrijednost.innerText) - (cijenaBroj * vrijednostUnosa);
            console.log(total);
        })
    })

}
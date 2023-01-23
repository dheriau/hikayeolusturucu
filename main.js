document.getElementById('hikaye_olusturucu').addEventListener('click', function() {
    // kullanıcıdan gelen verileri al 
    let hava_durumu_nasil = document.getElementById('hava_durumu_nasil').value;
    let neredesin = document.getElementById('neredesin').value;
    let yolculuk_sekli = document.getElementById('yolculuk_sekli').value;
    let ne_gordunuz = document.getElementById('ne_gordunuz').value;
    



    let hikaye = `Hava ${hava_durumu_nasil} olduğu için ${neredesin}'e yürüdüm. 
    ${yolculuk_sekli} ile yolculuk esnasında güzel bir ${ne_gordunuz} gördüm. 
    `

    document.getElementById('hikaye').innerHTML = hikaye
})
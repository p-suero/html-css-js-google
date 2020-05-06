//OPZIONE A
//intercetto il click sul collegamento
$("#app-grid a").click(function(){
    //seleziono il dropdown
    var dropdown = $(".app-dropdown");
    //gli assegno il toogleClass (aggiunge e rimuove la clsse in automatico)
    dropdown.toggleClass("active");
})

// //OPZIONE NON TROPPO ELEGANTE(perchè sto aggiungendo css in linea)
// //intercetto il click sull'icona delle applicazioni
// $("#app-grid a").click(function(){
//     //seleziono il dropdown
//     var dropdown = $(".app-dropdown");
//     //gli assegno il toogle
//     dropdown.toggle();
// })

//chiudo il dropdown quando clicco in punto al di fuori di questo
//interceto il click sul document
$(document).click(function(event) {
    //intercetto il click sull'elemento specifico cliccato nel document
    var target = $(event.target);
    console.log(target);
    if(!(target.is("#app-grid *"))) {
        $(".app-dropdown").removeClass("active");
    }
})

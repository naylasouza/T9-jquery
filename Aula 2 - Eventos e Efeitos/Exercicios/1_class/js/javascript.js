$(document).ready(function(){
    $("body").css("font-family", "arial", "sans-serif" )
    let nickname = "Nay"
    let cidade = "São Paulo"
    let favorito = " As branquelas, todo mundo em panico"
    let FavDoMomento = "parasita"

    $("#nickname").text(nickname)
    $("#cidade").text(cidade)
    $("#favoritos").text(favorito)
    $("#favoritos").text(FavDoMomento)

    $("h1")
    .text("sobre Yo")
    .addClass("titulo")

    $("li")
    .addClass("list")
    .addClass("item-list")

    $("li")
    .removeClass("wrongClass")

    $("li")
    .eq(0)
    .removeClass("wrongClass")
})
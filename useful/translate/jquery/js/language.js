
$(".panel-es").on("mouseenter" , revealEn );

function revealEn() {
    $(this).next().addClass("reveal")
}

$(".panel-es").on("mouseleave" , hideEn );

function hideEn() {
    $(this).next().removeClass("reveal")
}

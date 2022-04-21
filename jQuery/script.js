console.log('Here everything is ok')

$("#btn_row").click(function () {
    $(".block_members").css("grid-template-columns","1fr 1fr 1fr 1fr")
});

$("#btn_grid").click(function () {
    $(".block_members").css("grid-template-columns","1fr 1fr")
});

function mouseEnter (e)
{
    console.log(e)
}
function mouseLeave(e)
{
    console.log(e)
}

$(".block_members img").on("mouseenter", mouseEnter)
$(".about_member").on("mouseleave", mouseLeave)



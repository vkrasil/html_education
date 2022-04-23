$(".about_member").hide()

let MouseState= {
    mbr1State:undefined,
    mbr2State:undefined,
    mbr3State:undefined,
    mbr4State:undefined
}

$("#btn_row").click(function () {
    $(".block_members").css("grid-template-columns","1fr 1fr 1fr 1fr")
});

$("#btn_grid").click(function () {
    $(".block_members").css("grid-template-columns","1fr 1fr")
});

function mouseEnter (e)
{
    const memberNum=getNumberFromId(e.target.id)
    startEffect(memberNum)
    setTimeout(intervalCheck,500,memberNum)
    MouseState[`mbr${memberNum}State`] = true
}

function mouseLeave(e)
{
    const memberNum=getNumberFromId(e.target.id)
    stopEffect(memberNum)
    MouseState[`mbr${memberNum}State`] = false
}

function intervalCheck(number){
    if ((($(`#div_about${number}:hover`).length)===0) && (MouseState[`mbr${number}State`]))
    {
        const elemNum=number.toString()
        $(`#div_about${elemNum}`).triggerHandler("mouseleave")
    }
}

function startEffect(memberNum)
{
    const targetImg= $(`#img_member${memberNum}`)
    targetImg.fadeTo(1000,0.25)
    $(`.div_member${memberNum} p`).hide()
    const divAbout = $(`#div_about${memberNum}`)
    const divMember=$(`.div_member${memberNum}`)
    const boxDiv = divMember[0].getBoundingClientRect()
    const boxImage=targetImg[0].getBoundingClientRect()
    divMember.height(boxDiv.height)
    divMember.width(boxDiv.width)
    const screenScrollX=window.scrollX
    const screenScrollY=window.scrollY
    targetImg.css({'position':'absolute'})
    targetImg.offset({ top: boxImage.top+screenScrollY, left: boxImage.left+screenScrollX } )
    targetImg.width(boxImage.width)
    targetImg.height(boxImage.height)
    const offset=Math.round((boxDiv.height-boxImage.height)/2)
    targetImg.animate({ "top": `+=${offset}px` },  {queue: false, duration: 500} )
    divAbout.css({
        'top': boxDiv.top+screenScrollY,
        'left': boxImage.left+screenScrollX,
        'width': boxImage.width,
        'height': boxDiv.height
    })
    divAbout.delay(200).fadeIn(1000)
}

function stopEffect(memberNum)
{
    const imgMember=$(`#img_member${memberNum}`)
    const divAbout = $(`#div_about${memberNum}`)
    const divMember=$(`.div_member${memberNum}`)
    const boxDiv = divMember[0].getBoundingClientRect()
    const boxImage=imgMember[0].getBoundingClientRect()
    const offset=Math.round((boxDiv.height-boxImage.height)/2)

    imgMember.animate({ "top": `-=${offset}px` },  {queue: false, duration: 500, complete: function (){
            imgMember.removeAttr('style')
            $(`.div_member${memberNum} p`).fadeIn(500)
        }} )
    imgMember.fadeTo(1000,1)
    divAbout.fadeOut(1000,function (){
        divMember.removeAttr('style')
    })
}

function getNumberFromId(id)
{
    return id[id.length-1]
}

$(".block_members img").on("mouseenter", mouseEnter)
$(".about_member").on("mouseleave", mouseLeave)



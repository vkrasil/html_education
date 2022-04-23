let MouseState = {
    mbr1State: undefined,
    mbr2State: undefined,
    mbr3State: undefined,
    mbr4State: undefined
}

const imgMembers = document.querySelector('.block_members').getElementsByTagName('img')
const divAbouts = document.getElementsByClassName('about_member')

let isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints //detecting TouchScreen device
if (isTouchScreen) {
    //yes, it is TouchScreen
    for (let eAbout of divAbouts) eAbout.addEventListener("touchstart", onTouchStartDiv, false)
    for (let eachImg of imgMembers) eachImg.ontouchstart = onTouchStartImg

} else {
    //no, device without TouchScreen
    for (let eachImg of imgMembers) eachImg.onmouseenter = onMouseMoveMember
    for (let eachAbout of divAbouts) eachAbout.onmouseleave = onMouseLeaveMember
}

function startEffect(numberOfMember) {
    const targetImg = document.querySelector(`#img_member${numberOfMember}`)
    const divMember = document.getElementsByClassName(`div_member${numberOfMember}`)[0]
    const divAbout = document.getElementById(`div_about${numberOfMember}`)
    const boxDiv = divMember.getBoundingClientRect()
    const boxImage = targetImg.getBoundingClientRect()
    divMember.style.height = boxDiv.height.toString() + 'px'
    divMember.style.width = boxDiv.width.toString() + 'px'
    const screenScrollX = window.scrollX
    const screenScrollY = window.scrollY
    targetImg.style.position = 'absolute'
    targetImg.style.left = (boxImage.left + screenScrollX).toString() + 'px'
    targetImg.style.top = (boxImage.top + screenScrollY).toString() + 'px'
    targetImg.style.width = (boxImage.width).toString() + 'px'
    targetImg.style.height = (boxImage.height).toString() + 'px'
    const offset = Math.round((boxDiv.height - boxImage.height) / 2)
    targetImg.style.transform = `translate(0,${offset}px)`
    divAbout.style.left = (boxImage.left + screenScrollX).toString() + 'px'
    divAbout.style.top = (boxDiv.top + screenScrollY).toString() + 'px'
    divAbout.style.width = boxImage.width.toString() + 'px'
    divAbout.style.height = boxDiv.height.toString() + 'px'
    const divPName = document.getElementById(`dm${numberOfMember}p_name`)
    const divPPosition = document.getElementById(`dm${numberOfMember}p_pos`)
    divPName.style.opacity = '0%'
    divPPosition.style.opacity = '0%'
    divPName.style.visibility = 'hidden'
    divPPosition.style.visibility = 'hidden'
    divAbout.style.visibility = 'visible'
    divAbout.style.opacity = '100%'
    divMember.style.opacity = '25%'
}

function stopEffect(numberOfMember) {
    const divMember = document.getElementsByClassName(`div_member${numberOfMember}`)[0]
    const divAbout = document.getElementById(`div_about${numberOfMember}`)
    const imgMember = document.getElementById(`img_member${numberOfMember}`)
    imgMember.style.cssText = ''
    divAbout.style.opacity = '0%'
    divAbout.style.visibility = 'hidden'
    const divPName = document.getElementById(`dm${numberOfMember}p_name`)
    const divPPosition = document.getElementById(`dm${numberOfMember}p_pos`)
    divPName.style.visibility = 'visible'
    divPPosition.style.visibility = 'visible'
    divPName.style.opacity = '100%'
    divPPosition.style.opacity = '100%'
    divMember.style.cssText = ''
    divMember.style.opacity = '100%'
}

function onTouchStartImg(te) {
    const numberOfMember = te.target.id[te.target.id.length - 1]
    MouseState[`mbr${numberOfMember}State`] = true
    if (isOtherMemberActive(numberOfMember)) inactiveMembersExcept(numberOfMember)
    startEffect(numberOfMember)
}

function onTouchStartDiv(te) {
    const str1 = te.target.id[te.target.id.length - 1]
    let str2
    let numberOfMember
    if (te.isTrusted) {
        str2 = te.targetTouches[0].target.parentElement.id[te.targetTouches[0].target.parentElement.id.length - 1]
        numberOfMember = (str1) || (str2)
    } else {
        numberOfMember = str1
    }
    MouseState[`mbr${numberOfMember}State`] = false
    stopEffect(numberOfMember)
}

function isOtherMemberActive(number) {
    let result = false
    for (let currentKey = 1; currentKey <= Object.keys(MouseState).length; currentKey++) {
        if ((MouseState[`mbr${currentKey}State`] === true) && (number !== currentKey)) result = true
    }
    return result
}

function inactiveMembersExcept(exceptNum) {
    for (let eachAbout of divAbouts) {
        let currentMemberNum = eachAbout.id[eachAbout.id.length - 1]
        if ((currentMemberNum !== exceptNum) && (MouseState[`mbr${currentMemberNum}State`] === true)) {
            if (isTouchScreen) {
                let tEvent = new TouchEvent("touchstart")
                eachAbout.dispatchEvent(tEvent)
            } else {
                let mEvent = new MouseEvent("mouseleave")
                eachAbout.dispatchEvent(mEvent)
            }
        }

    }
}

function intervalCheck(number) {
    if (!(document.querySelector(`#div_about${number}:hover`)) && (MouseState[`mbr${number}State`])) {
        let mEvent = new MouseEvent("mouseleave")
        divAbouts[(number - 1).toString()].dispatchEvent(mEvent)
    }

}

function onMouseMoveMember(e) {
    const numberOfMember = e.target.id[e.target.id.length - 1]
    if ((MouseState[`mbr${numberOfMember}State`] === undefined) || (MouseState[`mbr${numberOfMember}State`] === false)) {
        setTimeout(intervalCheck, 500, numberOfMember)
        if (isOtherMemberActive(numberOfMember)) inactiveMembersExcept(numberOfMember)
        startEffect(numberOfMember)
        MouseState[`mbr${numberOfMember}State`] = true
    }
}

function onMouseLeaveMember(e) {
    const numberOfMember = e.target.id[e.target.id.length - 1]
    MouseState[`mbr${numberOfMember}State`] = false
    stopEffect(numberOfMember)
}

const btnRow = document.getElementById('btn_row')
const btnGrid = document.getElementById('bnt_grid')

btnRow.onclick = () => {
    const blockMembers = document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'

}

btnGrid.onclick = () => {
    const blockMembers = document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns = '1fr 1fr'
}

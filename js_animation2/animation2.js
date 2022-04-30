const leftArrow = document.querySelector('#left_arrow')
const rightArrow = document.querySelector('#right_arrow')
const divSlider = document.querySelector('.div_team')
const divSliderWrapper = document.querySelector('.div_team_wrapper')
const leftBar = document.querySelector('.left_bar')
const rightBar = document.querySelector('.right_bar')
const allMembers = document.querySelectorAll('.div_member')
const totalItems = allMembers.length
let totalItemsOnScreen = 3
let firstMember=1
let arrItems = []

function initArrItems() {
    for (let i = 1; i <= totalItems; i++) {
        if (i <= totalItemsOnScreen) {
            arrItems.push(true)
        } else {
            arrItems.push(false)
        }
    }
}

function showOnlyActiveItems () {
    let i = 1
    for (let eachMember of allMembers) {
        if (arrItems[i - 1] === true) {
            eachMember.style.display = 'flex'
        } else {
            eachMember.style.display = 'none'
        }
        i++
    }
}

function setOrderToMembers () {
    let j=firstMember
    for (let i=1; i<=totalItems; i++)
    {
        allMembers[j-1].style.order=i.toString()
        if (j===totalItems) { j=1 } else { j++ }
    }
}

function setOrderToMembersReverse (nextMember) {
    let j=nextMember
    for (let i=1; i<=totalItems; i++)
    {
        allMembers[j-1].style.order=i.toString()
        if (j===totalItems) { j=1 } else { j++ }
    }
}

function getMemberWidth () {
    for (let i=1; i<=totalItems; i++) {
        if (arrItems[i - 1] === true) {
            const boxMember=allMembers[i-1].getBoundingClientRect()
            return boxMember.width
        }
    }
}

function setArrowsPos () {
    const boxSlider = divSlider.getBoundingClientRect()
    const windowInnerWidth = document.documentElement.clientWidth
    let topCord = (boxSlider.top).toString() + 'px'
    let widthBar = ((windowInnerWidth - boxSlider.width) / 2).toString() + 'px'
    let heightBar = boxSlider.height.toString() + 'px'
    leftBar.style.cssText = `
    left: 0px;
    top: ${topCord};
    width: ${widthBar};
    height: ${heightBar};
    `;
    rightBar.style.cssText = `
    right: 0px;
    top: ${topCord};
    width: ${widthBar};
    height: ${heightBar};
    `;
}

document.onscroll = () => {
    setArrowsPos()
}

window.onresize = () => {
    setArrowsPos()
}

window.onload = () => {
    setArrowsPos()
    initArrItems()
    setOrderToMembers()
    showOnlyActiveItems()
}

function getNextIdLeft () {
    let j
    for (let i=1; i<=totalItems; i++){
        if ((i+1)>totalItems) { j=1 } else { j=i+1 }
        if((arrItems[i-1]===true) && (arrItems[j-1]===false)) { return j }
    }
}

function getNextIdRight () {
    let j
    for (let i=totalItems; i>=1; i--){
        if ((i-1)<1) { j=totalItems } else { j=i-1 }
        if((arrItems[i-1]===true) && (arrItems[j-1]===false)) { return j }
    }
}

leftArrow.onclick = () => {
    console.log('left click')
   // console.log(arrItems);
    let boxSlider = divSlider.getBoundingClientRect()
    let leftCord = boxSlider.left.toString()
    let topCord = boxSlider.top.toString()
    let boxWidth = boxSlider.width.toString()
    let boxHeight = boxSlider.height.toString()
    let memberWidth = getMemberWidth()
    console.log(memberWidth);
    let gapBetweenMembers = (boxSlider.width-(totalItemsOnScreen*memberWidth))/(totalItemsOnScreen-1)
    divSliderWrapper.style.cssText = `
    left: ${leftCord}px;
    top: ${topCord}px;
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    `;
    boxWidth = (boxSlider.width + memberWidth + gapBetweenMembers).toString()
    console.log(gapBetweenMembers);
    let offsetTransform = (gapBetweenMembers + memberWidth).toString()
    let nextShowId = getNextIdLeft()
    //console.log('nextShowId: ',nextShowId);
    allMembers[nextShowId-1].style.display = 'flex'
    divSlider.style.cssText = `
    left: ${leftCord}px;
    top: ${topCord}px;
    max-width: ${boxWidth}px; 
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    position: fixed;
    `;
    setTimeout(()=> {
        divSlider.style.transition = 'all 0.5s linear'
        console.log(offsetTransform);
        divSlider.style.transform = `translate(-${offsetTransform}px,0)`
    },50)
    setTimeout(()=> {
        allMembers[firstMember-1].style.display = 'none'
        arrItems[nextShowId-1]=true
        //console.log('setting to true:', nextShowId - 1)
        arrItems[firstMember-1]=false
        //console.log('setting to false: ',firstMember - 1)
        if (firstMember<totalItems) { firstMember++ } else { firstMember=1 }
        setOrderToMembers()
        divSlider.style.cssText = ''
        divSliderWrapper.style.cssText = ''
        //console.log(arrItems);
    }, 600)
}

rightArrow.onclick = () => {
    console.log('right click')
    // console.log(arrItems);
    let boxSlider = divSlider.getBoundingClientRect()
    let leftCord = boxSlider.left.toString()
    let topCord = boxSlider.top.toString()
    let boxWidth = boxSlider.width.toString()
    let boxHeight = boxSlider.height.toString()
    let memberWidth = getMemberWidth()
    console.log(memberWidth);
    let gapBetweenMembers = (boxSlider.width-(totalItemsOnScreen*memberWidth))/(totalItemsOnScreen-1)
    divSliderWrapper.style.cssText = `
    left: ${leftCord}px;
    top: ${topCord}px;
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    `;
    boxWidth = (boxSlider.width + memberWidth + gapBetweenMembers).toString()
    console.log(gapBetweenMembers);
    let offsetTransform = (gapBetweenMembers + memberWidth).toString()
    leftCord -= offsetTransform
    let nextShowId = getNextIdRight()
    //console.log('nextShowId: ',nextShowId);
    setOrderToMembersReverse (nextShowId)
    allMembers[nextShowId-1].style.display = 'flex'
    divSlider.style.cssText = `
    left: ${leftCord}px;
    top: ${topCord}px;
    max-width: ${boxWidth}px; 
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    position: fixed;
    `;
    setTimeout(()=> {
        divSlider.style.transition = 'all 0.5s linear'
        console.log(offsetTransform);
        divSlider.style.transform = `translate(${offsetTransform}px,0)`
    },50)
    setTimeout(()=> {
        allMembers[(firstMember-1+totalItemsOnScreen-1)%totalItems].style.display = 'none'
        arrItems[nextShowId-1]=true
        arrItems[(firstMember-1+totalItemsOnScreen-1)%totalItems]=false
        if (firstMember===1) { firstMember=5 } else { firstMember-- }
        divSlider.style.cssText = ''
        divSliderWrapper.style.cssText = ''
    }, 600)
}

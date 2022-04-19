let MouseState= {
    mbr1State:undefined,
    mbr2State:undefined,
    mbr3State:undefined,
    mbr4State:undefined
}


const imgMembers=document.querySelector('.block_members').getElementsByTagName('img')
for (let eachImg of imgMembers) eachImg.onmousemove=onMouseMoveMember

const divAbouts=document.getElementsByClassName('about_member')
for (let eachAbout of divAbouts) eachAbout.onmouseleave=onMouseLeaveMember

function isOtherMemberActive(number){
    let result=false
    for (let currentKey=1;currentKey<=Object.keys(MouseState).length; currentKey++)
    {
        if ((MouseState[`mbr${currentKey}State`] === true) && (number!=currentKey)) result=true
    }
    return result
}

function inactiveMembersExcept(exceptNum){
    console.log('Found')
    for (let eachAbout of divAbouts) {
        let currentMemberNum=eachAbout.id[eachAbout.id.length-1]
        if ((currentMemberNum!=exceptNum)&&(MouseState[`mbr${currentMemberNum}State`] === true))
        {
            console.log(`Member ${currentMemberNum} needs help`)
            let mEvent=new MouseEvent("mouseleave")
            eachAbout.dispatchEvent(mEvent)
        }

    }
}


function onMouseMoveMember(e) {
    const numberOfMember=e.target.id[e.target.id.length-1]
    if ((MouseState[`mbr${numberOfMember}State`] === undefined) || (MouseState[`mbr${numberOfMember}State`] === false)) {
        console.log(`MouseEnter ${numberOfMember}`)
        if (isOtherMemberActive(numberOfMember))  inactiveMembersExcept(numberOfMember)
        const divMember=document.getElementsByClassName(`div_member${numberOfMember}`)[0]
        const divAbout = document.getElementById(`div_about${numberOfMember}`)
        const boxDiv = divMember.getBoundingClientRect()
        const boxImage=e.target.getBoundingClientRect()
        const screenScrollX=window.scrollX
        const screenScrollY=window.scrollY
        e.target.style.position='absolute'
        e.target.style.left=(boxImage.left+screenScrollX).toString()+'px'
        e.target.style.top=(boxImage.top+screenScrollY).toString()+'px'
        e.target.style.width=(boxImage.width).toString()+'px'
        e.target.style.height=(boxImage.height).toString()+'px'
        const offset=Math.round((boxDiv.height-boxImage.height)/2)
        e.target.style.transform=`translate(0,${offset}px)`
        divAbout.style.left = (boxImage.left+screenScrollX).toString() + 'px'
        divAbout.style.top = (boxDiv.top+screenScrollY).toString() + 'px'
        divAbout.style.width = boxImage.width.toString() + 'px'
        divAbout.style.height = boxDiv.height.toString() + 'px'
        const divPName=document.getElementById(`dm${numberOfMember}p_name`)
        const divPPosition=document.getElementById(`dm${numberOfMember}p_pos`)
        divPName.style.visibility='hidden'
        divPPosition.style.visibility='hidden'
        divAbout.style.visibility='visible'
        divAbout.style.opacity='100%'
        divMember.style.opacity = '25%'
        MouseState[`mbr${numberOfMember}State`] = true
    }
}

function onMouseLeaveMember (e) {
    const numberOfMember=e.target.id[e.target.id.length-1]
    MouseState[`mbr${numberOfMember}State`] = false
    const divMember=document.getElementsByClassName(`div_member${numberOfMember}`)[0]
    const divAbout = document.getElementById(`div_about${numberOfMember}`)
    const imgMember=document.getElementById(`img_member${numberOfMember}`)
    imgMember.style.cssText=''
    divAbout.style.opacity='0%'
    divAbout.style.visibility='hidden'
    const divPName=document.getElementById(`dm${numberOfMember}p_name`)
    const divPPosition=document.getElementById(`dm${numberOfMember}p_pos`)
    divPName.style.visibility='visible'
    divPPosition.style.visibility='visible'
    divMember.style.opacity='100%'
    console.log(`MouseLeave ${numberOfMember}`)
}

const btnRow=document.getElementById('btn_row')
const btnGrid=document.getElementById('bnt_grid')



btnRow.onclick=()=>{
    const blockMembers=document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns='1fr 1fr 1fr 1fr'

}

btnGrid.onclick=()=>{
    const blockMembers=document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns='1fr 1fr'
}

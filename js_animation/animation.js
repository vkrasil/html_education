let MouseState= {
    mbr1State:undefined,
    mbr2State:undefined,
    mbr3State:undefined,
    mbr4State:undefined
}

function setOtherStateToFalse(trueIndex) {
    for (let currentKey=1;currentKey<=Object.keys(MouseState).length; currentKey++)
    {
        if (currentKey!=trueIndex) MouseState[`mbr${currentKey}State`] = false
    }
    //console.log(MouseState);
}

const imgMembers=document.querySelector('.block_members').getElementsByTagName('img')
for (let eachImg of imgMembers) eachImg.onmousemove=onMouseMoveMember

const divAbouts=document.getElementsByClassName('about_member')
for (let eachAbout of divAbouts) eachAbout.onmouseleave=onMouseLeaveMember
//divAbout1.onmouseleave=onMouseLeaveMember;

// imgMember1.onmousemove=(e)=> {
function onMouseMoveMember(e) {
    // console.log(e.target.id)
    const numberOfMember=e.target.id[e.target.id.length-1]
    // console.log(numberOfMember);
    if ((MouseState[`mbr${numberOfMember}State`] === undefined) || (MouseState[`mbr${numberOfMember}State`] === false)) {
        const divMember=document.getElementsByClassName(`div_member${numberOfMember}`)[0]
        //divMember.style.color = '#292D32'
        const divAbout = document.getElementById(`div_about${numberOfMember}`)
        const boxDiv = divMember.getBoundingClientRect();
        const boxImage=e.target.getBoundingClientRect()
        e.target.style.position='fixed'
        e.target.style.left=boxImage.left.toString() + 'px'
        e.target.style.top=boxImage.top.toString()+'px'
        e.target.style.width=(boxImage.width).toString()+'px'
        console.log(boxImage.width);
        e.target.style.height=(boxImage.height).toString()+'px'
        const offset=Math.round((boxDiv.height-boxImage.height)/2)
        e.target.style.transform=`translate(0,${offset}px)`
        divAbout.style.left = boxImage.left.toString() + 'px'
        divAbout.style.cssText
        divAbout.style.top = boxDiv.top.toString() + 'px'
        divAbout.style.width = boxImage.width.toString() + 'px'
        divAbout.style.height = boxDiv.height.toString() + 'px'
        const divPName=document.getElementById(`dm${numberOfMember}p_name`)
        const divPPosition=document.getElementById(`dm${numberOfMember}p_pos`)
        divPName.style.visibility='hidden'
        divPPosition.style.visibility='hidden'
        divAbout.style.visibility='visible'
        divAbout.style.opacity='100%'
        divMember.style.opacity = '25%'
        console.log(`MouseEnter ${numberOfMember}`)
        MouseState[`mbr${numberOfMember}State`] = true
    }
}

function onMouseLeaveMember (e) {
    const numberOfMember=e.target.id[e.target.id.length-1]
    MouseState[`mbr${numberOfMember}State`] = false
    const divMember=document.getElementsByClassName(`div_member${numberOfMember}`)[0]
    const divAbout = document.getElementById(`div_about${numberOfMember}`)
    const imgMember=document.getElementById(`img_member${numberOfMember}`)
    imgMember.style.transform=''
    imgMember.style.width='auto'
    imgMember.style.position='static'
    imgMember.style.maxWidth='100%'
    //divMember.style.color='white'
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
const btnTransform=document.getElementById('bnt_transform')

btnRow.onclick=()=>{
    const blockMembers=document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns='1fr 1fr 1fr 1fr'

}

btnGrid.onclick=()=>{
    const blockMembers=document.querySelector('.block_members')
    blockMembers.style.gridTemplateColumns='1fr 1fr'
}

btnTransform.onclick=()=>{
    const imgTest=document.getElementById('img_member1')
     imgTest.style.position='static'
    //imgTest.style.transform='translate(350px,0)'
}
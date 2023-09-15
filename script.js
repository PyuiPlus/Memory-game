const content = document.getElementById('content')
const launcherBtn = document.getElementById('launcher')

let memo = null
let eMemo = null
let imgMemo = null
let timerSet
const afficheCartes = (pressed, id) => {
    
    const nbCartes = document.getElementById("nbCartes").value
    const e = document.getElementById(id)
    e.setAttribute('class' , 'cards pressed')
    
    const img = document.querySelector(`#${id}>img`)

    img.src = `img/img${pressed}.png`

    if (memo == null && eMemo==null){
        memo = pressed
        eMemo =document.getElementById(id)
        e.setAttribute('class' , 'cards pressed')
        eMemo.setAttribute('class' , 'cards pressed')
        imgMemo= img
    } else {
        e.setAttribute('class' , 'cards pressed')
        eMemo.setAttribute('class' , 'cards pressed')
        setTimeout(function(){ 
            if(memo == pressed && e != eMemo){
                e.setAttribute('class' , 'cards find')
                e.removeAttribute("onclick")
                eMemo.setAttribute('class' , 'cards find')
                eMemo.removeAttribute("onclick")
            } else{
                img.src = `img/tapis-de-bain-carte-a-jouer-dos-60x90-mm.jpg`
                imgMemo.src = `img/tapis-de-bain-carte-a-jouer-dos-60x90-mm.jpg`
                e.setAttribute('class' , 'cards')            
                eMemo.setAttribute('class' , 'cards')            
            }
            eMemo = null
            memo = null
            imgMemo = null
        }, 400);
        }

        let conteur = 0
        for (let index = 0; index < nbCartes; index++) {
            if (content.querySelectorAll("div")[index].className == 'cards find' ) {
                conteur++
            }
            
        }
}

const launcher = () => {
    clearInterval(timerSet);
    let j = 0
    content.innerHTML = ''
    let nbCartes = document.getElementById("nbCartes").value
    nbCartes++
    for (let i = 1; i<nbCartes; i++){
        let randomNb1 = Math.floor(Math.random() * nbCartes) + 1;
        let randomNb2 = Math.floor(Math.random() * nbCartes) + 1;
        const div = document.createElement('div')
        div.setAttribute("class",'cards')
        div.setAttribute("id" , `a${i}`)
        div.setAttribute('onclick', `afficheCartes(${i}, this.id)`)
        div.style.order =randomNb1
        const img1 = document.createElement('img');
        img1.src = `img/tapis-de-bain-carte-a-jouer-dos-60x90-mm.jpg`;
        div.appendChild(img1);
        content.appendChild(div)
        
        const div2 = document.createElement('div')
        div2.setAttribute("class",'cards')
        div2.setAttribute("id" , `b${i}`)
        div2.setAttribute('onclick', `afficheCartes(${i}, this.id)`)
        div2.style.order = (randomNb2)
        const img2 = document.createElement('img');
        img2.src = `img/tapis-de-bain-carte-a-jouer-dos-60x90-mm.jpg`;
        div2.appendChild(img2);
        content.appendChild(div2)
    }

    const timer = document.getElementById("timer")
    timer.innerText = ''
    secondes = 0
    timerSet = setInterval(function(){
        timer.innerText = ''
        timer.innerText = secondes + ' secondes'
        secondes++
        
    }, 1000)

}

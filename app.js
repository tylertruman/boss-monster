const hero = {
    health: 100,
    icon: '🥷🏻'
}

const boss = {
    health: 100,
    icon: '👾'
}

function damage(){
    boss.health -= 5
    console.log('damaging', boss.health)
    if(boss.health < 0){
        boss.health = 0
    }
    drawBoss()
}

function drawHero(){
    let template = ''
    template += `<h5>Ninja Hero</h5>
    <h1 class="icon-big hover">${hero.icon}</h1>
    <div class="progress">
        <div class="progress-bar health-bg" role="progressbar" style="width: ${hero.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${hero.health}%</div>
      </div>`
    let heroElm = document.getElementById('hero')
    heroElm.innerHTML = template
}

drawHero()

function drawBoss(){
    let template = ''
    template += `<h5>Boss Monster</h5>
    <h1 class="icon-big hover">${boss.icon}</h1>
    <div class="progress">
        <div id="hp"class="progress-bar health-bg" role="progressbar" style="width: ${boss.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${boss.health}%</div>
      </div>`
      let bossElm = document.getElementById('boss')
      bossElm.innerHTML = template
}

drawBoss()

function bossAttack(){
    if(hero.health > 0){
        hero.health -=5
        drawHero()
    }   
}

setInterval(bossAttack, 3000)

function reset(){
    boss.health = 100
    hero.health = 100
    drawBoss()
    drawHero()
}
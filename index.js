function newImage(link, left, bottom,){
    let item = document.createElement('img')
    item.src = link
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

for (let x = 0; x < window.innerWidth; x += 100) {
    for (let y = 0; y < window.innerHeight / 2; y += 100) {
      newImage('assets/grass.png', x, y);
    }
  }
  
  for (let x = 0; x < window.innerWidth; x += 100) {
    for (let y = window.innerHeight / 2; y < window.innerHeight; y += 100) {
      newImage('assets/sky.png', x, y);
    }
  }

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png',200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(link, left, bottom,){
    let name = newImage(link, left, bottom,)

    name.addEventListener('dbclick', function(){
        name.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
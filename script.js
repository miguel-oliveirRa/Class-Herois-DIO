// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

let nameHero = "DeadPool"

let xp = 10000

let rankingHero;

// Eu decidi colocar o valor 1000 como ranking Ferro só pra ter um ranking, e não ser undefined

if (xp <= 1000) {
  rankingHero = 'Ferro'
}
else if(xp >= 10001){
  rankingHero = 'Radiante'
}
else{
  switch(true){
    case ((xp > 1000) && (xp < 2001)):
      rankingHero = 'Bronze'
    break
    case ((xp > 2000) && (xp < 5001)):
      rankingHero = 'Prata'
    break
    case ((xp > 5000) && (xp < 7001)):
      rankingHero = 'Ouro'
    break
    case ((xp > 7000) && (xp < 8001)):
      rankingHero = 'Platina'
    break
    case ((xp > 8000) && (xp < 9001)):
      rankingHero = 'Ascendente'
    break
    case ((xp > 9000) && (xp < 10001)):
      rankingHero = 'Imortal'
    break
  }
}
console.log('O Herói de nome ' + nameHero + ' está no nível de ' + rankingHero) 
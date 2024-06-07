let player1  = true
let player2 = false

let pl1_choice = null
let pl2_choice = null

let pl1_c = document.querySelector(".choice-player-1")
let pl2_c = document.querySelector(".choice-player-2")

let info = document.querySelector(".info")

let points1 = document.querySelector(".points1")
let points2 = document.querySelector(".points2")

let score1 = 0
let score2 = 0

document.addEventListener("keydown",function(e){
	if(player1 == true && player2 == false){
		if(e.code == "KeyA"){
			console.log("pressed A")
			player1 = false
			player2 = true

			pl1_choice = "камень"
			info.innerHTML = "Игрок 2 ходит"
		} else if (e.code == "KeyS"){
			console.log("pressed S")
			player1 = false
			player2 = true

			pl1_choice = "ножницы"
			info.innerHTML = "Игрок 2 ходит"
		}  else if (e.code == "KeyD"){
			console.log("pressed D")
			player1 = false
			player2 = true

			pl1_choice = "бумага"
			info.innerHTML = "Игрок 2 ходит"
		}
	}

	if(player2 == true && player1 == false){
		if(e.code == "KeyJ"){
			console.log("pressed J")
			player2 = false

			pl2_choice = "камень"
			info.innerHTML = "..."

			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newround, 3000)
		} else if (e.code == "KeyK"){
			console.log("pressed K")
			player2 = false

			pl2_choice = "ножницы"
			info.innerHTML = "..."

			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newround, 3000)
		}  else if (e.code == "KeyL"){
			console.log("pressed L")
			player2 = false

			pl2_choice = "бумага"
			info.innerHTML = "..."

			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newround, 3000)
		}
	}

})

let show = function(){
	if(pl1_choice == "камень"){	
		pl1_c.style.backgroundColor = "grey"
		pl1_c.style.backgroundImage = "url(stone.jpg)"
		pl1_c.style.backgroundSize = "100% 100%"
	}else if(pl1_choice == "ножницы"){
		pl1_c.style.backgroundColor = "red"
		pl1_c.style.backgroundImage = "url(nozhnici.jpg)"
		pl1_c.style.backgroundSize = "100% 100%"
	}else if(pl1_choice == "бумага"){
		pl1_c.style.backgroundColor = "white"
		pl1_c.style.backgroundImage = "url(paper.jpg)"
		pl1_c.style.backgroundSize = "100% 100%"
	}

	if(pl2_choice == "камень"){	
		pl2_c.style.backgroundColor = "grey"
		pl2_c.style.backgroundImage = "url(stone.jpg)"
		pl2_c.style.backgroundSize = "100% 100%"
	}else if(pl2_choice == "ножницы"){
		pl2_c.style.backgroundColor = "red"
		pl2_c.style.backgroundImage = "url(nozhnici.jpg)"
		pl2_c.style.backgroundSize = "100% 100%"
	}else if(pl2_choice == "бумага"){
		pl2_c.style.backgroundColor = "white"
		pl2_c.style.backgroundImage = "url(paper.jpg)"
		pl2_c.style.backgroundSize = "100% 100%"
	}
}

let finish = function(){
	if(pl1_choice == pl2_choice){
		info.innerHTML = "Draw"
		score1 = score1 + 1
		points1.innerHTML = score1

		score2 = score2 + 1
		points2.innerHTML = score2
	}
	else if(pl1_choice == "камень" && pl2_choice == "ножницы"){
		info.innerHTML = "Победил 1 игрок"
		score1 = score1 + 1
		points1.innerHTML = score1
	}
	else if(pl1_choice == "ножницы" && pl2_choice == "бумага"){
		info.innerHTML = "Победил 1 игрок"
		score1 = score1 + 1
		points1.innerHTML = score1
	}
	else if(pl1_choice == "бумага" && pl2_choice == "камень"){
		info.innerHTML = "Победил 1 игрок"
		score1 = score1 + 1
		points1.innerHTML = score1
	}
	else if(pl2_choice == "камень" && pl1_choice == "ножницы"){
		info.innerHTML = "Победил 2 игрок"
		score2 = score2 + 1
		points2.innerHTML = score2
	}
	else if(pl2_choice == "ножницы" && pl1_choice == "бумага"){
		info.innerHTML = "Победил 2 игрок"
		score2 = score2 + 1
		points2.innerHTML = score2
	}
	else if(pl2_choice == "бумага" && pl1_choice == "камень"){
		info.innerHTML = "Победил 2 игрок"
		score2 = score2 + 1
		points2.innerHTML = score2
	}
	
}
let newround = function(){
	info.innerHTML = "Игрок 1 ходит"
	player1 = true
	player2 = false
	pl1_c.style.background = "black"
	pl2_c.style.background = "black"
}

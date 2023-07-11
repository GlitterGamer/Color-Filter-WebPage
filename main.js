function setup(){
    canvas= createCanvas(500,400)
    canvas.position(400,200)
    video= createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,500,400)
}

function applyFilter(){
    color= document.getElementById("filterColor").value
    tint(color)
}

function take_snapshot(){
    save("MySelfie.png")
}
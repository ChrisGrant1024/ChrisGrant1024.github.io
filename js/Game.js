//Setting constants for width and height
const WIDTH = 300,
    HEIGHT = 500;
//Creating the game
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
})

var square;
var background;
var button;
var buttonMinus;
clickCount = 0;
//Preload Function
function preload() {
    game.load.image('square', 'assets/Square.png');
    game.load.image('background', 'assets/White Background.png');
    game.load.spritesheet('plus_button', 'assets/SpriteSheetPlus.png', 64, 64);
    game.load.spritesheet('minus_button', 'assets/Button_Spritesheet_Minus.png', 64, 64);
}

//Create Function
function create() {
    clickCount = 0;
    this.game.stage.backgroundColor = "#ffffff";
    square = game.add.sprite(WIDTH / 2, HEIGHT / 2 - 64, 'square');
    square.anchor.setTo(0.5, 0.5);

    var clickCount
    var style = {
        font: "128px Arial",
        fill: "#ffffff",
        align: "center"
    };

    text = game.add.text(square.x, square.y, clickCount.toString(), style);
    text.anchor.set(0.5);

    button = game.add.button(square.x - 128, square.y + 128 + 64, 'plus_button', actionOnClick, this, 2, 1, 0);

    buttonMinus = game.add.button(button.x + 256 - 64, button.y, 'minus_button', minusOnClick, this, 2, 1, 0);

    function minusOnClick() {
        if (clickCount > 0) {
            clickCount--;
            text.setText(clickCount.toString());
        }
    }

    function actionOnClick() {
        if (clickCount < 999) {
            clickCount++;
            text.setText(clickCount.toString());
        }

    }


}

function update() {

}
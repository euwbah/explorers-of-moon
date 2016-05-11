var init = function () {
    var stage = new createjs.Stage("canvas");
    var circle = new createjs.Shape();

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 200;
    circle.y = 200;

    stage.addChild(circle);
    stage.update();
}

var SpaceShip = SpaceShip || {};

SpaceShip.GameoverState = {
  init(data = 0) {
    // data=你得到的電池 預設值= 0
    (this.batteries = data), (this.wWidth = this.game.world.width);
    this.wHeight = this.game.world.height;
    this.textStyle = {
      font: '100 20px Helvetica',
      fill: '#FFF',
    };
  },

  preload() {
    this.load.image('battery', 'assets/battery.png');
  },

  create() {
    // 外邊框
    let outerRect = {
      style: [2, 0xffffff, 0.5],
      width: 600,
      height: 240,
    };
    // 畫上電池
    let battery = {
      x: this.wWidth * 0.3,
      y: this.wHeight * 0.5,
      scale: 0.8,
    };
    // restartBtn
    let button = {
      x: this.wWidth * 0.6,
      y: this.wHeight * 0.6,
      offsetX: 20,
      offsetY: -20,
    };
    // msg
    let reSubText = {
      text: '你回收了',
      style: { font: '100 16px Helvetica', fill: '#FFF' },
      offsetX: 20,
      offsetY: -60,
    };
    // msg2
    let reText = {
      text: `${this.batteries} 個能量電池`,
      style: { font: '100 30px Helvetica', fill: '#FFF' },
      offsetX: 20,
      offsetY: 0,
    };

    // 外邊框
    this.cover = this.game.add.graphics();
    this.cover.lineStyle(...outerRect.style);
    this.cover.drawRoundedRect(
      this.wWidth * 0.5 - outerRect.width / 2,
      this.wHeight * 0.5 - outerRect.height / 2,
      outerRect.width,
      outerRect.height,
    );

    // 電池圖案(png)
    this.battery = this.game.add.sprite(battery.x, battery.y, 'battery');
    this.battery.anchor.setTo(0.5);
    this.battery.scale.setTo(battery.scale);

    // button
    this.button = this.game.add.sprite(
      button.x,
      button.y,
      this.customTexture(this.drawButton),
    );
    this.button.anchor.setTo(0.5);
    this.button.alignTo(
      this.battery,
      Phaser.RIGHT_BOTTOM,
      button.offsetX,
      button.offsetY,
    );
    // 開啟監聽input事件
    this.button.inputEnabled = true;
    // 監聽點按
    this.button.events.onInputDown.add(this.startGame, this);

    // 加上文字
    this.buttonText = this.game.add.text(
      this.button.x,
      this.button.y + 2,
      'Restart',
      this.textStyle,
    );
    this.buttonText.anchor.setTo(0.5);

    // other text
    this.otherText = this.add.group();

    // msg
    this.subReText = this.game.add.text(0, 0, reSubText.text, reSubText.style);
    this.subReText.alignTo(
      this.battery,
      Phaser.RIGHT_TOP,
      reSubText.offsetX,
      reSubText.offsetY,
    );

    // msg2
    this.reText = this.game.add.text(0, 0, reText.text, reText.style);
    this.reText.alignTo(
      this.battery,
      Phaser.RIGHT_CENTER,
      reText.offsetX,
      reText.offsetY,
    );
  },

  customTexture(drawShape) {
    let graph = this.game.add.graphics();
    drawShape(graph);
    let texture = graph.generateTexture();
    graph.destroy();
    return texture;
  },

  drawButton(graph) {
    graph.lineStyle(3, 0xffffff, 1);
    graph.drawRoundedRect(0, 0, 160, 40, 20);
  },

  // 轉換場景
  startGame() {
    this.game.state.start('start');
  },
};

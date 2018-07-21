var SpaceShip = SpaceShip || {};

SpaceShip.StartState = {
  init() {
    // 取得寬高
    this.wWidth = this.game.world.width;
    this.wHeight = this.game.world.height;
    this.textStyle = {
      font: '100 20px Helvetica',
      fill: '#FFF',
    };
    // 畫圓(logo旁)
    this.circleData = [
      {
        x: this.wWidth * 0.5,
        y: this.wHeight * 0.5,
        r: 350,
        style: [2, 0xffffff, 1],
      },
      {
        x: this.wWidth * 0.5,
        y: this.wHeight * 0.5,
        r: 500,
        style: [2, 0xffffff, 0.5],
      },
    ];

    // 畫按鈕(start)
    this.buttonTexture = () => {
      let graph = this.game.add.graphics();
      graph.lineStyle(3, 0xffffff, 1);
      graph.drawRoundedRect(0, 0, 160, 40, 20);
      let texture = graph.generateTexture();
      graph.destroy();
      return texture;
    };
  },

  preload() {
    // 圖片要preload
    this.load.image('logo', 'assets/logo.png');
  },

  create() {
    // add graphics
    this.cover = this.game.add.graphics();
    this.circleData.forEach(circle => {
      this.cover.lineStyle(...circle.style);
      this.cover.drawCircle(circle.x, circle.y, circle.r);
    });

    // add logo
    this.logo = this.game.add.sprite(
      this.wWidth * 0.5,
      this.wHeight * 0.42,
      'logo',
    );
    // 放錨點
    this.logo.anchor.setTo(0.5);
    // 縮放
    this.logo.scale.setTo(0.6);

    // add start button
    this.button = this.game.add.sprite(
      this.wWidth * 0.5,
      this.wHeight * 0.6,
      this.buttonTexture(),
    );
    this.button.anchor.setTo(0.5);
    this.button.inputEnabled = true;
    this.button.events.onInputDown.add(this.startGame, this);

    // 上文字
    this.buttonText = this.game.add.text(
      this.button.x,
      this.button.y,
      'Start Game',
      this.textStyle,
    );
    this.buttonText.anchor.setTo(0.5);
  },

  startGame() {
    this.game.state.start('play');
  },
};

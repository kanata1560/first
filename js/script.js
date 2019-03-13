// upper camel case
// クラス・プロトタイプ
// BigFunnyAnimal

// lower camel case
// 関数・メソッド
// bigFunnyAnimal

//変数
// big_funny_animal

//定数
// BIG_FUNNY_ANIMAL



// 初期化処理(コンストラクタ)
// function Animal(name, type) {
//   // プロパティ
//   this.name = name;
//   this.type = type;
// }
//
// // メソット
// Animal.prototype.greet = function() {
//   window.alert('私は'+ this.type + "の" + this.name + 'です。');
// }
//
// Animal.prototype.bark = function() {
//   console.log('...')
// }
//
// // インスタンス(オブジェクト(レシーバー))の作成
// var animal = new Animal("たま", "哺乳類");
// var animal1 = new Animal("やま", "両生類");
//
// // 継承
// function Dog(name, type) {
//   // Animalのコンストラクタを呼び出す
//   Animal.call(this, name, type);
// }
//
// // Animalクラスを継承
// Dog.prototype = new Animal();
//
// var dog1 = new Dog("いの", "犬");
//
// Dog.prototype.bark = function() {
//   console.log('ワン！');
// }

class Animal {
  // コンストラクタ
  constructor(name) {
    this.name = name;
  }

  // メソッド定義
  greet() {
    `私は${this.name}です。`
  }

  bark() {
    console.log(`${this.name}「...」`)
  }
}

var animal1 = new Animal("ララ");

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // override
  bark() {
    console.log(`${this.name}「ワン！」`)
  }
}

# TypeScript

## 参考サイト
https://ics.media/entry/16329

## 環境構築手順
1. node initによるnode プロジェクトの作成
2. 「webpack」や「typescript」など必要なモジュールをインストール
3. package.jsonにbuildコマンドの追加
4. TypeScriptの設定ファイル：tsconfig.jsonの作成
5. webpackの設定ファイル：webpack.config.jsの作成

## tsファイルの作成、コンパイル、ビルド
1. src以下にtsファイルを作成
2. `npm run build`の実行。`build/bundle.js`ができることを確認
3. index.htmlでbundle.jsを読み込ませてhello worldがでることを確認

## テストコード作成
### 参考サイト
http://blog.shibayu36.org/entry/2016/04/12/180000

### やりたいこと
ユニットテスト自体もTypeScriptで書いて、テストコードを実行したい

### Typingsの導入
#### Typingsとは
TypeScriptの方定義ファイルを管理するツール
- https://qiita.com/literalice/items/d83249a5646abcb0bec6

#### なぜ導入するのか
- Typeスクリプトの型定義ファイルをnpmやbowerからインストールする事ができる
- gulp等のタスクランナーでTypingsを用いたスクリプトを記述することで、型定義ファイルのインストールタスクを記述、実行することもできる

#### 参考サイト
[TypeScript + Webpackのはまったところ](http://tenderfeel.xsrv.jp/javascript/2283/)

### Mochaの導入
- https://mochajs.org/
#### Mochaとは
- テストフレームワークの一つ
- itとかdescribeとか書くやつ

#### インストール
1. `package.json`の`devDependencies`にmochaを追加して、`npm install`を実行する
2. typingsを用いて、mocha型義ファイルをインストールする  
	`typings install dt~mocha --global --save`

### Chaiの導入
- http://chaijs.com/
#### Chaiとは
- Mochaがテストフレームワークならば、ChaiはAssetionライブラリ
- assertオブジェクトを提供するライブラリ

- [ユニットテストって何?って人向けのmochaとchaiの使い方](https://qiita.com/y_hokkey/items/f73ea6b3d5f6902396b6)

#### インストール
1. `package.json`の`devDependencies`にchaiを追加して、`npm install`を実行する
2. mochaと同様にtypingsを用いて、chai型義ファイルをインストールする  
	`typings install dt~mocha --global --save`

### Karmaの導入
- https://karma-runner.github.io/0.13/index.html

#### Karmaとは
- ブラウザ上で単体テストを実行するためのテストランナー  
	以下のようなことができるらしい
	- テスト実行前にTypeScriptをコンパイル
	- CLIでテストを実行
	- ファイルの変更監視や結果のレポートを出力してくれたり

- [Step by Stepで始めるKarma](https://qiita.com/howdy39/items/b9d704e7f84053924da3)

#### インストール
1. npmでkarmaのインストール実行  
	`$ npm install karma --save-dev`

2. npｍでkarma-chrome-launcherのインストール実行  
	`$ npm install karma-chrome-launcher --save-dev`

#### karmaの設定
1. `karma init`の実行して、`karma.conf.js`を作成する
2. `karma.conf.js`にテストファイルの場所を指定する



## その他備考
### npmとかnodeのアップデート
https://qiita.com/bumptakayuki/items/3921256a31ce47386e1b

### npm install ~~ --save-dev
- --save-devを記載することによって、インストールしたパッケージがpackage.jsonに反映されるようにする


This package has installed:
	•	Node.js v8.9.4 to /usr/local/bin/node
	•	npm v5.6.0 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.

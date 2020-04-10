# BOSYU-GENERATOR-CLI

ただの文字を、見やすく影響力のある募集画像に \
文字を画像にするだけで、影響力がグンと上がります ⤴

## Demo / デモ

![Demo](https://i.imgur.com/57pb66g.gif)

## Instalation / インストール

NPM

```
$ npm install -g bosyu-generator
```

Yarn

```
$ yarn global add bosyu-generator
```

## Usage / 使い方

```
$ bosyu-generator -h

Usage: bosyu-generator -t TITLE -d DESCRIPTION -n bosyu

Options:
  -V, --version              output the version number
  -t, --title <value>        BOSYU Title (default: "TEST")
  -d, --description <value>  BOSYU Description (default: "This is description.")
  -sw, --width <size>        Image Width (default: 1024)
  -sh, --height <size>       Image Height (default: 576)
  -bc, --backcolor <value>   Image Background Color (default: "#FFF")
  -fc --fontcolor <value>    Image Font Color (default: "#333")
  -o, --out <path>           Image output path (default: process.cmd())
  -n, --name <value>         Image file name (default: "bosyu")
  -h, --help                 display help for command
```

## License / ライセンス

This project is licensed under the MIT License - see the LICENSE.md file for details
このプロジェクトは MIT ライセンスの元にライセンスされています。 詳細は LICENSE.md をご覧ください。

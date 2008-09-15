/***
|''Name:''|TWGuideForJPMacro|
|''Source:''|http://tw.kuraku.net/tw.html#TWGuideForJPMacro|
|''Author:''|kuraku|
|''License:''|http://creativecommons.org/licenses/by-sa/2.5/|
|''Version:''|0.1.5 (2007-08-22)|
|''CoreVersion:''|2.2|
!!Description
編集時にガイドを表示できます。

[[HelpTextMacro]] の姉妹品です。
ガイドを含んでいますので、このマクロさえインストールすればテキストのコピーは要りません。

<<toolbar guidejp>> こんなボタンを編集時に使えます。

!!Install
この [[TWGuideForJPMacro]] をコピーした後、タグに systemConfig を追加の後、保存してリロードしてください。

[[EditTemplate]] に以下のように「guidejp」を追記します。
//{{{
<div class='toolbar' macro='toolbar +saveTiddler -cancelTiddler guidejp deleteTiddler'></div>
...
//}}}
([[EditTemplate]] はこれまでに修正したことが無ければ {{{SideBar: More>Shadow}}} を見てください。

!!~TiddlyWiki Guide Tiddler
導入により、{{{SideBar: More>Shadow}}} に [[TWGuideForJP]] が追加されます。
もし自分用に修正するのであれば、[[こちら|TWGuideForJP]]を直してください。
***/
/*{{{*/
config.shadowTiddlers["TWGuideForJP"]="''文字装飾:''\n{{{\n''太字''\n--取消線--\n__下線__\n//斜体//\n2^^3^^=8\na~~ij~~ = -a~~ji~~\n}}}\n''太字''\n--取消線--\n__下線__\n//斜体//\n2^^3^^=8\na~~ij~~ = -a~~ji~~\n{{{\n@@ハイライト@@\n@@color(green):着色（ここでは緑）@@\n@@color:red;文字列(赤)@@\n@@bgcolor(#000000):color(#00FFFF):背景色の設定もできます。@@\n@@color:#f0f;background-color:#aaa;文字列@@\n}}}\n@@ハイライト@@\n@@color(green):着色（ここでは緑）@@\n@@color:red;文字列(赤)@@\n@@bgcolor(#000000):color(#00FFFF):背景色の設定もできます。@@\n@@color:#f0f;background-color:#aaa;文字列@@\n{{{\n{{{固定幅の表示}} }\n{{{\n 固定幅の表示(ブロック)\n}} }\n/% comment %/ これは見えません。\n\"\"\"装飾無し(「\"」三つで囲む)\"\"\"\n~装飾無し\n----\n}}}\n(※「}} }」と3文字目にスペースが入っているのは表示に問題があるためです。実際はスペースを詰めてください。)\n\n{{{固定幅の表示}}}\n{{{\n 固定幅の表示(ブロック)\n}}}\n/% comment %/ これは見えません。\n\"\"\"装飾無し(「\"」三つで囲む)\"\"\"\n~装飾無し\n----\n\n''通常リスト:''\n{{{\n* 一段目\n** 階層化もできます。\n** 同一レベルに記述するとこんなかんじ。\n* そして元に戻ります。\n}}}\n* 一段目\n** 階層化もできます。\n** 同一レベルに記述するとこんなかんじ。\n* そして元に戻ります。\n\n''番号リスト:''\n序数を付けたリストです。\n{{{\n#item1\n#item2\n##item2.1\n##item2.2\n##item2.3\n#item3\n##item3.1\n###item3.1.1\n###item3.1.2\n}}}\n#item1\n#item2\n##item2.1\n##item2.2\n##item2.3\n#item3\n##item3.1\n###item3.1.1\n###item3.1.2\n\n''リストの折り返し:''\n{{{\n*item1\n**item1-1\n***ここで折り返します<br>いかが？\n}}}\n*item1\n**item1-1\n***ここで折り返します<br>いかが？\n\n''定義:''\n定義を記述します。\n{{{\n;名前\n:意味・内容\n}}}\n;名前\n:意味・内容\n\n''見出し:''\nいわゆる <h2>...</h2> などに相当する見出しです。六段階に対応してます。\n{{{\n!Header 1\n!!Header 2\n!!!Header 3\n!!!!Header 4\n!!!!!Header 5\n!!!!!!Header 6\n}}}\n!Header 1\n!!Header 2\n!!!Header 3\n!!!!Header 4\n!!!!!Header 5 \n!!!!!!Header 6\n\n''外部リンク:''\n他のサイトへのリンクをする場合、[[Google|http://www.google.com/]]などと記載します。\n \n''画像の埋込み:''\n{{{\n[img[Google|http://www.google.co.jp/images/logo_sm.gif]]\n}}}\n[img[Google|http://www.google.co.jp/images/logo_sm.gif]]\nさらにリンク\n{{{\n[img[Google|http://www.google.co.jp/images/logo_sm.gif][http://google.co.jp/]]\n}}}\n[img[Google|http://www.google.co.jp/images/logo_sm.gif][http://google.co.jp/]]\n同じフォルダにある場合はパス名は不要なようです。\n\n''引用:''\n{{{\n<<<\n引用しています。\n引用しています。\n<<<\n}}}\n<<<\n引用しています。\n引用しています。\n<<<\n{{{\n>level 1\n>level 1\n>>level 2\n>>level 2\n>>>level 3\n>>>level 3\n>>level 2\n>level 1\n}}}\n>level 1\n>level 1\n>>level 2\n>>level 2\n>>>level 3\n>>>level 3\n>>level 2\n>level 1 \n\n''表組:''\n{{{\n|!th1111111111|!th2222222222|\n|>| colspan |\n| rowspan |left|\n|~| right|\n|bgcolor(#a0ffa0):colored| center |\n|caption|c\n}}}\n|!th1111111111|!th2222222222|\n|>| colspan |\n| rowspan |left|\n|~| right|\n|bgcolor(#a0ffa0):colored| center |\n|caption|c\n\n''ドキュメント内リンク:''\n{{{\n[[GettingStarted]]\n[[スタートのメモ|GettingStarted]]\n}}}\n[[GettingStarted]]\n[[スタートのメモ|GettingStarted]]\n\n''スタイルの指定:''\n{{{<span class='subtitle'>subtitle class を指定</span>}}} のようにスタイルを指定可能。\n{{{\n{{subtitle{subtitle class を指定}}}\n}}}\n{{subtitle{subtitle class を指定}}}\n\n";
/*}}}*/
/***
!!Configration: ScrollBar is used
スクロールバーを表示する: <<option chkTWGuideJPScrollOptions>>

上のチェックボックスをチェックすることで、ガイド Popup にスクロールバーを付けて、小さな窓の状態での参照が可能になります。

!!History
*2007.08.22, ver 0.1.5
**見出し「六段階」まで
**スタイル修正
*2007.08.21, ver 0.1.4
**Popup にスクロールバーを表示することにより、ブラウザ自体のスクロールを無くすことが可能に
**padding を追加
*2007.08.20, ver 0.1.3
**スタイル設定の Bug を修正
***TWGuideJP class へスタイルを追加する
*2007.06.20, ver 0.1.2
**スタイルの設定部分の修正
**「定義」を追記
*2007.05.10, ver 0.1.1
**ガイドの内容を修正
**IE できちんと表示できなかったので対応
*2007.04.27, ver 0.1.0
**Init

!!Source
***/
/*{{{*/
version.extensions.guidejp = { major: 0, minor: 1, revision: 5, date: new Date(2007,8,22), source: "http://kuraku.net/tw/tw.html#TWGuideForJPMacro"
};

config.commands.guidejp = {};
config.commands.guidejp.version = "Version %0.%1.%2".format([version.extensions.guidejp.major,version.extensions.guidejp.minor,version.extensions.guidejp.revision]);
config.commands.guidejp.helptiddler = "TWGuideForJP";
config.commands.guidejp.layout = {
	overflow: "auto",
	width: "40em",
	height: "40em"
};

if(config.options.chkTWGuideJPScrollOptions == undefined)
  config.options.chkTWGuideJPScrollOptions = false;

config.commands.guidejp.handler = function(event,src,title){
	var popup = Popup.create(src);

	if(popup) {
		addClass(popup, "TWGuideJP");

		if(config.options.chkTWGuideJPScrollOptions){
			popup.style.overflow = this.layout.overflow;
			popup.style.width = this.layout.width;
			popup.style.height = this.layout.height;
		}

		createTiddlyElement(popup,"H1",null, null, "TiddlyWiki 書き方ガイド:");
		var guidejpText = store.getTiddlerText(this.helptiddler);
		guidejpText = "~~<<option chkTWGuideJPScrollOptions>>:scrollbar~~\n\n" + guidejpText;

		var wrapper = createTiddlyElement(popup, "span");

		wikify(guidejpText, wrapper, null, store.getTiddler("SiteTitle"));
		var version = createTiddlyElement(popup,"div",null ,null ,"\n\nTWGuideForJPMacro " + this.version);
		version.style.fontSize = "0.8em";
		version.style.paddingTop = "5px";
	}
	Popup.show(popup,false);
	event.cancelBubble = true;
	if (event.stopPropagation) event.stopPropagation();
		return false;
	}

	merge(config.commands.guidejp,{
	 text: "guide",
	 tooltip: "tw guide for japanese"}
);

// Popup で表示するための Style を指定
setStylesheet(".TWGuideJP {padding:0em .5em .5em .5em !important;color:#222222 !important;background:#FFFFFF !important;} .TWGuideJP a{color:#0044BB !important} .TWGuideJP a:link{color:#0044BB} .TWGuideJP blockquote{border-left:3px solid;margin-left:2em;padding-left:0.8em;} .TWGuideJP pre{font-size:1.0em;background:#FFFFCC none repeat;border:1px solid #FFEE88;} ", "TWGuideJP");
/*}}}*/
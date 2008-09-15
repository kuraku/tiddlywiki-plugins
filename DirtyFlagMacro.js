/***
|''Name:''|DirtyFlagMacro|
|''Source:''|http://tw.kuraku.net/tw.html#DirtyFlagMacro|
|''Author:''|kuraku|
|''License:''|http://creativecommons.org/licenses/by-sa/2.5/|
|''Version:''|0.1.6 (2007-11-29)|
|''~CoreVersion:''|2.1.3|
|''Overrides:''|TiddlyWiki.prototype.setDirty|

!!Description
TW を編集中かどうかを、TiddlyWiki.dirty をチェックしてマーク表示できるマクロ。
「save 忘れを防ぐ・余計な save を減らす」ことができるはずである。

''オススメ:'' [[HoverMenu]] と使用するととても便利。

!!Examples
{{{
TW DirtyFlag is: <<dirtyflag>>
}}}
TW DirtyFlag is: <<dirtyflag>>

!!Configureration
[[DirtyFlagMacroConfig]] を作成することにより、マークの書式が変更できる。
{{{
config.macros.dirtyflag.flagT = "#";
config.macros.dirtyflag.flagF = "";
config.macros.dirtyflag.style = "color: #00f; font-size: 1.2em;";
}}}

!!History
*2007.11.29
**improved content of source and comment.
*2007.11.19 コメントのミス修正
*2007.08.13 mark のセット部分ロジックの見直し
*2007.07.17 IE での表示に問題があり対応。(IE6 のみで検証)

!!Source
***/
/*{{{*/
version.extensions.dirtyflag = { 
	major: 0, minor: 1, revision: 6, date: new Date(2007,11,29),
	source: "http://kuraku.net/tw/tw.html#DirtyFlagMacro"
};

config.macros.dirtyflag = {};
config.macros.dirtyflag.flagT = "*";
config.macros.dirtyflag.flagF = "";
config.macros.dirtyflag.style = "color: #f00;";

config.macros.dirtyflag.counter = 0;

config.macros.dirtyflag.handler = function(place,macroName,params,wikifier,paramString,tiddler) {
	var e = createTiddlyElement(place,"span","dirtyFlag_" + this.counter);
	this.counter++;

	e.setAttribute("refresh","macro");
	e.setAttribute("macroName","dirtyflag");
	e.style.cssText = config.macros.dirtyflag.style;
	this.changeMark();
};

config.macros.dirtyflag.changeMark = function() {
	// get dirtyflag
	var dirty = ((store && store.isDirty && store.isDirty()) ||
				 (story && story.areAnyDirty && story.areAnyDirty()));

	// change dirtyflag mark
	var dirtyFg = (dirty===true)?this.flagT:this.flagF;
	for(var i=0; i<this.counter; i++){
		var dt = document.getElementById("dirtyFlag_" + i);
		if(dt){
			dt.innerHTML = dirtyFg;
		}
	}
};

TiddlyWiki.prototype.setDirty = function(dirty) {
	this.dirty = dirty;

	// added check & display
	config.macros.dirtyflag.changeMark();
};
/*}}}*/
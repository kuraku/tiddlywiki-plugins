/***
|''Name:''|DirtyFlagStickyMacro|
|''Source:''|http://tw.kuraku.net/tw.html#DirtyFlagStickyMacro|
|''Author:''|kuraku|
|''License:''|http://creativecommons.org/licenses/by-sa/2.5/|
|''Version:''|0.1.0 (2008-01-24)|
|''~CoreVersion:''|2.1.3|
|''Overrides:''|TiddlyWiki.prototype.setDirty|
!!Description
Whether or not TW while compiling, checking TiddlyWiki.dirty, the macro which it can mark can indicate.
This macro is not use with IE. sorry.
!!History
*2008.01.24
**create on the basis DirtyFlagMacro 0.1.6
!!Source
***/
/*{{{*/
version.extensions.dirtyflagsticky = { 
	major: 0, minor: 1, revision: 0, date: new Date(2008,01,24),
	source: "http://tw.kuraku.net/tw.html#DirtyflagstickyMacro"
};

config.macros.dirtyflagsticky = {};
config.macros.dirtyflagsticky.flagT = "*";
config.macros.dirtyflagsticky.flagF = "";

config.macros.dirtyflagsticky.initexec = function(place,macroName,params,wikifier,paramString,tiddler) {
	var e=document.getElementById("dirtyflagsticky");
	if(e) e.parentNode.removeChild(e);
	if (config.browser.isIE) return; // cannot use IE

	e = createTiddlyElement(null,"span",null,null,config.macros.dirtyflagsticky.flagF);
	e.id = "dirtyflagsticky";
	e.title = "dirty-flag";

	var sty = e.style;
	sty.position = "fixed";
	sty.zIndex = "1001";
	sty.cursor = "default";

	/* custom display place */
	sty.top = ".2em";
	//sty.bottom = ".2em";
	//sty.right = ".2em";
	sty.left = ".2em";

	/* custom color / fontSize */
	sty.color = "#f00;";
	sty.fontSize = "12pt";

	document.body.insertBefore(e,null);
};

config.macros.dirtyflagsticky.changeMark = function() {
	// get dirtyflagsticky
	var dirty = ((store && store.isDirty && store.isDirty()) ||
				 (story && story.areAnyDirty && story.areAnyDirty()));

	// change dirtyflag mark
	var dirtyFg = (dirty===true)?this.flagT:this.flagF;
	var dt = document.getElementById("dirtyflagsticky");
	if(dt){
		dt.innerHTML = dirtyFg;
	}
};

TiddlyWiki.prototype.setDirty = function(dirty) {
	this.dirty = dirty;

	// added check & display
	config.macros.dirtyflagsticky.changeMark();
};

// create flag element
config.macros.dirtyflagsticky.initexec();
/*}}}*/
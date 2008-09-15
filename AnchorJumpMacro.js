/***
!!Usage
!!!Mark anchor
{{{<<anchor (name)>>}}}
{{{
<html><a name="(name)"/></html>
}}}
!!!Jump to anchor
{{{<<anchorjump (name) (title)>>}}}
{{{
<html><a href="javascript:;" onclick="scrollAnchorVisible('(name)',null, event)">(title)</a></html>
}}}
!!Exsample
{{{
<<anchorjump anchorpoint JumpTo>>
1.
2.
3.
<<anchor anchorpoint>>=== anchor ===
}}}
<<<
<<anchorjump anchorpoint JumpTo>>
1.
2.
3.
<<anchor anchorpoint>>=== anchor ===
<<<
!!Source
***/
/*{{{*/
config.macros.anchor = {
	handler: function(place,macroName,params,wikifier,paramString,tiddler){
		if(!params[0] || params[0] == "")
			return;
		var name = params[0];
		var e = createTiddlyElement(place,"span");
		e.innerHTML = "<html><a name=\""+name+"\"/></html>";
	}
}
config.macros.anchorjump = {
	handler: function(place,macroName,params,wikifier,paramString,tiddler){
		if(!params[0] || params[0] == "")
			return;
		if(!params[1] || params[1] == "")
			return;
		var anchor = params[0];
		var title = params[1];
		var e = createTiddlyElement(place,"span");
		e.innerHTML = "<html><a href=\"javascript:;\" onclick=\"scrollAnchorVisible('"
					+anchor+"',null, event)\">"+title+"</a></html>";
	}
}
/*}}}*/
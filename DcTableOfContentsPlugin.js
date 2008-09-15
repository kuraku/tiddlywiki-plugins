/***
|Name|DcTableOfContentsPlugin|
|Created by|Doug Compton|
|Source|http://www.zagware.com/tw/plugins.html#DcTableOfContentsPlugin|
|Version|0.3.0 - 4/12/2006|
!Description
This macro will insert a table of contents reflecting the headings that are used in a tiddler and will be automatically updated when you make changes.  Each item in the table of contents can be clicked on to jump to that heading.  It can be used either inside of select tiddlers or inside a system wide template.

A parameter can be used to show the table of contents of a seperate tiddler, <<showtoc tiddlerTitle>>

It will also place a link beside each header which will jump the screen to the top of the current tiddler.  This will only be displayed if the current tiddler is using the <<showtoc>> macro.

The appearance of the table of contents and the link to jump to the top can be modified using CSS.  An example of this is given below.

!Examples
If you had a tiddler with the following headings

 ! Heading1
 !! Heading2
 !! Heading3
 !!! Heading4
 ! Heading5

this table of contents would be automatically generated
*Heading1
**Heading2
**Heading3
***Heading4
*Heading5

!Changing how it looks
To modifiy the appearance, you can use CSS similiar to the below.
//{{{
.dcTOC ul {
	color: red;
	list-style-type: lower-roman;
}
.dcTOC a {
	color: green;
	border: none;
}

.dcTOC a:hover {
	background: white;
	border: solid 1px;
}
.dcTOCTop {
	font-size: 2em;
	color: green;
}
//}}}

!Usage
!!Only in select tiddlers
The table of contents above is an example of how to use this macro in a tiddler.  Just insert <<showtoc>> in a tiddler on a line by itself.

It can also display the table of contents of another tiddler by using the macro with a parameter, <<showtoc tiddlerTitle>>
!!On every tiddler
It can also be used in a template to have it show on every tiddler.  An example ViewTemplate is shown below.

//{{{
<div class='toolbar' macro='toolbar -closeTiddler closeOthers +editTiddler permalink references jump'></div>
<div class='title' macro='view title'></div>
<div class='subtitle'>Created <span macro='view created date DD-MM-YY'></span>, updated <span macro='view modified date DD-MM-YY'></span></div>
<div class='tagging' macro='tagging'></div>
<div class='tagged' macro='tags'></div>
<div class="toc" macro='showtoc'></div>
<div class='viewer' macro='view text wikified'></div>
<div class='tagClear'></div>
//}}}

!History
!!0.3.0.1 - 2007.06.07 patched - KuRaKu
!!0.3.0 - 04/12/2006
*Added the ability to show the table of contents of a seperate tiddler.
*Fixed an error when a heading had a ~WikiLink in it.
!!0.2.0 - 04/10/2006
*Added the [top] link on headings to jump to the top of the current tiddler.
*The appearance can now be customized using CSS.
*All event handlers now return false.
!!0.1.0 - 04/07/2006
*Initial version

!Code
***/
//{{{

version.extensions.DcTableOfContentsPlugin= {
	major: 0, minor: 3, revision: 0,
	date: new Date(2006, 4, 12), 
	type: 'macro',
	source: "http://www.zagware.com/tw/plugins.html#DcTableOfContentsPlugin"
};

// Replace heading formatter with our own
for (var n=0; n<config.formatters.length; n++) {
	var format = config.formatters[n];
	if (format.name == 'heading') {
		format.handler = function(w) {

			// following two lines is the default handler
			var e = createTiddlyElement(w.output, "h" + w.matchLength);
			//w.subWikify(e, this.terminator);
			w.subWikifyTerm(e,this.termRegExp); //change krk

			// Only show [top] if current tiddler is using showtoc
			//if (w.tiddler.isTOCInTiddler == 1) {
			if (w.tiddler && w.tiddler.isTOCInTiddler == 1) { // change krk
				// Create to outter SPAN containing the default CSS values
				var span = createTiddlyElement(e, "span");
				span.style.fontSize = ".5em";
				span.style.color = "blue";

				// Create the link to jump to the top
				createTiddlyButton(span, " [top]", "Go to top of tiddler", window.scrollToTop, "dcTOCTop", null, null);
			}
		}
		break;
	}
}


config.macros.showtoc = {
	handler: function(place, macroName, params, wikifier, paramString, tiddler) {
		var text = "";
		var title = "";
		var myTiddler = null;

		// Did they pass in a tiddler?
		if (params.length) {
			title = params[0];
			myTiddler = store.getTiddler(title);
		} else {
			myTiddler = tiddler;
		}

		if (myTiddler == null) {
			wikify("ERROR: Could not find " + title, place);
			return;
		}

		var lines = myTiddler .text.split("\n");
		myTiddler.isTOCInTiddler = 1;

		// Create to SPAN so the TOC can be customized using CSS
		var span = createTiddlyElement(place, "span", null, "dcTOC");

		if (lines != null) {
			for (var x=0; x<lines.length; x++) {
				var line = lines[x];
				if (line.substr(0,1) == "!") {
					// Find first non ! char
					for (var i=0; i<line.length; i++) {
						if (line.substr(i, 1) != "!") {
							break;
						}
					}
					var desc = line.substring(i);
					// Remove WikiLinks
					desc = desc.replace(/\[\[/g, "");
					desc = desc.replace(/\]\]/g, "");

					text += line.substr(0, i).replace(/[!]/g, '*');
					text += '<html><a href="javascript:;" onClick="window.scrollToHeading(\'' + title + '\', \'' + desc+ '\', event)">' + desc+ '</a></html>\n';
				}
			}
		}
		wikify(text, span);
	}
}

window.scrollToTop = function(evt) {
	if (! evt)
		var evt = window.event;

	var target = resolveTarget(evt);
	var tiddler = story.findContainingTiddler(target);

	if (! tiddler)
		return false;

	window.scrollTo(0, ensureVisible(tiddler));

	return false;
}

window.scrollToHeading = function(title, anchorName, evt) {
	var tiddler = null;

	if (! evt)
		var evt = window.event;

	if (title) {
		story.displayTiddler(store.getTiddler(title), title, null, false);
		tiddler = document.getElementById(story.idPrefix + title);
	} else {
		var target = resolveTarget(evt);
		tiddler = story.findContainingTiddler(target);
	}

	if (tiddler == null)
		return false;
	
	var children1 = tiddler.getElementsByTagName("h1");
	var children2 = tiddler.getElementsByTagName("h2");
	var children3 = tiddler.getElementsByTagName("h3");
	var children4 = tiddler.getElementsByTagName("h4");
	var children5 = tiddler.getElementsByTagName("h5");

	var children = new Array();
	children = children.concat(children1, children2, children3, children4, children5);

	for (var i = 0; i < children.length; i++) {
		for (var j = 0; j < children[i].length; j++) {
			var heading = children[i][j].innerHTML;

			// Remove all HTML tags
			while (heading.indexOf("<") >= 0) {
				heading = heading.substring(0, heading.indexOf("<")) + heading.substring(heading.indexOf(">") + 1);
			}

			// Cut off the code added in showtoc for TOP
			heading = heading.substr(0, heading.length-6);

			if (heading == anchorName) {
				var y = findPosY(children[i][j]);
				window.scrollTo(0,y);
				return false;
			}
		}
	}
	return false
}

// add krk
setStylesheet(".dcTOC ul{color: red;list-style-type: lower-roman;}.dcTOC a{color: green !important;border: none;}","dcTOCStyles");
//}}}

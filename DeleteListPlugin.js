/***
|''Name:''|DeleteListPlugin|
|''Source:''|http://tw.kuraku.net/tw.html#DeleteListPlugin|
|''Author:''|kuraku|
|''License:''|http://creativecommons.org/licenses/by-sa/2.5/|
|''Version:''|0.1.9 (2007-11-29)|
|''~CoreVersion:''|2.2|

!!Description
tiddler をまとめて消すことができます。
@@color(red):実際に削除を行なうときにはバックアップをしてください。@@
(間違えて消えてしまっても責任は持てません)

tiddler を複数指定した場合は削除に時間がかかりますのでしばらくお待ちください。

It is possible to erase it bringing tiddler together. 
@@color(red):Please back up when you actually delete it. @@
(The responsibility cannot be taken even if disappearing by mistake. )

It takes time for the deletion and wait for a while, please when you specify two or 
more tiddler. 

!!Examples
{{{
<<deletelist [list:tagname1[,tagname2]] [check:tagname3[,tagname4]]>>
}}}
''list:'' Tag list of tiddler that wants to list
''check:'' Tag list of tiddler that wants to checked

When you want to list 'systemConfig' tag of tiddler with 'plugins' tag. 
{{{<<deletelist list:plugins check:systemConfig>>}}}

see: [[DeleteListPlugin sample|DeleteList]]

!!Tagcheck Configuration
You can set checktag of default.
Please add tiddler [[DeleteListPluginConfig]] after making systemConfig tag.
{{{
config.macros.deletelist.tags = [ "systemConfig", "systemConfigDisable", "toRSS", "today" ];
}}}
If you put "systemConfig" tag, it is necessary to put "systemConfigDisable" tag too.

!!Add OptionsPanel/BackStage Coniguration
Display DeleteList in OptionsPanel: <<option chkDeleteListDisplayInOptions>>
~~if flag is true appear in OptionsPanel of sidebar.~~

Display DeleteList in BackStage: <<option chkDeleteListDisplayInBackStage>>
~~if flag is true appear in BackStage.~~

!!Custom display "Wait message" or "Progress indicator"
You can set wait message.
{{{
config.macros.deletelist.waitmessage = "<blink>Wait ...</blink>";
}}}
Or set indicator animetion picture.
{{{
config.macros.deletelist.waitmessage = "<img src='http://kuraku.net/tw/indicator.white.gif'>";
}}}
Add or Create [[DeleteListPluginConfig]] and set waitmessage by html format.

!!tips
If you want to add new collectively tag, let's use this. 
You only have to make new tiddler of the content of {{{<<deletelist check:newtag>>}}}.

!!History
*2007.11.29, ver 0.1.9:
**added option "chkDeleteListDisplayInBackStage". if check this flag, appear "DelList" in BackStages.
*2007.11.15, ver 0.1.8:
**improved javascript syntax and typo.
*2007.08.23, ver 0.1.7:
**improved set style. dont use setAttribute.
*2007.06.11, ver 0.1.6:
**added display indicator or wait message.
**improved content of source.
**BugFix select cancel on dialog.
*2007.04.25, ver 0.1.5:
**added flag of the SystemConfig tag is displayed by default. 
**added error is displayed if there is no matched tiddler. 
**added display list tiddler tags.
**improved new parameter list and check are added.
**improved content of source.
*2007.04.16, ver 0.1.4:
**added shadow tiddler "DeleteList" (is in only {{{<<deletelist>>}}}).
**added option "chkDeleteListDisplayInOptions". if check this flag, appear "DeleteList" in options.

!!Source
***/
/*{{{*/
version.extensions.deletelist = { major: 0, minor: 1, revision: 9, date: new Date(2007,11,29),
	source: "http://tw.kuraku.net/tw.html#DeleteListPlugin"
};

config.macros.deletelist = {};
config.macros.deletelist.version="Version %0.%1.%2".format([version.extensions.deletelist.major,version.extensions.deletelist.minor,version.extensions.deletelist.revision]);

config.macros.deletelist.tags = [];

if(config.options.chkDeleteListDisplayInOptions == undefined)
  config.options.chkDeleteListDisplayInOptions = false;
if(config.options.chkDeleteListDisplayInBackStage == undefined)
  config.options.chkDeleteListDisplayInBackStage = false;

config.macros.deletelist.waitmessage = "<span style='fonze-size:0.8em;color:#d00;'><blink>>> wait a minute...</blink></span>";

config.macros.deletelist.handler = function(place,macroName,params,wikifier,paramString,tiddler) {
	var e = createTiddlyElement(place,"div");
	e.setAttribute("refresh","macro");
	e.setAttribute("macroName","deletelist");
	e.setAttribute("params",paramString);
	createTiddlyElement(place,"div","result_dlp");
	this.refresh(e,paramString);
};

config.macros.deletelist.refresh = function(place,params) {
	var parameters = params.parseParams("name",null,true);
	var list_tags = parameters[0]["list"]?parameters[0]["list"][0].split(","):[];
	var check_tags = parameters[0]["check"]?parameters[0]["check"][0].split(","):[];

	var tagslists = [];
	tagslists = config.macros.deletelist.tags;
	if(check_tags.length > 0)
		tagslists = check_tags;

	var listViewTemplate = {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'systemConfig', field: 'systemConfig', title: 'S',  type: 'Boolean', trueText: "S", falseText: ""},
			{name: 'Title', field: 'title', tiddlerLink: 'title', title: "Title", type: 'TiddlerLink'}
		],
		rowClasses: [
			{className: 'error', field: 'error'},
			{className: 'warning', field: 'warning'}
			],
		actions: [
			{caption: "More actions...", name: ''},
			{caption: "Delete these tiddlers forever", name: 'delete'}
		]};

	var i;
	for(i=0; i<tagslists.length; i++){
    	var tagname = tagslists[i];
		var tmpl = {name: tagname, field: tagname, title: tagname, type: 'TagCheckbox', tag:tagname};
		listViewTemplate.columns.push(tmpl);
	}

	var selectedRows = [];
	ListView.forEachSelector(place,function(e,rowName) {
		if(e.checked)
			selectedRows.push(e.getAttribute("rowName"));
		});

	removeChildren(place);

	tagname = params;
	var lists = [];
	var j,tiddler,p;
	var configTiddlers = [];

	if(list_tags.length > 0){
		for(i=0; i<list_tags.length; i++){
			var tagtiddlers = store.getTaggedTiddlers(list_tags[i]);
			configTiddlers = configTiddlers.concat(tagtiddlers);
		}
	}else
		configTiddlers = store.getTiddlers();

	// no match error
	if(configTiddlers.length <= 0){
		createTiddlyError(place,"Don't Match tiddler","no exist your input tagname tiddler.");
		return;
	}

	for(i=0; i<configTiddlers.length; i++){
		tiddler = configTiddlers[i];

		p = store.getTiddlerSlices(tiddler.title,["Name","Description","Version","CoreVersion","Date","Source","Author","License","Browsers"]);
		p.tiddler = tiddler;
		p.title = tiddler.title;

		for(j=0; j<tagslists.length; j++){
			var tn = tagslists[j];
			p[tn] = p.tiddler.isTagged(tagslists[j]);
		}

		p['systemConfig'] = ( (p.tiddler.isTagged('systemConfig')) && !(p.tiddler.isTagged('systemConfigDisable')) );

		lists.push(p);
	}

	for(i=0; i<lists.length; i++){
		p = lists[i];
		p.Selected = selectedRows.indexOf(lists[i].title) != -1;
	}

	var sysInfo = createTiddlyElement(place,"div",null,null,"S: 'systemConfig' tag and not 'systemConfigDisable' tag");
	sysInfo.style.cssText = "font-size:0.8em;";
	if(list_tags.length > 0){
		var listtagsInfo = createTiddlyElement(place,"div",null,null,"list tiddler tags: "+list_tags.toString().replace(",", " / "));

		listtagsInfo.style.cssText = "font-size:0.8em;";
	}

	if(lists.length === 0)
		createTiddlyElement(place,"em",null,null,this.noPluginText);
	else
		ListView.create(place,lists,listViewTemplate,this.onSelectCommand);

	var ver = createTiddlyElement(place,"div",null,null,"DeleteListPlugin "+config.macros.deletelist.version);
	ver.style.cssText = "font-size:0.8em;";
	// wait message area
	createTiddlyElement(place,"div","wait_dlp");
};

config.macros.deletelist.onSelectCommand = function(obj,command,rowNames) {
	var reslist = document.getElementById("result_dlp");
	var wait = document.getElementById("wait_dlp");
	var i;

	switch(command) {
		case "remove":
			for(i=0; i<rowNames.length; i++)
				store.setTiddlerTag(rowNames[i],false,"systemConfig");
			break;
		case "delete":
			wait.innerHTML = config.macros.deletelist.waitmessage;

			if(rowNames.length > 0 && confirm(config.macros.plugins.confirmDeleteText.format([rowNames.join(", ")]))) {
				for(i=0; i<rowNames.length; i++) {
					store.removeTiddler(rowNames[i]);
					story.closeTiddler(rowNames[i],true,false);
				}
				//message display
				createTiddlyElement(reslist,"H5",null,null,"Delete tiddler count: "+rowNames.length+"\n");
				var disp = createTiddlyElement(reslist,"ul",null,null); 
				for(i=0; i<rowNames.length; i++){
					createTiddlyElement(disp, "li",null,null,rowNames[i]+"\n");
				}
			}
			wait.innerHTML = "";
			break;
		default:
			break;
	}
	if(config.options.chkAutoSave)
		saveChanges(true);
};

//set shadow tiddler
config.shadowTiddlers["DeleteList"]="<<deletelist>>";
//add OptionsPanel
if(config.options.chkDeleteListDisplayInOptions){
	config.shadowTiddlers.OptionsPanel+="\nDeleteList";
}
// Add BackStage
if(config.options.chkDeleteListDisplayInBackStage){
	if(config.tasks && config.backstageTasks){
		config.tasks.DeleteListTask = {
			text: "DelList",
			tooltip: "Delete List tool",
			content: "<<deletelist>>"
		};
		config.backstageTasks.push("DeleteListTask");
	}
}
/*}}}*/
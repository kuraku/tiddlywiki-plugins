/***
|''Name:''|JapaneseTranslationPlugin|
|''Description:''|Translation of TiddlyWiki into Japanese|
|''Author:''|kuraku (kuraku (dot) net (at) gmail (dot) com)|
|''Source:''|http://tw.kuraku.net/tw.html#JapaneseTranslationPlugin |
|''CodeRepository:''|http://svn.tiddlywiki.org/Trunk/association/locales/core/en/locale.en.js |
|''Version:''|0.0.3|
|''Date:''|Aug 23, 2007|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.1 Japan License|http://creativecommons.org/licenses/by-sa/2.1/jp/]]|
|''~CoreVersion:''|2.2|

!!History
*2007.08.23 annotation, Import を作成
*2007.08.13 annotation を作成中
*2007.07.26 init
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "ja"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options,{txtUserName: "あなたの名前"});

merge(config.tasks,{
	save: {text: "保存(save)", tooltip: "更新した内容を保存", action: saveChanges},
	sync: {text: "同期(sync)", tooltip: "他の TiddlyWiki ファイルやサーバと同期", content: '<<sync>>'},
	importTask: {text: "インポート(import)", tooltip: "他の TiddlyWiki ファイルやサーバからと Tiddler や プラグインをインポート", content: '<<importTiddlers>>'},
	tweak: {text: "カスタマイズ(tweak)", tooltip: "TiddlyWiki のカスタマイズ", content: '<<options>>'},
	plugins: {text: "プラグイン(plugins)", tooltip: "プラグインマネージャによる管理", content: '<<plugins>>'}
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc,{
	txtUserName: "あなたの名前(ユーザ名)",
	chkRegExpSearch: "正規表現による検索",
	chkCaseSensitiveSearch: "厳密な検索",
	chkAnimate: "アニメーション",
	chkSaveBackups: "保存時にバックアップを取る",
	chkAutoSave: "編集時に自動保存",
	chkGenerateAnRssFeed: "保存時に RSS フィードファイルを作成",
	chkSaveEmptyTemplate: "保存時にテンプレートファイルを作成",
	chkOpenInNewWindow: "外部リンクは新ウィンドウへ",
	chkToggleLinks: "リンクを押したときにその Tiddler が開いていれば閉じる",
	chkHttpReadOnly: "Web アクセスからの場合は編集できない",
	chkForceMinorUpdate: "Tiddler 編集時ユーザ名も日付も変えない",
	chkConfirmDelete: "Tiddler 削除時に確認",
	chkInsertTabs: "タブキー入力時フィールド間の移動機能ではなく、タブとして入力",
	txtBackupFolder: "バックアップフォルダ名",
	txtMaxEditRows: "編集エリアの行数",
	txtFileSystemCharSet: "保存時の文字エンコード (Firefox/Mozilla only)"});

merge(config.messages,{
	customConfigError: "プラグインの読込みで問題が発生。プラグインマネージャ参照のこと",
	pluginError: "エラー: %0",
	pluginDisabled: "'systemConfigDisable' タグにより実行がされなかった",
	pluginForced: "'systemConfigForce' タグによる強制実行",
	pluginVersionError: "このプラグインの実行には 新バージョンの TiddlyWiki が必要",
	nothingSelected: "選択がされなかった. 一つ以上の選択が必要",
	savedSnapshotError: "TiddlyWiki の保存に失敗. 詳細はこちらへ http://www.tiddlywiki.com/#DownloadSoftware",
	subtitleUnknown: "(未設定)",
	undefinedTiddlerToolTip: "'%0' はまだ作成されていない",
	shadowedTiddlerToolTip: "'%0' はまだ作成されていない (shodow には存在)",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "%0 (外部リンク)",
	noTags: "タグの付いた Tiddler は無い",
	notFileUrlError: "変更を保存するには、この TiddlyWiki をファイルに保存(ダウンロード)がする必要がある",
	cantSaveError: "変更を保存することができない. \n理由:\n- ブラウザが保存に未対応 (Firefox, Internet Explorer, Safari ,Opera については設定が正しければ保存可能)\n- ファイルのパスに不正な文字が含まれている\n- ファイルを移動、名前の変更を行なった",
	invalidFileError: "ファイル '%0' は TiddlyWiki ファイルではない",
	backupSaved: "バックアップを保存",
	backupFailed: "バックアップの保存に失敗",
	rssSaved: "RSS フィードを保存",
	rssFailed: "RSS フィードの保存に失敗",
	emptySaved: "空テンプレートファイルを保存",
	emptyFailed: "空テンプレートファイルの保存に失敗",
	mainSaved: "TiddlyWiki ファイルを保存",
	mainFailed: "TiddlyWiki ファイルの保存に失敗. 変更内容は未保存",
	macroError: "<<\%0>> マクロにてエラー",
	macroErrorDetails: "<<\%0>> マクロにてエラー:\n%1",
	missingMacro: "マクロは見つからない",
	overwriteWarning: "'%0' Tiddler は既存. OK にて上書き",
	unsavedChangesWarning: "警告 WARNING! TiddlyWiki の変更内容が未保存状態. \n\nChoose OK で保存\nCANCEL で破棄",
	confirmExit: "--------------------------------\n\nTiddlyWiki の変更内容が未保存状態. このまま続けると変更内容は破棄されます\n\n--------------------------------",
	saveInstructions: "SaveChanges",
	unsupportedTWFormat: "TiddlyWiki にて '%0' フォーマットは未対応",
	tiddlerSaveError: "Tiddler '%0' 保存時にエラー",
	tiddlerLoadError: "Tiddler '%0' ロード時にエラー",
	wrongSaveFormat: "フォーマット '%0' による保存は未対応のため標準フォーマットにて保存",
	invalidFieldName: "フィールド名 '%0' は間違い",
	fieldCannotBeChanged: "フィールド '%0' は変更不能",
	loadingMissingTiddler: "workspace '%3', '%2' の '%1' サーバより Tiddler '%0' をロードしようとして失敗"});

merge(config.messages.messageClose,{
	text: "クローズ",
	tooltip: "このメッセージを閉じる"});

config.messages.backstage = {
	open: {text: "バックステイジ", tooltip: "backstage エリアを開く"},
	close: {text: "閉じる", tooltip: "backstage エリアを閉じる"},
	prompt: "バックステイジ: ",
	decal: {
		edit: {text: "編集", tooltip: "Tiddler '%0' を編集"}
	}
};

config.messages.listView = {
	tiddlerTooltip: "Tiddler をフルテキストにする",
	previewUnavailable: "(プレビュー不能)"
};

config.messages.dates.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
config.messages.dates.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
config.messages.dates.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
config.messages.dates.shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = ["st","nd","rd","th","th","th","th","th","th","th",
		"th","th","th","th","th","th","th","th","th","th",
		"st","nd","rd","th","th","th","th","th","th","th",
		"st"];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup,{
	});

merge(config.views.wikified.tag,{
	labelNoTags: "タグなし",
	labelTags: "タグ: ",
	openTag: "'%0' タグを開く",
	tooltip: "'%0' タグの付いた Tiddler を表示",
	openAllText: "すべて開く",
	openAllTooltip: "以下の全 Tiddler を開く",
	popupNone: "'%0' タグの付いた Tiddler は他には無い"});

merge(config.views.wikified,{
	defaultText: "'%0' Tiddler は作成されていない. ダブルクリックにより作成",
	defaultModifier: "(missing)",
	shadowModifier: "(ビルトイン shadow Tiddler)",
	dateFormat: "YYYY.0MM.0DD", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "作成"});

merge(config.views.editor,{
	tagPrompt: "タグはスペース区切り. 必要ならば[[二重のブランケットで囲む]]. 既存の",
	defaultText: "'%0' の内容を入力"});

merge(config.views.editor.tagChooser,{
	text: "タグ",
	tooltip: "既存のタグを選択",
	popupNone: "タグが未定義",
	tagTooltip: "'%0' タグを追加"});

merge(config.messages,{
	sizeTemplates:
		[
		{unit: 1024*1024*1024, template: "%0\u00a0GB"},
		{unit: 1024*1024, template: "%0\u00a0MB"},
		{unit: 1024, template: "%0\u00a0KB"},
		{unit: 1, template: "%0\u00a0B"}
		]});

merge(config.macros.search,{
	label: "検索",
	prompt: "この TiddlyWiki を検索",
	accessKey: "F",
	successMsg: "%0 件の Tiddler にて '%1' が見つかった",
	failureMsg: "%0 は見つからない"});

merge(config.macros.tagging,{
	label: "タギング(tagging): ",
	labelNotTag: "タグなし",
	tooltip: "'%0' タグの付いた Tiddler リスト"});

merge(config.macros.timeline,{
	dateFormat: "YYYY.0MM.0DD"});// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags,{
	tooltip: "'%0' タグの付いた Tiddler 表示",
	noTags: "タグの付いた Tiddler は無い"});

config.macros.list.all.prompt = "アルファベット順リスト";
config.macros.list.missing.prompt = "リンクされているが存在しない Tiddler リスト";
config.macros.list.orphans.prompt = "リンクされていない Tiddler リスト";
config.macros.list.shadowed.prompt = "Shadow Tiddler リスト";
config.macros.list.touched.prompt = "局所的に変更された Tiddler リスト";

merge(config.macros.closeAll,{
	label: "すべて閉じる",
	prompt: "編集しているもの以外のすべてを閉じる"});

merge(config.macros.permaview,{
	label: "パーマビュー",
	prompt: "表示されているすべての Tiddler を表示する URL"});

merge(config.macros.saveChanges,{
	label: "保存",
	prompt: "すべての Tiddler を保存",
	accessKey: "S"});

merge(config.macros.newTiddler,{
	label: "Tiddler 作成",
	prompt: "新しい Tiddler を作成",
	title: "New Tiddler",
	accessKey: "N"});

merge(config.macros.newJournal,{
	label: "Journal 作成",
	prompt: "新しいジャーナルを作成 (タイトルが日付)",
	accessKey: "J"});

merge(config.macros.options,{
	wizardTitle: "Tweak advanced options",
	step1Title: "これらのオプションはブラウザのクッキーに保存される",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Show unknown options</input>",
	unknownDescription: "//(unknown)//",
	listViewTemplate: {
		columns: [
			{name: 'Option', field: 'option', title: "オプション", type: 'String'},
			{name: 'Description', field: 'description', title: "内容", type: 'WikiText'},
			{name: 'Name', field: 'name', title: "名前", type: 'String'}
			],
		rowClasses: [
			{className: 'lowlight', field: 'lowlight'} 
			]}
	});

merge(config.macros.plugins,{
	wizardTitle: "Manage plugins",
	step1Title: "現在ロードされているプラグイン",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(このプラグインは起動後に追加)",
	noPluginText: "プラグインはインストールされていない",
	confirmDeleteText: "これらのプラグインを削除しますか:\n\n%0",
	removeLabel: "systemConfig タグを除去",
	removePrompt: "systemConfig タグを除去",
	deleteLabel: "削除",
	deletePrompt: "Tiddler の完全な削除",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "サイズ", type: 'Size'},
			{name: 'Forced', field: 'forced', title: "強制", tag: 'systemConfigForce', type: 'TagCheckbox'},
			{name: 'Disabled', field: 'disabled', title: "使用不可", tag: 'systemConfigDisable', type: 'TagCheckbox'},
			{name: 'Executed', field: 'executed', title: "ロード済", type: 'Boolean', trueText: "Yes", falseText: "No"},
			{name: 'Startup Time', field: 'startupTime', title: "起動時間", type: 'String'},
			{name: 'Error', field: 'error', title: "ステータス", type: 'Boolean', trueText: "エラー", falseText: "OK"},
			{name: 'Log', field: 'log', title: "ログ", type: 'StringList'}
			],
		rowClasses: [
			{className: 'error', field: 'error'},
			{className: 'warning', field: 'warning'}
			]}
	});

merge(config.macros.toolbar,{
	moreLabel: "続き",
	morePrompt: "見えていないコマンド表示"
	});

merge(config.macros.refreshDisplay,{
	label: "リフレッシュ",
	prompt: "TiddlyWiki を再描画"
	});

merge(config.macros.importTiddlers,{
	readOnlyWarning: "読み込み専用の TiddlyWiki にはインポートできない. file://URL で開き直すこと",
	wizardTitle: "他のファイル、サーバからの Tiddler インポート",
	step1Title: "ステップ 1: TiddlyWiki サーバかファイルを指定",
	step1Html: "サーバタイプを指定: <select name='selTypes'><option value=''>選択...</option></select><br>URL またはパスネームを入力: <input type='text' size=50 name='txtPath'><br>あるいはファイルの指定: <input type='file' size=50 name='txtBrowse'><br><hr>またはあらかじめ設定されたフィードの選択: <select name='selFeeds'><option value=''>選択...</option></select>",
	openLabel: "オープン",
	openPrompt: "このファイルかサーバへ接続",
	openError: "tiddlywiki ファイルの取得に問題が発生",
	statusOpenHost: "サーバホストに接続中",
	statusGetWorkspaceList: "利用可能なワークスペースを取得中",
	step2Title: "ステップ 2: ワークスペースの選択",
	step2Html: "ワークスペース名の入力: <input type='text' size=50 name='txtWorkspace'><br>...またはワークスペースの選択: <select name='selWorkspace'><option value=''>選択...</option></select>",
	cancelLabel: "キャンセル",
	cancelPrompt: "このインポートをキャンセル",
	statusOpenWorkspace: "ワークスペースをオープン中",
	statusGetTiddlerList: "利用可能な Tiddler を取得中",
	step3Title: "ステップ 3: インポートする Tiddler の選択",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>後の変更を反映させられるようにこれらの Tiddler とサーバを関連づけておく</input><br><input type='checkbox' name='chkSave'>このサーバの情報を 'systemServer' として保存する Tiddler 名:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "インポート",
	importPrompt: "Tiddler のインポート",
	confirmOverwriteText: "本当にこれらの Tiddler を上書きして良いですか:\n\n%0",
	step4Title: "ステップ 4: %0 の Tiddler をインポート",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "完了",
	donePrompt: "クローズ",
	statusDoingImport: "インポート中",
	statusDoneImport: "すべての Tiddler をインポート済み",
	systemServerNamePattern: "%1 の %2",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "Tiddler '%0' はすでにあります. 'OK' のクリックでサーバの内容で上書き、'Cancel' により修正を中止",
	serverSaveTemplate: "|''タイプ:''|%0|\n|''URL:''|%1|\n|''ワークスペース:''|%2|\n\nこの Tiddler はこのサーバ情報を記録するために自動的に作成された",
	serverSaveModifier: "(システム)",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "サイズ", type: 'Size'},
			{name: 'Tags', field: 'tags', title: "タグ", type: 'Tags'}
			],
		rowClasses: [
			]}
	});

merge(config.macros.sync,{
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Server Type', field: 'serverType', title: "Server type", type: 'String'},
			{name: 'Server Host', field: 'serverHost', title: "Server host", type: 'String'},
			{name: 'Server Workspace', field: 'serverWorkspace', title: "Server workspace", type: 'String'},
			{name: 'Status', field: 'status', title: "Synchronisation status", type: 'String'},
			{name: 'Server URL', field: 'serverUrl', title: "Server URL", text: "View", type: 'Link'}
			],
		rowClasses: [
			],
		buttons: [
			{caption: "Sync these tiddlers", name: 'sync'}
			]},
	wizardTitle: "Synchronize with external servers and files",
	step1Title: "Choose the tiddlers you want to synchronize",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "sync",
	syncPrompt: "Sync these tiddlers",
	hasChanged: "Changed while unplugged",
	hasNotChanged: "Unchanged while unplugged",
	syncStatusList: {
		none: {text: "...", color: "none"},
		changedServer: {text: "Changed on server", color: '#80ff80'},
		changedLocally: {text: "Changed while unplugged", color: '#80ff80'},
		changedBoth: {text: "Changed while unplugged and on server", color: '#ff8080'},
		notFound: {text: "Not found on server", color: '#ffff80'},
		putToServer: {text: "Saved update on server", color: '#ff80ff'},
		gotFromServer: {text: "Retrieved update from server", color: '#80ffff'}
		}
	});

merge(config.commands.closeTiddler,{
	text: "閉じる",
	tooltip: "Tiddler を閉じる"});

merge(config.commands.closeOthers,{
	text: "他を閉じる",
	tooltip: "他の Tiddler を閉じる"});

merge(config.commands.editTiddler,{
	text: "編集",
	tooltip: "Tiddler を編集",
	readOnlyText: "ビュー",
	readOnlyTooltip: "Tiddler ソースを表示"});

merge(config.commands.saveTiddler,{
	text: "保存",
	tooltip: "この Tiddler を保存"});

merge(config.commands.cancelTiddler,{
	text: "キャンセル",
	tooltip: "Tiddler の更新をキャンセル",
	warning: "'%0' の編集内容は破棄されますがよろしいですか?",
	readOnlyText: "終了",
	readOnlyTooltip: "Tiddler ノーマル表示"});

merge(config.commands.deleteTiddler,{
	text: "削除",
	tooltip: "この Tiddler を削除",
	warning: "'%0' Tiddler を本当に削除しますか?"});

merge(config.commands.permalink,{
	text: "パーマリンク",
	tooltip: "この Tiddler のパーマリンク"});

merge(config.commands.references,{
	text: "リファレンス",
	tooltip: "この Tiddler を参照している Tiddler",
	popupNone: "リファレンスなし"});

merge(config.commands.jump,{
	text: "ジャンプ",
	tooltip: "他の Tiddler へのジャンプ"});

merge(config.commands.syncing,{
	text: "syncing",
	tooltip: "Control synchronisation of this tiddler with a server or external file",
	currentlySyncing: "<div>Currently syncing via <span class='popupHighlight'>'%0'</span> to:</"+"div><div>host: <span class='popupHighlight'>%1</span></"+"div><div>workspace: <span class='popupHighlight'>%2</span></"+"div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "Not currently syncing",
	captionUnSync: "Stop synchronising this tiddler",
	chooseServer: "Synchronise this tiddler with another server:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "});

merge(config.commands.fields,{
	text: "fields",
	tooltip: "Show the extended fields of this tiddler",
	emptyText: "There are no extended fields for this tiddler",
	listViewTemplate: {
		columns: [
			{name: 'Field', field: 'field', title: "Field", type: 'String'},
			{name: 'Value', field: 'value', title: "Value", type: 'String'}
			],
		rowClasses: [
			],
		buttons: [
			]}});

merge(config.shadowTiddlers,{
	DefaultTiddlers: "[[TranslatedGettingStarted]]",
	MainMenu: "[[TranslatedGettingStarted]]\n\n\n^^~TiddlyWiki version <<version>>\n(c) 2007 [[UnaMesa|http://www.unamesa.org/]]^^",
	TranslatedGettingStarted: "未設定の TiddlyWiki から始めるためには次の Tiddler を変更する必要がある:\n* SiteTitle & SiteSubtitle: 上部に表示される、サイトのタイトルとサブタイトル (修正後、ブラウザのタイトルバーに現われる)\n* MainMenu: メニュー (通常左側)\n* DefaultTiddlers: TiddlyWiki を開くときに表示したい Tiddler 名を含む\nまた編集を行なうあなたのユーザー名を入力する必要がある: <<option txtUserName>>",
	SiteTitle: "My TiddlyWiki",
	SiteSubtitle: "a reusable non-linear personal web notebook",
	SiteUrl: "http://www.tiddlywiki.com/",
	OptionsPanel: "TiddlyWiki をカスタマイズするこれらのオプションはブラウザに保存される.\n\nあなたのユーザ名を入力する. それは WikiWord として表示される\n<<option txtUserName>>\n\n<<option chkSaveBackups>> バックアップ\n<<option chkAutoSave>> 自動保存\n<<option chkRegExpSearch>> 正規表現検索\n<<option chkCaseSensitiveSearch>> 厳密な検索\n<<option chkAnimate>> アニメーション\n\n----\nその他のオプション [[TranslatedAdvancedOptions|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "YYYY.0MM.0DD">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "オプション >" "Change TiddlyWiki advanced options">>',
	SideBarTabs: '<<tabs txtMainTab "更新" "タイムライン" TabTimeline "すべて" "すべて" TabAll "タグ" "タグ" TabTags "他" "他リスト" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Missing" "リンクがあるが存在しない Tiddler" TabMoreMissing "Orphans" "リンクされていない Tiddler" TabMoreOrphans "Shadowed" "シャドウ(既存) Tiddler" TabMoreShadowed>>'});

merge(config.annotations,{
	AdvancedOptions: "この shadow Tiddler はアドバンスオプションへのアクセスを提供する",
	ColorPalette: "この shadow Tiddler のこれらの値は ~TiddlyWiki ユーザインターフェースの配色の指定をする",
	DefaultTiddlers: "この shadow Tiddler に Tiddler をリストすることで ~TiddlyWiki スタート時に表示される Tiddler を指定する",
	EditTemplate: "この shadow Tiddler のテンプレートは編集中の Tiddler の見せ方(レイアウト)を指定する",
	GettingStarted: "この shadow Tiddler は基本的な使用法を説明する",
	ImportTiddlers: "この shadow Tiddler は Tiddler のインポートを提供する",
	MainMenu: "この shadow Tiddler は画面のメインメニューの内容として使用される",
	MarkupPreHead: "この Tiddler は ~TiddlyWiki の HTML ファイルの <head> タグの前に挿入される",
	MarkupPostHead: "この Tiddler は ~TiddlyWiki の HTML ファイルの <head> タグの後ろに挿入される",
	MarkupPreBody: "この Tiddler は ~TiddlyWiki の HTML ファイルの <body> タグの前に挿入される",
	MarkupPostBody: "この Tiddler は script ブロック直前の ~TiddlyWiki の HTML ファイルの <body> タグの後ろに挿入される",
	OptionsPanel: "この shadow Tiddler は オプションパネルスライダーの内容として使用される",
	PageTemplate: "この shadow Tiddler のテンプレートは ~TiddlyWiki のレイアウトを指定する",
	PluginManager: "この shadow Tiddler はプラグインマネージャへのアクセスを提供する",
	SideBarOptions: "この shadow Tiddler はサイドバーで選択パネルの内容として使用される",
	SideBarTabs: "この shadow Tiddler はサイドバーのタブの内容として使用される",
	SiteSubtitle: "この shadow Tiddler はページのサブタイトルとして使用される",
	SiteTitle: "この shadow Tiddler はページのタイトルとして使用される",
	SiteUrl: "この shadow Tiddler は出力のための完全なターゲット URL を指定するべきである(RSSファイルなど)",
	StyleSheetColours: "この shadow Tiddler はページの要素の色と関連する CSS を定義する",
	StyleSheet: "この Tiddler は個別の CSS (カスタムしたもの) を指定する",
	StyleSheetLayout: "この shadow Tiddler はページの要素のレイアウトと関連する CSS を定義する",
	StyleSheetLocale: "この shadow Tiddler はロケールと関連する CSS を定義する",
	StyleSheetPrint: "この shadow Tiddler は印刷と関連する CSS を定義する",
	TabAll: "この shadow Tiddler はサイドバーの「All(すべて)」タブの内容として使用される",
	TabMore: "この shadow Tiddler はサイドバーの「More(他)」タブの内容として使用される",
	TabMoreMissing: "この shadow Tiddler はサイドバーの「Missing」タブの内容として使用される",
	TabMoreOrphans: "この shadow Tiddler はサイドバーの「Orphans」タブの内容として使用される",
	TabMoreShadowed: "この shadow Tiddler はサイドバーの「Shadowed」タブの内容として使用される",
	TabTags: "この shadow Tiddler はサイドバーの「Tags(タグ)」タブの内容として使用される",
	TabTimeline: "この shadow Tiddler はサイドバーの「Timeline(更新)」タブの内容として使用される",
	ViewTemplate: "この shadow Tiddler の HTML テンプレートは Tiddler がどのように表示されるかを指定する"
	});

//}}}

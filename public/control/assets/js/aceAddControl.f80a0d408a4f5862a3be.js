(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{350:function(e,o,t){"use strict";AspBase.tbAddControl='\n<button class="toolbtn btn-ace-strong no-cache tree-rebuild" asp-tree-view="control/layout" slug-delimiter="\\" callback="ace-editor-add-control-layout" title="Add layout name" style="background-image: url(\'/images/icons-main/icons/layout-text-sidebar.svg\');"></button>\n<button class="toolbtn btn-ace-strong no-cache tree-rebuild" asp-tree-view="control/model" slug-delimiter="\\" callback="ace-editor-add-control-layout" title="Add model name" style="background-image: url(\'/images/icons-main/icons/box.svg\');"></button>\n<button class="toolbtn btn-ace-strong no-cache tree-rebuild" asp-tree-view="control/model" slug-delimiter="\\" callback="ace-editor-add-control-model" title="Add model class as use" style="background-image: url(\'/images/icons-main/icons/database.svg\');"></button>\n<button class="toolbtn btn-ace-strong no-cache tree-rebuild" asp-tree-view="control/library" slug-delimiter="\\" callback="ace-editor-add-control-library" title="Add library class as use" style="background-image: url(\'/images/icons-main/icons/layers.svg\');"></button>\n',AspBase.aceEditorAddUseLib=function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(ace&&void 0!==e){var s=ace.edit(Asp.closest(e,".card-body",".ace_editor"));if(null!=o&&""!==o&&s&&void 0!==s){o=t+o+a,s.navigateLineStart();var i={backwards:!1,wrap:!0,caseSensitive:!1,wholeWord:!0,regExp:!1,start:{row:0,column:0}},r=AspBase.aceFind(s,o,i);null!==r&&r.start?r=r.start:null!==(r=AspBase.aceFind(s,"namespace ",i))&&r.start&&(r={row:r.start.row+1,column:0},s.session.insert(r,"\n"+o+"\n"),r.row++),s.selection.moveCursorToPosition(r),s.focus()}}},AspBase.aceEditorAddControlLibrary=function(e,o,t){if(void 0!==e&&""!==e&&t&&void 0!==t){var a=Asp.delSlash(e.toString().trim());a=Asp.replaceAll(e,"/","\\"),AspBase.aceEditorAddUseLib(t,a,"use App\\Libraries\\Control\\",";")}},AspBase.aceEditorAddControlModel=function(e,o,t){if(void 0!==e&&""!==e&&t&&void 0!==t){var a=Asp.delSlash(e.toString().trim());a=Asp.replaceAll(e,"/","\\"),AspBase.aceEditorAddUseLib(t,a,"use App\\Models\\",";")}},AspBase.aceEditorAddControlLayout=function(e,o,t){if(void 0!==e&&""!==e&&t&&void 0!==t){var a,s=Asp.delSlash(e.toString().trim()),i=ace.edit(Asp.closest(t,".card-body",".ace_editor"));null!=s&&""!==s&&i&&void 0!==i&&(s="'"+Asp.replaceAll(e,"/","\\")+"'",a=i.getCursorPosition(),i.session.insert(a,s),i.focus())}}}},[[350,0]]]);
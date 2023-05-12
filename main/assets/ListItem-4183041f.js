import{a as L,b as B,p as a,c as T}from"./withWebComponent-d61dcbbc.js";import{I}from"./Integer-f7f172c9.js";import{g}from"./MarkedEvents-b83081e9.js";import{h as b,b as u,c as h,z as D}from"./Icons-94b91597.js";import{k as w,a as y,d as C}from"./UI5Element-74c2a827.js";import{e as _}from"./Icon-a2964213.js";import{s as A}from"./slot-76e48863.js";import"./decline-c0e7c267.js";import{a as o,b as x}from"./ListItemBase-c271f906.js";import k from"./RadioButton-9ea605bf.js";import N from"./CheckBox-5944a432.js";import{B as z}from"./Button-1eb48b4c.js";import{u as M,v as P,D as q,w as R,x as $}from"./i18n-defaults-254d6b69.js";import{H as O}from"./HasPopup-47461347.js";import"./slim-arrow-right-b979090e.js";var f;(function(l){l.Inactive="Inactive",l.Active="Active",l.Detail="Detail",l.Navigation="Navigation"})(f||(f={}));const n=f,H="edit",S="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z",j=!1,K="SAP-icons-v4",V="@ui5/webcomponents-icons";b(H,{pathData:S,ltr:j,collection:K,packageName:V});const F="edit",E="M501.5 88q8 7 8 19 0 10-8 18l-373 379q-5 4-9 6t-10 2h-80q-12 0-19.5-7.5T2.5 485v-80q0-10 8-18l374-379q8-8 18-8 11 0 19 8zm-136 99l-43-43-256 261 43 43zm80-80l-43-43-42 43 42 42z",U=!1,W="SAP-icons-v5",X="@ui5/webcomponents-icons";b(F,{pathData:E,ltr:U,collection:W,packageName:X});w();const ue="edit";y("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);y("@ui5/webcomponents","sap_fiori_3",async()=>B);const G={packageName:"@ui5/webcomponents",fileName:"themes/ListItem.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([actionable]:not([disabled])){cursor:pointer}:host([selected][actionable]:not([active]):hover){background:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]),:host([selected][active][actionable]){background:var(--sapList_Active_Background)}:host([actionable]:not([active]):not([selected]):hover){background:var(--sapList_Hover_Background)}:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus,:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus{outline-color:var(--sapContent_ContrastFocusColor)}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-additional-text,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-title{color:var(--sapList_Active_TextColor)}:host([additional-text-state=Warning]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state=Success]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state=Error]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state=Information]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image-content]){height:5rem}:host([image]) .ui5-li-content{height:3rem}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{display:flex;flex-direction:column;flex:auto;min-width:1px;line-height:normal}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-title{color:var(--sapTextColor);font-size:var(--_ui5_list_item_title_size)}.ui5-li-additional-text,.ui5-li-desc,:host(:not([wrapping-type=Normal])) .ui5-li-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type=Normal]){height:auto}:host([wrapping-type=Normal]) .ui5-li-content{margin:var(--_ui5_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}.ui5-li-additional-text{margin:0 .25rem;color:var(--sapNeutralTextColor);font-size:.875rem;min-width:3.75rem;text-align:end;max-width:40%}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-img{width:var(--_ui5_list_item_img_size);height:var(--_ui5_list_item_img_size);border-radius:var(--ui5-avatar-border-radius)}.ui5-li-img,.ui5-li-imgContent{min-width:var(--_ui5_list_item_img_size);min-height:var(--_ui5_list_item_img_size);margin-top:var(--_ui5_list_item_img_top_margin);margin-bottom:var(--_ui5_list_item_img_bottom_margin);margin-inline-end:var(--_ui5_list_item_img_hn_margin)}.ui5-li-img-inner{object-fit:contain}.ui5-li-icon{min-width:var(--_ui5_list_item_icon_size);min-height:var(--_ui5_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5_list_item_icon_padding-inline-end)}.ui5-li-content{display:flex;align-items:center;flex:auto;overflow:hidden}.ui5-li-deletebtn,.ui5-li-detailbtn{display:flex;align-items:center;margin-left:var(--_ui5_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5_list_item_selection_btn_margin_top)}:host([_mode=SingleSelectBegin]) .ui5-li-root{padding-inline:0 1rem}:host([_mode=MultiSelect]) .ui5-li-root{padding-inline:0 1rem}:host([_mode=SingleSelectEnd]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5_list_item_cb_margin_right)}"};var i=globalThis&&globalThis.__decorate||function(l,e,s,d){var p=arguments.length,r=p<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,s):d,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,s,d);else for(var v=l.length-1;v>=0;v--)(m=l[v])&&(r=(p<3?m(r):p>3?m(e,s,r):m(e,s))||r);return p>3&&r&&Object.defineProperty(e,s,r),r},c;let t=c=class extends x{constructor(){super(),this.deactivateByKey=s=>{u(s)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)};const e=s=>{this._onmousedown(s)};this._ontouchstart={handleEvent:e,passive:!0}}onBeforeRendering(){this.actionable=(this.type===n.Active||this.type===n.Navigation)&&this._mode!==o.Delete}onEnterDOM(){document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}_onkeydown(e){super._onkeydown(e);const s=this.type===n.Active,d=this.typeNavigation;h(e)&&e.preventDefault(),(h(e)||u(e))&&(s||d)&&this.activate(),u(e)&&this.fireItemPress(e)}_onkeyup(e){(h(e)||u(e))&&this.deactivate(),h(e)&&this.fireItemPress(e),this.modeDelete&&D(e)&&this.onDelete()}_onmousedown(e){g(e)!=="button"&&this.activate()}_onmouseup(e){g(e)!=="button"&&this.deactivate()}_ontouchend(e){this._onmouseup(e)}_onfocusout(){super._onfocusout(),this.deactivate()}_onclick(e){g(e)!=="button"&&this.fireItemPress(e)}onMultiSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===n.Active||this.type===n.Navigation)&&(this.active=!0)}onDelete(){this.fireEvent("_selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(u(e)&&e.preventDefault(),this.fireEvent("_press",{item:this,selected:this.selected,key:e.key}))}get isInactive(){return this.type===n.Inactive||this.type===n.Detail}get placeSelectionElementBefore(){return this._mode===o.MultiSelect||this._mode===o.SingleSelectBegin}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._mode===o.SingleSelectEnd||this._mode===o.Delete)}get modeSingleSelect(){return[o.SingleSelectBegin,o.SingleSelectEnd,o.SingleSelect].includes(this._mode)}get modeMultiSelect(){return this._mode===o.MultiSelect}get modeDelete(){return this._mode===o.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===n.Detail}get typeNavigation(){return this.type===n.Navigation}get typeActive(){return this.type===n.Active}get _ariaSelected(){if(this.modeMultiSelect||this.modeSingleSelect)return this.selected}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?c.i18nBundle.getText(M):c.i18nBundle.getText(P)),e}get deleteText(){return c.i18nBundle.getText(q)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.accessibleRole||this.role,ariaExpanded:void 0,ariaLevel:this._level||void 0,ariaLabel:c.i18nBundle.getText(R),ariaLabelRadioButton:c.i18nBundle.getText($),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.ariaHaspopup||void 0}}get hasConfigurableMode(){return!0}static async onDefine(){c.i18nBundle=await C("@ui5/webcomponents")}};i([a({type:n,defaultValue:n.Active})],t.prototype,"type",void 0);i([a({type:Boolean})],t.prototype,"navigated",void 0);i([a({type:Boolean})],t.prototype,"active",void 0);i([a()],t.prototype,"title",void 0);i([a({type:Boolean})],t.prototype,"actionable",void 0);i([a({defaultValue:"listitem"})],t.prototype,"role",void 0);i([a({defaultValue:void 0,noAttribute:!0})],t.prototype,"accessibleRoleDescription",void 0);i([a()],t.prototype,"accessibleRole",void 0);i([a({type:o,defaultValue:o.None})],t.prototype,"_mode",void 0);i([a({type:O,noAttribute:!0})],t.prototype,"ariaHaspopup",void 0);i([a({type:I})],t.prototype,"_level",void 0);i([a({type:Boolean,noAttribute:!0})],t.prototype,"disableDeleteButton",void 0);i([A()],t.prototype,"deleteButton",void 0);t=c=i([T({languageAware:!0,styles:[x.styles,G],dependencies:[z,k,N]}),_("detail-click"),_("_press"),_("_focused"),_("_selection-requested")],t);const me=t;export{me as L,n as a,ue as e};
//# sourceMappingURL=ListItem-4183041f.js.map

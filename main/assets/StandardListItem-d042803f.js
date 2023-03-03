import{e as l,l as n,s as o,p as t,c as h}from"./withWebComponent-34dd487e.js";import{s as v}from"./AriaLabelHelper-dee23f38.js";import{V as m}from"./ValueState-2c5e5904.js";import{L as b}from"./ListItem-5a448e1e.js";import{I as _}from"./Button-981a9381.js";import{A as g}from"./Avatar-f74ae24a.js";import{W as k}from"./WrappingType-b81e595a.js";import{o as I}from"./class-map-60f59e95.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Integer-5fa4beea.js";import"./UI5Element-386cb3f6.js";import"./MarkedEvents-0e37da6f.js";import"./FocusableElements-13161f05.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-344b418d.js";import"./Label-f9741f9c.js";import"./RadioButton-bb0fefa8.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-dcb3f847.js";import"./employee-dc85b60f.js";const S=(i,a,e)=>l`<li part="native-li" data-sap-focus-ref tabindex="${n(i._effectiveTabIndex)}" class="${I(i.classes.main)}" @focusin="${i._onfocusin}" @focusout="${i._onfocusout}" @keyup="${i._onkeyup}" @keydown="${i._onkeydown}" @mouseup="${i._onmouseup}" @mousedown="${i._onmousedown}" @touchstart="${i._ontouchstart}" @touchend="${i._ontouchend}" @click="${i._onclick}" role="${n(i._accInfo.role)}" aria-expanded="${n(i._accInfo.ariaExpanded)}" title="${n(i.title)}" aria-level="${n(i._accInfo.ariaLevel)}" aria-haspopup="${n(i._accInfo.ariaHaspopup)}" aria-posinset="${n(i._accInfo.posinset)}" aria-roledescription="${n(i.accessibleRoleDescription)}" aria-setsize="${n(i._accInfo.setsize)}" aria-describedby="${n(i._id)}-invisibleText-describedby" aria-labelledby="${n(i._accessibleNameRef)}" aria-disabled="${n(i._ariaDisabled)}" aria-selected="${n(i._accInfo.ariaSelected)}" aria-checked="${n(i._accInfo.ariaChecked)}" aria-owns="${n(i._accInfo.ariaOwns)}">${i.placeSelectionElementBefore?y(i,a,e):void 0}<div id="${n(i._id)}-content" class="ui5-li-content">${i.hasImageContent?D():L(i,a,e)}${i.displayIconBegin?R(i,a,e):void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${i.description?P(i):void 0}${i.typeActive?void 0:N(i)}</div>${i.description?void 0:A(i)}</div>${i.displayIconEnd?V(i,a,e):void 0}${i.typeDetail?j(i,a,e):void 0}${i.typeNavigation?q(i,a,e):void 0}${i.navigated?z():void 0}${i.placeSelectionElementAfter?H(i,a,e):void 0}<span id="${n(i._id)}-invisibleText" class="ui5-hidden-text">${n(i._accInfo.listItemAriaLabel)}${n(i.accessibleName)}</span><span id="${n(i._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(i._accInfo.ariaSelectedText)}</span></li> `,y=(i,a,e)=>l`${i.modeSingleSelect?f(i,a,e):void 0}${i.modeMultiSelect?T(i,a,e):void 0}${i.renderDeleteButton?B(i,a,e):void 0}`,f=(i,a,e)=>e?l`<${o("ui5-radio-button",a,e)} ?disabled="${i.isInactive}" accessible-name="${n(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></${o("ui5-radio-button",a,e)}>`:l`<ui5-radio-button ?disabled="${i.isInactive}" accessible-name="${n(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></ui5-radio-button>`,T=(i,a,e)=>e?l`<${o("ui5-checkbox",a,e)} ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${n(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" accessible-name="${n(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></${o("ui5-checkbox",a,e)}>`:l`<ui5-checkbox ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${n(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" accessible-name="${n(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></ui5-checkbox>`,B=(i,a,e)=>l`<div class="ui5-li-deletebtn">${i.hasDeleteButtonSlot?C():E(i,a,e)}</div>`,C=(i,a,e)=>l`<slot name="deleteButton"></slot>`,E=(i,a,e)=>e?l`<${o("ui5-button",a,e)} tabindex="-1" data-sap-no-tab-ref id="${n(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${n(i.deleteText)}"></${o("ui5-button",a,e)}>`:l`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${n(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${n(i.deleteText)}"></ui5-button>`,D=(i,a,e)=>l`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`,L=(i,a,e)=>l`${i.displayImage?w(i,a,e):void 0}`,w=(i,a,e)=>e?l`<${o("ui5-avatar",a,e)} shape="Square" class="ui5-li-img"><img src="${n(i.image)}" class="ui5-li-img-inner" /></${o("ui5-avatar",a,e)}>`:l`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${n(i.image)}" class="ui5-li-img-inner" /></ui5-avatar>`,R=(i,a,e)=>e?l`<${o("ui5-icon",a,e)} part="icon" name="${n(i.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${o("ui5-icon",a,e)}>`:l`<ui5-icon part="icon" name="${n(i.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`,P=(i,a,e)=>l`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${n(i.description)}</span>${i.additionalText?M(i):void 0}</div>`,M=(i,a,e)=>l`<span part="additional-text" class="ui5-li-additional-text">${n(i.additionalText)}</span>`,N=(i,a,e)=>l`<span class="ui5-hidden-text">${n(i.type)}</span>`,A=(i,a,e)=>l`${i.additionalText?O(i):void 0}`,O=(i,a,e)=>l`<span part="additional-text" class="ui5-li-additional-text">${n(i.additionalText)}</span>`,V=(i,a,e)=>e?l`<${o("ui5-icon",a,e)} part="icon" name="${n(i.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${o("ui5-icon",a,e)}>`:l`<ui5-icon part="icon" name="${n(i.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`,j=(i,a,e)=>e?l`<div class="ui5-li-detailbtn"><${o("ui5-button",a,e)} design="Transparent" icon="edit" @click="${i.onDetailClick}"></${o("ui5-button",a,e)}></div>`:l`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${i.onDetailClick}"></ui5-button></div>`,q=(i,a,e)=>e?l`<${o("ui5-icon",a,e)} name ="slim-arrow-right"></${o("ui5-icon",a,e)}>`:l`<ui5-icon name ="slim-arrow-right"></ui5-icon>`,z=(i,a,e)=>l`<div class="ui5-li-navigated"></div>`,H=(i,a,e)=>l`${i.modeSingleSelect?W(i,a,e):void 0}${i.modeMultiSelect?F(i,a,e):void 0}${i.renderDeleteButton?G(i,a,e):void 0}`,W=(i,a,e)=>e?l`<${o("ui5-radio-button",a,e)} ?disabled="${i.isInactive}" accessible-name="${n(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></${o("ui5-radio-button",a,e)}>`:l`<ui5-radio-button ?disabled="${i.isInactive}" accessible-name="${n(i._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(i._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${i.selected}" @click="${i.onSingleSelectionComponentPress}"></ui5-radio-button>`,F=(i,a,e)=>e?l`<${o("ui5-checkbox",a,e)} ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${n(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" accessible-name="${n(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></${o("ui5-checkbox",a,e)}>`:l`<ui5-checkbox ?disabled="${i.isInactive}" ?indeterminate=${i.indeterminate} tabindex="-1" id="${n(i._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${i.selected}" accessible-name="${n(i._accInfo.ariaLabel)}" @click="${i.onMultiSelectionComponentPress}"></ui5-checkbox>`,G=(i,a,e)=>l`<div class="ui5-li-deletebtn">${i.hasDeleteButtonSlot?J():K(i,a,e)}</div>`,J=(i,a,e)=>l`<slot name="deleteButton"></slot>`,K=(i,a,e)=>e?l`<${o("ui5-button",a,e)} tabindex="-1" data-sap-no-tab-ref id="${n(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${n(i.deleteText)}"></${o("ui5-button",a,e)}>`:l`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${n(i._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${i.disableDeleteButton}" @click="${i.onDelete}" tooltip="${n(i.deleteText)}"></ui5-button>`;var s=globalThis&&globalThis.__decorate||function(i,a,e,r){var p=arguments.length,c=p<3?a:r===null?r=Object.getOwnPropertyDescriptor(a,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(i,a,e,r);else for(var $=i.length-1;$>=0;$--)(u=i[$])&&(c=(p<3?u(c):p>3?u(a,e,c):u(a,e))||c);return p>3&&c&&Object.defineProperty(a,e,c),c};let d=class extends b{static get template(){return S}onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.textContent,this._hasImageContent=this.hasImageContent}get displayImage(){return!!this.image}get displayIconBegin(){return!!(this.icon&&!this.iconEnd)}get displayIconEnd(){return!!(this.icon&&this.iconEnd)}get hasImageContent(){return!!this.imageContent.length}static get dependencies(){return[...b.dependencies,_,g]}};s([t()],d.prototype,"description",void 0);s([t()],d.prototype,"icon",void 0);s([t({type:Boolean})],d.prototype,"iconEnd",void 0);s([t()],d.prototype,"image",void 0);s([t()],d.prototype,"additionalText",void 0);s([t({type:m,defaultValue:m.None})],d.prototype,"additionalTextState",void 0);s([t()],d.prototype,"accessibleName",void 0);s([t({type:k,defaultValue:k.None})],d.prototype,"wrappingType",void 0);s([t({type:Boolean})],d.prototype,"hasTitle",void 0);s([t({type:Boolean})],d.prototype,"_hasImageContent",void 0);s([v()],d.prototype,"imageContent",void 0);d=s([h("ui5-li")],d);d.define();const Pi=d;export{Pi as default};
//# sourceMappingURL=StandardListItem-d042803f.js.map

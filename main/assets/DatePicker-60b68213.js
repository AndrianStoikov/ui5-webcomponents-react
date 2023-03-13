import{e as l,f as p,l as i,s as V,a as S,p as d,c as C}from"./withWebComponent-e4481254.js";import{s as I}from"./slot-634e3e91.js";import{e as f,I as A,af as E,ag as H}from"./i18n-defaults-da1c0a37.js";import{g as O}from"./CustomElementsScopeUtils-137da8c8.js";import{a as N,b as z,D as M,g as B,m as R,C as L}from"./Calendar-6f3f6a9c.js";import{V as _}from"./ValueState-2c5e5904.js";import{g as U}from"./AriaLabelHelper-43a261ec.js";import{g as j,U as W,f as G,e as Y,i as J,a as K,b as Q,V as X,Q as Z,o as x,W as ee,S as te,p as ie}from"./Keys-3acbae73.js";import{c as g,f as ae}from"./Device-208919c6.js";import{k as re,a as v}from"./UI5Element-427ec721.js";import{a as T}from"./Icons-7b82f601.js";import"./decline-5eb6d937.js";import{H as oe}from"./HasPopup-47461347.js";import{c as y,I as ne}from"./Icon-a9b28f0c.js";import{B as se}from"./Button-b7bbfa18.js";import de from"./ResponsivePopover-d8f47bac.js";import{a as pe,I as le}from"./Input-3a50524a.js";import{s as b}from"./style-map-77d201d2.js";import"./Gregorian-034a4e91.js";import{s as ue}from"./ResponsivePopoverCommon.css-187e38b6.js";import"./utils-ed90fb1b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Integer-f7f172c9.js";import"./LocaleData-971cbc51.js";import"./slim-arrow-left-b095b594.js";import"./slim-arrow-right-bbef5919.js";import"./class-map-5d8e4b2b.js";import"./i18n-defaults-7dff8409.js";import"./MarkedEvents-b83081e9.js";import"./PopupsCommon.css-be465885.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./Popover-661594f1.js";import"./Dialog-6c305779.js";import"./information-0837f136.js";import"./Title-b986a4bd.js";import"./WrappingType-b81e595a.js";import"./Suggestions.css-faab6178.js";import"./ValueStateMessage.css-37773c69.js";const ce=e=>(e||(e=new Date().getTime()),(e-e%(24*60*60*1e3))/1e3),he="appointment-2",q="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",me=!1,_e="SAP-icons-v4",ve="@ui5/webcomponents-icons";T(he,{pathData:q,ltr:me,collection:_e,packageName:ve});const ge="appointment-2",F="M409.5 52q32 0 54.5 22t22.5 54v307q0 32-22.5 54t-54.5 22h-307q-32 0-54-22t-22-54V128q0-32 22-54t54-22h52V26q0-11 7-18.5t18-7.5T198 7.5t7.5 18.5v26h102V26q0-11 7-18.5t18-7.5q12 0 19 7.5t7 18.5v26h51zm-307 51q-25 0-25 25v77h358v-77q0-11-7.5-18t-18.5-7h-51v25q0 11-7 18.5t-19 7.5q-11 0-18-7.5t-7-18.5v-25h-102v25q0 11-7.5 18.5t-18.5 7.5-18-7.5-7-18.5v-25h-52zm307 357q11 0 18.5-7t7.5-18V256h-358v179q0 25 25 25h307zm-153-166q16 0 27 11t11 28q0 16-11 27t-27 11-27.5-11-11.5-27q0-17 11.5-28t27.5-11zm102 0q16 0 27 11t11 28q0 16-11 27t-27 11-27-11-11-27q0-17 11-28t27-11zm-204 0q16 0 27 11t11 28q0 16-11 27t-27 11q-17 0-28-11t-11-27q0-17 11-28t28-11z",fe=!1,ye="SAP-icons-v5",be="@ui5/webcomponents-icons";T(ge,{pathData:F,ltr:fe,collection:ye,packageName:be});re("sap_horizon");const $e=(e,t,a)=>a?l`<div class="ui5-date-picker-root" style="${b(e.styles.main)}"><${p("ui5-input",t,a)} id="${i(e._id)}-inner" class="ui5-date-picker-input" placeholder="${i(e._placeholder)}" type="${i(e.type)}" value="${i(e.value)}" ?disabled="${e.disabled}" ?required="${e.required}" ?readonly="${e.readonly}" value-state="${i(e.valueState)}" data-sap-focus-ref ._inputAccInfo ="${i(e.accInfo)}" @ui5-change="${i(e._onInputChange)}" @ui5-input="${i(e._onInputInput)}" @ui5-submit="${i(e._onInputSubmit)}" @keydown="${e._onkeydown}">${e.valueStateMessage.length?$():void 0}${e.readonly?void 0:k(e,t,a)}</${p("ui5-input",t,a)}><slot name="formSupport"></slot></div>`:l`<div class="ui5-date-picker-root" style="${b(e.styles.main)}"><ui5-input id="${i(e._id)}-inner" class="ui5-date-picker-input" placeholder="${i(e._placeholder)}" type="${i(e.type)}" value="${i(e.value)}" ?disabled="${e.disabled}" ?required="${e.required}" ?readonly="${e.readonly}" value-state="${i(e.valueState)}" data-sap-focus-ref ._inputAccInfo ="${i(e.accInfo)}" @ui5-change="${i(e._onInputChange)}" @ui5-input="${i(e._onInputInput)}" @ui5-submit="${i(e._onInputSubmit)}" @keydown="${e._onkeydown}">${e.valueStateMessage.length?$():void 0}${e.readonly?void 0:k(e,t,a)}</ui5-input><slot name="formSupport"></slot></div>`,$=(e,t,a)=>l`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`,k=(e,t,a)=>a?l`<div slot="icon" @click="${e.togglePicker}"><${p("ui5-icon",t,a)} name="${i(e.openIconName)}" tabindex="-1" accessible-name="${i(e.openIconTitle)}" accessible-role="button" aria-hidden="${i(e._ariaHidden)}" show-tooltip input-icon ?pressed="${e._isPickerOpen}"></${p("ui5-icon",t,a)}></div>`:l`<div slot="icon" @click="${e.togglePicker}"><ui5-icon name="${i(e.openIconName)}" tabindex="-1" accessible-name="${i(e.openIconTitle)}" accessible-role="button" aria-hidden="${i(e._ariaHidden)}" show-tooltip input-icon ?pressed="${e._isPickerOpen}"></ui5-icon></div>`,ke=(e,t,a)=>a?l`<${p("ui5-responsive-popover",t,a)} id="${i(e._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${i(e._shouldHideHeader)} @keydown="${e._onkeydown}" @ui5-after-close="${i(e.onResponsivePopoverAfterClose)}">${e.showHeader?w(e,t,a):void 0}<${p("ui5-calendar",t,a)} id="${i(e._id)}-calendar" primary-calendar-type="${i(e._primaryCalendarType)}" secondary-calendar-type="${i(e.secondaryCalendarType)}" format-pattern="${i(e._formatPattern)}" timestamp="${i(e._calendarTimestamp)}" .selectionMode="${i(e._calendarSelectionMode)}" .minDate="${i(e.minDate)}" .maxDate="${i(e.maxDate)}" @ui5-selected-dates-change="${i(e.onSelectedDatesChange)}" @ui5-show-month-press="${i(e.onHeaderShowMonthPress)}" @ui5-show-year-press="${i(e.onHeaderShowYearPress)}" ?hide-week-numbers="${e.hideWeekNumbers}" ._currentPicker="${i(e._calendarCurrentPicker)}">${y(e._calendarSelectedDates,(o,r)=>o._id||r,(o,r)=>D(o,r,e,t,a))}</${p("ui5-calendar",t,a)}>${e.showFooter?P():void 0}</${p("ui5-responsive-popover",t,a)}> `:l`<ui5-responsive-popover id="${i(e._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${i(e._shouldHideHeader)} @keydown="${e._onkeydown}" @ui5-after-close="${i(e.onResponsivePopoverAfterClose)}">${e.showHeader?w(e,t,a):void 0}<ui5-calendar id="${i(e._id)}-calendar" primary-calendar-type="${i(e._primaryCalendarType)}" secondary-calendar-type="${i(e.secondaryCalendarType)}" format-pattern="${i(e._formatPattern)}" timestamp="${i(e._calendarTimestamp)}" .selectionMode="${i(e._calendarSelectionMode)}" .minDate="${i(e.minDate)}" .maxDate="${i(e.maxDate)}" @ui5-selected-dates-change="${i(e.onSelectedDatesChange)}" @ui5-show-month-press="${i(e.onHeaderShowMonthPress)}" @ui5-show-year-press="${i(e.onHeaderShowYearPress)}" ?hide-week-numbers="${e.hideWeekNumbers}" ._currentPicker="${i(e._calendarCurrentPicker)}">${y(e._calendarSelectedDates,(o,r)=>o._id||r,(o,r)=>D(o,r,e,t,a))}</ui5-calendar>${e.showFooter?P():void 0}</ui5-responsive-popover> `,w=(e,t,a)=>a?l`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${i(e._headerTitleText)}</span><${p("ui5-button",t,a)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${e.closePicker}"></${p("ui5-button",t,a)}></div></div>`:l`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${i(e._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${e.closePicker}"></ui5-button></div></div>`,D=(e,t,a,o,r)=>r?l`<${p("ui5-date",o,r)} value="${i(e)}"></${p("ui5-date",o,r)}>`:l`<ui5-date value="${i(e)}"></ui5-date>`,P=(e,t,a)=>l``;v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>S);const we={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-inline-start:var(--_ui5_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5_input_icon_pressed_bg);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5_input_icon_hover_bg);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5_select_hover_icon_left_border);box-shadow:var(--_ui5_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal;height:var(--_ui5_input_height);border-radius:var(--_ui5_input_border_radius)}:host{min-width:calc(var(--_ui5_input_min_width) + var(--_ui5_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-datepicker_border_radius)}:host([value-state=Error]:not([readonly]):not([disabled])){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-datepicker-hover-background)}:host([readonly]){border-color:var(--_ui5_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5_input_readonly_background)}[slot=icon]{border-top-right-radius:var(--_ui5-datepicker_icon_border_radius);border-bottom-right-radius:var(--_ui5-datepicker_icon_border_radius)}"};v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>S);const De={packageName:"@ui5/webcomponents",fileName:"themes/DatePickerPopover.css.ts",content:"[ui5-calendar]{width:100%;display:flex;justify-content:center}[ui5-responsive-popover]::part(content){padding:0}"};var s=globalThis&&globalThis.__decorate||function(e,t,a,o){var r=arguments.length,u=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,a):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(e,t,a,o);else for(var h=e.length-1;h>=0;h--)(c=e[h])&&(u=(r<3?c(u):r>3?c(t,a,u):c(t,a))||u);return r>3&&u&&Object.defineProperty(t,a,u),u},m;let n=m=class extends M{onResponsivePopoverAfterClose(){var t;this._isPickerOpen=!1,g()?this.blur():(t=this._getInput())==null||t.focus()}onBeforeRendering(){this.FormSupport=O("FormSupport"),["minDate","maxDate"].forEach(t=>{const a=this[t];this.isValid(a)||console.warn(`Invalid value for property "${t}": ${a} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const t=this.dateValueUTC.getTime();return ce(t)}return B(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(t){j(t)&&(t.preventDefault(),this.isOpen()?W(t)||this._toggleAndFocusInput():this._toggleAndFocusInput()),this._getInput().isEqualNode(t.target)&&this.isOpen()&&(G(t)||Y(t)||J(t)||K(t))&&this.closePicker(),!this.isOpen()&&(Q(t)?this.FormSupport&&this.FormSupport.triggerFormSubmit(this):X(t)?(t.preventDefault(),this._modifyDateValue(1,"year")):Z(t)?(t.preventDefault(),this._modifyDateValue(1,"month")):x(t)?(t.preventDefault(),this._modifyDateValue(1,"day")):ee(t)?(t.preventDefault(),this._modifyDateValue(-1,"year")):te(t)?(t.preventDefault(),this._modifyDateValue(-1,"month")):ie(t)&&(t.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(t,a){if(!this.dateValue)return;const o=R(L.fromLocalJSDate(this.dateValue),t,a,this._minDate,this._maxDate),r=this.formatValue(o.toUTCJSDate());this._updateValueAndFireEvents(r,!0,["change","value-changed"])}_updateValueAndFireEvents(t,a,o,r=!0){const u=this._checkValueValidity(t);u&&a&&(t=this.normalizeValue(t));let c=!0;this.liveValue=t,o.forEach(h=>{this.fireEvent(h,{value:t,valid:u},!0)||(c=!1)}),c&&r&&(this._getInput().value=t,this.value=t,this._updateValueState())}_updateValueState(){const t=this._checkValueValidity(this.value);t?t&&this.valueState===_.Error&&(this.valueState=_.None):this.valueState=_.Error}_toggleAndFocusInput(){this.togglePicker(),this._getInput().focus()}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(t){this._updateValueAndFireEvents(t.target.value,!0,["change","value-changed"])}_onInputInput(t){this._updateValueAndFireEvents(t.target.value,!1,["input"],!1)}_checkValueValidity(t){return t===""?!0:this.isValid(t)&&this.isInValidRange(t)}_click(t){g()&&(this.responsivePopover.showAt(this),t.preventDefault())}isValid(t=""){return t===""?!0:!!this.getFormat().parse(t,void 0,void 0)}isInValidRange(t=""){if(t==="")return!0;const a=this._getCalendarDateFromString(t);return!a||!this._minDate||!this._maxDate?!1:a.valueOf()>=this._minDate.valueOf()&&a.valueOf()<=this._maxDate.valueOf()}normalizeValue(t){return t===""?t:this.getFormat().format(this.getFormat().parse(t,!0,void 0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return m.i18nBundle.getText(A)}get phone(){return g()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:oe.Grid,ariaAutoComplete:"none",ariaRequired:this.required,ariaLabel:U(this)}}get openIconTitle(){return m.i18nBundle.getText(E)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return m.i18nBundle.getText(H)}get _shouldHideHeader(){return!1}get _ariaHidden(){return ae()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}onSelectedDatesChange(t){t.preventDefault();const a=t.detail.values&&t.detail.values[0];this._updateValueAndFireEvents(a,!0,["change","value-changed"]),this.closePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(t){return this.getFormat().format(t)}closePicker(){this.responsivePopover.close()}async openPicker(){this._isPickerOpen=!0,this._calendarCurrentPicker="day",this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this)}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue,void 0,void 0):this.getFormat().parse(this.value,void 0,void 0)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0,void 0):this.getFormat().parse(this.value,void 0,void 0)}get styles(){return{main:{width:"100%"}}}get type(){return le.Text}};s([d()],n.prototype,"value",void 0);s([d({type:_,defaultValue:_.None})],n.prototype,"valueState",void 0);s([d({type:Boolean})],n.prototype,"required",void 0);s([d({type:Boolean})],n.prototype,"disabled",void 0);s([d({type:Boolean})],n.prototype,"readonly",void 0);s([d({defaultValue:void 0})],n.prototype,"placeholder",void 0);s([d()],n.prototype,"name",void 0);s([d({type:Boolean})],n.prototype,"hideWeekNumbers",void 0);s([d()],n.prototype,"accessibleName",void 0);s([d({defaultValue:""})],n.prototype,"accessibleNameRef",void 0);s([d({type:Boolean,noAttribute:!0})],n.prototype,"_isPickerOpen",void 0);s([d({type:Object})],n.prototype,"_respPopoverConfig",void 0);s([d({defaultValue:"day"})],n.prototype,"_calendarCurrentPicker",void 0);s([I({type:HTMLElement})],n.prototype,"valueStateMessage",void 0);s([I({type:HTMLElement})],n.prototype,"formSupport",void 0);n=m=s([C({tag:"ui5-date-picker",languageAware:!0,template:$e,staticAreaTemplate:ke,styles:we,staticAreaStyles:[ue,De],dependencies:[ne,de,N,z,pe,se]}),f("change",{detail:{value:{type:String},valid:{type:Boolean}}}),f("input",{detail:{value:{type:String},valid:{type:Boolean}}})],n);n.define();const ft=n;export{ft as default};
//# sourceMappingURL=DatePicker-60b68213.js.map

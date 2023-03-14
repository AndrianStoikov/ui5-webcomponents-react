import{j as t,a as p,F as m}from"./jsx-runtime-670450c2.js";import{C as h,A as l}from"./DomRefTable.module-4d7c4a87.js";import{D as d}from"./DocsHeader-5229e6ea.js";import{F as c}from"./Footer-a2b07dda.js";import"./index-f1f749bf.js";import{M as u,C as g,a as n}from"./index-1fa72f09.js";import{C as f,D as s,W as b}from"./Wizard.stories-38c5cfa6.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-c9aa9957.js";import"./iframe-ffcb41c0.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-cef21224.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-fcd1168c.js";import"./TableOfContent-6eb70e6c.js";import"./index-5812fb0e.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-8497b04c.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-3ac17166.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-d5243cf0.js";import"./index-26dfb821.js";import"./CheckBox-90578acd.js";import"./ValueState-2c5e5904.js";import"./accept-a98baca8.js";import"./ValueState-ab6838cc.js";import"./index-80b1f30f.js";import"./Input-c5beeaee.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./index-0484e0e1.js";import"./Title-b986a4bd.js";import"./languageAware-b2dd96bd.js";import"./fastNavigation-8b41cdda.js";import"./ItemNavigation-18222ac6.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./i18n-defaults-0a7ef706.js";import"./parameters-bundle.css-6b4a2ffb.js";const v=`## Structure

### Navigation area

The top most area of the \`Wizard\` is occupied by the navigation area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.

- Steps can have different visual representations - numbers or icons.
- Steps might have labels for better readability - titleText and subTitleText.
- Steps are defined by using the \`Wizard-step\` as slotted element within the \`Wizard\`.

**Note:** If no selected step is defined, the first step will be auto selected.  
**Note:** If multiple selected steps are defined, the last step will be selected.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Wizard\` exposes the following CSS Shadow Parts:

- navigator - Used to style the progress navigator of the \`Wizard\`.
- step-content - Used to style a \`Wizard-step\` container.

## Keyboard Handling

The user can navigate using the following keyboard shortcuts:

### Wizard Progress Navigation

- \\[LEFT\\], \\[DOWN\\] - Focus moves backward to the WizardProgressNavAnchors.
- \\[UP\\], \\[RIGHT\\] - Focus moves forward to the WizardProgressNavAnchor.
- \\[SPACE\\] or \\[ENTER\\], \\[RETURN\\] - Selects an active step
- \\[HOME\\] or \\[PAGE UP\\] - Focus goes to the first step
- \\[END\\] or \\[PAGE DOWN\\] - Focus goes to the last step

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

### Content

The content occupies the main part of the page. It can hold any type of HTML elements. It's defined by using the \`Wizard-step\` as slotted element within the \`Wizard\`.

## Scrolling

The component handles user scrolling by selecting the closest step, based on the current scroll position and scrolls to particular place, when the user clicks on the step within the navigation area.

**Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height. The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.

**For example:**

\` <Dialog style="height: 80%">   \`\`<Wizard></Wizard>   \`\`</Dialog> \`

### Moving to next step

The \`Wizard-step\` provides the necessary API and it's up to the user of the component to use it to move to the next step. You have to set its \`selected\` property (and remove the \`disabled\` one if set) to \`true\`. The \`Wizard\` will automatically scroll to the content of the newly selected step.

The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button, or any other type of element to trigger step change, inside the \`Wizard-step\`, and show/hide it when certain fields are filled or user defined criteria is met.

## Usage

### When to use:

When the user has to accomplish a long or unfamiliar task.

### When not to use:

When the task has less than 3 steps.

## Responsive Behavior

On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap. Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.
`,W="A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.\n### Structure\n\n*   Each wizard step has arbitrary content.\n*   Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n*   Each wizard step might have an icon - defined by the `icon` property.\n*   Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\n\nThe `WizardStep` component should be used only as slot of the `Wizard` component and should not be used standalone";function re(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?t(i,Object.assign({},e,{children:t(r,{})})):r();function r(){const o=Object.assign({h2:"h2"},a(),e.components);return p(m,{children:[t(u,{of:f}),`
`,t(d,{since:"0.12.0"}),`
`,t(o.h2,{children:"Example"}),`
`,t(g,{of:s}),`
`,t(o.h2,{children:"Properties"}),`
`,t(h,{of:s}),`
`,t(n,{children:v}),`
`,t(n,{children:w}),`
`,t(o.h2,{children:"WizardStep"}),`
`,t(n,{children:W}),`
`,t(l,{of:b}),`
`,t(c,{})]})}}export{re as default};
//# sourceMappingURL=Wizard-3690eac2.js.map

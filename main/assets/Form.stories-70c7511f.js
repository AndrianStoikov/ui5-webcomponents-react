import{j as e}from"./jsx-runtime-ccada58e.js";import{b as u,c as y,a as t,F as a}from"./index-84d9289c.js";import{T as p}from"./index-334d9c45.js";import{T as I}from"./index-78005d31.js";import{I as r}from"./index-9179aa22.js";import{I as o}from"./Input-0fde181d.js";import{L as i}from"./index-c72a96e6.js";import{S as h}from"./index-900dd2dc.js";import{O as m}from"./index-256edf1a.js";import{C as n}from"./index-f6400c4b.js";import{L as s}from"./index-10c2675e.js";const F={title:"Layouts & Floorplans / Form",component:u,argTypes:{children:{control:{disable:!0}}},args:{backgroundDesign:y.Transparent,titleText:"Test Form",labelSpanS:12,labelSpanM:2,labelSpanL:4,labelSpanXL:4,columnsS:1,columnsM:1,columnsL:1,columnsXL:2,style:{alignItems:"center"}}},l={render:b=>e.jsxs(u,{...b,children:[e.jsx(t,{label:"Sole Form Item",children:e.jsx(r,{type:o.Text})}),e.jsxs(a,{titleText:"Personal Data",children:[e.jsx(t,{label:"Name",children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:e.jsx(i,{children:"Address"}),children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:"Country",children:e.jsxs(h,{children:[e.jsx(m,{children:"Germany"}),e.jsx(m,{children:"France"}),e.jsx(m,{children:"Italy"})]})}),e.jsx(t,{style:{alignSelf:"start"},label:e.jsx(i,{style:{alignSelf:"start",paddingTop:"0.25rem"},children:"Additional Comment"}),children:e.jsx(I,{rows:5,style:{width:"210px","--_ui5_textarea_margin":0},placeholder:"The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"})}),e.jsx(t,{label:"Home address",children:e.jsx(n,{checked:!0})})]}),e.jsxs(a,{titleText:"Company Data",children:[e.jsx(t,{label:"Company Name",children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:"Company Address",children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:"Company City",children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:"Company Country",children:e.jsx(r,{type:o.Text})}),e.jsx(t,{label:"Number of Employees",children:e.jsx(r,{type:o.Number,value:"5000",disabled:!0})}),e.jsx(t,{label:"Member of Partner Network",children:e.jsx(n,{checked:!0})})]}),e.jsxs(a,{titleText:"Marketing Data",children:[e.jsx(t,{label:"Email",children:e.jsx(r,{type:o.Email})}),e.jsx(t,{label:"Company Email",children:e.jsx(r,{type:o.Email})}),e.jsx(t,{label:"I want to receive the newsletter",children:e.jsx(n,{})})]}),e.jsxs(a,{titleText:"Contact",children:[e.jsx(t,{label:"Website",children:e.jsx(s,{href:"https://sap.github.io/ui5-webcomponents-react",children:"https://sap.github.io/ui5-webcomponents-react"})}),e.jsx(t,{label:"Email",children:e.jsx(s,{children:"some.one@sap.com"})}),e.jsx(t,{label:"Slack",children:e.jsx(s,{href:"https://openui5.slack.com/archives/CSQEJ2J04",children:"#webcomponents-react"})}),e.jsx(t,{label:"Company",children:e.jsx(p,{children:"SAP"})}),e.jsx(t,{label:"Company Headquarter",children:e.jsx(p,{children:"Walldorf, Germany"})})]})]})};var c,x,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => {
    return <Form {...props}>
        <FormItem label="Sole Form Item">
          <Input type={InputType.Text} />
        </FormItem>
        <FormGroup titleText="Personal Data">
          <FormItem label="Name">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Country">
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem style={{
          alignSelf: 'start'
        }} label={<Label style={{
          alignSelf: 'start',
          paddingTop: '0.25rem'
        }}>Additional Comment</Label>}>
            <TextArea rows={5} style={{
            width: '210px',
            '--_ui5_textarea_margin': 0
          }} placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'" />
          </FormItem>
          <FormItem label="Home address">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Company Data">
          <FormItem label={'Company Name'}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Address">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company City">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Country">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Number of Employees">
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem label="Member of Partner Network">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Marketing Data">
          <FormItem label="Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="Company Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="I want to receive the newsletter">
            <CheckBox />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Website">
            <Link href={'https://sap.github.io/ui5-webcomponents-react'}>
              https://sap.github.io/ui5-webcomponents-react
            </Link>
          </FormItem>
          <FormItem label="Email">
            <Link>some.one@sap.com</Link>
          </FormItem>
          <FormItem label="Slack">
            <Link href={'https://openui5.slack.com/archives/CSQEJ2J04'}>#webcomponents-react</Link>
          </FormItem>
          <FormItem label="Company">
            <Text>SAP</Text>
          </FormItem>
          <FormItem label="Company Headquarter">
            <Text>Walldorf, Germany</Text>
          </FormItem>
        </FormGroup>
      </Form>;
  }
}`,...(d=(x=l.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};const T=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{_ as C,l as D};
//# sourceMappingURL=Form.stories-70c7511f.js.map

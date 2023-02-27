import{j as e,a as d,F as I}from"./jsx-runtime-670450c2.js";import{s as O}from"./settings-259db384.js";import{r as s}from"./index-f1f749bf.js";import{r as L}from"./index-96c5f47c.js";import{D as B}from"./index-137a7987.js";import{B as i}from"./index-b9add0da.js";import{B as c}from"./index-acd4739e.js";import{B as S}from"./Bar-b4a14d85.js";import{I as x}from"./index-2f3e6d4c.js";import{T}from"./index-2503f8df.js";import{L as k}from"./index-aa70f770.js";import{S as l}from"./index-311b0f02.js";const b={title:"Modals & Popovers / Dialog",component:B,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1}},p=s.forwardRef((n,o)=>L.createPortal(e(B,{...n,ref:o}),document.body));p.displayName="Dialog";const a={render:n=>{const[o,t]=s.useState(n.open);return s.useEffect(()=>{t(n.open)},[n.open]),d(I,{children:[e(i,{onClick:()=>{t(!0)},children:"Open Dialog"}),e(p,{...n,open:o,onAfterClose:m=>{n.onAfterClose(m),t(!1)},footer:e(c,{design:S.Footer,endContent:e(i,{onClick:()=>{t(!1)},children:"Close"})})})]})}},r={render:n=>{const[o,t]=s.useState(!1);return d(I,{children:[e(i,{onClick:()=>{t(!0)},children:"Open Dialog"}),e(p,{...n,open:o,header:e(c,{endContent:e(x,{name:O}),children:e(T,{children:"Dialog"})}),footer:e(c,{endContent:e(i,{onClick:()=>{t(!1)},children:"Close"})}),children:d(k,{children:[e(l,{additionalText:"3",children:"List Item 1"}),e(l,{additionalText:"2",children:"List Item 2"}),e(l,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(isChromatic || args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setDialogOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog {...args} open={dialogOpen} onAfterClose={e => {
        args.onAfterClose(e);
        setDialogOpen(false);
      }} footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,D,h;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const onButtonClick = () => {
      setDialogIsOpen(true);
    };
    const handleClose = () => {
      setDialogIsOpen(false);
    };
    return <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <Dialog {...args} open={dialogIsOpen} header={<Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
          <List>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Dialog>
      </>;
  }
}`,...(h=(D=r.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const E=["Default","WithContent"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithContent:r,__namedExportsOrder:E,default:b},Symbol.toStringTag,{value:"Module"}));export{R as C,a as D,r as W};
//# sourceMappingURL=Dialog.stories-10e3047d.js.map

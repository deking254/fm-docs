(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6284:function(e,t,i){Promise.resolve().then(i.bind(i,883))},883:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return O}});var r=i(7437),s=i(2265),n=i(3987),l=i(5368),a=i(3644),o=i(2864),d=i(3041),c=i(2718),h=i(962);let u=h.fC,f=h.wy;h.Fw;let p=[{title:"About project",url:"https://linkedin.com/in/dennis-ngetich",icon:l.Z,scroll:"about"},{title:"Setting up",url:"#",icon:a.Z,scroll:"settingup"},{title:"Features",url:"#",icon:o.Z,subs:[{title:"Login",route:"/users"},{title:"Register",route:"/files"},{title:"File manager",route:"/files"}],scroll:"features"},{title:"API Reference",url:"ty",icon:d.Z,subs:[{title:"Get users",route:"/users"},{title:"Get files",route:"/files"}],scroll:"apireference"},{title:"Contact us",url:"#",icon:c.Z,scroll:"contact"}];var g=e=>{let{onScrollTo:t}=e;return(0,r.jsx)(n.Sidebar,{children:(0,r.jsx)(n.SidebarContent,{children:(0,r.jsxs)(n.SidebarGroup,{children:[(0,r.jsx)(n.SidebarGroupLabel,{children:"File-Ferry"}),(0,r.jsx)(n.SidebarGroupContent,{children:(0,r.jsx)(n.SidebarMenu,{children:p.map(e=>(0,r.jsx)(u,{defaultOpen:!0,className:"group/collapsible",children:(0,r.jsx)(n.SidebarGroup,{children:(0,r.jsx)(n.SidebarGroupLabel,{asChild:!0,children:(0,r.jsx)(f,{children:(0,r.jsx)(n.SidebarMenuItem,{children:(0,r.jsx)(n.SidebarMenuButton,{asChild:!0,children:(0,r.jsxs)("a",{href:e.url,onClick:i=>{i.preventDefault(),t(e.scroll)},children:[(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{children:e.title})]})})},e.title)})})})}))})})]})})})};function m(){return(0,r.jsxs)("div",{className:"space-y-2 m-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"About File-Ferry"}),(0,r.jsx)("h3",{children:"File-Ferry is a powerful web-based file management tool designed to streamline and enhance the way you manage your files on the server where the website is hosted. With its user-friendly interface and robust features, File-Ferry provides an efficient solution for individuals and organizations alike, ensuring that your file management tasks are as seamless and intuitive as possible."})]})}let b=["1. You should have node installed. Preferrably version 18+","2. You should also install mongodb server version 7+"],x=["1. Clone the project to your machine","2. Use npm install to add all the projects dependancies","3. Start the mongodb server/service","4. Enter npm run start","5. If everything goes well, you should be able to access the website at localhost:5000"];function A(){return(0,r.jsxs)("div",{className:"space-y-2 m-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Setting up"}),(0,r.jsx)("h2",{className:"font-bold",children:"Requirements"}),b.map(e=>(0,r.jsx)("ul",{children:e})),(0,r.jsx)("h2",{className:"font-bold",children:"Instructions"}),x.map(e=>(0,r.jsx)("ul",{children:e}))]})}var j={src:"/fm-docs/_next/static/media/login.6a1fa0e6.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAXUlEQVR42i2MQQqAUBBCdYgfQW0iqvufqBZdpGX/z0xCiYIPRJ7HNa+7MUg2pxEJGLMbp2FbxlorKSETkBLWmruHHEGyfF1kSAdohufBfTsJodJFpEDzUrzvNf0PXx1hM8lECcFWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},v={src:"/fm-docs/_next/static/media/create_file_folder.8aae0fc5.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAXElEQVR42iXJMQoCQRAF0fq9kwhrIqLe/0QaeBAzYbr7O6xFZU+v5/tye4iKiCxCMgQe+/l0v+5zzgWSupuVGZlV1WtbY4yq5ChwSaCQv+RHqz90GyRstuzNwEE//C0q3RByy6wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},w=i(3145);let y=[{title:"Registration",description:"The website provides a sign up page where you are only required to provide an email and a password.",screenshot:{src:"/fm-docs/_next/static/media/register.b7fba87b.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAX0lEQVR42kWJOQ6AIBRE//1Pp4ULMdqoaMJSwF+ASiUxvMwUMw/6bti1Oy+jb7uf7tCuTgvrupWSiZCZWohAqUVEQgjMnHOJP6DmWSQhBu/FmIz4nl9hGqeUUmwgVvkAFdtv3ylsv6AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},{title:"Login",description:"Using the credentials created during signup, you can then login through the login page. You must provide the right email and password combination to be allowed into the system.",screenshot:j},{title:"File-management",description:"After successfully logging in, you will be redirected to the file-management homepage. Here you have a range of capabilites like creating, reading, updating or deleting a file/folder.",screenshot:j},{title:"Creating file/folder",description:"You can only create a file/folder upon registering and logging in to your account. You can access this feature by clicking on the add button at the top of the file/folder list in the file-manager homepage. A form will be displayed with a bunch of input fields like name of file/folder, whether the creation is public or not.",screenshot:v},{title:"Updating a file/folder",description:"You can rename a file/folder by hovering the mouse over it and clicking the vertical ellipsis the pop up. You can also change other actions like the updating of visibility.",screenshot:v},{title:"Deleting file/folder",description:"You can achieve this by clicking the vertical ellipsis on the item. A pop-up dialog will come up asking if you are sure you want to delete the item and you can click yes.",screenshot:v}];function C(){return(0,r.jsxs)("div",{className:"space-y-2 m-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Features"}),y.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"font-bold",children:e.title}),(0,r.jsx)("h2",{children:e.description})]}),(0,r.jsx)(w.default,{alt:"register",width:900,height:600,src:e.screenshot})]}))]})}let N=[{title:"users",description:"The endpoint /users accepts POST requests to enable a user to register to the plaform. It requires data with the fields email and password. Upon the request being a success, the api should return a json with an id and the email"},{title:"connect",description:"The endpoint /connect accepts GET requests to enable a registered user to login to the plaform. It requires an authorization header which is a basic encryption of the email and the password provided by the user. If the credentials can be verified by the server to be true, a json response will be sent back to the client. This response will be a token field that will be saved in the browser's session storage. Otherwise, the server will respond with a 401 status code with the message unauthorized."},{title:"files",description:"The files endpoint accepts both POST and GET requests to enable an authorized user to perform CRUD operations on the files. This endpoint requires an X-Token header with the token saved in the session storage during login. If the request is a GET the list of file/folders belonging to the user is returned. If it is a POST request, the then data in json format will need to be included as part of the request. Depending on the information in the json data. The server will create a file or a folder."}];function R(){return(0,r.jsxs)("div",{className:"space-y-2 m-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"API Reference"}),N.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"font-bold",children:e.title}),(0,r.jsx)("h3",{children:e.description})]}))]})}var S=i(4508);let k=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,S.cn)("rounded-xl border bg-card text-card-foreground shadow",i),...s})});k.displayName="Card";let F=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,S.cn)("flex flex-col space-y-1.5 p-6",i),...s})});F.displayName="CardHeader";let I=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("h3",{ref:t,className:(0,S.cn)("font-semibold leading-none tracking-tight",i),...s})});I.displayName="CardTitle";let U=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("p",{ref:t,className:(0,S.cn)("text-sm text-muted-foreground",i),...s})});U.displayName="CardDescription";let E=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,S.cn)("p-6 pt-0",i),...s})});E.displayName="CardContent";let q=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,S.cn)("flex items-center p-6 pt-0",i),...s})});q.displayName="CardFooter";var T=i(5186);let G=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)("textarea",{className:(0,S.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",i),ref:t,...s})});G.displayName="Textarea";var z=i(2869);function V(){return(0,r.jsxs)(k,{children:[(0,r.jsxs)(F,{children:[(0,r.jsx)(I,{children:"Reach out"}),(0,r.jsx)(U,{children:"For any questions, suggestions or feedback regarding the platform"})]}),(0,r.jsx)(E,{children:(0,r.jsx)(T.I,{type:"email",placeholder:"Email"})}),(0,r.jsx)(E,{children:(0,r.jsx)(G,{placeholder:"Type your message here."})}),(0,r.jsx)(q,{children:(0,r.jsx)(z.z,{children:"Submit"})})]})}function O(){let e=(0,s.useRef)(null),t=(0,s.useRef)(null),i=(0,s.useRef)(null),l=(0,s.useRef)(null),a=(0,s.useRef)(null);return(0,r.jsxs)(n.SidebarProvider,{children:[(0,r.jsx)(g,{onScrollTo:r=>{var s,n,o,d,c;switch(r){case"about":null===(s=e.current)||void 0===s||s.scrollIntoView({behavior:"smooth"});break;case"settingup":null===(n=t.current)||void 0===n||n.scrollIntoView({behavior:"smooth"});break;case"features":null===(o=i.current)||void 0===o||o.scrollIntoView({behavior:"smooth"});break;case"apireference":null===(d=l.current)||void 0===d||d.scrollIntoView({behavior:"smooth"});break;case"contact":null===(c=a.current)||void 0===c||c.scrollIntoView({behavior:"smooth"})}}}),(0,r.jsx)(n.SidebarTrigger,{}),(0,r.jsxs)("main",{className:"w-full m-4 h-full pt-20 overflow-y-auto",children:[(0,r.jsx)("div",{ref:e,id:"about",children:(0,r.jsx)(m,{})}),(0,r.jsx)("div",{ref:t,id:"setup",children:(0,r.jsx)(A,{})}),(0,r.jsx)("div",{ref:i,id:"features",children:(0,r.jsx)(C,{})}),(0,r.jsx)("div",{ref:l,id:"apireference",children:(0,r.jsx)(R,{})}),(0,r.jsx)("div",{ref:a,id:"contact"}),(0,r.jsx)(V,{})]})]})}}},function(e){e.O(0,[310,493,472,987,971,117,744],function(){return e(e.s=6284)}),_N_E=e.O()}]);
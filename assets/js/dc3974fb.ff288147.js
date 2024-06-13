"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[397],{3143:(e,a,n)=>{n.r(a),n.d(a,{default:()=>b});var i=n(6540),t=n(8774),o=n(9370),s=n(2379),r=n(2664);const l=JSON.parse('[{"id":"1","role":"Mechanical","questions":[{"name":"hopeToLearn","question":"What do you hope to learn by joining Electrium Mobility as a mechanical team member?"},{"name":"wouldYouRather","question":"If you had to pick, would you rather design a flamethrower or a grenade launcher (NOTE: This is not a serious question, and you will not be designing such things officially through the team).","type":"radio","options":["Flamethrower","Grenade Launcher"]}]},{"id":"2","role":"Firmware","questions":[{"name":"hopeToLearn","question":"What do you hope to learn by joining Electrium Mobility as a firmware team member?"},{"name":"whyCrossRoad","question":"Why did the programmer cross the road?"}]},{"id":"3","role":"Electrical","questions":[{"name":"hopeToLearn","question":"What do you hope to learn by joining Electrium Mobility as an electrical team member?"},{"name":"fixWiring","question":"What\'s the best way to fix spaghetti wiring in an electronic system?","type":"radio","options":["Cable ties.","Energy chain.","Eat it. I love spaghetti.","Go wireless.","Leave it alone. I can decipher spaghetti wiring in my sleep."]}]},{"id":"4","role":"Web Development","questions":[{"name":"hopeToLearn","question":"What do you hope to learn by joining Electrium Mobility as a web development team member?"},{"name":"worstWebsite","question":"What is the URL of the worst designed website you\'ve ever seen?","caption":"<>Please keep your selection PG.</>"}]},{"id":"6","role":"Management","questions":[{"name":"hopeToLearn","question":"What do you hope to learn by joining Electrium Mobility as a management team member?"},{"name":"worstCourse","question":"What is the worst course you\'ve taken at UW?","caption":"<>There is a correct answer by the way.</>"}]},{"id":"7","role":"Marketing","questions":[{"name":"fieldsInterestedMarketing","question":"What fields are you interested in","type":"radioTable","caption":"<>1: Most interested in<br/>5: Not interested in</>","rowOptions":["Graphic design","Photography/ videography","Photo/ video editing","Communicate with followers","3D modeling"],"columnOptions":["1","2","3","4","5"]},{"name":"softwareExp","question":"What software do you have experience with?","type":"checkbox","options":["Figma","Canva","Photoshop","Adobe Illustrator","Other"]},{"name":"relatedExperience","question":"Highlight of related experience","caption":"Please use point form"},{"name":"relatedSoftSkills","question":"Highlight of related soft skills","caption":"Please use point form"},{"name":"resume","question":"Resume/ Portfolio/ Past projects","type":"upload"},{"name":"designPost","question":"Design an \\"introduce the members\\" IG post for yourself","caption":"<>Please research on, and follow our design standards. Feel free to blur your face and add watermarks</>","type":"upload"},{"name":"discordEmoji","question":"Which discord emoji has the largest water droplet?","caption":"<>Please answer in format of :emoji_name:<br/>Example: :sweat_smile:<br/>You can find a sample of water droplet on the top right corner of the emoji shown</>","image":"https://lh4.googleusercontent.com/G26m7rZ_QIl8OS6M_yRoNPNHW5gIpyfjWvtq68xwsrSJwddef0J5ctjED240c7zHoykM5cXyR8UiNSxg7uMxnz9h6YCWLpZnuCNXvW0eKDQ-BB0yVHQweizSSMsk4ckXrA=w72"}]},{"id":"8","role":"Finance","questions":[{"name":"fieldsInterestedMarketing","question":"What fields are you interested in","type":"radioTable","caption":"<>1: Most interested in<br/>5: Not interested in</>","rowOptions":["Outreach to sponsors","Present to endowment funds","Draft endowment fund proposals/ slides","Set budget/ handle reimbursements","Plan/ execute fundraisers"],"columnOptions":["1","2","3","4","5"]},{"name":"relatedExperience","question":"Highlight of related experience","caption":"Please use point form"},{"name":"relatedSoftSkills","question":"Highlight of related soft skills","caption":"Please use point form"},{"name":"resume","question":"Resume","type":"upload"},{"name":"sponsorEmail","question":"Draft an email that you will use to reach out to a sponsor you have selected on behalf of Electrium Mobility"},{"name":"otherRole","question":"Would you like to apply to another role? If so, which one?","caption":"<>If you are not accepted for the finance team, you can still join the team under another role.</>","type":"radio","options":["Mechanical","Firmware","Electrical","Web Development","Management","Marketing","None"]}]}]');var c=n(4848);const m=["Accounting and Financial Management","Actuarial Science","Anthropology","Applied Mathematics","Architectural Engineering","Architecture","Bachelor of Arts","Bachelor of Science","Biochemistry","Biological and Medical Physics","Biology","Biomedical Engineering","Biomedical Sciences","Biostatistics","Biotechnology/Chartered Professional Accountancy","Chemical Engineering","Chemistry","Civil Engineering","Classical Studies","Climate and Environmental Change","Combinatorics and Optimization","Communication Studies","Computational Mathematics","Computer Engineering","Computer Science","Computer Science/Business Administration","Computing and Financial Management","Data Science","Earth Sciences","Economics","Education","Electrical Engineering","English","Environment and Business","Environment, Resources and Sustainability","Environmental Engineering","Environmental Sciences","Fine Arts","French","Gender and Social Justice","Geography and Aviation","Geography and Environmental Management","Geological Engineering","Geomatics","German","Global Business and Digital Arts","Health Sciences","History","Honours Arts","Honours Arts and Business","Honours Science","Information Technology Management","Kinesiology","Knowledge Integration","Legal Studies","Liberal Studies","Life Sciences","Management Engineering","Materials and Nanosciences","Mathematical Economics","Mathematical Finance","Mathematical Optimization","Mathematical Physics","Mathematics","Mathematics/Business Administration","Mathematics/Chartered Professional Accountancy","Mathematics/Financial Analysis and Risk Management","Mathematics/Teaching","Mechanical Engineering","Mechatronics Engineering","Medicinal Chemistry","Medieval Studies","Music","Nanotechnology Engineering","Nursing","Optometry","Peace and Conflict Studies","Pharmacy","Philosophy","Physics","Planning","Political Science","Psychology","Public Health","Pure Mathematics","Recreation and Leisure Studies","Religious Studies","Science and Business","Science and Aviation","Sexuality, Marriage, and Family Studies","Social Development Studies","Social Work","Software Engineering","Sociology","Spanish","Speech Communication","Statistics","Sustainability and Financial Management","Theatre and Performance","Theological Studies","Therapeutic Recreation","Urban Planning"],d=["From a friend/word of mouth","Social Media (LinkedIn, Instagram, etc.)","Event (i.e. Fall Open House)","Posters Around Campus","Online (UW Imprint, UW Website, etc.)","Discord","Other"],u=["Mechanical","Firmware","Electrical","Web Development","Management","Marketing","Finance"],h=["Electric Skateboard (4-month)","Electric Skateboard #2 (4-month)","OneWheel (4-month)","Carbon Fibre Skateboard (8-month)","Repair Team","Other"],p=["1A","1B","2A","2B","3A","3B","4A","4B"],g=JSON.parse(JSON.stringify(l)),b=()=>{const[e,a]=(0,i.useState)([]),[n,l]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=g.find((e=>e.role===n));if(e){const n=e.questions.map((a=>({id:e.id,role:e.role,questions:[{name:a.name,question:a.question,type:a.type||"",options:a.options||[]}]})));a(n)}}),[n]);const b={firstName:!0,lastName:!0,program:!0,term:!0,uwaterlooEmail:!0,personalEmail:!1,discordUsername:!0,isReturningMember:!0,inPerson:!0,interests:!1,heardSource:!0,roleQuestions:!0,friendReferal:!1,comments:!1},y=r.Ik().shape({firstName:r.Yj().required("First Name is required"),lastName:r.Yj().required("Last Name is required"),program:r.Yj().required("Program is required"),term:r.Yj().required("Term is required"),uwaterlooEmail:r.Yj().email("Invalid email").required("UWaterloo Email is required"),personalEmail:r.Yj().email("Invalid email").required("Personal Email is required"),discordUsername:r.Yj().required("Discord Username is required"),isReturningMember:r.Yj().required("Please select an option"),inPerson:r.Yj().required("Please select an option"),interests:r.Yj().optional(),heardSource:r.Yj().required("Please select an option"),roleQuestions:r.Yj().required("Please select an option"),friendReferal:r.Yj().optional(),comments:r.Yj().optional()}),x=e=>{let{name:a,label:n,caption:i=(0,c.jsx)(c.Fragment,{}),type:t="text",placeholder:o=""}=e;return(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("label",{htmlFor:a,className:"font-semibold",children:[n," ",b[a]&&(0,c.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,c.jsx)("label",{htmlFor:a,className:"text-gray-500 text-sm",children:i}),(0,c.jsx)(s.D0,{name:a,type:t,className:"form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700",placeholder:o})]})},f=e=>{let{name:a,label:n,caption:i=(0,c.jsx)(c.Fragment,{}),options:t=[],value:o=""}=e;return(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("label",{htmlFor:a,className:"font-semibold",children:[n," ",b[a]&&(0,c.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,c.jsx)("label",{htmlFor:a,className:"text-gray-500 text-sm",children:i}),(0,c.jsx)("div",{className:"p-4 bg-grey border-2 border-gray-300 rounded-md",children:t.map((e=>(0,c.jsxs)("label",{className:"flex items-center",children:[(0,c.jsx)(s.D0,{type:"radio",name:a,value:e,className:"form-radio text-green-600 border-green-600 rounded-md"}),(0,c.jsx)("span",{className:"ml-2",children:e})]},e)))})]})},j=e=>{let{name:a,label:n,caption:i=(0,c.jsx)(c.Fragment,{}),options:t=[]}=e;return(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("label",{htmlFor:a,className:"font-semibold",children:[n," ",b[a]&&(0,c.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,c.jsx)("label",{htmlFor:a,className:"text-gray-500 text-sm",children:i}),(0,c.jsxs)(s.D0,{as:"select",name:a,className:"form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700",children:[(0,c.jsx)("option",{value:"",children:"-Select option-"}),t.map((e=>(0,c.jsx)("option",{value:e,children:e},e)))]})]})},q=e=>{let{name:a,label:n,caption:i=(0,c.jsx)(c.Fragment,{}),options:t=[]}=e;return(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("label",{htmlFor:a,className:"font-semibold",children:[n," ",b[a]&&(0,c.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,c.jsx)("label",{htmlFor:a,className:"text-gray-500 text-sm",children:i}),(0,c.jsx)("div",{className:"p-4 bg-grey border-2 border-gray-300 rounded-md",children:t.map((e=>(0,c.jsxs)("label",{className:"block",children:[(0,c.jsx)(s.D0,{type:"checkbox",name:a,value:e,className:"form-checkbox text-charcoal-600 border border-charcoal-300 rounded-md focus:outline-none focus:ring-green-700 focus:border-green-700"}),e]},e)))})]})},N=a=>{let{name:i,label:t,caption:o=(0,c.jsx)(c.Fragment,{}),options:s=[]}=a;return(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[(0,c.jsxs)("label",{htmlFor:i,className:"font-semibold",children:[t," ",b[i]&&(0,c.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,c.jsx)("label",{htmlFor:i,className:"text-gray-500 text-sm",children:o}),(0,c.jsx)("select",{id:i,name:i,value:n,onChange:e=>l(e.target.value),className:"form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700",children:g.map((e=>(0,c.jsx)("option",{value:e.role,children:e.role},e.id)))})]}),e.map(((e,a)=>(0,c.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[""===e.questions[0].type&&(0,c.jsx)(x,{name:e.questions[0].name,label:e.questions[0].question}),"radio"===e.questions[0].type&&(0,c.jsx)(f,{name:e.questions[0].name,label:e.questions[0].question,options:e.questions[0].options}),"dropdown"===e.questions[0].type&&(0,c.jsx)(j,{name:e.questions[0].name,label:e.questions[0].question,options:e.questions[0].options}),"checkbox"===e.questions[0].type&&(0,c.jsx)(q,{name:e.questions[0].name,label:e.questions[0].question,options:e.questions[0].options})]},a)))]})};return(0,c.jsx)(o.A,{children:(0,c.jsx)("section",{className:"relative py-16 dark:bg-slate-800",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"md:grid-cols-12 grid-cols-1 items-center gap-[30px]",children:(0,c.jsx)("div",{className:"lg:col-span-6 md:col-span-6 md:mt-0",children:(0,c.jsxs)("div",{className:"ltr:lg:ml-5 rtl:lg:mr-5",children:[(0,c.jsx)("h3",{className:"pt-12 text-center md:leading-normal text-4xl leading-normal font-semibold",children:"Apply"}),(0,c.jsxs)("p",{className:"text-center mb-4 md:leading-normal leading-normal",children:["Hi there! Thank you for your interest in joining Electrium Mobility!",(0,c.jsx)("br",{}),"Applications are rolling ",(0,c.jsx)("span",{className:"font-semibold text-green-600",children:"year-round"}),", so if you are joining mid-term then you will be placed in one of the teams in the current term."]}),(0,c.jsx)("p",{className:"mb-4 md:leading-normal leading-normal text-red-600",children:"* Indicates required question"}),(0,c.jsxs)("div",{className:"bg-white dark:bg-slate-900 rounded-md shadow p-6",children:[(0,c.jsx)("h3",{className:"mb-6 text-2xl leading-normal font-medium",children:"Get in touch!"}),(0,c.jsx)(s.l1,{initialValues:{firstName:"",lastName:"",program:"",term:"",uwaterlooEmail:"",personalEmail:"",discordUsername:"",isReturningMember:"",inPerson:"",interests:"",heardSource:"",roleQuestions:"",friendReferal:"",comments:""},validationSchema:y,onSubmit:e=>{console.log(e)},children:()=>(0,c.jsxs)(s.lV,{children:[(0,c.jsxs)("div",{className:"grid lg:grid-cols-12 lg:gap-6",children:[(0,c.jsx)("div",{className:"lg:col-span-6",children:(0,c.jsx)(x,{name:"firstName",label:"First Name"})}),(0,c.jsx)("div",{className:"lg:col-span-6",children:(0,c.jsx)(x,{name:"lastName",label:"Last Name"})})]}),(0,c.jsx)(j,{name:"program",label:"What program are you in?",options:m}),(0,c.jsx)(j,{name:"term",label:"What term will you be in in the Spring 2024 term?",options:p}),(0,c.jsx)(x,{name:"uwaterlooEmail",label:"What is your @uwaterloo email? (example s36chiu@uwaterloo.ca)",type:"email"}),(0,c.jsx)(x,{name:"personalEmail",label:"What is your personal email? (example, sherwin.chiu89@gmail.com)",type:"email"}),(0,c.jsx)(x,{name:"discordUsername",label:"What is your Discord username? (example .sherwin)"}),(0,c.jsx)(f,{name:"isReturningMember",label:"Are you a returning member?",options:["Yes","No"]}),(0,c.jsx)(f,{name:"inPerson",label:"Will you be in-person at Waterloo in Spring 2024?",options:["Yes","No"]}),(0,c.jsx)(x,{name:"interests",label:"What are your interests and hobbies? Tell us something interesting about yourself!",caption:(0,c.jsx)(c.Fragment,{children:"This is for us to get to know you, and does not have an impact on your application :)"})}),(0,c.jsx)(f,{name:"heardSource",label:"How did you hear about Electrium Mobility?",options:d}),(0,c.jsx)(N,{name:"roleQuestions",label:"What role are you interested in?",caption:(0,c.jsxs)(c.Fragment,{children:["You can learn more about what the various roles do ",(0,c.jsx)(t.A,{to:"/contact",className:"text-green-600 font-bold",children:"here"}),"."]}),options:u}),(0,c.jsx)(x,{name:"friendReferral",label:"If you're applying with a friend, please put their full name below.",type:"text"}),(0,c.jsx)(q,{name:"electriumProjects",label:"Please selection which project(s) you're interested in. We will complete them during the Spring 2024 term.",caption:(0,c.jsx)(c.Fragment,{children:'Feel free to add your own project idea under "Other".'}),options:h}),(0,c.jsx)(x,{name:"comments",label:"Any additional comments or questions?"}),(0,c.jsx)("button",{type:"submit",className:"btn p-2 w-48 inline-block align-middle bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full",children:"Submit"})]})})]})]})})})})})})}}}]);
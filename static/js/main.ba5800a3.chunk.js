(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(t,e,s){"use strict";s.r(e);var c=s(1),i=s.n(c),n=s(7),a=s.n(n),o=s(3),r=s(5),l=s.n(r),b=s(0),d=function(t){var e=t.title,s=t.children;return Object(b.jsxs)("div",{className:l.a.section,children:[Object(b.jsx)("h2",{className:l.a.title,children:e}),s]})},j=s(6),u=s.n(j),h=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(b.jsx)("div",{className:u.a.feedback,children:e.map((function(t){return Object(b.jsx)("button",{type:"button",onClick:function(){s(t)},className:u.a.button,children:t},t)}))})},O=s(2),f=s.n(O),x=function(t){var e=t.good,s=t.neutral,c=t.bad,i=t.total,n=t.positivePercentage;return Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:f.a.statisticsList,children:[Object(b.jsxs)("li",{className:f.a.statisticsElement,children:["Good: ",e]}),Object(b.jsxs)("li",{className:f.a.statisticsElement,children:["Neutral: ",s]}),Object(b.jsxs)("li",{className:f.a.statisticsElement,children:["Bad: ",c]}),Object(b.jsxs)("li",{className:f.a.statisticsElement,children:["Total: ",i]}),Object(b.jsxs)("li",{className:f.a.statisticsElement,children:["Positive feedback: ",n," %"]})]})})},m=s(8),_=s.n(m),v=function(t){var e=t.message;return Object(b.jsx)("p",{className:_.a.notification,children:e})};function p(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),s=e[0],i=e[1],n=Object(c.useState)(0),a=Object(o.a)(n,2),r=a[0],l=a[1],j=Object(c.useState)(0),u=Object(o.a)(j,2),O=u[0],f=u[1],m=function(){return s+r+O},_=m(),p=function(){var t=m(),e=0;return s&&(e=100*s/t),Math.round(e)}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"Please leave feedback",children:Object(b.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t){case"good":return i(s+1);case"neutral":return l(r+1);case"bad":return f(O+1)}}})}),Object(b.jsx)(d,{title:"Statistics",children:_?Object(b.jsx)(x,{good:s,neutral:r,bad:O,total:_,positivePercentage:p}):Object(b.jsx)(v,{message:"No feedback given"})})]})}s(14);a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={statisticsList:"Statistics_statisticsList__1vZLi",statisticsElement:"Statistics_statisticsElement__Qvyg4"}},5:function(t,e,s){t.exports={section:"Section_section__3Dth8",title:"Section_title__2LY9A"}},6:function(t,e,s){t.exports={feedback:"FeedbackOptions_feedback__1x3yR",button:"FeedbackOptions_button__LtU-1"}},8:function(t,e,s){t.exports={notification:"Notification_notification__NoHrr"}}},[[15,1,2]]]);
//# sourceMappingURL=main.ba5800a3.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={statisticsList:"Statistics_statisticsList__1vZLi",statisticsElement:"Statistics_statisticsElement__Qvyg4"}},10:function(t,e,a){t.exports={notification:"Notification_notification__NoHrr"}},19:function(t,e,a){"use strict";a.r(e);var i=a(2),n=a.n(i),s=a(6),c=a.n(s),o=a(7),r=a(8),l=a(9),d=a(12),b=a(11),u=a(4),j=a.n(u),h=a(0),f=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsx)("h2",{className:j.a.title,children:e}),a]})},v=a(5),p=a.n(v),O=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{className:p.a.feedback,children:e.map((function(t){return Object(h.jsx)("button",{type:"button",onClick:function(){a(t)},className:p.a.button,children:t},t)}))})},k=a(1),m=a.n(k),x=function(t){var e=t.good,a=t.neutral,i=t.bad,n=t.total,s=t.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{className:m.a.statisticsList,children:[Object(h.jsxs)("li",{className:m.a.statisticsElement,children:["Good: ",e]}),Object(h.jsxs)("li",{className:m.a.statisticsElement,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:m.a.statisticsElement,children:["Bad: ",i]}),Object(h.jsxs)("li",{className:m.a.statisticsElement,children:["Total: ",n]}),Object(h.jsxs)("li",{className:m.a.statisticsElement,children:["Positive feedback: ",s," %"]})]})})},_=a(10),g=a.n(_),N=function(t){var e=t.message;return Object(h.jsx)("p",{className:g.a.notification,children:e})},F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:t.props.initialValue,neutral:t.props.initialValue,bad:t.props.initialValue},t.leaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback(),i=0;return e&&(i=100*e/a),Math.round(i)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,i=t.bad,n=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.leaveFeedback})}),Object(h.jsx)(f,{title:"Statistics",children:n?Object(h.jsx)(x,{good:e,neutral:a,bad:i,total:n,positivePercentage:s}):Object(h.jsx)(N,{message:"No feedback given"})})]})}}]),a}(i.Component);F.defaultProps={initialValue:0};var P=F;a(18);c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={section:"Section_section__3Dth8",title:"Section_title__2LY9A"}},5:function(t,e,a){t.exports={feedback:"FeedbackOptions_feedback__1x3yR",button:"FeedbackOptions_button__LtU-1"}}},[[19,1,2]]]);
//# sourceMappingURL=main.e5896d75.chunk.js.map
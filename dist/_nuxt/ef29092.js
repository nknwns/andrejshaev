(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{301:function(t,l,e){"use strict";e.r(l);e(29),e(41);var n={name:"SkillsItem",props:{skill:{title:String,icon:String,experience:String,technologies:Array},active:{type:Boolean,default:!1}}},c=e(25),component=Object(c.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"tabs__description description",class:{active:t.active}},[l("h3",{staticClass:"description__title"},[l("img",{staticClass:"description__logo",attrs:{src:"/img/"+t.skill.icon,alt:"html"}}),t._v("\n\t\t"+t._s(t.skill.title)+"\n\t")]),t._v(" "),t.skill.experience?l("p",{staticClass:"description__experience"},[t._v("Опыт использования: "+t._s(t.skill.experience))]):t._e(),t._v(" "),l("div",{staticClass:"description__content"},[t.skill.technologies?l("ul",{staticClass:"description__list"},t._l(t.skill.technologies,(function(e){return l("li",{staticClass:"description__item"},[t._v("\n\t\t\t\t"+t._s(e.title)+".\n\t\t\t\t"),e.experience?l("span",{staticClass:"description__count"},[t._v("Опыт использования: "+t._s(e.experience))]):t._e()])})),0):l("p",[t._v("\n\t\t\t"+t._s(t.skill.description)+"\n\t\t")])])])}),[],!1,null,null,null);l.default=component.exports},302:function(t,l,e){"use strict";e.r(l);var n={name:"SkillsTab",components:{SkillsItem:e(301).default},props:{skills:Array},data:function(){return{currentSkill:0}},methods:{setCurrentSkill:function(t){this.currentSkill=t}}},c=e(25),component=Object(c.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"tabs"},[l("div",{staticClass:"tabs__titles"},t._l(t.skills,(function(e){return l("a",{key:e.id,staticClass:"tabs__title",class:{active:e.id===t.currentSkill,"tabs__title--full":e.full},attrs:{href:"#"},on:{click:function(l){return l.preventDefault(),t.setCurrentSkill(e.id)}}},[t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")])})),0),t._v(" "),l("div",{staticClass:"tabs__content"},t._l(t.skills,(function(e){return l("SkillsItem",{key:e.id,attrs:{skill:e,active:t.currentSkill===e.id}})})),1)])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{SkillsItem:e(301).default})}}]);
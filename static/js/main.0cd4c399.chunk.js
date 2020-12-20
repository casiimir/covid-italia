(this["webpackJsonpcovid-italia"]=this["webpackJsonpcovid-italia"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i(1),s=i.n(c),n=i(3),l=i.n(n),r=(i(14),i(15),i(4)),o=i(5),d=i(8),j=i(7),h=(i(16),i(6)),b=i.n(h);function m(e){return e>0?"".concat(e," in meno"):"".concat(Math.abs(e)," in pi\xf9")}var u=function(e){var t=e.datiDiOggi,i=e.datiDiIeri,c=e.dataAttuale,s=(e.changeRoute,t.nuovi_positivi),n=t.ricoverati_con_sintomi,l=t.terapia_intensiva,r=t.isolamento_domiciliare,o=t.deceduti,d=t.dimessi_guariti,j=i.nuovi_positivi-s,h=i.ricoverati_con_sintomi-n,u=i.terapia_intensiva-l,x=Object(a.jsx)(b.a,{value:d,formatValue:function(e){return e.toFixed(0)},duration:"10000"}),O=c.replace(/\s/g,""),g={DDMM:"".concat(O.substr(0,2),"-").concat(O.substr(2,2)),YYYY:O.substr(4,4)};return Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"data-title",children:[Object(a.jsx)("h1",{children:g.YYYY}),Object(a.jsx)("h6",{class:"data-span",children:g.DDMM}),Object(a.jsx)("p",{children:"COVID19, la situazione Italiana"})]}),Object(a.jsxs)("div",{className:"row d-flex justify-content-around",children:[Object(a.jsx)("div",{className:"card section col-xs-12 col-sm-5 col-md-5 col-lg-2 shadow-lg mb-5 rounded",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"card-title",children:s}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"card-text",children:["i nuovi positivi nel nostro paese, ",Object(a.jsxs)("strong",{children:[" ",m(j)," "]})," rispetto a ieri."]})]})}),Object(a.jsx)("div",{className:"card section col-xs-12 col-sm-5 col-md-5 col-lg-2 shadow-lg mb-5 rounded",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"card-title",children:n}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"card-text",children:["italiani stanno passando le feste natalizie ricoverati all'ospedale, ",Object(a.jsxs)("strong",{children:[m(h)," "]})," rispetto a ieri."]})]})}),Object(a.jsx)("div",{className:"card section col-xs-12 col-sm-5 col-md-5 col-lg-2 shadow-lg mb-5 rounded",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"card-title",children:l}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"card-text",children:["in terapia intensiva. ",Object(a.jsxs)("strong",{children:[m(u)," "]})," rispetto a ieri."]})]})}),Object(a.jsx)("div",{className:"card section col-xs-12 col-sm-5 col-md-5 col-lg-2 shadow-lg mb-5 rounded",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{className:"card-title",children:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{className:"card-text",children:"sono quelli isolamento domiciliare e, con loro probabilmente, l'intera famiglia."})]})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"section-final col-12",children:[Object(a.jsx)("p",{className:"text-center alt-text",children:" Ad oggi i guariti ammontano a:"}),Object(a.jsx)("h2",{className:"alt-title",children:x})]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h3",{className:"alt-strong",children:o}),Object(a.jsxs)("p",{className:"text-center alt-text",children:["I nostri concittadini deceduti. A loro, pi\xf9 di ogni altro, va il nostro ",Object(a.jsx)("strong",{className:"alt-strong",children:"sacrificio"})," per questo Natale ",Object(a.jsx)("strong",{className:"alt-strong",children:"diverso"}),"."]})]}),Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("p",{className:"manifesto",children:"Contribuiamo al Miracolo del Natale"}),Object(a.jsx)("p",{className:"text-center",children:Object(a.jsx)("strong",{className:"alt-strong",children:"Restiamo a casa"})})]})]}),Object(a.jsxs)("div",{class:"footer-text",children:[Object(a.jsx)("p",{class:"text-center",children:"Questo sito utilizza i dati della protezione civile, si aggiornano giornalmente. Colgo l'occasione per Ringraziare voi tutti e i medici in prima linea e le forze armate, per il lavoro che avete fatto e per quello che continuate a fare per il nostro paese. "}),Object(a.jsxs)("p",{class:"text-center",children:["Realizzato con \ud83d\udc97 da ",Object(a.jsx)("a",{href:"https://www.linkedin.com/in/casimiro-p-ciancimino/",children:"Casiimir"})]})]})]})},x=(i(17),function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={dataAttuale:"",datiDiOggi:"",datiDiIeri:"",route:"MainPage"},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){return e.json()})).then((function(t){e.setState({datiDiOggi:t[t.length-1],datiDiIeri:t[t.length-2],dataAttuale:t[t.length-1].data})}))}},{key:"render",value:function(){var e=this.state.dataAttuale,t="\n                                  ".concat(e.substr(8,2)," \n                                  ").concat(e.substr(5,2),"\n                                  ").concat(e.substr(0,4),"\n                                  ");return Object(a.jsx)("div",{children:"MainPage"===this.state.route?Object(a.jsx)(u,{datiDiOggi:this.state.datiDiOggi,datiDiIeri:this.state.datiDiIeri,dataAttuale:t,changeRoute:this.setManifesto}):null})}}]),i}(c.Component)),O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),a(e),c(e),s(e),n(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.0cd4c399.chunk.js.map
webpackJsonp([1],{259:function(t,a,s){function e(t){s(363)}var r=s(28)(s(266),s(513),e,null,null);t.exports=r.exports},260:function(t,a,s){function e(t){s(361)}var r=s(28)(s(267),s(511),e,null,null);t.exports=r.exports},262:function(t,a){},263:function(t,a,s){function e(t){s(364)}var r=s(28)(s(265),s(514),e,null,null);t.exports=r.exports},265:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=(s(1),s(77));a.default={name:"app",data:function(){return{heading:"Dashboard",tabs:[],selectedTab:"",tab1:"Ipl Stats",tab2:"Bowler Stats",tab3:"Batsman Stats",tab4:"Team Stats"}},mounted:function(){this.tabs=["tab1","tab2","tab3","tab4"],this.selectedTab=e.a.history.current.name}}},266:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),r=s(78);e.default.component("bar",r.a),a.default={name:"batsman-stats",data:function(){return{chartDataRuns:{},chartOptionsRuns:{},chartDataSixes:{},chartDataStrike:{},chartOptionsSixexs:{},chartOptionsStrike:{}}},mounted:function(){this.update()},methods:{update:function(){this.$http.get("https://chraman.github.io/ipl/static/json/BatsmanStats.json").then(function(t){var a=t.body;this.batsmanRuns=[],this.totalRuns=[],this.batsmanSixes=[],this.totalSixes=[];for(var s=0;s<5;s++)this.batsmanRuns.push(a.runs[s].batsman),this.totalRuns.push(a.runs[s].count),this.batsmanSixes.push(a.sixes[s].batsman),this.totalSixes.push(a.sixes[s].count);this.deathRunsBatsman=[],this.deathStrikeRate=[];for(var e=0;e<5;e++){var r=a.death_over_runs[e].batsman,n=a.death_over_runs[e].sum;this.deathRunsBatsman.push(r);for(var s=0;s<a.batsman_facing_death_over.length;s++)if(a.batsman_facing_death_over[s].index==r){var i=a.batsman_facing_death_over[s].count,o=n/i*100;o=Math.round(10*o)/10,this.deathStrikeRate.push(o)}}this.prepareChartDataRuns(this.batsmanRuns,this.totalRuns),this.prepareChartDataSixes(this.batsmanSixes,this.totalSixes),this.prepareChartDataDEathSR(this.deathRunsBatsman,this.deathStrikeRate)},function(t){console.log(t)})},prepareChartDataRuns:function(t,a){this.chartDataRuns={labels:t,datasets:[{label:"Runs",backgroundColor:"#DD1B16",data:a}]},this.chartOptionsRuns={responsive:!0,maintainAspectRatio:!1}},prepareChartDataSixes:function(t,a){this.chartDataSixes={labels:t,datasets:[{label:"Sixes",backgroundColor:"#990099",data:a}]},this.chartOptionsSixexs={responsive:!0,maintainAspectRatio:!1}},prepareChartDataDEathSR:function(t,a){this.chartDataStrike={labels:t,datasets:[{label:"Strike rate",backgroundColor:"#329262",data:a}]},this.chartOptionsStrike={responsive:!0,maintainAspectRatio:!1}}}}},267:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),r=s(78),n=s(271);e.default.component("bar",r.a),e.default.component("h-bar",n.a),a.default={name:"bowler-stats",data:function(){return{chartDataDots:{},chartOptionsDots:{},chartDataWickets:{},chartOptionsWickets:{},chartDataDeath:{},chartOptionsDeath:{}}},mounted:function(){this.update()},methods:{update:function(){this.$http.get("https://chraman.github.io/ipl/static/json/BowlerStats.json").then(function(t){var a=t.body;this.bowlersDots=[],this.ballsDots=[],this.bowlerWickets=[],this.wickets=[],this.bowlerDeathDots=[],this.ballsDeathDots=[];for(var s=0;s<5;s++)this.bowlersDots.push(a.dots[s].bowler),this.ballsDots.push(a.dots[s].count),this.bowlerWickets.push(a.wickets[s].bowler),this.wickets.push(a.wickets[s].count),this.bowlerDeathDots.push(a.death_dots[s].bowler),this.ballsDeathDots.push(a.death_dots[s].count);this.prepareChartDataDots(this.bowlersDots,this.ballsDots),this.prepareChartDataWickets(this.bowlerWickets,this.wickets),this.prepareChartDataDeathDots(this.bowlerDeathDots,this.ballsDeathDots)},function(t){console.log(t)})},prepareChartDataDots:function(t,a){this.chartDataDots={labels:t,datasets:[{label:"Dot balls",backgroundColor:"#990099",data:a}]},this.chartOptionsDots={responsive:!0,maintainAspectRatio:!1}},prepareChartDataWickets:function(t,a){this.chartDataWickets={labels:t,datasets:[{label:"Wickets",backgroundColor:"#7C8CF8",data:a}]},this.chartOptionsWickets={responsive:!0,maintainAspectRatio:!1}},prepareChartDataDeathDots:function(t,a){this.chartDataDeath={labels:t,datasets:[{label:"Death Dot Balls",backgroundColor:"#22AA99",data:a}]},this.chartOptionsDeath={responsive:!0,maintainAspectRatio:!1}}}}},268:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),r=s(273),n=s(270),i=s(260),o=s.n(i),c=s(259),l=s.n(c);e.default.component("pie-chart",r.a),e.default.component("doughnut-chart",n.a),e.default.component("bowler-stats",o.a),e.default.component("batsman-stats",l.a),a.default={name:"dasboard",data:function(){return{msg:"IPL Dashboard",matches:"",sixes:"",runs:"",wickets:"",matchesLabel:"Matches",sixesLabel:"Runs",runsLabel:"Wickets",wicketsLabel:"Sixes",chartDataTeamRuns:{},chartDataChase:{},chartDataToss:{},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.update()},methods:{update:function(){this.$http.get("https://chraman.github.io/ipl/static/json/iplStats.json").then(function(t){var a=t.body.all_stats,s=t.body.number_wins_chasing,e=t.body.team_total_run;this.matches=a.matches,this.sixes=a.sixes,this.runs=a.runs,this.wickets=a.wickets;var r=t.body.toss_wins.true;r=Math.round(10*r)/10,this.prepareTossChart(r),this.prepareRunsChart(e),this.getChasingWins(s)},function(t){console.log(t)})},getChasingWins:function(t){for(var a=0,s=0;s<t.length;s++)a+=t[s].count;var e=a/this.matches*100;e=Math.round(10*e)/10,this.prepareChasingChart(e)},prepareChasingChart:function(t){this.chartDataChase={labels:["Win","Loss"],datasets:[{backgroundColor:["#316395","#FF9900"],data:[t,100-t]}]}},prepareTossChart:function(t){this.chartDataToss={labels:["Win","Loss"],datasets:[{backgroundColor:["#109618","#DC3912"],data:[t,100-t]}]}},prepareRunsChart:function(t){for(var a=[],s=[],e=0;e<t.length;e++){a.push(t[e].batting_team);var r=t[e].count/this.runs*100;r=Math.round(10*r)/10,s.push(r)}this.chartDataTeamRuns={labels:a,datasets:[{backgroundColor:["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99"],data:s}]}}}}},269:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(276),r=s.n(e),n=s(277),i=s.n(n),o=s(1),c=s(272),l=s(274);o.default.component("line-chart",c.a),o.default.component("radar-chart",l.a),a.default={name:"team-stats",data:function(){return{chartDataRuns:{},teamNames:[],chartOptionsRuns:{responsive:!0,maintainAspectRatio:!1},chartDataShots:{},chartOptionsShots:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.update()},methods:{update:function(){this.$http.get("https://chraman.github.io/ipl/static/json/teamStats.json").then(function(t){var a=t.body.team_runs_season,s=t.body.team_runs_shots;this.handleTeamRuns(a),this.handleRunsByShots(s)},function(t){console.log(t)})},handleTeamRuns:function(t){this.seasons=new i.a,this.teams=new i.a;for(var a=0;a<t.length;a++)this.seasons.add(t[a].season),this.teams.add(t[a].batting_team);this.dataSets=[],this.seasonLabels=[];var s=!0,e=!1,n=void 0;try{for(var o,c=r()(this.seasons);!(s=(o=c.next()).done);s=!0){var l=o.value;this.seasonLabels.push(l)}}catch(t){e=!0,n=t}finally{try{!s&&c.return&&c.return()}finally{if(e)throw n}}this.teamNames=[];var h=!0,u=!1,d=void 0;try{for(var p,m=r()(this.teams);!(h=(p=m.next()).done);h=!0){var b=p.value;this.seasonsRun=[],this.teamNames.push(b);for(var a=0;a<t.length;a++)t[a].batting_team==b&&this.seasonsRun.push(t[a].runs_by_season);this.dataSets.push({label:b,data:this.seasonsRun})}}catch(t){u=!0,d=t}finally{try{!h&&m.return&&m.return()}finally{if(u)throw d}}this.teamA=this.dataSets[0].label,this.teamB=this.dataSets[1].label,this.prepareLineChartData(this.teamA,this.teamB)},handleRunsByShots:function(t){this.shots=new i.a,this.teamsShots=new i.a;for(var a=0;a<t.length;a++)this.shots.add(t[a].batsman_runs),this.teamsShots.add(t[a].batting_team);this.dataSetsShots=[],this.shotsLabels=[];var s=!0,e=!1,n=void 0;try{for(var o,c=r()(this.shots);!(s=(o=c.next()).done);s=!0){var l=o.value;this.shotsLabels.push(l)}}catch(t){e=!0,n=t}finally{try{!s&&c.return&&c.return()}finally{if(e)throw n}}this.teamNamesShots=[];var h=!0,u=!1,d=void 0;try{for(var p,m=r()(this.teamsShots);!(h=(p=m.next()).done);h=!0){var b=p.value;this.shotsRun=[],this.teamNamesShots.push(b);for(var a=0;a<t.length;a++)t[a].batting_team==b&&this.shotsRun.push(t[a].runs_by_season);this.dataSetsShots.push({label:b,data:this.shotsRun})}}catch(t){u=!0,d=t}finally{try{!h&&m.return&&m.return()}finally{if(u)throw d}}this.teamShotsA=this.dataSetsShots[0].label,this.teamShotsB=this.dataSetsShots[1].label,this.prepareRadarChartData(this.teamShotsA,this.teamShotsB)},prepareLineChartData:function(t,a){var s,e;this.teamA=t,this.teamB=a;for(var r=0;r<this.dataSets.length;r++)this.dataSets[r].label==t?s=r:this.dataSets[r].label==a&&(e=r);void 0!=s&&void 0!=e&&(this.chartDataRuns={labels:this.seasonLabels,datasets:[{label:this.teamA,backgroundColor:"rgba(32,162,219,0.3)",fill:!0,data:this.dataSets[s].data},{label:this.teamB,backgroundColor:"rgba(196,93,105,0.3)",fill:!0,data:this.dataSets[e].data}]})},prepareRadarChartData:function(t,a){var s,e;this.teamShotsA=t,this.teamShotsB=a;for(var r=0;r<this.dataSets.length;r++)this.dataSetsShots[r].label==t?s=r:this.dataSetsShots[r].label==a&&(e=r);void 0!=s&&void 0!=e&&(this.chartDataShots={labels:this.shotsLabels,datasets:[{label:this.teamShotsA,backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:this.dataSetsShots[s].data},{label:this.teamShotsB,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:this.dataSetsShots[e].data}]})}}}},270:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.VueCharts.mixins.reactiveProp);a.a=e.VueCharts.Doughnut.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},271:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.mixins.reactiveProp);a.a=e.VueCharts.HorizontalBar.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},272:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.mixins.reactiveProp);a.a=e.Line.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},273:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.VueCharts.mixins.reactiveProp);a.a=e.VueCharts.Pie.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},274:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.mixins.reactiveProp);a.a=e.Radar.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},275:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),r=s(263),n=s.n(r),i=s(262),o=(s.n(i),s(264)),c=s(77),l=s(261);s.n(l);e.default.use(o.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:c.a,beforeCreate:function(){},template:"<App/>",components:{App:n.a}})},360:function(t,a){},361:function(t,a){},362:function(t,a){},363:function(t,a){},364:function(t,a){},366:function(t,a){t.exports={_args:[[{raw:"vue-chartjs",scope:null,escapedName:"vue-chartjs",name:"vue-chartjs",rawSpec:"",spec:"latest",type:"tag"},"C:\\Users\\dell\\Documents\\GitHub\\ipl"]],_from:"vue-chartjs@latest",_id:"vue-chartjs@2.6.4",_inCache:!0,_location:"/vue-chartjs",_nodeVersion:"8.0.0",_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/vue-chartjs-2.6.4.tgz_1496583685479_0.34330985764972866"},_npmUser:{name:"apertureless",email:"juszczak.j@googlemail.com"},_npmVersion:"5.0.1",_phantomChildren:{},_requested:{raw:"vue-chartjs",scope:null,escapedName:"vue-chartjs",name:"vue-chartjs",rawSpec:"",spec:"latest",type:"tag"},_requiredBy:["#USER"],_resolved:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-2.6.4.tgz",_shasum:"ffb2b31349c09aac599def227b3e66ffe19f2d64",_shrinkwrap:null,_spec:"vue-chartjs",_where:"C:\\Users\\dell\\Documents\\GitHub\\ipl",author:{name:"Jakub Juszczak",email:"jakub@posteo.de"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},contributors:[{name:"Thorsten Lünborg",url:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",url:"https://github.com/jcalonso"}],dependencies:{lodash:"^4.17.4"},description:"vue.js wrapper for chart.js",devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.24.1","babel-loader":"^7.0.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.5.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.3.3","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.0.4","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.3.3",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},directories:{},dist:{integrity:"sha512-nVI+MI24tVZgBUQf5NK0sdHfnfV+ur6ji8KYobpvzTl0YXh+KeEXTP42MdJ/581DJW/FGFssEnhyMBtW1BRigA==",shasum:"ffb2b31349c09aac599def227b3e66ffe19f2d64",tarball:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-2.6.4.tgz"},engines:{node:">=6.9.0"},files:["src","dist","es"],gitHead:"cc869c979d74b5a876d8d954e1c4d6bdd01d859a",greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},homepage:"http://vue-chartjs.org","jsnext:main":"es/index.js",keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],license:"MIT",main:"dist/vue-chartjs.js",maintainers:[{name:"apertureless",email:"juszczak.j@googlemail.com"}],module:"es/index.js",name:"vue-chartjs",optionalDependencies:{},peerDependencies:{"chart.js":"^2.5.0",vue:"^2.3.3"},readme:"ERROR: No README data found!",repository:{type:"git",url:"git+ssh://git@github.com/apertureless/vue-chartjs.git"},scripts:{build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",dev:"node build/dev-server.js",e2e:"node test/e2e/runner.js",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",prepublish:"yarn run lint && yarn run test && yarn run build",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",test:"npm run unit",unit:"karma start test/unit/karma.conf.js --single-run"},unpkg:"dist/vue-chartjs.full.min.js",version:"2.6.4"}},494:function(t,a,s){function e(t){return s(r(t))}function r(t){var a=n[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var n={"./af":144,"./af.js":144,"./ar":151,"./ar-dz":145,"./ar-dz.js":145,"./ar-kw":146,"./ar-kw.js":146,"./ar-ly":147,"./ar-ly.js":147,"./ar-ma":148,"./ar-ma.js":148,"./ar-sa":149,"./ar-sa.js":149,"./ar-tn":150,"./ar-tn.js":150,"./ar.js":151,"./az":152,"./az.js":152,"./be":153,"./be.js":153,"./bg":154,"./bg.js":154,"./bn":155,"./bn.js":155,"./bo":156,"./bo.js":156,"./br":157,"./br.js":157,"./bs":158,"./bs.js":158,"./ca":159,"./ca.js":159,"./cs":160,"./cs.js":160,"./cv":161,"./cv.js":161,"./cy":162,"./cy.js":162,"./da":163,"./da.js":163,"./de":166,"./de-at":164,"./de-at.js":164,"./de-ch":165,"./de-ch.js":165,"./de.js":166,"./dv":167,"./dv.js":167,"./el":168,"./el.js":168,"./en-au":169,"./en-au.js":169,"./en-ca":170,"./en-ca.js":170,"./en-gb":171,"./en-gb.js":171,"./en-ie":172,"./en-ie.js":172,"./en-nz":173,"./en-nz.js":173,"./eo":174,"./eo.js":174,"./es":176,"./es-do":175,"./es-do.js":175,"./es.js":176,"./et":177,"./et.js":177,"./eu":178,"./eu.js":178,"./fa":179,"./fa.js":179,"./fi":180,"./fi.js":180,"./fo":181,"./fo.js":181,"./fr":184,"./fr-ca":182,"./fr-ca.js":182,"./fr-ch":183,"./fr-ch.js":183,"./fr.js":184,"./fy":185,"./fy.js":185,"./gd":186,"./gd.js":186,"./gl":187,"./gl.js":187,"./gom-latn":188,"./gom-latn.js":188,"./he":189,"./he.js":189,"./hi":190,"./hi.js":190,"./hr":191,"./hr.js":191,"./hu":192,"./hu.js":192,"./hy-am":193,"./hy-am.js":193,"./id":194,"./id.js":194,"./is":195,"./is.js":195,"./it":196,"./it.js":196,"./ja":197,"./ja.js":197,"./jv":198,"./jv.js":198,"./ka":199,"./ka.js":199,"./kk":200,"./kk.js":200,"./km":201,"./km.js":201,"./kn":202,"./kn.js":202,"./ko":203,"./ko.js":203,"./ky":204,"./ky.js":204,"./lb":205,"./lb.js":205,"./lo":206,"./lo.js":206,"./lt":207,"./lt.js":207,"./lv":208,"./lv.js":208,"./me":209,"./me.js":209,"./mi":210,"./mi.js":210,"./mk":211,"./mk.js":211,"./ml":212,"./ml.js":212,"./mr":213,"./mr.js":213,"./ms":215,"./ms-my":214,"./ms-my.js":214,"./ms.js":215,"./my":216,"./my.js":216,"./nb":217,"./nb.js":217,"./ne":218,"./ne.js":218,"./nl":220,"./nl-be":219,"./nl-be.js":219,"./nl.js":220,"./nn":221,"./nn.js":221,"./pa-in":222,"./pa-in.js":222,"./pl":223,"./pl.js":223,"./pt":225,"./pt-br":224,"./pt-br.js":224,"./pt.js":225,"./ro":226,"./ro.js":226,"./ru":227,"./ru.js":227,"./sd":228,"./sd.js":228,"./se":229,"./se.js":229,"./si":230,"./si.js":230,"./sk":231,"./sk.js":231,"./sl":232,"./sl.js":232,"./sq":233,"./sq.js":233,"./sr":235,"./sr-cyrl":234,"./sr-cyrl.js":234,"./sr.js":235,"./ss":236,"./ss.js":236,"./sv":237,"./sv.js":237,"./sw":238,"./sw.js":238,"./ta":239,"./ta.js":239,"./te":240,"./te.js":240,"./tet":241,"./tet.js":241,"./th":242,"./th.js":242,"./tl-ph":243,"./tl-ph.js":243,"./tlh":244,"./tlh.js":244,"./tr":245,"./tr.js":245,"./tzl":246,"./tzl.js":246,"./tzm":248,"./tzm-latn":247,"./tzm-latn.js":247,"./tzm.js":248,"./uk":249,"./uk.js":249,"./ur":250,"./ur.js":250,"./uz":252,"./uz-latn":251,"./uz-latn.js":251,"./uz.js":252,"./vi":253,"./vi.js":253,"./x-pseudo":254,"./x-pseudo.js":254,"./yo":255,"./yo.js":255,"./zh-cn":256,"./zh-cn.js":256,"./zh-hk":257,"./zh-hk.js":257,"./zh-tw":258,"./zh-tw.js":258};e.keys=function(){return Object.keys(n)},e.resolve=r,t.exports=e,e.id=494},496:function(t,a,s){t.exports=s.p+"static/img/logo.65cc3e2.png"},508:function(t,a,s){function e(t){s(360)}var r=s(28)(s(268),s(510),e,"data-v-3bb1571e",null);t.exports=r.exports},509:function(t,a,s){function e(t){s(362)}var r=s(28)(s(269),s(512),e,null,null);t.exports=r.exports},510:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",{staticClass:"page-heading"},[t._v("Tournament Stats")]),t._v(" "),s("div",[s("table",{staticClass:"table table-striped table-bordered"},[s("tr",{staticClass:"table-header"},[s("th",[t._v(t._s(t.matchesLabel))]),t._v(" "),s("th",[t._v(t._s(t.runsLabel))]),t._v(" "),s("th",[t._v(t._s(t.wicketsLabel))]),t._v(" "),s("th",[t._v(t._s(t.sixesLabel))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.matches))]),t._v(" "),s("td",[t._v(t._s(t.runs))]),t._v(" "),s("td",[t._v(t._s(t.wickets))]),t._v(" "),s("td",[t._v(t._s(t.sixes))])])])]),t._v(" "),s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0"},[s("div",{staticClass:"chart-bg mr-10 ml-10"},[s("h2",{staticClass:"chart-heading"},[t._v("IPL team's run percentage")]),t._v(" "),s("doughnut-chart",{attrs:{chartData:t.chartDataTeamRuns,options:t.chartOptions}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0"},[s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 pr-0"},[s("div",{staticClass:"chart-bg mt-20 ml-10 mr-10"},[s("h2",{staticClass:"chart-heading"},[t._v("Does winning toss wins you the match?")]),t._v(" "),s("pie-chart",{attrs:{chartData:t.chartDataToss,options:t.chartOptions}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 pr-0"},[s("div",{staticClass:"chart-bg mt-20 mr-10 ml-10"},[s("h2",{staticClass:"chart-heading"},[t._v("Or chasing down target wins you the match?")]),t._v(" "),s("pie-chart",{attrs:{chartData:t.chartDataChase,options:t.chartOptions}})],1)])])])},staticRenderFns:[]}},511:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",{staticClass:"page-heading"},[t._v("Bowler Stats")]),t._v(" "),s("div",{staticClass:"row mr-0"},[s("div",{staticClass:"col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8  col-sm-offset-2 col-sm-8 col-xs-12"},[s("div",{staticClass:"chart-bg"},[s("h2",{staticClass:"pl-10 chart-heading"},[t._v("Highest wicket takers in IPL")]),t._v(" "),s("bar",{attrs:{chartData:t.chartDataWickets,options:t.chartOptionsWickets}})],1)])]),t._v(" "),s("div",{staticClass:"row mr-0"},[s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[s("div",{staticClass:"chart-bg mt-20"},[s("h2",{staticClass:"chart-heading"},[t._v("Total dots balls")]),t._v(" "),s("bar",{attrs:{chartData:t.chartDataDots,options:t.chartOptionsDots}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[s("div",{staticClass:"chart-bg mt-20"},[s("h2",{staticClass:"chart-heading"},[t._v("Death overs dot balls")]),t._v(" "),s("h-bar",{attrs:{chartData:t.chartDataDeath,options:t.chartOptionsDeath}})],1)])])])},staticRenderFns:[]}},512:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",{staticClass:"page-heading"},[t._v("Team Stats")]),t._v(" "),s("div",{},[s("div",{staticClass:"row ml-0 mr-0"},[s("h2",{staticClass:"chart-heading"},[t._v("Compare runs scored in all seasons by two team")]),t._v(" "),s("div",{staticClass:"col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55"},[s("h3",[t._v("Choose Team-A")]),t._v(" "),s("div",{staticClass:"btn-group-vertical",attrs:{role:"group"}},t._l(t.teamNames,function(a){return s("button",{staticClass:"btn btn-xs btn-default btn-bg",attrs:{type:"button"},on:{click:function(s){t.prepareLineChartData(a,t.teamB)}}},[t._v(t._s(a))])}))]),t._v(" "),s("div",{staticClass:"col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55",staticStyle:{float:"right"}},[s("h3",[t._v("Choose Team-B")]),t._v(" "),s("div",{staticClass:"btn-group-vertical group-small-screen",attrs:{role:"group"}},t._l(t.teamNames,function(a){return s("button",{staticClass:"btn btn-xs btn-default btn-bg",attrs:{type:"button"},on:{click:function(s){t.prepareLineChartData(t.teamA,a)}}},[t._v(t._s(a))])}))]),t._v(" "),s("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12 p-0"},[s("line-chart",{attrs:{chartData:t.chartDataRuns,options:t.chartOptionsRuns}})],1)]),t._v(" "),s("div",{staticClass:"row ml-0 mr-0"},[s("h2",{staticClass:"chart-heading"},[t._v("Compare runs scored from different shots by two teams")]),t._v(" "),s("div",{staticClass:"col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55"},[s("h3",[t._v("Choose Team-A")]),t._v(" "),s("div",{staticClass:"btn-group-vertical",attrs:{role:"group"}},t._l(t.teamNames,function(a){return s("button",{staticClass:"btn btn-xs btn-default btn-bg",attrs:{type:"button"},on:{click:function(s){t.prepareRadarChartData(a,t.teamShotsB)}}},[t._v(t._s(a))])}))]),t._v(" "),s("div",{staticClass:"col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55",staticStyle:{float:"right"}},[s("h3",[t._v("Choose Team-B")]),t._v(" "),s("div",{staticClass:"btn-group-vertical group-small-screen",attrs:{role:"group"}},t._l(t.teamNames,function(a){return s("button",{staticClass:"btn btn-xs btn-default btn-bg",attrs:{type:"button"},on:{click:function(s){t.prepareRadarChartData(t.teamShotsA,a)}}},[t._v(t._s(a))])}))]),t._v(" "),s("div",{staticClass:"col-lg-7 col-md-12 col-sm-12 col-xs-12 p-0"},[s("radar-chart",{attrs:{chartData:t.chartDataShots,options:t.chartOptionsShots}})],1)])])])},staticRenderFns:[]}},513:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",{staticClass:"page-heading"},[t._v("Batsman Stats")]),t._v(" "),s("div",{staticClass:"col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8  col-sm-offset-2 col-sm-8 col-xs-12"},[s("div",{staticClass:"chart-bg"},[s("h2",{staticClass:"chart-heading"},[t._v("Most runs in IPL")]),t._v(" "),s("bar",{attrs:{chartData:t.chartDataRuns,options:t.chartOptionsRuns}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[s("div",{staticClass:"chart-bg mt-20"},[s("h2",{staticClass:"chart-heading"},[t._v("Most sixes inIPL")]),t._v(" "),s("bar",{attrs:{chartData:t.chartDataSixes,options:t.chartOptionsSixexs}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[s("div",{staticClass:"chart-bg mt-20"},[s("h2",{staticClass:"chart-heading"},[t._v("Death overs strike rate")]),t._v(" "),s("bar",{attrs:{chartData:t.chartDataStrike,options:t.chartOptionsStrike}})],1)])])},staticRenderFns:[]}},514:function(t,a,s){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"row panel-header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12 "},[s("div",{staticClass:"app-panel-heading"},[t._m(0),t._v(" "),s("div",{staticClass:"app-header"},[s("h1",{staticClass:"heading"},[t._v(t._s(t.heading))])])])])])]),t._v(" "),t.tabs?s("div",{staticClass:"row pt-20"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"col-lg-2 col-md-2 col-sm-2 col-xs-12 p-0"},[s("ul",{staticClass:"form"},[s("li",{class:t.selectedTab==t.tabs[0]?"selected":"",on:{click:function(a){t.selectedTab=t.tabs[0]}}},[s("a",{staticClass:"tab1"},[s("router-link",{attrs:{to:"/"}},[t._v(t._s(t.tab1))])],1)]),t._v(" "),s("li",{class:t.selectedTab==t.tabs[1]?"selected":"",on:{click:function(a){t.selectedTab=t.tabs[1]}}},[s("a",{staticClass:"tab2"},[s("router-link",{attrs:{to:"/tab2"}},[t._v(t._s(t.tab2))])],1)]),t._v(" "),s("li",{class:t.selectedTab==t.tabs[2]?"selected":"",on:{click:function(a){t.selectedTab=t.tabs[2]}}},[s("a",{staticClass:"tab3"},[s("router-link",{attrs:{to:"/tab3"}},[t._v(t._s(t.tab3))])],1)]),t._v(" "),s("li",{class:t.selectedTab==t.tabs[3]?"selected":"",on:{click:function(a){t.selectedTab=t.tabs[3]}}},[s("a",{staticClass:"tab4"},[s("router-link",{attrs:{to:"/tab4"}},[t._v(t._s(t.tab4))])],1)])])]),t._v(" "),s("div",{staticClass:"col-lg-10 col-md-10 col-sm-10 col-xs-12 p-0"},[s("div",{staticClass:"router-wrapper"},[s("router-view")],1)])])]):t._e()])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-image"},[e("img",{staticStyle:{width:"100px"},attrs:{src:s(496)}})])}]}},517:function(t,a){},77:function(t,a,s){"use strict";var e=s(1),r=s(515),n=s(508),i=s.n(n),o=s(259),c=s.n(o),l=s(260),h=s.n(l),u=s(509),d=s.n(u);e.default.use(r.a),a.a=new r.a({routes:[{path:"/",redirect:"/tab1"},{path:"/tab1",name:"tab1",component:i.a},{path:"/tab2",name:"tab2",component:h.a},{path:"/tab3",name:"tab3",component:c.a},{path:"/tab4",name:"tab4",component:d.a}]})},78:function(t,a,s){"use strict";var e=s(19),r=(s.n(e),e.mixins.reactiveProp);a.a=e.Bar.extend({mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})}},[275]);
//# sourceMappingURL=app.559e6714b3707bc9ab33.js.map
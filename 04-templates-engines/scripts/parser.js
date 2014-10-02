var Parser = (function () {
    
    return function () {

      this.templateHandlebars = '{{#profiles}} <hr><h1>{{name}}</h1>'+
             '<h2><i>{{degree}}</i></h2>' +
             '<h3><u>Education</u>: {{education}}</h3>'+
             '<h3><u>Actual Job</u>: {{actual_job}}</h3>'+
             '<h3><u>Work experiencie</u>:</h3>'+
             '<h4><ul>'+
             '{{#jobs}} {{years}} - {{ocupation}} at {{at}}.<br> {{/jobs}}'+
             '</ul></h4>'+
             '{{/profiles}}';

      this.templateUnderscore = '<% var i; for(i=0; i<profiles.length;i++){ %>'+
             '<%var profile = profiles[i];%>'+
             '<hr><h1><%=profile.name%></h1>'+
             '<h2><i><%=profile.degree%></i></h2>'+
             '<h3><u>Education</u>: <%=profile.education%></h3>'+
             '<h3><u>Actual Job</u>: <%=profile.actual_job%></h3>'+
             '<h3><u>Work experiencie</u>:</h3>'+
             '<h4><ul>'+
             '<% var j,job;%>'+
             '<%for(j=0; j<profile.jobs.length;j++){ %>'+
             '<%job = profile.jobs[j];%>'+
             '<%=job.years%> - <%=job.ocupation%> at <%=job.at%>.<br><% } %>'+
             '</ul></h4><% } %>';

      this.templateDust = '{#profiles} <hr><h1>{name}</h1>'+
             '<h2><i>{degree}</i></h2>' +
             '<h3><u>Education</u>: {education}</h3>'+
             '<h3><u>Actual Job</u>: {actual_job}</h3>'+
             '<h3><u>Work experiencie</u>:</h3>'+
             '<h4><ul>'+
             '{#jobs} {years} - {ocupation} at {at}. <br> {/jobs}'+
             '</ul></h4>'+
             '{/profiles}';

    } 
    
})();

// Public methods
Parser.prototype.parseHandlebars = function(myJson){ 
  var templateH = Handlebars.compile(this.templateHandlebars);
  return templateH(myJson);
}
Parser.prototype.parseUnderscore = function(myJson) {
  var templateU =  _.template(this.templateUnderscore);
  return templateU(myJson);
}
Parser.prototype.parseDust = function(myJson) {
  var toCompile = dust.compile(this.templateDust,"intro");
  dust.loadSource(toCompile);
  var templateD;
  dust.render('intro',myJson,function(err, out) {
    temp = out;
    });
  return temp;
}


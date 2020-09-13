'use strict'

// Lib import
const Person = require('./libs/Person')
const Address = require('./libs/Address')
const Education = require('./libs/Education')
const Experience = require('./libs/Experience')
const KnowledgeArea = require('./libs/KnowledgeArea')
const Proficiency = require('./libs/Proficiency')
const Genarator = require('./libs/Genarator')

// MarTinazzI Construction
const MarTinazzI = (new Person('Rafael C. Martinazzi'))
  // personal information
  .setBirthday(14, 6, 1989)
  .setNationality('Brasileiro')

  // Address
  .addAddress(
    (new Address())
      .setCountry('Brasil')
      .setState('ES')
      .setCity('Vila Velha')
      .setNeighborhood('Aribiri')
  )

  // Education
  .addEducation(
    (new Education('E.E.E.F.M Florentino Avidos'))
      .setCourse('Ensino Médio')
      .setConclusion(12, 2010)
  )
  .addEducation(
    (new Education('CEET Vasco Coutinho'))
      .setCourse('Técnico em Informática')
      .setDuration(18, 'M')
      .setConclusion(12, 2013)
  )
  .addEducation(
    (new Education('CEET Vasco Coutinho'))
      .setCourse('Técnico em Programação de jogos digitais')
      .setDuration(18, 'M')
      .setConclusion(2, 2016)
  )
  .addEducation(
    (new Education('Universidade Estácio de Sá'))
      .setCourse('ANÁLISE E DESENVOLVIMENTO DE SISTEMAS')
      .setDuration(30, 'M')
      .setConclusion(6, 2021)
  )

  // Experience
  .addExperience(
    (new Experience('Blue Pixel'))
      .setBegin(5, 2015)
      .setConclusion(5, 2016)
      .addRole('Game Developer')
      .addRole('Backend Developer')
      .addRole('Frontend Developer')
      .addRole('SysAdmin')
      .addRole('Mobile Developer')
  )
  .addExperience(
    (new Experience('Mito Games'))
      .setBegin(6, 2016)
      .setConclusion(10, 2016)
      .addRole('Game Developer')
      .addRole('Backend Developer')
      .addRole('Frontend Developer')
      .addRole('SysAdmin')
      .addRole('Mobile Developer')
      .addRole('System Analyst')
      .addRole('Game Designer')
  )
  .addExperience(
    (new Experience('Blue Pixel'))
      .setBegin(11, 2015)
      .setConclusion(3, 2017)
      .addRole('Game Developer')
      .addRole('SysAdmin')
      .addRole('Technology Director')
      .addRole('Development Director')
  )
  .addExperience(
    (new Experience('Grupo Nasza'))
      .setBegin(4, 2017)
      .setConclusion(1, 2018)
      .addRole('Backend Developer')
      .addRole('Frontend Developer')
      .addRole('SysAdmin')
      .addRole('Mobile Developer')
      .addRole('Technology Director')
  )
  .addExperience(
    (new Experience('Artmark Mobile'))
      .setBegin(2, 2018)
      .setConclusion(3, 2019)
      .addRole('Backend Developer')
      .addRole('Frontend Developer')
      .addRole('SysAdmin')
      .addRole('Mobile Developer')
  )
  .addExperience(
    (new Experience('INFLOR Consultoria e Sistemas LTDA'))
      .setBegin(6, 2018)
      .addRole('Backend Developer')
      .addRole('Frontend Developer')
      .addRole('Mobile Developer')
  )
  // Knowledge Map
  .addKnowledgeArea(
    new KnowledgeArea('Programming language')
      .addProficiency(
        (new Proficiency('JavaScript'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Java'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Dart'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Kotlin'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Groovy'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('JSON'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('YAML'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('C#'))
          .setSkillLevel(3)
      )
      .addProficiency(
        (new Proficiency('PHP'))
          .setSkillLevel(3)
      )
      .addProficiency(
        (new Proficiency('Bash'))
          .setSkillLevel(5)
      )
  )
  .addKnowledgeArea(
    new KnowledgeArea('Back-end')
      .addProficiency(
        (new Proficiency('Node.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Quarkus'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Aqueduct'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Express.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Sequelize.js'))
          .setSkillLevel(5)
      )
  )
  .addKnowledgeArea(
    new KnowledgeArea('Front-end')
      .addProficiency(
        (new Proficiency('Knockout.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Angular'))
          .setSkillLevel(3)
      )
      .addProficiency(
        (new Proficiency('Vue.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Vue.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Vuetify.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Handlebars.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Markdown'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Android Native'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('iOS Native'))
          .setSkillLevel(2)
      )
      .addProficiency(
        (new Proficiency('Cordova'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Flutter'))
          .setSkillLevel(4)
      )
  )
  .addKnowledgeArea(
    new KnowledgeArea('Databases')
      .addProficiency(
        (new Proficiency('MySQL/MariaDB'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('MongoDB'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Loki.js'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Oracle DataBase'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('SQL Server'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('PostgreSQL'))
          .setSkillLevel(4)
      )
  )
  .addKnowledgeArea(
    new KnowledgeArea('Infrastructure')
      .addProficiency(
        (new Proficiency('GNU/Linux'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Apache HTTPD'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('NGINX'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('PM2'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Tomcat'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Let\'s Encrypt'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Bacula'))
          .setSkillLevel(4)
      )
  )
  .addKnowledgeArea(
    new KnowledgeArea('Tools')
      .addProficiency(
        (new Proficiency('Maven'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Gradle'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Gulp.js'))
          .setSkillLevel(4)
      )
      .addProficiency(
        (new Proficiency('Git'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('Regex'))
          .setSkillLevel(5)
      )
      .addProficiency(
        (new Proficiency('EMMET'))
          .setSkillLevel(5)
      )
  )

new Genarator(MarTinazzI)
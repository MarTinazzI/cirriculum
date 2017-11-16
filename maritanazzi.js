"use strict";

// Lib import
const Person = require('./libs/Person');
const Address = require('./libs/Address');
const Education = require('./libs/Education');
const Experience = require('./libs/Experience');
const Proficiency = require('./libs/Proficiency');
const Genarator = require('./libs/Genarator');


// MarTinazzI Construction
let MarTinazzI = (new Person('Rafael Costa Martinazzi'))
// personal information
    .setBirthday(14, 6, 1989)
    .setNationality("Brasileiro")
    .addMail('data.dyne@hotmail.com')
    .addPhone(27, 981276906)
    .addPhone(27, 988063632)

    // Address
    .addAddress(
        (new Address())
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
            .setConclusion(6, 2013)
    )
    .addEducation(
        (new Education('CEET Vasco Coutinho'))
            .setCourse('Técnico em Programação de jogos digitais')
            .setDuration(18, 'M')
            .setConclusion(12, 2015)
    )

    // Experience
    .addExperience(
        (new Experience('Blue Pixel'))
            .setBegin(5, 2015)
            .setConclusion(5, 2016)
            .addRole('Programador de jogos')
            .addRole('Programador de backend')
            .addRole('Programador de frontend')
            .addRole('Administrador de sistemas')
            .addRole('Programador mobile Cordova')
    )
    .addExperience(
        (new Experience('Mito Games'))
            .setBegin(6, 2016)
            .setConclusion(10, 2016)
            .addRole('Programador de jogos')
            .addRole('Programador de backend')
            .addRole('Programador de frontend')
            .addRole('Administrador de sistemas')
            .addRole('Programador mobile Cordova')
            .addRole('Analista de sistema')
            .addRole('Game Design')
    )
    .addExperience(
        (new Experience('Blue Pixel'))
            .setBegin(11, 2015)
            .setConclusion(3, 2017)
            .addRole('Programador de jogos')
            .addRole('Administrador de sistemas')
            .addRole('Diretor de tecnologia')
            .addRole('Diretor de desenvolvimento')
    )
    .addExperience(
        (new Experience('Grupo Nasza'))
            .setBegin(4, 2017)
            .addRole('Programador de backend')
            .addRole('Programador de frontend')
            .addRole('Administrador de sistemas')
            .addRole('Programador mobile Ionic')
            .addRole('Diretor de tecnologia')
    )

    // Proficiency
    .addProficiency(
        (new Proficiency('JavaScript'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Node.js'))
            .setSkillLevel(5)
    )
    .addProficiency(
        (new Proficiency('Knockout.js'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Angular 1'))
            .setSkillLevel(2)
    )
    .addProficiency(
        (new Proficiency('Angular 2'))
            .setSkillLevel(2)
    )
    .addProficiency(
        (new Proficiency('Vue.js'))
            .setSkillLevel(1)
    )
    .addProficiency(
        (new Proficiency('Gulp.js'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('Express.js'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Sequelize.js'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Handlebars.js'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('HTML'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('CSS'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('MySQL/MariaDB'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('MongoDB'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('Loki.js'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('Oracle DataBase'))
            .setSkillLevel(2)
    )
    .addProficiency(
        (new Proficiency('Java'))
            .setSkillLevel(3)
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
        (new Proficiency('GNU/Linux'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Apache HTTPD'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('NGINX'))
            .setSkillLevel(3)
    )
    .addProficiency(
        (new Proficiency('PM2'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Git'))
            .setSkillLevel(4)
    )
    .addProficiency(
        (new Proficiency('Markdown'))
            .setSkillLevel(4)
    );

new Genarator(MarTinazzI);
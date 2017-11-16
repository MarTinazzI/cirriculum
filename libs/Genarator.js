"use strict";

const fs = require('fs');

function Generator(person) {
    this.markdown = '';
    this.header1(person.fullName);
    this.breakline()
    this.horizontalRule();
    this.unorderedList(`${bold('Data de Nascimento:')} ${formatFullDate(person.birthday)}`);
    this.unorderedList(`${bold('Idade:')} ${person.age}`);
    this.unorderedList(`${bold('Nacionalidade:')} ${person.nationality}`);
    if (person.phoneList.length > 0) {
        this.unorderedList(`${bold('Telefones:')}`);
        for (let phone of person.phoneList) {
            this.unorderedList(formatPhone(phone.prefix, phone.number), '  ');
        }
    }
    if (person.mailList.length > 0) {
        this.unorderedList(`${bold('E-mails:')}`);
        for (let mail of person.mailList) {
            this.unorderedList(`${mail}`, '  ');
        }
    }
    this.breakline();

    if (person.address.length > 0) {
        this.header3("Endereço");
        for (let address of person.address) {
            this.unorderedList(`${bold('Bairro:')} ${address.neighborhood}`);
            this.unorderedList(`${bold('Cidade:')} ${address.city}`);
            this.unorderedList(`${bold('Estado:')} ${address.state}`);
        }
    }

    if (person.education.length > 0) {
        this.horizontalRule();
        this.header3("Formação");
        for (let education of person.education) {
            this.unorderedList(`${bold('Instituição:')} ${education.institution}`);
            this.unorderedList(`${bold('Curso:')} ${education.course}`);
            this.unorderedList(`${bold('Conclusão:')} ${formatDate(education.conclusion)}`);
            if (education.duration) {
                this.unorderedList(`${bold('Duração:')} ${education.duration.time} ${education.duration.type}`);
            }
            this.breakline();
        }
    }

    if (person.experience.length > 0) {
        this.horizontalRule();
        this.header3("Experiência");
        for (let experience of person.experience) {
            this.header4(experience.company);
            this.unorderedList(`${bold('Início:')} ${formatDate(experience.begin)}`);
            this.unorderedList(`${bold('Conclusão:')} ${formatDate(experience.conclusion)}`);
            this.unorderedList(`${bold('Função:')}`);
            for (let role of experience.role) {
                this.unorderedList(`${role}`, '  ');
            }
            this.breakline();
        }
    }

    if (person.proficiency.length > 0) {
        this.horizontalRule();
        this.header3("Proficiências");
        for (let proficiency of person.proficiency) {
            this.unorderedList(bold(proficiency.name));
            this.unorderedList(`${bold('Skill Level:')} ${proficiency.getSkillLevel()}`,'  ');
            this.breakline();
        }
    }

    this.exportJSON(person);
    this.exportMarkdown();
}


Generator.prototype.header1 = function (text) {
    this.markdown += `# ${text}\n`;
};

Generator.prototype.header3 = function (text) {
    this.markdown += `### ${text}\n`;
};

Generator.prototype.header4 = function (text) {
    this.markdown += `#### ${text}\n`;
};

Generator.prototype.header5 = function (text) {
    this.markdown += `##### ${text}\n`;
};

Generator.prototype.unorderedList = function (text, prefix = '') {
    this.markdown += `${prefix}- ${text}\n`;
};

Generator.prototype.horizontalRule = function () {
    this.markdown += `---\n`;
};

Generator.prototype.breakline = function () {
    this.markdown += `\n\n`;
};

Generator.prototype.exportMarkdown = function () {
    fs.writeFileSync('./README.md', this.markdown);
};

Generator.prototype.exportJSON = function (person) {
    fs.writeFileSync('./martinazzi.json', JSON.stringify(person, null, '\t'));
};


// Helpers
function bold(text) {
    return `**${text}**`;
}

function formatFullDate(d) {
    if (!d) return undefined;
    return `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}`;
}

function formatDate(d) {
    if (!d) return undefined;
    return `${(d.getMonth()+1)}/${d.getFullYear()}`;
}

function formatPhone(prefix, phone) {
    phone = "" + phone;
    if (phone.length > 8) {
        return `(${prefix}) ${(phone.replace(/(\d{5})(\d{4})/, '$1-$2'))}`;
    }
    return `(${prefix}) ${(phone.replace(/(\d{4})(\d{4})/, '$1-$2'))}`;

}

module.exports = Generator;
'use strict'

const fs = require('fs')

function Generator (person) {
  this.markdown = ''
  this.person = person
  let tmp
  tmp = this.printPerfil()

  tmp += this.printFormation()

  tmp += this.printExperience()

  tmp += this.printKnowledgeMap()

  this.exportJSON()
  this.markdown = tmp
  this.exportMarkdown()
}

Generator.prototype.printPerfil = function () {
  this.markdown = ''
  this.header1(this.person.fullName)
  this.unorderedList(`${bold('Birthday')} ${formatFullDate(this.person.birthday)}`)
  this.unorderedList(`${bold('Age:')} ${this.person.age}`)
  this.unorderedList(`${bold('Nationality:')} ${this.person.nationality}`)
  if (this.person.phoneList.length > 0) {
    this.unorderedList(`${bold('Phone:')}`)
    for (let phone of this.person.phoneList) {
      this.unorderedList(formatPhone(phone.prefix, phone.number), '  ')
    }
  }
  if (this.person.mailList.length > 0) {
    this.unorderedList(`${bold('E-mails:')}`)
    for (let mail of this.person.mailList) {
      this.unorderedList(`${mail}`, '  ')
    }
  }
  this.breakline()

  if (this.person.address.length > 0) {
    this.header3('Address')
    for (let address of this.person.address) {
      this.unorderedList(`${bold('District:')} ${address.neighborhood}`)
      this.unorderedList(`${bold('City:')} ${address.city}`)
      this.unorderedList(`${bold('State:')} ${address.state}`)
      this.unorderedList(`${bold('Country:')} ${address.country}`)
    }
  }
  this.breakline()
  return this.markdown
}

Generator.prototype.printFormation = function () {
  this.markdown = ''
  if (this.person.education.length > 0) {
    this.text('Formation')
    this.horizontalRule()
    for (let education of this.person.education) {
      this.unorderedList(`${bold('Institution:')} ${education.institution}`)
      this.unorderedList(`${bold('Course:')} ${education.course}`, '  ')
      this.unorderedList(`${bold('Conclusion:')} ${formatDate(education.conclusion)}`, '  ')
      if (education.duration) {
        this.unorderedList(`${bold('Duration:')} ${education.duration.time} ${education.duration.type}`, '  ')
      }
      this.breakline()
    }
  }
  return this.markdown
}

Generator.prototype.printExperience = function () {
  this.markdown = ''
  if (this.person.experience.length > 0) {
    this.text('Experience')
    this.horizontalRule()
    for (let experience of this.person.experience) {
      this.header4(experience.company)
      this.unorderedList(`${bold('Start:')} ${formatDate(experience.begin)}`)
      this.unorderedList(`${bold('End:')} ${formatDate(experience.conclusion)}`)
      this.unorderedList(`${bold('Role:')}`)
      for (let role of experience.role) {
        this.unorderedList(`${role}`, '  ')
      }
      this.breakline()
    }
  }
  return this.markdown
}

Generator.prototype.printKnowledgeArea = function (area) {
  this.markdown = ''
  if (this.person.knowledgeArea.length > 0) {
    for (let knowledgeArea of this.person.knowledgeArea) {
      if (knowledgeArea.name !== area) continue
      this.text(`Knowledge Area ${knowledgeArea.name}`)
      this.horizontalRule()
      if (knowledgeArea.proficiency.length > 0) {
        for (let proficiency of knowledgeArea.proficiency) {
          this.unorderedList(`${bold(proficiency.name)}: ${proficiency.getSkillLevel()}`)
        }
      }
    }
  }
  return this.markdown
}

Generator.prototype.printKnowledgeMap = function () {
  this.markdown = ''
  this.text(`Knowledge Map`)
  this.horizontalRule()
  if (this.person.knowledgeArea.length > 0) {
    for (let knowledgeArea of this.person.knowledgeArea) {
      this.header3(knowledgeArea.name)
      if (knowledgeArea.proficiency.length > 0) {
        for (let proficiency of knowledgeArea.proficiency) {
          this.unorderedList(`${bold(proficiency.name)}: ${proficiency.getSkillLevel()}`)
        }
      }
      this.breakline()
    }
  }
  return this.markdown
}

Generator.prototype.header1 = function (text) {
  this.markdown += `# ${text}\n`
}

Generator.prototype.header3 = function (text) {
  this.markdown += `### ${text}\n`
}

Generator.prototype.header4 = function (text) {
  this.markdown += `#### ${text}\n`
}

Generator.prototype.header5 = function (text) {
  this.markdown += `##### ${text}\n`
}

Generator.prototype.text = function (text) {
  this.markdown += `${text}\n`
}

Generator.prototype.unorderedList = function (text, prefix = '') {
  this.markdown += `${prefix}- ${text}\n`
}

Generator.prototype.horizontalRule = function () {
  this.markdown += `---\n`
}

Generator.prototype.breakline = function () {
  this.markdown += `\n\n`
}

Generator.prototype.exportMarkdown = function () {
  fs.writeFileSync('./README.md', this.markdown)
}

Generator.prototype.exportJSON = function () {
  fs.writeFileSync('./martinazzi.json', JSON.stringify(this.person, null, '\t'))
}

// Helpers
function bold (text) {
  return `**${text}**`
}

function formatFullDate (d) {
  if (!d) return undefined
  return `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()}`
}

function formatDate (d) {
  if (!d) return undefined
  return `${(d.getMonth() + 1)}/${d.getFullYear()}`
}

function formatPhone (prefix, phone) {
  phone = '' + phone
  if (phone.length > 8) {
    return `(${prefix}) ${(phone.replace(/(\d{5})(\d{4})/, '$1-$2'))}`
  }
  return `(${prefix}) ${(phone.replace(/(\d{4})(\d{4})/, '$1-$2'))}`

}

module.exports = Generator
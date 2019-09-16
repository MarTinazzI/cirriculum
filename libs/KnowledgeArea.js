
function KnowledgeArea(name) {
  this.name = name;

  this.proficiency = []

  return this;
}


KnowledgeArea.prototype.addProficiency = function (proficiency) {
  this.proficiency.push(proficiency);
  return this;
};

module.exports = KnowledgeArea


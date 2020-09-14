export class skillComboTree {
  root = null;
  constructor(baseSkillSet: any) {
    this.root = baseSkillSet;
  }

  addCombo(skillSet: any, skill: any) {
    skill.combo = skillSet;
  }

  setSkill(skill: any, newSkill: any) {}

  getSkill(skillName: any) {
    return;
  }
}

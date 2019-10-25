export class Survey {
  id: number;
  name: string;
  version: string;
  questions: SurveyQuestion[];

  constructor(survey) {
    for (const i in survey) {
      if (survey.hasOwnProperty(i)) {
        if (survey[i] !== null) {
          this[i] = survey[i];
        }
      }
    }

    if (this.questions) {
      this.questions = this.questions.map(question => new SurveyQuestion(question));
    }
  }
}

export class SurveyQuestion {
  id: number;
  name: string;

  constructor(question) {
    this.id = question.id;
    this.name = question.name;
  }
}

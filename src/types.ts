export interface Question {
    is_correct: boolean;
    stimulus: string;
    order: number;
    user_answers: any[];
    feedback: string;
  }

export interface Round {
    round_title: string;
    order: number;
    questions: Question[];
}

export interface ActivityTypeOne {
    activity_name: string;
    order: number;
    questions: Question[];
}

export interface ActivityTypeTwo {
    activity_name: string;
    order: number;
    questions: Round[];
}

export type Activity = ActivityTypeOne | ActivityTypeTwo; 

// export type QuestionNode = Question | Round;

export interface Quiz {
  name: string;
  heading: string;
  activities: Activity[];
}
  
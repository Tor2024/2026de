
export interface Exercise {
  type: 'fill-in-the-blank' | 'multiple-choice' | 'translation';
  question: string;
  options?: string[];
  answer: string;
}

export type WordType = 'noun' | 'verb' | 'adjective' | 'conjunction' | 'preposition' | 'other';

interface BaseVocabularyWord {
  german: string;
  russian: string;
}

interface Noun extends BaseVocabularyWord {
    type: 'noun';
    article: 'der' | 'die' | 'das';
    plural: string;
    pluralArticle: 'die' | '-';
    exampleSingular: string;
    examplePlural: string;
    isIrregular?: boolean;
}

interface Verb extends BaseVocabularyWord {
    type: 'verb';
    conjugation: string;
    example: string;
}

interface Adjective extends BaseVocabularyWord {
    type: 'adjective';
    comparative: string;
    superlative: string;
    example: string;
}

interface Conjunction extends BaseVocabularyWord {
    type: 'conjunction';
    structure: string;
    example: string;
}

interface Preposition extends BaseVocabularyWord {
    type: 'preposition';
    case: 'Akkusativ' | 'Dativ' | 'Wechselpräposition' | 'Genitiv';
    example: string;
}

interface OtherWord extends BaseVocabularyWord {
    type: 'other';
    example: string;
}

export type VocabularyWord = Noun | Verb | Adjective | Conjunction | Preposition | OtherWord;


export interface VocabularyTheme {
  theme: string;
  words: VocabularyWord[];
}

export interface Topic {
  id: string;
  title: string;
  explanation: string;
  exercises: Exercise[];
  vocabulary: VocabularyTheme[];
}

export interface Level {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Curriculum {
  levels: Level[];
}

import english from './english';
import filipino from './filipino';
import french from './french';
import hindi from './hindi';
import malayalam from './malayalam';
import arabic from './arabic';
import urdu from './urdu';
import { TLang } from '../utils';

const vocabularies: Record<TLang, any> = {
  en: english,
  fil: filipino,
  fr: french,
  hi: hindi,
  ml: malayalam,
  ar: arabic,
  ur: urdu,
};

export { IVocab } from './types';
export { default as languageLabels } from './languageLabels';
export default vocabularies;

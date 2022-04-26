import english from './english';
import filipino from './filipino';
import french from './french';
import hindi from './hindi';
import malayalam from './malayalam';
import arabic from './arabic';
import { TLang } from '../utils';

const vocabularies: Record<TLang, any> = {
  en: english,
  fi: filipino,
  fr: french,
  hi: hindi,
  ml: malayalam,
  ar: arabic,
};

export { IVocab } from './types';
export default vocabularies;

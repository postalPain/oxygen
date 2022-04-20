import english from './english';
import filipino from './filipino';
import french from './french';
import hindi from './hindi';
import malayalam from './malayalam';
import { getLanguageName, getLanguage, TLang } from './utils';

const vocabularies: Record<TLang, any> = {
  en: english,
  fi: filipino,
  fr: french,
  hi: hindi,
  ml: malayalam,
};

const vocab = {
  language: getLanguage(),
  languageName: getLanguageName(),
  vocabularies,
  get (): typeof english {
    return this.vocabularies[this.language];
  },
  t (str, ...args) {
    return str.replace(/{{.*?}}/g, () => args.shift());
  },
};

export default vocab;

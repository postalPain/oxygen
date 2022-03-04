import english from './english';
import filipino from './filipino';
import french from './french';
import hindi from './hindi';
import malayalam from './malayalam';
import { getLanguage, Languages, } from './utils';

const vocabularies = {
  [Languages.en]: english,
  [Languages.fi]: filipino,
  [Languages.fr]: french,
  [Languages.hi]: hindi,
  [Languages.ml]: malayalam,
};

const vocab = {
  language: getLanguage(),
  vocabularies,
  get (): typeof english {
    return this.vocabularies[this.language];
  },
  t (str, ...args) {
    return str.replace(/{{.*?}}/g, () => args.shift());
  },
};

export default vocab;
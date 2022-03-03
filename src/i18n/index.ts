import english from './english';
import filipino from './filipino';
import french from './french';
import hindi from './hindi';
import malayalam from './malayalam';
import { getLanguage, } from './utils';

const vocabularies = {
  english,
  filipino,
  french,
  hindi,
  malayalam,
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
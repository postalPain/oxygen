import vocabularies, { IVocab } from './vocabularies';
import { getLanguageName, getLanguage } from './utils';

const vocab = {
  getLanguage,
  getLanguageName,
  vocabularies,
  get (): IVocab {
    return this.vocabularies[getLanguage()];
  },
  t (str, ...args) {
    return str.replace(/{{.*?}}/g, () => args.shift());
  },
};

export default vocab;

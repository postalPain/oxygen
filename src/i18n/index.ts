import vocabularies, { IVocab, languageLabels } from './vocabularies';
import { getLanguageName, getLanguage } from './utils';

const vocab = {
  getLanguage,
  getLanguageName,
  vocabularies,
  languageLabels,
  get (): IVocab {
    return this.vocabularies[getLanguage()];
  },
  t (str, ...args) {
    return str.replace(/{{.*?}}/g, () => args.shift());
  },
};

export default vocab;

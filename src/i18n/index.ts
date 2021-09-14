// @ts-nocheck
/* eslint-disable */
import { getLanguage, } from './utils';
import en from './en';
import de from './de';


const vocabularies = {
  en,
  de,
};

export default {
  language: getLanguage(),
  vocabularies,
  get: function (): typeof en {
    return this.vocabularies[this.language];
  },
  t: function (str, ...args) {
    return str.replace(/{{.*?}}/g, () => args.shift());
  },
};

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import vocabulary from 'i18n';
import theme from 'config/theme';
import IconCheck from 'components/IconCheck';
import { getHeight, getWidth } from './window';


const vocab = vocabulary.get();

export enum LabelNames {
  eightOrMoreChars = 'eightOrMoreChars',
  oneLowercase = 'oneLowercase',
  oneUppercase = 'oneUppercase',
  oneNumericChar = 'oneNumericChar',
  oneSpecialChar = 'oneSpecialChar',
}
export type LabelNameTypes = LabelNames.eightOrMoreChars
| LabelNames.oneLowercase
| LabelNames.oneUppercase
| LabelNames.oneNumericChar
| LabelNames.oneSpecialChar;

export enum LabelState {
  default= 'default',
  matched = 'matched',
}

const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}$/gm;

type LabelStateTypes = LabelState.default | LabelState.matched;

interface ILabel {
  id: LabelNameTypes;
  state: LabelStateTypes;
  text: string;
}

const regExps = {
  [LabelNames.eightOrMoreChars]: /.{8,}$/gm,
  [LabelNames.oneLowercase]: /(?=[a-z]).{1,}$/gm,
  [LabelNames.oneUppercase]: /(?=[A-Z]).{1,}$/gm,
  [LabelNames.oneNumericChar]: /(?=.*\d).{1,}/gm,
  [LabelNames.oneSpecialChar]: /(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{1,}/gm,
};

const defaultLabelsList: ILabel[] = [
  { id: LabelNames.oneSpecialChar, state: LabelState.default, text: vocab.oneSpecialChar, },
  { id: LabelNames.eightOrMoreChars, state: LabelState.default, text: vocab.eightOrMoreChars, },
  { id: LabelNames.oneNumericChar, state: LabelState.default, text: vocab.oneNumericChar, },
  { id: LabelNames.oneLowercase, state: LabelState.default, text: vocab.oneLowercase, },
  { id: LabelNames.oneUppercase, state: LabelState.default, text: vocab.oneUppercase, },
];

const match = (password: string) => (regExp) => password.match(regExp);

const getLabels = (password: string) => {
  const matchPassword = match(password);
  return defaultLabelsList.map((defaultLabel) => {
    if (matchPassword(regExps[defaultLabel.id])) {
      return { ...defaultLabel, state: LabelState.matched };
    }
    return defaultLabel;
  });
};

const usePasswordRequirements = (passwordInputRef: string) => {
  const styles = useStyles();
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(false);
  const [requirementsLabels, setRequirementsLabels] = useState<ILabel[]>(defaultLabelsList);

  const getLabelsComponents = () => {
    return (
      <View style={styles.requirements}>
        {requirementsLabels.map((label) => {
          return (
            <View
              key={label.id}
              style={[
                styles.requirement,
                (label.state === LabelState.default) && styles.requirementDefault,
                (label.state === LabelState.matched) && styles.requirementMatched,
              ]}
            >
              {(label.state === LabelState.matched) && (
                <IconCheck size={10} />
              )}
              <Text
                style={[
                  styles.requirementText,
                  (label.state === LabelState.default) && styles.requirementDefault,
                  (label.state === LabelState.matched) && styles.requirementMatchedText,
                ]}
              >
                {label.text}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  useEffect(
    () => {
      const newPassword = passwordInputRef;
      if (!newPassword.match(passwordRegExp)) {
        setIsPasswordMatched(false);
        setRequirementsLabels(getLabels(newPassword));
      } else {
        setIsPasswordMatched(true);
        setRequirementsLabels(defaultLabelsList.map((l: ILabel) => ({ ...l, state: LabelState.matched })));
      }
    },
    [passwordInputRef]
  );

  return {
    isPasswordMatched,
    requirementsLabels: getLabelsComponents(),
  };
};


const useStyles = () => StyleSheet.create({
  requirements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: getHeight(1.5),
    marginBottom: 0,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getWidth(2),
    marginRight: getWidth(3),
    paddingVertical: getWidth(1),
    paddingHorizontal: getWidth(4),
    borderRadius: 16,
  },
  requirementText: {
    fontSize: getWidth(4),
  },
  requirementDefault: {
    backgroundColor: theme.colors.passwordRequirementLabelBackgroundDefault,
    color: theme.colors.passwordRequirementLabelTextDefault,
  },
  requirementMatched: {
    backgroundColor: theme.colors.passwordRequirementLabelBackgroundMatched,
  },
  requirementMatchedText: {
    marginLeft: getWidth(1),
    color: theme.colors.passwordRequirementLabelTextMatched,
  },
});

export default usePasswordRequirements;

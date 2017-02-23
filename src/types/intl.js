/* @flow */

export type IntlState = {
  defaultLocale: string,
  currentLocale: string,
  supportedLocales: SupportedLocale[],
  isDirty: bool,
  messages: {
    [key: string]: {
      id: string,
      defaultMessage: string
    }
  }
};

// TODO: When locals are added, a case should be added here.
export type SupportedLocale = 'en';

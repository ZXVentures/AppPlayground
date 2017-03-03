/* @flow */

export interface IntlState {
  defaultLocale: string,
  currentLocale: string,
  supportedLocales: SupportedLocale[],
  isDirty: boolean,
  messages: {
    [key: string]: {
      id: string,
      defaultMessage: string
    }
  }
};

// TODO: When locals are added, a case should be added here.
export type SupportedLocale = 'en';

import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    primary: string,
    primaryBackground: string,
    primaryText: string,
    secondaryBackground: string,
    secondaryText: string,
    fields: string,
    success: string,
    error: string,
    secondary: string,
    orange: string,
    purpleOptional: string,
    purpleExtraLight:string,
    purpleLight: string,
    white: string,
    white_15:string,
    white_17:string,
    white_31: string,
    white_40: string,
    white_45:string,
    white_50: string,
    white_60: string,
    white_80:string,
    gray: string,
    grayOptional: string,
    grayExtraLight: string,
    grayLight: string,
    grayMedium:string,
    green: string,
    gray_75: string,
    black:string
  }
  export interface TextProps {
    h5?: boolean;
    h6?: boolean;
    h7?: boolean;
    t1?: boolean;
    t2?: boolean;
    t3?: boolean;
    t4?: boolean;
    t5?: boolean;
    t6?:boolean;
    t7?:boolean;
    t8?:boolean;
  }
  export interface ButtonProps {
    variant?: string;
  }
  export interface ComponentTheme {
    Button: Partial<ButtonProps>;
  }
  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
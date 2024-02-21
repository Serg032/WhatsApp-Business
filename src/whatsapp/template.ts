export interface Components {
  components: [header?: Header, body?: Body, footer?: Footer];
}

export interface Header {
  type: "HEADER";
  format: "TEXT";
  text: string;
}

export interface Body {
  type: "BODY";
  text: string;
}
export interface Footer {
  type: "FOOTER";
  text: string;
}

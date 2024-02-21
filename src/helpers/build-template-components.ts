import { Body, Components, Footer, Header } from "src/whatsapp/template";

export const buildTemplatesComponents = (
  isHeader: boolean,
  isBody: boolean,
  isFooter: boolean,
  headerText?: string,
  bodyText?: string,
  footerText?: string,
): Components => {
  const components: Components = { components: [] };
  if (isHeader) {
    components.components.push(buildHeader(headerText));
  }
  if (isBody) {
    components.components.push(buildBody(bodyText));
  }
  if (isFooter) {
    components.components.push(buildFooter(footerText));
  }

  return components;
};

const buildHeader = (text: string): Header => {
  return {
    type: "HEADER",
    format: "TEXT",
    text,
  };
};

const buildBody = (text: string): Body => {
  return {
    type: "BODY",
    text,
  };
};

const buildFooter = (text: string): Footer => {
  return {
    type: "FOOTER",
    text,
  };
};

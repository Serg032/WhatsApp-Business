import "dotenv/config";
import { Injectable } from "@nestjs/common";
import { buildTemplatesComponents } from "src/helpers/build-template-components";

export enum TemplateCategory {
  AUTHENTICATION,
  MARKETING,
  UTILITY,
}

@Injectable()
export class WhatsappService {
  private rootUrl = `https://graph.facebook.com/v18.0/${process.env.PHONE_NUMBER_ID}/messages`;
  private createTemplateUrl = `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/message_templates`;
  private destinationNumber = process.env.DESTINATION_NUMBER;
  private headers = {
    Authorization: `Bearer ${process.env.TEMPORAL_TOKEN}`,
    "Content-Type": "application/json",
  };

  public async sendMessage() {
    try {
      const response = await fetch(this.rootUrl, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: this.destinationNumber,
          type: "template",
          template: {
            name: "hello_world",
            language: {
              code: "en_US",
            },
          },
        }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  public async sendCustomMessage(message: string) {
    try {
      const response = await fetch(this.rootUrl, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: this.destinationNumber,
          type: "text",
          text: {
            preview_url: false,
            body: message,
          },
        }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  public async createTemplate(
    name: string,
    category: TemplateCategory,
    isHeader: boolean,
    isBody: boolean,
    isFooter: boolean,
    headerText?: string,
    bodyText?: string,
    footerText?: string,
  ) {
    try {
      const response = await fetch(this.createTemplateUrl, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name,
          category,
          allow_category_change: true,
          language: "es",
          components: buildTemplatesComponents(
            isHeader,
            isBody,
            isFooter,
            headerText,
            bodyText,
            footerText,
          ).components,
        }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

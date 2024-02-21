import { Body, Controller, Get, Post } from "@nestjs/common";
import { TemplateCategory, WhatsappService } from "./whatsapp.service";

@Controller("whatsapp")
export class WhatsappController {
  constructor(private service: WhatsappService) {}
  @Post()
  async sendMessage() {
    return await this.service.sendMessage();
  }

  @Post("custom")
  async sendCustomMessage(@Body("message") message: string) {
    return await this.service.sendCustomMessage(message);
  }

  @Post("create-template")
  async createTemplate(
    @Body("name")
    name: string,
    @Body("category")
    category: TemplateCategory,
    @Body("isHeader")
    isHeader: boolean,
    @Body("isBody")
    isBody: boolean,
    @Body("isFooter")
    isFooter: boolean,
    @Body("headerText")
    headerText?: string,
    @Body("bodyText")
    bodyText?: string,
    @Body("footerText")
    footerText?: string,
  ) {
    return await this.service.createTemplate(
      name,
      category,
      isHeader,
      isBody,
      isFooter,
      headerText,
      bodyText,
      footerText,
    );
  }

  @Get()
  async getTemplate(): Promise<any> {
    return await this.service.getTemplates();
  }

  @Post("send-template")
  async sendTemplate() {
    return await this.service.sendTemplate();
  }
}

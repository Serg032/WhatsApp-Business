import { Body, Controller, Post } from "@nestjs/common";
import { WhatsappService } from "./whatsapp.service";

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
}
  
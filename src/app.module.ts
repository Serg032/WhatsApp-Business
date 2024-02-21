import { Module } from "@nestjs/common";
import { WhatsappController } from "./whatsapp/whatsapp.controller";
import { WhatsappService } from "./whatsapp/whatsapp.service";

@Module({
  imports: [],
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class AppModule {}

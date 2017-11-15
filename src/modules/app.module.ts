import { Module } from "@nestjs/common";
import { PingController } from "../controllers/ping.controller";

@Module({
    modules: [PingController]
})
export class ApplicationModule {}

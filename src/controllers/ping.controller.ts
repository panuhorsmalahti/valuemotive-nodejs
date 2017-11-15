import { Controller, Get, Req } from "@nestjs/common";

@Controller("ping")
export class PingController {
    @Get()
    ping(@Req() request) {
        return {
            message: "pong"
        };
    }
}

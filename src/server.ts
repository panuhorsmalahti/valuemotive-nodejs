import * as bodyParser from "body-parser";
import * as express from "express";
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { ApplicationModule } from "./modules/app.module";

const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));

const swaggerMetadata = {
    info: {
        title: "Valuemotive App",
        description: "Valuemotive App Description",
        contact: { email: "email@example.com" }
    }
};
const swaggerUrl = "/api-docs.json";
const swaggerRequestHandler = (app: INestApplication) => (
    request: express.Request,
    response: express.Response
) => {
    response.setHeader("Content-Type", "application/json");
    response.send(SwaggerModule.createDocument(app, swaggerMetadata));
};

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, expressApp);
    app.use(bodyParser.json());
    expressApp.get(swaggerUrl, swaggerRequestHandler(app));
    await app.listen(3000);
}

bootstrap();

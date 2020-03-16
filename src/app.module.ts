import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MyService} from './my/my.service';
import {CategoryModule} from './category/category.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./category/category.model";

@Module({
    imports: [
        CategoryModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nestjs_quickstart',
            entities: [Category]
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,
        MyService
    ],
})
export class AppModule {
}

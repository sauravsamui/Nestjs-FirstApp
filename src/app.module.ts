import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UserModule, AuthModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

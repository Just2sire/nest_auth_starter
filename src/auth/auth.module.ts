/* eslint-disable prettier/prettier */
import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'process';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, LocalStrategy,],
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigurableModuleBuilder],
      useFactory: async (config: ConfigurableModuleBuilder) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: parseInt(
            config.getOrThrow<string>('ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC'),
          ),
        },
      }),
      inject: [config],
    }),
  ],
  exports: [AuthService, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}

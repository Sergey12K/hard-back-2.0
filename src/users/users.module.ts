import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.models';
import { Role } from 'src/roles/roles.models';
import { UserRoles } from 'src/roles/user-roles.models';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef( () => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ],
  exports: [
    UsersService,

  ]
})
export class UsersModule {}
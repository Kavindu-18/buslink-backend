import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RolesGuard } from './guards/roles.guard';
import { UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register route
  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    const { name, email, password } = body;
    return await this.authService.register(name, email, password);
  }

  // Login route
  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ) {
    const { email, password } = body;
    return await this.authService.login(email, password);
  }
  // Protected route
  @UseGuards(new RolesGuard(['admin']))
  @Post('dashboard')
  async getAdminDashboard(@Body() body) {
    return 'Admin Dashboard Data';
  }
  
}

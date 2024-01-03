import { createParamDecorator } from '@nestjs/common';

export const SessionInfo = createParamDecorator((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.session;
});

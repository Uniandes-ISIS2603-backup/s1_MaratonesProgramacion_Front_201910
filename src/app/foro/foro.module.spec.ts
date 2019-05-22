import { ForoModule } from './foro.module';

describe('ForoModule', () => {
  let foroModule: ForoModule;

  beforeEach(() => {
    foroModule = new ForoModule();
  });

  it('should create an instance', () => {
    expect(foroModule).toBeTruthy();
  });
});

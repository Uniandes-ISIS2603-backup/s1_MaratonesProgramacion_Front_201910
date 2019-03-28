import { LenguajeModule } from './lenguaje.module';

describe('LenguajeModule', () => {
  let lenguajeModule: LenguajeModule;

  beforeEach(() => {
    lenguajeModule = new LenguajeModule();
  });

  it('should create an instance', () => {
    expect(lenguajeModule).toBeTruthy();
  });
});

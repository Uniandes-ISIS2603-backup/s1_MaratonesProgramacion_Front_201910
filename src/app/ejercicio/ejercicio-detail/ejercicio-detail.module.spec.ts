import { EjercicioDetailModule } from './ejercicio-detail.module';

describe('EjercicioDetailModule', () => {
  let ejercicioDetailModule: EjercicioDetailModule;

  beforeEach(() => {
    ejercicioDetailModule = new EjercicioDetailModule();
  });

  it('should create an instance', () => {
    expect(ejercicioDetailModule).toBeTruthy();
  });
});

import { FormModule } from './form.module';

describe('FormBuilderModule', () => {
  let formBuilderModule: FormBuilderModule;

  beforeEach(() => {
    formBuilderModule = new FormBuilderModule();
  });

  it('should create an instance', () => {
    expect(formBuilderModule).toBeTruthy();
  });
});

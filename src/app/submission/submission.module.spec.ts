import { SubmissionModule } from './submission.module';

describe('SubmissionModule', () => {
  let submissionModule: SubmissionModule;

  beforeEach(() => {
    submissionModule = new SubmissionModule();
  });

  it('should create an instance', () => {
    expect(submissionModule).toBeTruthy();
  });
});

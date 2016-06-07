import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliTestProjectAppComponent } from '../app/cli-test-project.component';

beforeEachProviders(() => [CliTestProjectAppComponent]);

describe('App: CliTestProject', () => {
  it('should create the app',
      inject([CliTestProjectAppComponent], (app: CliTestProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-test-project works!\'',
      inject([CliTestProjectAppComponent], (app: CliTestProjectAppComponent) => {
    expect(app.title).toEqual('cli-test-project works!');
  }));
});

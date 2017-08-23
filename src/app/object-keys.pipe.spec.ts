import { KeysPipe } from './object-keys.pipe';

describe('objectKeys', () => {
  it('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });
});

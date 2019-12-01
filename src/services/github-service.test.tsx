import { getUserData } from './github-service';

// we don't want to run this to avoid hitting rate limit, should change to auth requests
it.skip('includes user data we need', async () => {
  const response = await getUserData('ferjgar');
  // this is a bad test, should loop over interfaces from UsernameContextProps, but can't make it work with typescript
  expect(Object.keys(response).sort()).toEqual(['orgs', 'user']);
  expect(Object.keys(response.user)).toEqual(
    expect.arrayContaining(['avatar_url', 'name', 'login', 'html_url']),
  );
});

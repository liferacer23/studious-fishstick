import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  // console.log(req);

  return 'Hello, world! This is a Confluence skeleton app';
});

export const handler = resolver.getDefinitions();

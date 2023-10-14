import { StackContext, Api, EventBus } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/scrape.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

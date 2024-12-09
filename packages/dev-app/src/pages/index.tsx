/* eslint-disable @typescript-eslint/no-unsafe-call */
import dynamic from "next/dynamic";
import { parseRouterWithOptions } from "trpc-ui/parse/parseRouter";
import { RootComponent } from "trpc-ui/react-app/Root";
import { trpc } from "trpc-ui/react-app/trpc";
import { appRouter } from "~/router";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const parse = parseRouterWithOptions(appRouter, { transformer: "superjson" });

const App = dynamic(
  Promise.resolve(() => (
    <RootComponent
      rootRouter={parse}
      options={{
        url: "http://localhost:3000/api/trpc",
        transformer: "superjson",
      }}
      trpc={trpc}
    />
  )),
  { ssr: false },
);

const Component = () => {
  return <App />;
};

// eslint-disable-next-line @typescript-eslint/require-await
export default Component;

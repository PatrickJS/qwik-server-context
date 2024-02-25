/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  // renderToString,
  // type RenderToStringOptions,
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
// import { _context } from "@builder.io/qwik";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";
let count = 0;
// export default function (opts: RenderToStringOptions) {
//   console.log("START SSR", count);
//   const res = renderToString(<Root />, {
//     manifest,
//     ...opts,
//     // Use container attributes to set attributes on the html tag.
//     containerAttributes: {
//       lang: "en-us",
//       ...opts.containerAttributes,
//     },
//     serverData: {
//       ...opts.serverData,
//     },
//   });
//   console.log("DONE", count++);
//   return res;
// }
export default function (opts: RenderToStreamOptions) {
  console.log("START SSR", count++);
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}

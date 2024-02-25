import {
  Resource,
  component$,
  useResource$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { getData } from "./getData";
import { getData2 } from "./getData2";

export const Home = component$(() => {
  const data = useSignal("Hello");
  const data2 = useSignal("world");
  const resource = useResource$(async () => {
    const resultA = await getData();
    const resultB = await getData2();
    return [resultA.data, resultB.data];
  });
  useTask$(async () => {
    data.value = (await getData("first server")).data;
    data2.value = (await getData2("first server")).data;
    console.log(data.value, data2.value);
  });

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <button
          onClick$={async function () {
            const resData1 = await getData2(Math.random());
            const resData2 = await getData2();
            // data.value = Math.random();
            data2.value = resData1.data;
            data2.value = resData2.data;
          }}
        >
          update
        </button>
        Can't wait to see what you build with qwik!
        <br />
        <Resource
          value={resource}
          onResolved={([resultA, resultB]) => (
            <>
              {resultA} {resultB}
            </>
          )}
        />
        <br />
        {data.value}
        {data2.value}
      </div>
    </>
  );
});

export default component$(() => {
  // const yo = _context;
  // console.log("_context", _context);
  // const data = useSignal("Hello");
  // const data2 = useSignal("world");
  // const resource = useResource$(async () => {
  //   // const self = this;
  //   // const resultA = await Promise.all([getData(), getData2()]);
  //   // console.log(yo === _context);
  //   const resultA = await getData();
  //   // console.log(yo === _context);
  //   const resultB = await getData2();
  //   // console.log(yo === _context);
  //   // const resultB = await getData2.bind(this)();

  //   // return resultA;
  //   return [resultA.data, resultB.data];
  // });
  // useTask$(async () => {
  //   data.value = (await getData("first server")).data;
  //   data2.value = (await getData2("first server")).data;
  //   console.log(data.value, data2.value);
  // });
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <Home />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

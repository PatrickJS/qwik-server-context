// import { useServerData } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

export const getData2 = server$(async function (data?: any) {
  const req = this as any;
  if (!req) {
    console.error("NO CONTEXT");
    throw new Error("NO CONTEXT");
  }
  // const serverData = useServerData("x-id");
  const userValue1 = req.cookie.get("x-id");
  console.log("userValue1", userValue1);
  await new Promise((res) =>
    setTimeout(res, userValue1.value === 1 ? 100 : 100)
  );

  const userValue2 = req.cookie.get("x-id");
  console.log("serverFunctionB", userValue1, userValue2);
  if (userValue1.value !== userValue2.value) {
    console.log("serverFunctionB", userValue1.value, userValue2.value);
    throw new Error("Cookie value changed");
  }
  // console.log("serverFunctionB", (this as any)?.cookie, _context);
  return {
    data: `Qwik2- cookie value: ${userValue2.value} ${data} ${Math.random()}`,
  };
});

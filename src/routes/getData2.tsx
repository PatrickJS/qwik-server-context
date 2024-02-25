import { server$ } from "@builder.io/qwik-city";

export const getData2 = server$(function (data?: any) {
  console.log("serverFunctionB", (this as any)?.cookie);
  // console.log("serverFunctionB", (this as any)?.cookie, _context);
  return {
    data: "Qwik2" + (data || Math.random()),
  };
});

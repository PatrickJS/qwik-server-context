import { server$ } from "@builder.io/qwik-city";

export const getData = server$(function (data?: any) {
  console.log("serverFunctionA", (this as any)?.cookie);
  return {
    data: "Qwik" + (data || Math.random()),
  };
});

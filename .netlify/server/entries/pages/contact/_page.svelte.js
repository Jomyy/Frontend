import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form action="https://api.staticforms.xyz/submit" method="post" data-svelte-h="svelte-ljvzkh"><input type="text" name="name" placeholder="Your Name"> <input type="text" name="email" placeholder="Your Email"> <textarea name="message"></textarea> <input type="text" name="honeypot" style="display:none"> <input type="hidden" name="accessKey" value="4ce00c4e-cffa-43e1-81a0-15118caeb705"> <input type="hidden" name="subject" value="Contact us from - example.com"> <input type="hidden" name="replyTo" value="@"> <input type="hidden" name="redirectTo" value="localhost:5173/contact/succes"> <input type="submit" value="Submit"></form>`;
});
export {
  Page as default
};

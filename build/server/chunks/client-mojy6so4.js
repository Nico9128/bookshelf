import './exports-BXvEiaiv.js';
import { x as noop, w as writable } from './index-DIH71No0.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function invalidateAll() {
  {
    throw new Error("Cannot call invalidateAll() on the server");
  }
}

export { invalidateAll as i, stores as s };
//# sourceMappingURL=client-mojy6so4.js.map

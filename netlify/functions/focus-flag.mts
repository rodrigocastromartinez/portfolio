import { getStore } from "@netlify/blobs"

const STORE_NAME = "site-config"
const KEY = "homepage-focus"
const DEFAULT_FOCUS = "developer"
const VALID_VALUES = new Set(["developer", "mentor"])

export default async () => {
  const store = getStore(STORE_NAME)
  const stored = await store.get(KEY)
  const focus = VALID_VALUES.has(stored as string) ? stored : DEFAULT_FOCUS

  return new Response(JSON.stringify({ focus }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  })
}

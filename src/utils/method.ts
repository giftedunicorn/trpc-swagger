import { OpenApiMethod } from "../types"

export const acceptsRequestBody = (method: OpenApiMethod) => {
  return !(method === "GET" || method === "DELETE");

}

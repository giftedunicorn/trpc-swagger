import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$2, readBody, getResponseStatusText } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/h3/dist/index.mjs';
import { TRPCError, initTRPC } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/@trpc/server/dist/index.mjs';
import cloneDeep from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/lodash.clonedeep/index.js';
import parse from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/co-body/index.js';
import { OpenAPIV3 } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/openapi-types/dist/index.js';
import { z } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/zod/lib/index.mjs';
import zodToJsonSchema from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/zod-to-json-schema/dist/esm/index.js';
import { createNuxtApiHandler } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/trpc-nuxt/dist/index.mjs';
import jwt from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/jsonwebtoken/index.js';
import crypto from 'crypto';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/devalue/index.js';
import destr from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery as getQuery$1, withQuery, withTrailingSlash } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/ohash/dist/index.mjs';
import { renderSSRHead } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/defu/dist/defu.mjs';
import { createStorage, prefixStorage } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/consola/dist/index.mjs';
import devalue from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { getContext } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/unctx/dist/index.mjs';
import { version, unref } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/vercjames/Nexrage/trpc-swagger/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t$1=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t$1==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _iX5kz0A17w = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs";

const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _Gt5WO06XTB = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const stack = getStack();
    if (stack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename: extractFilenameFromStack(stack),
      // Clean up file names in stack trace
      stack: normalizeFilenames(stack)
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    htmlContext.bodyAppend.unshift(`<script>window.__NUXT_LOGS__ = ${devalue(asyncContext.use().logs)}<\/script>`);
  });
};
const EXCLUDE_TRACE_RE = /^.*at.*(\/node_modules\/(.*\/)?(nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/.*|core\/runtime\/nitro.*)$\n?/gm;
function getStack() {
  const stack = new Error();
  Error.captureStackTrace(stack);
  return stack.stack?.replace(EXCLUDE_TRACE_RE, "").replace(/^Error.*\n/, "") || "";
}
const FILENAME_RE = /at.*\(([^:)]+)[):]/;
const FILENAME_RE_GLOBAL = /at.*\(([^)]+)\)/g;
function extractFilenameFromStack(stacktrace) {
  return stacktrace.match(FILENAME_RE)?.[1].replace(withTrailingSlash(rootDir), "");
}
function normalizeFilenames(stacktrace) {
  return stacktrace.replace(FILENAME_RE_GLOBAL, (match, filename) => match.replace(filename, filename.replace("file:///", "/").replace(/:.*$/, "")));
}
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const plugins = [
  _iX5kz0A17w,
_Gt5WO06XTB
];

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_tOmJi0 = () => Promise.resolve().then(function () { return ____trpc_$1; });
const _lazy_zp5nvc = () => Promise.resolve().then(function () { return openapi_json$1; });
const _lazy_fMVxgz = () => Promise.resolve().then(function () { return _trpc_$1; });
const _lazy_n3No4n = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/**:trpc', handler: _lazy_tOmJi0, lazy: true, middleware: false, method: undefined },
  { route: '/api/openapi.json', handler: _lazy_zp5nvc, lazy: true, middleware: false, method: undefined },
  { route: '/api/trpc/:trpc', handler: _lazy_fMVxgz, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_n3No4n, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_n3No4n, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$2(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const TRPC_ERROR_CODE_HTTP_STATUS = {
  PARSE_ERROR: 400,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  TIMEOUT: 408,
  CONFLICT: 409,
  CLIENT_CLOSED_REQUEST: 499,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  METHOD_NOT_SUPPORTED: 405,
  TOO_MANY_REQUESTS: 429,
  UNPROCESSABLE_CONTENT: 422,
  NOT_IMPLEMENTED: 500
};
function getErrorFromUnknown(cause) {
  if (cause instanceof Error && cause.name === "TRPCError") {
    return cause;
  }
  let errorCause;
  let stack;
  if (cause instanceof Error) {
    errorCause = cause;
    stack = cause.stack;
  }
  const error = new TRPCError({
    message: "Internal server error",
    code: "INTERNAL_SERVER_ERROR",
    cause: errorCause
  });
  if (stack) {
    error.stack = stack;
  }
  return error;
}

const acceptsRequestBody = (method) => {
  return !(method === "GET" || method === "DELETE");
};

const normalizePath = (path) => {
  return `/${path.replace(/^\/|\/$/g, "")}`;
};
const getPathParameters = (path) => {
  return Array.from(path.matchAll(/\{(.+?)\}/g)).map(([_, key]) => key);
};
const getPathRegExp = (path) => {
  const groupedExp = path.replace(/\{(.+?)\}/g, (_, key) => `(?<${key}>[^/]+)`);
  return new RegExp(`^${groupedExp}$`, "i");
};

const mergeInputs = (inputParsers) => {
  return inputParsers.reduce((acc, inputParser) => {
    return acc.merge(inputParser);
  }, z.object({}));
};
const getInputOutputParsers = (procedure) => {
  const { inputs, output } = procedure._def;
  return {
    inputParser: inputs.length >= 2 ? mergeInputs(inputs) : inputs[0],
    outputParser: output
  };
};
const getProcedureType = (procedure) => {
  if (procedure._def.query)
    return "query";
  if (procedure._def.mutation)
    return "mutation";
  if (procedure._def.subscription)
    return "subscription";
  throw new Error("Unknown procedure type");
};
const forEachOpenApiProcedure = (procedureRecord, callback) => {
  var _a;
  for (const [path, procedure] of Object.entries(procedureRecord)) {
    const { openapi } = (_a = procedure._def.meta) != null ? _a : {};
    if (openapi && openapi.enabled !== false) {
      const type = getProcedureType(procedure);
      callback({ path, type, procedure, openapi });
    }
  }
};

const instanceofZodType = (type) => {
  var _a;
  return !!((_a = type == null ? void 0 : type._def) == null ? void 0 : _a.typeName);
};
const instanceofZodTypeKind = (type, zodTypeKind) => {
  var _a;
  return ((_a = type == null ? void 0 : type._def) == null ? void 0 : _a.typeName) === zodTypeKind;
};
const instanceofZodTypeOptional = (type) => {
  return instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodOptional);
};
const instanceofZodTypeObject = (type) => {
  return instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodObject);
};
const instanceofZodTypeLikeVoid = (type) => {
  return instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodVoid) || instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodUndefined) || instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodNever);
};
const unwrapZodType = (type, unwrapPreprocess) => {
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodOptional)) {
    return unwrapZodType(type.unwrap(), unwrapPreprocess);
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodDefault)) {
    return unwrapZodType(type.removeDefault(), unwrapPreprocess);
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodLazy)) {
    return unwrapZodType(type._def.getter(), unwrapPreprocess);
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodEffects)) {
    if (type._def.effect.type === "refinement") {
      return unwrapZodType(type._def.schema, unwrapPreprocess);
    }
    if (type._def.effect.type === "transform") {
      return unwrapZodType(type._def.schema, unwrapPreprocess);
    }
    if (unwrapPreprocess && type._def.effect.type === "preprocess") {
      return unwrapZodType(type._def.schema, unwrapPreprocess);
    }
  }
  return type;
};
const instanceofZodTypeLikeString = (_type) => {
  const type = unwrapZodType(_type, false);
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodEffects)) {
    if (type._def.effect.type === "preprocess") {
      return true;
    }
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodUnion)) {
    return !type._def.options.some((option) => !instanceofZodTypeLikeString(option));
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodIntersection)) {
    return instanceofZodTypeLikeString(type._def.left) && instanceofZodTypeLikeString(type._def.right);
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodLiteral)) {
    return typeof type._def.value === "string";
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodEnum)) {
    return true;
  }
  if (instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodNativeEnum)) {
    return !Object.values(type._def.values).some((value) => typeof value === "number");
  }
  return instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodString);
};
const zodSupportsCoerce = "coerce" in z;
const instanceofZodTypeCoercible = (_type) => {
  const type = unwrapZodType(_type, false);
  return instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodNumber) || instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodBoolean) || instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodBigInt) || instanceofZodTypeKind(type, z.ZodFirstPartyTypeKind.ZodDate);
};

const zodSchemaToOpenApiSchemaObject = (zodSchema) => {
  return zodToJsonSchema(zodSchema, { target: "openApi3", $refStrategy: "none" });
};
const getParameterObjects = (schema, pathParameters, inType, example) => {
  if (!instanceofZodType(schema)) {
    throw new TRPCError({
      message: "Input parser expects a Zod validator",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
  const isRequired = !schema.isOptional();
  const unwrappedSchema = unwrapZodType(schema, true);
  if (pathParameters.length === 0 && instanceofZodTypeLikeVoid(unwrappedSchema)) {
    return void 0;
  }
  if (!instanceofZodTypeObject(unwrappedSchema)) {
    throw new TRPCError({
      message: "Input parser must be a ZodObject",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
  const { shape } = unwrappedSchema;
  const shapeKeys = Object.keys(shape);
  for (const pathParameter of pathParameters) {
    if (!shapeKeys.includes(pathParameter)) {
      throw new TRPCError({
        message: `Input parser expects key from path: "${pathParameter}"`,
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
  return shapeKeys.filter((shapeKey) => {
    const isPathParameter = pathParameters.includes(shapeKey);
    if (inType === "path") {
      return isPathParameter;
    }
    if (inType === "query") {
      return !isPathParameter;
    }
    return true;
  }).map((shapeKey) => {
    let shapeSchema = shape[shapeKey];
    const isShapeRequired = !shapeSchema.isOptional();
    const isPathParameter = pathParameters.includes(shapeKey);
    if (!instanceofZodTypeLikeString(shapeSchema)) {
      if (zodSupportsCoerce) {
        if (!instanceofZodTypeCoercible(shapeSchema)) {
          throw new TRPCError({
            message: `Input parser key: "${shapeKey}" must be ZodString, ZodNumber, ZodBoolean, ZodBigInt or ZodDate`,
            code: "INTERNAL_SERVER_ERROR"
          });
        }
      } else {
        throw new TRPCError({
          message: `Input parser key: "${shapeKey}" must be ZodString`,
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
    if (instanceofZodTypeOptional(shapeSchema)) {
      if (isPathParameter) {
        throw new TRPCError({
          message: `Path parameter: "${shapeKey}" must not be optional`,
          code: "INTERNAL_SERVER_ERROR"
        });
      }
      shapeSchema = shapeSchema.unwrap();
    }
    const { description, ...openApiSchemaObject } = zodSchemaToOpenApiSchemaObject(shapeSchema);
    return {
      name: shapeKey,
      in: isPathParameter ? "path" : "query",
      required: isPathParameter || isRequired && isShapeRequired,
      schema: openApiSchemaObject,
      description,
      example: example == null ? void 0 : example[shapeKey]
    };
  });
};
const getRequestBodyObject = (schema, pathParameters, contentTypes, example) => {
  if (!instanceofZodType(schema)) {
    throw new TRPCError({
      message: "Input parser expects a Zod validator",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
  const isRequired = !schema.isOptional();
  const unwrappedSchema = unwrapZodType(schema, true);
  if (pathParameters.length === 0 && instanceofZodTypeLikeVoid(unwrappedSchema)) {
    return void 0;
  }
  if (!instanceofZodTypeObject(unwrappedSchema)) {
    throw new TRPCError({
      message: "Input parser must be a ZodObject",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
  const mask = {};
  const dedupedExample = example && { ...example };
  pathParameters.forEach((pathParameter) => {
    mask[pathParameter] = true;
    if (dedupedExample) {
      delete dedupedExample[pathParameter];
    }
  });
  const dedupedSchema = unwrappedSchema.omit(mask);
  if (pathParameters.length > 0 && Object.keys(dedupedSchema.shape).length === 0) {
    return void 0;
  }
  const openApiSchemaObject = zodSchemaToOpenApiSchemaObject(dedupedSchema);
  const content = {};
  for (const contentType of contentTypes) {
    content[contentType] = {
      schema: openApiSchemaObject,
      example: dedupedExample
    };
  }
  return {
    required: isRequired,
    content
  };
};
const errorResponseObject = {
  description: "Error response",
  content: {
    "application/json": {
      schema: zodSchemaToOpenApiSchemaObject(z.object({
        message: z.string(),
        code: z.string(),
        issues: z.array(z.object({ message: z.string() })).optional()
      }))
    }
  }
};
const getResponsesObject = (schema, example, headers) => {
  if (!instanceofZodType(schema)) {
    throw new TRPCError({
      message: "Output parser expects a Zod validator",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
  const successResponseObject = {
    description: "Successful response",
    headers,
    content: {
      "application/json": {
        schema: zodSchemaToOpenApiSchemaObject(schema),
        example
      }
    }
  };
  return {
    200: successResponseObject,
    default: {
      $ref: "#/components/responses/error"
    }
  };
};

const getOpenApiPathsObject = (appRouter, securitySchemeNames) => {
  const pathsObject = {};
  const procedures = appRouter._def.procedures;
  forEachOpenApiProcedure(procedures, ({ path: procedurePath, type, procedure, openapi }) => {
    var _a, _b, _c, _d, _e;
    const procedureName = `${type}.${procedurePath}`;
    try {
      if (type === "subscription") {
        throw new TRPCError({
          message: "Subscriptions are not supported by OpenAPI v3",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
      const { method, protect, summary, description, tags, headers } = openapi;
      const path = normalizePath(openapi.path);
      const pathParameters = getPathParameters(path);
      const headerParameters = (headers == null ? void 0 : headers.map((header) => ({ ...header, in: "header" }))) || [];
      const httpMethod = OpenAPIV3.HttpMethods[method];
      if (!httpMethod) {
        throw new TRPCError({
          message: "Method must be GET, POST, PATCH, PUT or DELETE",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
      if ((_a = pathsObject[path]) == null ? void 0 : _a[httpMethod]) {
        throw new TRPCError({
          message: `Duplicate procedure defined for route ${method} ${path}`,
          code: "INTERNAL_SERVER_ERROR"
        });
      }
      const contentTypes = openapi.contentTypes || ["application/json"];
      if (contentTypes.length === 0) {
        throw new TRPCError({
          message: "At least one content type must be specified",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
      const { inputParser, outputParser } = getInputOutputParsers(procedure);
      pathsObject[path] = {
        ...pathsObject[path],
        [httpMethod]: {
          operationId: procedurePath.replace(/\./g, "-"),
          summary,
          description,
          tags,
          security: protect ? securitySchemeNames.map((name) => ({ [name]: [] })) : void 0,
          ...acceptsRequestBody(method) ? {
            requestBody: getRequestBodyObject(inputParser, pathParameters, contentTypes, (_b = openapi.example) == null ? void 0 : _b.request),
            parameters: [
              ...headerParameters,
              ...getParameterObjects(inputParser, pathParameters, "path", (_c = openapi.example) == null ? void 0 : _c.request) || []
            ]
          } : {
            requestBody: void 0,
            parameters: [
              ...headerParameters,
              ...getParameterObjects(inputParser, pathParameters, "all", (_d = openapi.example) == null ? void 0 : _d.request) || []
            ]
          },
          responses: getResponsesObject(outputParser, (_e = openapi.example) == null ? void 0 : _e.response, openapi.responseHeaders),
          ...openapi.deprecated ? { deprecated: openapi.deprecated } : {}
        }
      };
    } catch (error) {
      error.message = `[${procedureName}] - ${error.message}`;
      throw error;
    }
  });
  return pathsObject;
};

const openApiVersion = "3.0.3";
const generateOpenApiDocument = (appRouter, opts) => {
  var _a;
  const securitySchemes = opts.securitySchemes || {
    Authorization: {
      type: "http",
      scheme: "bearer"
    }
  };
  return {
    openapi: openApiVersion,
    info: {
      title: opts.title,
      description: opts.description,
      version: opts.version
    },
    servers: [
      {
        url: opts.baseUrl
      }
    ],
    paths: getOpenApiPathsObject(appRouter, Object.keys(securitySchemes)),
    components: {
      securitySchemes,
      responses: {
        error: errorResponseObject
      }
    },
    tags: (_a = opts.tags) == null ? void 0 : _a.map((tag) => ({ name: tag })),
    externalDocs: opts.docsUrl ? { url: opts.docsUrl } : void 0
  };
};

const getQuery = (req, url) => {
  const query = {};
  if (!req.query) {
    const parsedQs = {};
    url.searchParams.forEach((value, key) => {
      if (!parsedQs[key]) {
        parsedQs[key] = [];
      }
      parsedQs[key].push(value);
    });
    req.query = parsedQs;
  }
  Object.keys(req.query).forEach((key) => {
    const value = req.query[key];
    if (Array.isArray(value)) {
      const [firstValue] = value;
      if (typeof firstValue === "string") {
        query[key] = firstValue;
      }
    } else if (typeof value === "string") {
      query[key] = value;
    }
  });
  return query;
};
const BODY_100_KB = 1e5;
const getBody = async (req, maxBodySize = BODY_100_KB) => {
  if ("body" in req) {
    return req.body;
  }
  req.body = void 0;
  const contentType = req.headers["content-type"];
  if (contentType === "application/json" || contentType === "application/x-www-form-urlencoded") {
    try {
      const { raw, parsed } = await parse(req, {
        limit: maxBodySize,
        strict: false,
        returnRawBody: true
      });
      req.body = raw ? parsed : void 0;
    } catch (cause) {
      if (cause instanceof Error && cause.name === "PayloadTooLargeError") {
        throw new TRPCError({
          message: "Request body too large",
          code: "PAYLOAD_TOO_LARGE",
          cause
        });
      }
      let errorCause;
      if (cause instanceof Error) {
        errorCause = cause;
      }
      throw new TRPCError({
        message: "Failed to parse request body",
        code: "PARSE_ERROR",
        cause: errorCause
      });
    }
  }
  return req.body;
};

const createProcedureCache = (router) => {
  const procedureCache = /* @__PURE__ */ new Map();
  const { queries, mutations } = router._def;
  forEachOpenApiProcedure(queries, ({ path: queryPath, procedure, openapi }) => {
    const { method } = openapi;
    if (!procedureCache.has(method)) {
      procedureCache.set(method, /* @__PURE__ */ new Map());
    }
    const path = normalizePath(openapi.path);
    const pathRegExp = getPathRegExp(path);
    procedureCache.get(method).set(pathRegExp, {
      type: "query",
      path: queryPath,
      procedure
    });
  });
  forEachOpenApiProcedure(mutations, ({ path: mutationPath, procedure, openapi }) => {
    const { method } = openapi;
    if (!procedureCache.has(method)) {
      procedureCache.set(method, /* @__PURE__ */ new Map());
    }
    const path = normalizePath(openapi.path);
    const pathRegExp = getPathRegExp(path);
    procedureCache.get(method).set(pathRegExp, {
      type: "mutation",
      path: mutationPath,
      procedure
    });
  });
  return (method, path) => {
    var _a, _b;
    const procedureMethodCache = procedureCache.get(method);
    if (!procedureMethodCache) {
      return void 0;
    }
    const procedureRegExp = Array.from(procedureMethodCache.keys()).find((re) => re.test(path));
    if (!procedureRegExp) {
      return void 0;
    }
    const procedure = procedureMethodCache.get(procedureRegExp);
    const pathInput = (_b = (_a = procedureRegExp.exec(path)) == null ? void 0 : _a.groups) != null ? _b : {};
    return { procedure, pathInput };
  };
};

const createOpenApiNodeHttpHandler = (opts) => {
  const router = cloneDeep(opts.router);
  {
    generateOpenApiDocument(router, { title: "", version: "", baseUrl: "" });
  }
  const { createContext, responseMeta, onError, maxBodySize } = opts;
  const getProcedure = createProcedureCache(router);
  return async (req, res, next) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const sendResponse = (statusCode, headers, body) => {
      res.statusCode = statusCode;
      res.setHeader("Content-Type", "application/json");
      for (const [key, value] of Object.entries(headers)) {
        if (typeof value !== "undefined") {
          res.setHeader(key, value);
        }
      }
      res.end(JSON.stringify(body));
    };
    const method = req.method;
    const reqUrl = req.url;
    const url = new URL(reqUrl.startsWith("/") ? `http://127.0.0.1${reqUrl}` : reqUrl);
    const path = normalizePath(url.pathname);
    const { procedure, pathInput } = (_a = getProcedure(method, path)) != null ? _a : {};
    let input;
    let ctx;
    let data;
    try {
      if (!procedure) {
        if (next) {
          return next();
        }
        if (method === "HEAD") {
          sendResponse(204, {}, void 0);
          return;
        }
        throw new TRPCError({
          message: "Not found",
          code: "NOT_FOUND"
        });
      }
      const useBody = acceptsRequestBody(method);
      const schema = getInputOutputParsers(procedure.procedure).inputParser;
      const unwrappedSchema = unwrapZodType(schema, true);
      if (!instanceofZodTypeLikeVoid(unwrappedSchema)) {
        input = {
          ...useBody ? await getBody(req, maxBodySize) : getQuery(req, url),
          ...pathInput
        };
      }
      if (zodSupportsCoerce) {
        if (instanceofZodTypeObject(unwrappedSchema)) {
          Object.values(unwrappedSchema.shape).forEach((shapeSchema) => {
            const unwrappedShapeSchema = unwrapZodType(shapeSchema, false);
            if (instanceofZodTypeCoercible(unwrappedShapeSchema)) {
              unwrappedShapeSchema._def.coerce = true;
            }
          });
        }
      }
      ctx = await (createContext == null ? void 0 : createContext({ req, res }));
      const caller = router.createCaller(ctx);
      const segments = procedure.path.split(".");
      const procedureFn = segments.reduce((acc, curr) => acc[curr], caller);
      data = await procedureFn(input);
      const meta = responseMeta == null ? void 0 : responseMeta({
        type: procedure.type,
        paths: [procedure.path],
        ctx,
        data: [data],
        errors: []
      });
      const statusCode = (_b = meta == null ? void 0 : meta.status) != null ? _b : 200;
      const headers = (_c = meta == null ? void 0 : meta.headers) != null ? _c : {};
      const body = data;
      sendResponse(statusCode, headers, body);
    } catch (cause) {
      const error = getErrorFromUnknown(cause);
      onError == null ? void 0 : onError({
        error,
        type: (_d = procedure == null ? void 0 : procedure.type) != null ? _d : "unknown",
        path: procedure == null ? void 0 : procedure.path,
        input,
        ctx,
        req
      });
      const meta = responseMeta == null ? void 0 : responseMeta({
        type: (_e = procedure == null ? void 0 : procedure.type) != null ? _e : "unknown",
        paths: (procedure == null ? void 0 : procedure.path) ? [procedure == null ? void 0 : procedure.path] : void 0,
        ctx,
        data: [data],
        errors: [error]
      });
      const errorShape = router.getErrorShape({
        error,
        type: (_f = procedure == null ? void 0 : procedure.type) != null ? _f : "unknown",
        path: procedure == null ? void 0 : procedure.path,
        input,
        ctx
      });
      const isInputValidationError = error.code === "BAD_REQUEST" && error.cause instanceof Error && error.cause.name === "ZodError";
      const statusCode = (_h = (_g = meta == null ? void 0 : meta.status) != null ? _g : TRPC_ERROR_CODE_HTTP_STATUS[error.code]) != null ? _h : 500;
      const headers = (_i = meta == null ? void 0 : meta.headers) != null ? _i : {};
      const body = {
        message: isInputValidationError ? "Input validation failed" : (_k = (_j = errorShape == null ? void 0 : errorShape.message) != null ? _j : error.message) != null ? _k : "An error occurred",
        code: error.code,
        issues: isInputValidationError ? error.cause.errors : void 0
      };
      sendResponse(statusCode, headers, body);
    }
  };
};

const createOpenApiNuxtHandler = (opts) => {
  const openApiHttpHandler = createOpenApiNodeHttpHandler(opts);
  return defineEventHandler(async (event) => {
    var _a;
    let pathname = null;
    const { params } = event.context;
    if (params && (params == null ? void 0 : params.trpc)) {
      if (!params.trpc.includes("/")) {
        pathname = params.trpc;
      } else {
        pathname = params.trpc;
      }
    }
    if (pathname === null) {
      const error = new TRPCError({
        message: 'Query "trpc" not found - is the `trpc-swagger` file named `[...trpc].ts`?',
        code: "INTERNAL_SERVER_ERROR"
      });
      (_a = opts.onError) == null ? void 0 : _a.call(opts, {
        error,
        type: "unknown",
        path: void 0,
        input: void 0,
        ctx: void 0,
        req: event.node.req
      });
      event.node.res.statusCode = 500;
      event.node.res.setHeader("Content-Type", "application/json");
      const body = {
        message: error.message,
        code: error.code
      };
      event.node.res.end(JSON.stringify(body));
      return;
    }
    event.node.req.query = getQuery$2(event);
    event.node.req.url = normalizePath(pathname);
    await openApiHttpHandler(event.node.req, event.node.res);
  });
};

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const native = {
  randomUUID: crypto.randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

const database = {
  users: [
    {
      id: "3dcb4a1f-0c91-42c5-834f-26d227c532e2",
      email: "test@example.com",
      passcode: 1234,
      name: "Verc"
    },
    {
      id: "ea120573-2eb4-495e-be48-1b2debac2640",
      email: "alex@example.com",
      passcode: 9876,
      name: "Alex"
    },
    {
      id: "2ee1c07c-7537-48f5-b5d8-8740e165cd62",
      email: "sachin@example.com",
      passcode: 5678,
      name: "Sachin"
    }
  ],
  posts: [
    {
      id: "fc206d47-6d50-4b6a-9779-e9eeaee59aa4",
      content: "Hello world",
      userId: "3dcb4a1f-0c91-42c5-834f-26d227c532e2"
    },
    {
      id: "a10479a2-a397-441e-b451-0b649d15cfd6",
      content: "tRPC is so awesome",
      userId: "ea120573-2eb4-495e-be48-1b2debac2640"
    },
    {
      id: "de6867c7-13f1-4932-a69b-e96fd245ee72",
      content: "Know the ropes",
      userId: "3dcb4a1f-0c91-42c5-834f-26d227c532e2"
    },
    {
      id: "15a742b3-82f6-4fba-9fed-2d1328a4500a",
      content: "Fight fire with fire",
      userId: "ea120573-2eb4-495e-be48-1b2debac2640"
    },
    {
      id: "31afa9ad-bc37-4e74-8d8b-1c1656184a33",
      content: "I ate breakfast today",
      userId: "3dcb4a1f-0c91-42c5-834f-26d227c532e2"
    },
    {
      id: "557cb26a-b26e-4329-a5b4-137327616ead",
      content: "Par for the course",
      userId: "2ee1c07c-7537-48f5-b5d8-8740e165cd62"
    }
  ]
};

const jwtSecret = v4();
const t = initTRPC.context().meta().create({
  errorFormatter: ({ error, shape }) => {
    if (error.code === "INTERNAL_SERVER_ERROR" && false) {
      return { ...shape, message: "Internal server error" };
    }
    return shape;
  }
});
const createContext = async ({
  req,
  res
}) => {
  var _a;
  const requestId = v4();
  res.setHeader("x-request-id", requestId);
  let user = null;
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const userId = jwt.verify(token, jwtSecret);
      if (userId) {
        user = (_a = database.users.find((_user) => _user.id === userId)) != null ? _a : null;
      }
    }
  } catch (cause) {
    console.error(cause);
  }
  return { user, requestId };
};
const publicProcedure = t.procedure;
const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      message: "User not found",
      code: "UNAUTHORIZED"
    });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});
const authRouter = t.router({
  register: publicProcedure.meta({
    openapi: {
      method: "POST",
      path: "/auth/register",
      tags: ["auth"],
      summary: "Register as a new user"
    }
  }).input(
    z.object({
      email: z.string().email(),
      passcode: z.preprocess(
        // eslint-disable-next-line radix
        (arg) => typeof arg === "string" ? parseInt(arg) : arg,
        z.number().min(1e3).max(9999)
      ),
      name: z.string().min(3)
    })
  ).output(
    z.object({
      user: z.object({
        id: z.string().uuid(),
        email: z.string().email(),
        name: z.string().min(3)
      })
    })
  ).mutation(({ input }) => {
    let user = database.users.find((_user) => _user.email === input.email);
    if (user) {
      throw new TRPCError({
        message: "User with email already exists",
        code: "UNAUTHORIZED"
      });
    }
    user = {
      id: v4(),
      email: input.email,
      passcode: input.passcode,
      name: input.name
    };
    database.users.push(user);
    return { user: { id: user.id, email: user.email, name: user.name } };
  }),
  login: publicProcedure.meta({
    openapi: {
      method: "POST",
      path: "/auth/login",
      tags: ["auth"],
      summary: "Login as an existing user"
    }
  }).input(
    z.object({
      email: z.string().email(),
      passcode: z.preprocess(
        // eslint-disable-next-line radix
        (arg) => typeof arg === "string" ? parseInt(arg) : arg,
        z.number().min(1e3).max(9999)
      )
    })
  ).output(
    z.object({
      token: z.string()
    })
  ).mutation(({ input }) => {
    const user = database.users.find((_user) => _user.email === input.email);
    if (!user) {
      throw new TRPCError({
        message: "User with email not found",
        code: "UNAUTHORIZED"
      });
    }
    if (user.passcode !== input.passcode) {
      throw new TRPCError({
        message: "Passcode was incorrect",
        code: "UNAUTHORIZED"
      });
    }
    return {
      token: jwt.sign(user.id, jwtSecret)
    };
  })
});
const usersRouter = t.router({
  getUsers: publicProcedure.meta({
    openapi: {
      method: "GET",
      path: "/users",
      tags: ["users"],
      summary: "Read all users"
    }
  }).input(z.void()).output(
    z.object({
      users: z.array(
        z.object({
          id: z.string().uuid(),
          email: z.string().email(),
          name: z.string()
        })
      )
    })
  ).query(() => {
    const users = database.users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name
    }));
    return { users };
  }),
  getUserById: publicProcedure.meta({
    openapi: {
      method: "GET",
      path: "/users/{id}",
      tags: ["users"],
      summary: "Read a user by id"
    }
  }).input(
    z.object({
      id: z.string().uuid()
    })
  ).output(
    z.object({
      user: z.object({
        id: z.string().uuid(),
        email: z.string().email(),
        name: z.string()
      })
    })
  ).query(({ input }) => {
    const user = database.users.find((_user) => _user.id === input.id);
    if (!user) {
      throw new TRPCError({
        message: "User not found",
        code: "NOT_FOUND"
      });
    }
    return { user };
  })
});
const postsRouter = t.router({
  getPosts: publicProcedure.meta({
    openapi: {
      method: "GET",
      path: "/posts",
      tags: ["posts"],
      summary: "Read all posts"
    }
  }).input(
    z.object({
      userId: z.string().uuid().optional()
    })
  ).output(
    z.object({
      posts: z.array(
        z.object({
          id: z.string().uuid(),
          content: z.string(),
          userId: z.string().uuid()
        })
      )
    })
  ).query(({ input }) => {
    let { posts } = database;
    if (input.userId) {
      posts = posts.filter((post) => {
        return post.userId === input.userId;
      });
    }
    return { posts };
  }),
  getPostById: publicProcedure.meta({
    openapi: {
      method: "GET",
      path: "/posts/{id}",
      tags: ["posts"],
      summary: "Read a post by id"
    }
  }).input(
    z.object({
      id: z.string().uuid()
    })
  ).output(
    z.object({
      post: z.object({
        id: z.string().uuid(),
        content: z.string(),
        userId: z.string().uuid()
      })
    })
  ).query(({ input }) => {
    const post = database.posts.find((_post) => _post.id === input.id);
    if (!post) {
      throw new TRPCError({
        message: "Post not found",
        code: "NOT_FOUND"
      });
    }
    return { post };
  }),
  createPost: protectedProcedure.meta({
    openapi: {
      method: "POST",
      path: "/posts",
      tags: ["posts"],
      protect: true,
      summary: "Create a new post"
    }
  }).input(
    z.object({
      content: z.string().min(1).max(140)
    })
  ).output(
    z.object({
      post: z.object({
        id: z.string().uuid(),
        content: z.string(),
        userId: z.string().uuid()
      })
    })
  ).mutation(({ input, ctx }) => {
    const post = {
      id: v4(),
      content: input.content,
      userId: ctx.user.id
    };
    database.posts.push(post);
    return { post };
  }),
  updatePostById: protectedProcedure.meta({
    openapi: {
      method: "PUT",
      path: "/posts/{id}",
      tags: ["posts"],
      protect: true,
      summary: "Update an existing post"
    }
  }).input(
    z.object({
      id: z.string().uuid(),
      content: z.string().min(1)
    })
  ).output(
    z.object({
      post: z.object({
        id: z.string().uuid(),
        content: z.string(),
        userId: z.string().uuid()
      })
    })
  ).mutation(({ input, ctx }) => {
    const post = database.posts.find((_post) => _post.id === input.id);
    if (!post) {
      throw new TRPCError({
        message: "Post not found",
        code: "NOT_FOUND"
      });
    }
    if (post.userId !== ctx.user.id) {
      throw new TRPCError({
        message: "Cannot edit post owned by other user",
        code: "FORBIDDEN"
      });
    }
    post.content = input.content;
    return { post };
  }),
  deletePostById: protectedProcedure.meta({
    openapi: {
      method: "DELETE",
      path: "/posts/{id}",
      tags: ["posts"],
      protect: true,
      summary: "Delete a post"
    }
  }).input(
    z.object({
      id: z.string().uuid()
    })
  ).output(z.null()).mutation(({ input, ctx }) => {
    const post = database.posts.find((_post) => _post.id === input.id);
    if (!post) {
      throw new TRPCError({
        message: "Post not found",
        code: "NOT_FOUND"
      });
    }
    if (post.userId !== ctx.user.id) {
      throw new TRPCError({
        message: "Cannot delete post owned by other user",
        code: "FORBIDDEN"
      });
    }
    database.posts = database.posts.filter((_post) => _post !== post);
    return null;
  })
});
const appRouter = t.router({
  auth: authRouter,
  users: usersRouter,
  posts: postsRouter
});

const ____trpc_ = createOpenApiNuxtHandler({
  router: appRouter,
  createContext
});

const ____trpc_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____trpc_
});

const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Example CRUD API",
  description: "OpenAPI compliant REST API built using tRPC with Next.js",
  version: "1.0.0",
  baseUrl: "http://localhost:3000/api",
  docsUrl: "https://github.com/vercjames/trpc-swagger",
  tags: ["auth", "users", "posts"]
});

const openapi_json = defineEventHandler(() => {
  return openApiDocument;
});

const openapi_json$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: openapi_json
});

const _trpc_ = createNuxtApiHandler({
  router: appRouter,
  createContext
});

const _trpc_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _trpc_
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

const appTeleportTag = "div";

const appTeleportId = "teleports";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/vercjames/Nexrage/trpc-swagger/examples/with-nuxtjs/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
async function getIslandContext(event) {
  let url = event.path || "";
  url = url.substring("/__nuxt_island".length + 1) || "";
  const [componentName, hashId] = url.split("?")[0].replace(/\.json$/, "").split("_");
  const context = event.method === "GET" ? getQuery$2(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const APP_TELEPORT_OPEN_TAG = `<${appTeleportTag} id="${appTeleportId}">` ;
const APP_TELEPORT_CLOSE_TAG = `</${appTeleportTag}>` ;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${` id="${appRootId}"` }>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^${APP_ROOT_OPEN_TAG}([\\s\\S]*)${APP_ROOT_CLOSE_TAG}$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$2(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery$1(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (joinTags([ssrContext.teleports?.[`#${appTeleportId}`]]) ) + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {
      link: [],
      style: []
    };
    for (const tag of await head.resolveTags()) {
      if (tag.tag === "link") {
        islandHead.link.push({ key: "island-link-" + hash(tag.props), ...tag.props });
      } else if (tag.tag === "style" && tag.innerHTML) {
        islandHead.style.push({ key: "island-style-" + hash(tag.innerHTML), innerHTML: tag.innerHTML });
      }
    }
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      state: ssrContext.payload.state,
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=(?:[^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext) {
    return {};
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext) {
    return {};
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid] || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map

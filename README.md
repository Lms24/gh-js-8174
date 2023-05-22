# GH 1847 Reproduction:

This sample app reproduces [a confirmed bug](https://github.com/getsentry/sentry-javascript/issues/8174) in the Sentry SvelteKit SDK.

## Install

To install and run, execute these commands in your terminal

```sh
yarn 
yarn build
yarn preview
```

## Reproducing the error

In `vite.config.js`, set `autoInstrument` to `true` 

This will cause the Sentry tracing headers to be attached to outgoing requests, as configured in `tracePropagationTargets` in `hooks.client.js`.
The added headers produce a cache-miss.

## Reproducing expected behavior

In `vite.config.js`, set  `autoInstrument` to `false` 

This will no longer attach the Sentry tracing headers to be attached to outgoing requests. Hence, the SDK doesn't cause a cache-miss anymore.

## Notes

`patch-package` is used to add a few debug console log statements to SvelteKit's client `fetchers.js` file to easily observe the cache hits and misses.
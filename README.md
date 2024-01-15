# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.426
---

{{HTTPSidebar}}

The HTTP **`426 Upgrade Required`** client error response code
indicates that the server refuses to perform the request using the current protocol but
might be willing to do so after the client upgrades to a different protocol.

The server sends an {{HTTPHeader("Upgrade")}} header with this response to indicate the
required protocol(s).

## Status

```http
426 Upgrade Required
```

## Examples

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocols`

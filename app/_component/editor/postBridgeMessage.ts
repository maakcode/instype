interface WebViewBridgeProtocol {
  onCharCountChange: number;
}

export function postBridgeMessage<T extends keyof WebViewBridgeProtocol>(
  key: T,
  payload: WebViewBridgeProtocol[T]
) {
  if (!window.ReactNativeWebView) return;
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ name: key, body: payload })
  );
}

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(data: string): void;
    };
  }
}

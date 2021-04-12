export default class JSToNative {
    static postMessage = (name, body) => {
        const handler = window.webkit.messageHandlers[name];
        handler.postMessage(body);
    }

    static schemeRoute = (path, param) => {
        let json = JSON.stringify(param);
        console.log('scheme---->', path, json);
        const url = `sl://lingjie.com/${path}?param=${json}`;
        window.location.href = url;
    }
}
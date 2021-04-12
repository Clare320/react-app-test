import JSToNative from './JSToNative';

export default class NativeToJS {

    constructor() {
        this.records = {};
    }

    nativeAction = (key, values) => {
        console.log('native call js->', key, values);
        const record = this.records[key];
        const { callback } = record;
        callback && callback(values);
        // records删除这条记录
    }

    jsAction = (eventName, param, callback) => {
        const key = Date.now() + '-' + eventName;
        const action = {};
        action.param = param;
        action.eventName = eventName;
        action.callback = callback;
        this.records[key] = action;

        const newParam = { 
            key, 
            ...param
        };

        console.log('jsAction--->', key, action, this.records, newParam);

        JSToNative.schemeRoute(eventName, newParam);
    }
}

(function () {
    if (!global.jsAction) {
        const nativeToJS = new NativeToJS();
        global.nativeAction = nativeToJS.nativeAction;
        global.jsAction = nativeToJS.jsAction;
    }
})();
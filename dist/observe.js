var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
export function observeFirstConnect(listener, element, containerOrRoot) {
    const observer = new MutationObserver(fullListener);
    const timer = window.setInterval(fullListener, 1000);
    let listened = false;
    function fullListener() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!element.isConnected || listened) {
                return;
            }
            listened = true;
            observer.disconnect();
            clearInterval(timer);
            yield listener();
        });
    }
    let container;
    if (containerOrRoot === undefined) {
        container = document.body.querySelector(':scope>.lr-struct>main>article');
    }
    else if (containerOrRoot instanceof ShadowRoot) {
        container = containerOrRoot.querySelector(':host>div');
    }
    else {
        container = containerOrRoot;
    }
    if (container === null) {
        container = document.body;
    }
    observer.observe(container, { childList: true, subtree: true });
}
export function observeAdjustments(adjust, element, containerOrRoot) {
    let taskNum = 0;
    const generator = (function () {
        return __asyncGenerator(this, arguments, function* () {
            while (true) {
                while (!(yield __await(adjust()))) {
                    yield __await(new Promise(r => setTimeout(r, 1000)));
                }
                element.dispatchEvent(new Event('adjust', { bubbles: true, composed: true }));
                taskNum--;
                yield yield __await(void 0);
            }
        });
    })();
    observeFirstConnect(() => __awaiter(this, void 0, void 0, function* () {
        element.addEventListener('adjust', (e) => __awaiter(this, void 0, void 0, function* () {
            if (e.eventPhase === e.BUBBLING_PHASE) {
                e.stopPropagation();
                if (taskNum < 2) {
                    taskNum++;
                    yield generator.next();
                }
            }
        }));
        taskNum++;
        yield generator.next();
    }), element, containerOrRoot);
}

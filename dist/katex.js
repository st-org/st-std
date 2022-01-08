const target = new EventTarget();
let renderToString;
target.addEventListener('load', async () => {
    renderToString = (await new Function(`return import('https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.mjs')`)()).default.renderToString;
    target.dispatchEvent(new Event('loaded'));
}, { once: true });
async function getFunction() {
    if (renderToString !== undefined) {
        return renderToString;
    }
    target.dispatchEvent(new Event('load'));
    return new Promise(r => {
        target.addEventListener('loaded', () => {
            r(renderToString);
        });
    });
}
const compilerToCustomCommand = new Map();
export function gen(options = {}) {
    return async (unit, compiler) => {
        const element = document.createElement('span');
        const array = [];
        const eles = [];
        for (const line of unit.children) {
            let string = '';
            for (const inline of line) {
                if (typeof inline === 'string') {
                    string += inline;
                    continue;
                }
                string += `{\\htmlClass{tmpPlaceholder${eles.length.toString()}}{}}`;
                eles.push(await compiler.compileUnit(inline));
            }
            array.push(string);
        }
        let string = array.join('\n');
        if (!options.noEnv) {
            let env = unit.tag;
            if (options.addStar) {
                env += '*';
            }
            string = `\\begin{${env}}${string}\\end{${env}}`;
        }
        let customCommand = compilerToCustomCommand.get(compiler);
        if (customCommand === undefined) {
            compilerToCustomCommand.set(compiler, customCommand = compiler.base.stdnToPlainString(compiler.extractor.extractGlobalChildren('katex', compiler.context.tagToGlobalOptions)));
        }
        if (customCommand.length > 0) {
            if (string.trimStart().startsWith("'")) {
                string = `${customCommand}\\\\\n${string}`;
            }
            else {
                string = `${customCommand}\n${string}`;
            }
        }
        const displayMode = options.display || unit.options.display === true;
        if (displayMode) {
            element.classList.add('display');
        }
        element.innerHTML = (await getFunction())(string, {
            displayMode,
            errorColor: 'var(--color-warn)',
            // globalGroup:true,
            output: 'html',
            strict: false,
            throwOnError: false,
            trust: true,
        });
        for (let i = 0; i < eles.length; i++) {
            const tmp = element.querySelector(`.tmpPlaceholder${i}`);
            if (tmp === null) {
                continue;
            }
            tmp.replaceWith(eles[i]);
        }
        return element;
    };
}

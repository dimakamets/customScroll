export  default {
    inserted: function (el, binding,vnode) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                el.removeEventListener('scroll', f);
            }
        }
        el.addEventListener('scroll', f);
        vnode.context.$emit('reCalc');

    }
}
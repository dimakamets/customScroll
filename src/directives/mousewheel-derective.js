export  default {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                el.removeEventListener('mousewheel', f)
                el.removeEventListener('DOMMouseScroll', f)
            }
        }
        el.addEventListener('mousewheel', f,false)
        el.addEventListener('DOMMouseScroll', f,false)

    }
}
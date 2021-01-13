<template>
    <div class="scroll-wrapper--outer" :class="{
        'vertical-scrollbar':verticalScrolling
    }"
    >
        <div class="scroll-wrapper" :class="wrapperClass" v-mousewheel="handleMouseWheel"

             v-scroll-on-element="handleScroll"
             ref="container">
            <div class="scroll-wrapper--inner">
                <slot></slot>
            </div>
        </div>
        <div class="scroll-wrapper--scrollbar"
             :class="{
            'vertical-scroll-track': verticalScrolling
             }"
             ref="scrollbar" v-show="showScrollBar">
            <div class="custom-scroll-thumb" :style="thumbStyle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomScroll",
        props: {
            wrapperClass: {
                type: String,
                default: ''
            },
            verticalScrolling: {
                type: Boolean,
                default: false
            },
            minSize: {
                type: Number,
                default: null
            }
        },
        data: function () {
            return {
                showScrollBar: true,
                thumbStyle: {}
            }
        },
        computed: {
            setMinSize(){
                return this.minSize !== null
            },
            clientSizeParam(){
                return this.verticalScrolling ? 'clientHeight' : 'clientWidth'
            },
            scrollSizeParam(){
                return this.verticalScrolling ? 'scrollHeight' : 'scrollWidth'
            },
            scrollParam(){
                return this.verticalScrolling ? 'scrollTop' : 'scrollLeft'
            },
            sizeParam(){
                return this.verticalScrolling ? 'height' : 'width'
            },
            positionParam(){
                return this.verticalScrolling ? 'top' : 'left'
            }
        },
        methods: {
            handleScroll: function (evt, el = this.$refs.container) {
                const prevVal = this.showScrollBar;
                this.showScrollBar = el ? el[this.scrollSizeParam] > el[this.clientSizeParam] : false;
                if (this.showScrollBar) {

                    const contSize = (this.verticalScrolling ? this.$el.clientHeight : this.$el.clientWidth);
                    const newSize = (Math.ceil(this[this.verticalScrolling ? 'calcThumbHeight' : 'calcThumbWidth']()));
                    const sizeToSet = this.setMinSize ? (newSize > this.minSize ? newSize : this.minSize) : newSize;
                    const percentage = this.alreadyScrolledDistanceInPercent();
                    const newPosition = this.calcThumbPosition(sizeToSet, percentage);

                    this.thumbStyle = {
                        [this.sizeParam]:sizeToSet + "px",
                        [this.positionParam]:newPosition < 0 ? 0 : newPosition + "px",
                    }

                }
                if (!prevVal && this.showScrollBar) {
                    this.$nextTick(() => {
                        this.handleScroll()
                    })
                }

            },
            handleMouseWheel: function (evt, el) {
                this.showScrollBar = el ? el[this.scrollSizeParam] > el[this.clientSizeParam] : false;
                if (!this.verticalScrolling) {
                    if (this.showScrollBar) {
                        evt.preventDefault();
                    }
                    if (el.scrollWidth > el.clientWidth) {

                        const delta = Math.max(-1, Math.min(1, (evt.wheelDelta || -evt.detail)));
                        const prevVal = el.scrollLeft || 0;
                        el.scrollLeft = prevVal - (delta * 40)
                    }
                }
            },
            alreadyScrolledDistanceInPercent(){
                return this.$refs.container[this.scrollParam] /(this.$refs.container[this.scrollSizeParam]  - this.$refs.container[this.clientSizeParam])
            },
            calcThumbPosition(size, scrolledPercents){
                const containerSize = this.$refs.container[this.clientSizeParam];
                return (containerSize - Math.min(containerSize, size)) * scrolledPercents
            },
            calcThumbWidth() {
                if(!this.$refs['scrollbar']){
                    return  0
                }
                const newWidth =this.$refs['scrollbar'].clientWidth * this.$refs.container.clientWidth / this.$refs.container.scrollWidth;
                return  (this.$refs['scrollbar'].clientWidth === newWidth ? 0 : newWidth);
            },

            calcThumbHeight() {
                if(!this.$refs['scrollbar']){
                    return  0
                }
                const newHeight =  this.$refs['scrollbar'].clientHeight * this.$refs.container.clientHeight / this.$refs.container.scrollHeight;
                return (this.$refs['scrollbar'].clientHeight === newHeight ? 0 : newHeight);
            },
            setPosition(offset) {
                this.$refs.container[this.scrollParam] = offset;
            }
        },
        created() {
            this.$on('reCalc', this.handleScroll);
            this.$on('setPosition', this.setPosition);
            window.addEventListener('resize', this.handleScroll);
        },
        mounted() {
            this.showScrollBar = this.$refs.container ? this.$refs.container[this.scrollSizeParam] > this.$refs.container[this.clientSizeParam] : false;
        }
    }
</script>

<style lang="scss">
    @import "../base/vars";
    @import "../base/mixins";
    .scroll-wrapper {

        overflow: auto;
        position: relative;
        @include hideScrollbar;
        &--outer {
            position: relative;

            &:not(.vertical-scrollbar) {
                padding-bottom: 20px;
                max-height: 100%;
                box-sizing: border-box;
            }

            &.vertical-scrollbar {
                height: 100%;
                box-sizing: border-box;

                .scroll-wrapper {
                    display: block;
                    overflow: auto;
                    max-height: 100%;
                    box-sizing: border-box;
                    @include hideScrollbar;

                }
            }
        }

        &--inner {
            display: table;
        }

        &--scrollbar {
            position: absolute;
            background: $scrollBackground;
            @include bottom-left-corner;
            left: 0;
            margin: -2px 0 3px;
            @include size(100%, 2px);
            overflow: hidden;

            &.hide {
                display: none;
            }

            &.vertical-scroll-track {
                height: 100%;
                width: 2px;
                top: 0;
                right: 5px;
                left: auto;
                margin: 0;

                .custom-scroll-thumb {
                    background: $darkColor;
                    width: 2px;
                    height: auto;
                }
            }

            .custom-scroll-thumb {
                background: $darkColor;
                height: 2px;
                position: absolute;
            }

        }
    }
</style>
<template>
    <div id="app">
        <h2>vertical scroll</h2>
        <div class="example example_1">
            <CustomScroll :vertical-scrolling="true">
                <div class="example--inner">
                    Классический текст Lorem Ipsum, используемый с XVI века
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."

                    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    Английский перевод 1914 года, H. Rackham
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </div>
            </CustomScroll>
        </div>

        <h2>horizontal scroll</h2>
        <div class="example example_2">
            <CustomScroll>
                <div class="example--inner">
                    Классический текст Lorem Ipsum, используемый с XVI века
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."

                    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    Английский перевод 1914 года, H. Rackham
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </div>
            </CustomScroll>
        </div>
        <h2>min scrollbar height with vertical scrolling</h2>
        <div class="example example_3">
            <CustomScroll :vertical-scrolling="true" :min-size="100">
                <div class="example--inner">
                    Классический текст Lorem Ipsum, используемый с XVI века
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."

                    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    Английский перевод 1914 года, H. Rackham
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </div>
            </CustomScroll>
        </div>
        <h2>min scrollbar height with horizontal scrolling</h2>
        <div class="example example_4">
            <CustomScroll :min-size="145">
                <div class="example--inner">
                    Классический текст Lorem Ipsum, используемый с XVI века
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."

                    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    Английский перевод 1914 года, H. Rackham
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </div>
            </CustomScroll>
        </div>
        <h2>with toggle</h2>
        <button @click="toggleExample3">toggle block</button>
        <transition name="slide">
            <div v-if="showExample3">
                <div class="example example_5">

                    <CustomScroll :vertical-scrolling="true">
                        <div class="example--inner">
                            Классический текст Lorem Ipsum, используемый с XVI века
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum."

                            Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                            Английский перевод 1914 года, H. Rackham
                            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the system, and expound the actual teachings of the
                            great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                            avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                            pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                            loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                            circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                            from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                            annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                        </div>
                    </CustomScroll>
                </div>
            </div>
        </transition>


    </div>
</template>

<script>
    import CustomScroll from "./components/CustomScroll";

    export default {
        name: "App",
        data: function () {
            return {
                showExample3: false
            }
        },
        methods: {
            toggleExample3() {
                this.showExample3 = !this.showExample3
            }
        },
        components: {
            CustomScroll
        },
        created() {
        }
    }
</script>

<style lang="scss">
    @import "base/mixins";

    .example {
        display: block;
        @include size(400px, 200px);
        border: 5px solid black;
        margin: 20px 0 50px;
        padding: 5px;
        $main: &;

        &_2 ,
        &_4 {
            #{$main} {
                &--inner {
                    @include size(2000px, 200px);
                }
            }
        }

        &--inner {
            box-sizing: border-box;
        }

    }

    .slide-enter-active {
        transition-duration: .3s;
        transition-timing-function: ease;
    }

    .slide-leave-active {
        transition-duration: .3s;
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 300px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
        margin-bottom: 0;
    }

</style>
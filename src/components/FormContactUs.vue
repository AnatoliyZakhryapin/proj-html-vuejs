<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <div class="form">
        <div class="form-title">
            <h2>Contact us<span class="dot"></span></h2>
        </div>
        <div class="form-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit!</p>
        </div>
        <form>
            <div class="row">
                <div class="col-6">
                    <input placeholder="Your name" type="text" name="Name" id="name">
                </div>
                <div class="col-6">
                    <input placeholder="Your email" type="email" id="email" name="email">
                </div>
                <div class="col-12">
                    <textarea 
                        name="message" 
                        id="message" 
                    >Write a message...
                    </textarea>
                </div>
                <div class="col-12">
                    <div class="btn btn-2">
                        <div class="text">
                            Send
                        </div>
                        <div class="arrow">
                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0px 50px;
        
        .form-text {
            p {
                margin-bottom: 20px;
            }
            &::after {
                @include after-line;
                margin: 0;
            }
        }
        h2 {
            color: $f-black-1;
            font-size: $f-st-2;
            position: relative;
            display: inline-block;
            .dot {
                height: 15%;
                aspect-ratio: 1;
                display: inline-block;
                background-color: #FF4612;
                border-radius: 999px;
                position: absolute;
                bottom: 12%;
                right: -7%;
                transform: translate(-50%, -50%);
            }
        }
        p {
            font-size: $f-s-2;
            color: $f-black-1;
        }
        .row {
            row-gap: 20px;
            margin-left: -10px;
            margin-right: -10px;
            & :last-child {
                display: flex;
            }
        }
        input {
            width: 100%;
            border: 0;
            border-bottom: 1px solid;
            border-color: $f-gray-3;
            background-color: transparent;
            padding-left: 10px;
        }
        textarea {
            width: 100%;
            height: 100px;
            border: 0;
            border-bottom: 1px solid;
            border-color: $f-gray-3;
            background-color: transparent;
            padding-left: 10px;
            color: $f-gray-3;
        }
        ::placeholder {
            color: $f-gray-3;   
        }
        .btn {
            @include btn;
            &.btn-2:hover {
                .arrow {
                    transform: translateX(-13px);
                    border-color: transparent;
                }
            }
            &.btn-2 {
                background-color: $bg-orange;
                color: $f-white-1;
                .arrow {
                    border-left: 1px solid $border-white-1;
                }
            }
        }
    }
</style>
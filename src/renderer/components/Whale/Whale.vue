<template>
    <div class="whale">
        <div class="whale-body">
            <div class="whale-eyes"></div>
            <div class="whale-eyes"></div>
            <div class="teeth"></div>
        </div>
        <div class="whale-tail"></div>
        <div class="whale-circle"></div>
        <div class="flipper1"></div>
        <div class="flipper2"></div>
        <div class="spout"></div>
        <div class="spray"></div>
    </div>
</template>
<script>
  export default {
    name: 'Whale'
  }
</script>
<style lang="less">
    .whale {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        zoom: 0.3;
    }

    .whale-body {
        height: 38vmin;
        width: 40vmin;
        background-color: #015B63;
        border-radius: 10%;
        border: 3px solid #fff;
        overflow: hidden;
        z-index: 1;
        position: relative;
    }

    .teeth {
        position: relative;
        height: 28vmin;
        width: 28vmin;
        border-radius: 60% 0 60% 0;
        top: 6vmin;
        border: 3px solid #fff;
        background: -webkit-repeating-linear-gradient(45deg, #ECC667, #ECC667 2px, #EFD27D 2px, #EFD27D 20px);
        background: repeating-linear-gradient(45deg, #ECC667, #ECC667 2px, #EFD27D 2px, #EFD27D 20px);
        transform-origin: 0% 100%;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .whale-eyes {
        margin-left: 15%;
        position: relative;
        top: 22vmin;
        background: #000;
        height: 1.5vmin;
        width: 1.5vmin;
        border-radius: 50%;
        display: inline-block;
        box-shadow: 26vmin 0px 0px 0px #000;
        -webkit-transition: .2s ease-in-out;
        -moz-transition: .2s ease-in-out;
        -o-transition: .2s ease-in-out;
        transition: .2s ease-in-out;
    }

    .whale-tail {
        height: 30vmin;
        width: 40vmin;
        background-color: #015B63;
        border-radius: 35%;
        overflow: hidden;
        position: absolute;
        top: 7vmin;
        left: 14vmin;
        z-index: -1;
        border: none;
    }

    .whale-circle {
        height: 21vmin;
        width: 21vmin;
        background-color: #FFFFFF;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: 34vmin;
        top: 6vmin;
        z-index: 0;
    }

    .spout {
        height: 3vmin;
        width: 3vmin;
        background-color: #FFFFFF;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: 19vmin;
        top: -1vmin;
        z-index: 2;
    }

    .spray {
        position: absolute;
        border: 5vmin solid transparent;
        width: 2vmin;
        border-top: 9vmin solid #8FD7EC;
        bottom: 35vmin;
        left: 38%;
        border-radius: 0%;
        -webkit-filter: blur(10px);
        -webkit-animation: blow 4s ease-out infinite;
        z-index: 10;
    }

    .flipper1 {
        z-index: 4;
        left: 46.5vmin;
        top: 16vmin;
        position: absolute;
        width: 7vmin;
        height: 7vmin;
        background-color: #015B63;
        -moz-border-radius: 0px 20vmin 0px 20vmin;
        -webkit-border-radius: 0px 20vmin 0px 20vmin;
        border-radius: 0px 20vmin 0px 20vmin;
        transform-origin: 100% 100%;
        -webkit-transform: rotate(12deg);
        -moz-transform: rotate(12deg);
        -o-transform: rotate(12deg);
        -ms-transform: rotate(12deg);
        transform: rotate(5deg);
        -webkit-transition: 1s ease-in-out;
        -moz-transition: 1s ease-in-out;
        -o-transition: 1s ease-in-out;
        transition: 1s ease-in-out;

    }

    .flipper2 {
        z-index: 4;
        left: 46.5vmin;
        top: 16vmin;
        position: absolute;
        width: 7vmin;
        height: 7vmin;
        background-color: #015B63;
        -moz-border-radius: 0px 20vmin 0px 20vmin;
        -webkit-border-radius: 0px 20vmin 0px 20vmin;
        border-radius: 0px 20vmin 0px 20vmin;
        transform-origin: 100% 100%;
        -webkit-transform: rotate(12deg);
        -moz-transform: rotate(12deg);
        -o-transform: rotate(12deg);
        -ms-transform: rotate(12deg);
        transform: rotate(80deg);
        -webkit-transition: .4s ease-in-out;
        -moz-transition: .4s ease-in-out;
        -o-transition: .4s ease-in-out;
        transition: .4s ease-in-out;

    }

    .whale:hover .flipper1 {
        -webkit-animation: flip1 1s ease-in-out 0s infinite;
        animation: flip1 1s ease-in-out 0s infinite;
    }

    .whale:hover .flipper2 {
        -webkit-animation: flip2 1s ease-in-out 0s infinite;
        animation: flip2 1s ease-in-out 0s infinite;
    }

    .whale:hover .whale-eyes {
        height: .3vmin;
        top: 21vmin;

    }

    /* The animation code */

    @keyframes flip1 {
        0% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(70deg);
        }
        100% {
            transform: rotate(5deg);
        }
    }

    @-webkit-keyframes flip1 {
        0% {
            -webkit-transform: rotate(5deg);
        }
        50% {
            -webkit-transform: rotate(70deg);
        }
        100% {
            -webkit-transform: rotate(5deg);
        }
    }

    @keyframes flip {
        0% {
            transform: rotate(76deg);
        }
        50% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(76deg);
        }
    }

    @-webkit-keyframes flip2 {
        0% {
            -webkit-transform: rotate(76deg);
        }
        50% {
            -webkit-transform: rotate(5deg);
        }
        100% {
            -webkit-transform: rotate(76deg);
        }
    }

    @-webkit-keyframes blow {
        0% {
            border-top-width: 0px;
            bottom: 37vmin
        }
        45% {
            border-top-width: 0px;
            bottom: 37vmin
        }
        50% {
            border-top-width: 20px;
            bottom: 40vmin
        }
        64% {
            border-top-width: 0px;
            bottom: 45vmin
        }
        100% {
            border-top-width: 0px;
            bottom: 55vmin
        }
    }
</style>
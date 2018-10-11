<template>
    <div class="whale">
        <div class="whale-body">
            <div class="whale-eyes left"></div>
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
        zoom: 0.2;
        &-eyes {
            position: absolute;
            margin-left: -36%;
            top: 22vmin;
            background: #000;
            height: 1.5vmin;
            width: 1.5vmin;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 26vmin 0 0 0 #000;
            transition: .2s ease-in-out;
            animation: eyes 2s ease-in-out 0s infinite;
        }
        &-body {
            height: 38vmin;
            width: 40vmin;
            background-color: #015B63;
            border-radius: 10%;
            border: 3px solid #fff;
            overflow: hidden;
            z-index: 1;
            position: relative;
        }
        &-tail {
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
        &-circle {
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
    }

    .teeth {
        position: relative;
        height: 28vmin;
        width: 28vmin;
        border-radius: 60% 0 60% 0;
        top: 14vmin;
        border: 3px solid #fff;
        background: repeating-linear-gradient(45deg, #ECC667, #ECC667 2px, #EFD27D 2px, #EFD27D 20px);
        transform-origin: 0 100%;
        transform: rotate(45deg);
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
        border-top: 9vmin solid red;
        bottom: 35vmin;
        left: 38%;
        border-radius: 0%;
        -webkit-filter: blur(10px);
        animation: blow 2s ease-out infinite;
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
        border-radius: 0 20vmin 0 20vmin;
        transform-origin: 100% 100%;
        transform: rotate(5deg);
        transition: 1s ease-in-out;
        animation: flip1 1s ease-in-out 0s infinite;
    }

    .flipper2 {
        z-index: 4;
        left: 46.5vmin;
        top: 16vmin;
        position: absolute;
        width: 7vmin;
        height: 7vmin;
        background-color: #015B63;
        border-radius: 0 20vmin 0 20vmin;
        transform-origin: 100% 100%;
        transform: rotate(80deg);
        transition: .4s ease-in-out;
        animation: flip2 1s ease-in-out 0s infinite;
    }


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

    @keyframes eyes {
        0% {
            height: 1.5vmin;
            width: 1.5vmin;
        }
        50% {
            height: .3vmin;
            top: 21vmin;
        }
        100% {
            height: 1.5vmin;
            width: 1.5vmin;
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
            border-top-width: 0;
            bottom: 37vmin
        }
        45% {
            border-top-width: 0;
            bottom: 37vmin
        }
        50% {
            border-top-width: 20px;
            bottom: 40vmin
        }
        64% {
            border-top-width: 0;
            bottom: 45vmin
        }
        100% {
            border-top-width: 0;
            bottom: 55vmin
        }
    }
</style>
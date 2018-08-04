<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 600 600" :width="width === 100 ? '100%' : width" :height="width === 100 ? 'auto' : width" @mouseleave="currentPosition = null" v-if="game && game.board">
    <defs>
      <path d="M400 400L600 400L600 600L400 600L400 400Z" id="f2lQx2Xy77" />
      <clipPath id="cliph1LChlITv">
        <use xlink:href="#f2lQx2Xy77" opacity="1" />
      </clipPath>
      <path d="M200 400L400 400L400 600L200 600L200 400Z" id="c2YjO4nvhp" />
      <clipPath id="clipaaBRuaTWE">
        <use xlink:href="#c2YjO4nvhp" opacity="1" />
      </clipPath>
      <path d="M0 400L200 400L200 600L0 600L0 400Z" id="d6GpnPETO" />
      <clipPath id="clipk2i98muDrJ">
        <use xlink:href="#d6GpnPETO" opacity="1" />
      </clipPath>
      <path d="M0 200L200 200L200 400L0 400L0 200Z" id="dxVYDPwWP" />
      <clipPath id="clipk2FrGyPi37">
        <use xlink:href="#dxVYDPwWP" opacity="1" />
      </clipPath>
      <path d="M200 200L400 200L400 400L200 400L200 200Z" id="a2d0zZA1ip" />
      <clipPath id="clipa1qdRN1LdS">
        <use xlink:href="#a2d0zZA1ip" opacity="1" />
      </clipPath>
      <path d="M400 200L600 200L600 400L400 400L400 200Z" id="m1Mo5dggkS" />
      <clipPath id="cliparCraKUqz">
        <use xlink:href="#m1Mo5dggkS" opacity="1" />
      </clipPath>
      <path d="M400 0L600 0L600 200L400 200L400 0Z" id="a5mW0goT0Y" />
      <clipPath id="clipc1lbZECt9p">
        <use xlink:href="#a5mW0goT0Y" opacity="1" />
      </clipPath>
      <path d="M200 0L400 0L400 200L200 200L200 0Z" id="auJWqndPM" />
      <clipPath id="clipbbgk1P0iK">
        <use xlink:href="#auJWqndPM" opacity="1" />
      </clipPath>
      <path d="M0 0L200 0L200 200L0 200L0 0Z" id="b3hl5rxiHZ" />
      <clipPath id="clipd1VooHJll">
        <use xlink:href="#b3hl5rxiHZ" opacity="1" />
      </clipPath>
      <path d="M380 300C380 344.15 344.15 380 300 380C255.85 380 220 344.15 220 300C220 255.85 255.85 220 300 220C344.15 220 380 255.85 380 300Z" id="a3cg5A5jh9" />
      <clipPath id="clipamYr6lmI3">
        <use xlink:href="#a3cg5A5jh9" opacity="1" />
      </clipPath>
      <path d="M328.72 300L380 351.28L351.28 380L300 328.72L248.72 380L220 351.28L271.28 300L220 248.72L248.72 220L300 271.28L351.28 220L380 248.72L328.72 300Z" id="b3iRLvZeTI" />
      <path d="M581.25 300C581.25 344.15 545.4 380 501.25 380C457.1 380 421.25 344.15 421.25 300C421.25 255.85 457.1 220 501.25 220C545.4 220 581.25 255.85 581.25 300Z" id="a4uHcLt7ce" />
      <clipPath id="clipe3GpCmJHG">
        <use xlink:href="#a4uHcLt7ce" opacity="1" />
      </clipPath>
      <path d="M581.25 501.25C581.25 545.4 545.4 581.25 501.25 581.25C457.1 581.25 421.25 545.4 421.25 501.25C421.25 457.1 457.1 421.25 501.25 421.25C545.4 421.25 581.25 457.1 581.25 501.25Z" id="b2y1GcQSH" />
      <clipPath id="clipiyb4Spavu">
        <use xlink:href="#b2y1GcQSH" opacity="1" />
      </clipPath>
      <path d="M581.25 98.75C581.25 142.9 545.4 178.75 501.25 178.75C457.1 178.75 421.25 142.9 421.25 98.75C421.25 54.6 457.1 18.75 501.25 18.75C545.4 18.75 581.25 54.6 581.25 98.75Z" id="cdxBmq8ac" />
      <clipPath id="clipb1Tvlzf7yq">
        <use xlink:href="#cdxBmq8ac" opacity="1" />
      </clipPath>
      <path d="M380 98.75C380 142.9 344.15 178.75 300 178.75C255.85 178.75 220 142.9 220 98.75C220 54.6 255.85 18.75 300 18.75C344.15 18.75 380 54.6 380 98.75Z" id="d6mu4XE1Zq" />
      <clipPath id="clipa48872oHrx">
        <use xlink:href="#d6mu4XE1Zq" opacity="1" />
      </clipPath>
      <path d="M380 501.25C380 545.4 344.15 581.25 300 581.25C255.85 581.25 220 545.4 220 501.25C220 457.1 255.85 421.25 300 421.25C344.15 421.25 380 457.1 380 501.25Z" id="a1MaLXdBcm" />
      <clipPath id="clipe2Tq8zIpX">
        <use xlink:href="#a1MaLXdBcm" opacity="1" />
      </clipPath>
      <path d="M178.75 300C178.75 344.15 142.9 380 98.75 380C54.6 380 18.75 344.15 18.75 300C18.75 255.85 54.6 220 98.75 220C142.9 220 178.75 255.85 178.75 300Z" id="c2fgghO5XC" />
      <clipPath id="clipg1RvfJwhpp">
        <use xlink:href="#c2fgghO5XC" opacity="1" />
      </clipPath>
      <path d="M178.75 98.75C178.75 142.9 142.9 178.75 98.75 178.75C54.6 178.75 18.75 142.9 18.75 98.75C18.75 54.6 54.6 18.75 98.75 18.75C142.9 18.75 178.75 54.6 178.75 98.75Z" id="c3tmsvTYqT" />
      <clipPath id="clipc2D22cRKl3">
        <use xlink:href="#c3tmsvTYqT" opacity="1" />
      </clipPath>
      <path d="M178.75 501.25C178.75 545.4 142.9 581.25 98.75 581.25C54.6 581.25 18.75 545.4 18.75 501.25C18.75 457.1 54.6 421.25 98.75 421.25C142.9 421.25 178.75 457.1 178.75 501.25Z" id="b2SCXRPcte" />
      <clipPath id="clipa3z8ozGwq">
        <use xlink:href="#b2SCXRPcte" opacity="1" />
      </clipPath>
      <path d="M127.47 501.25L178.75 552.53L150.03 581.25L98.75 529.97L47.47 581.25L18.75 552.53L70.03 501.25L18.75 449.97L47.47 421.25L98.75 472.53L150.03 421.25L178.75 449.97L127.47 501.25Z" id="aalyDEzGM" />
      <path d="M328.72 501.25L380 552.53L351.28 581.25L300 529.97L248.72 581.25L220 552.53L271.28 501.25L220 449.97L248.72 421.25L300 472.53L351.28 421.25L380 449.97L328.72 501.25Z" id="aHsYD8uiN" />
      <path d="M529.97 501.25L581.25 552.53L552.53 581.25L501.25 529.97L449.97 581.25L421.25 552.53L472.53 501.25L421.25 449.97L449.97 421.25L501.25 472.53L552.53 421.25L581.25 449.97L529.97 501.25Z" id="bx9FJFzLH" />
      <path d="M127.47 300L178.75 351.28L150.03 380L98.75 328.72L47.47 380L18.75 351.28L70.03 300L18.75 248.72L47.47 220L98.75 271.28L150.03 220L178.75 248.72L127.47 300Z" id="edMUL8MKj" />
      <path d="M127.47 98.75L178.75 150.03L150.03 178.75L98.75 127.47L47.47 178.75L18.75 150.03L70.03 98.75L18.75 47.47L47.47 18.75L98.75 70.03L150.03 18.75L178.75 47.47L127.47 98.75Z" id="b1J3J3u53u" />
      <path d="M328.72 98.75L380 150.03L351.28 178.75L300 127.47L248.72 178.75L220 150.03L271.28 98.75L220 47.47L248.72 18.75L300 70.03L351.28 18.75L380 47.47L328.72 98.75Z" id="d5dGefT03" />
      <path d="M529.97 98.75L581.25 150.03L552.53 178.75L501.25 127.47L449.97 178.75L421.25 150.03L472.53 98.75L421.25 47.47L449.97 18.75L501.25 70.03L552.53 18.75L581.25 47.47L529.97 98.75Z" id="b4rCcqG9M2" />
      <path d="M529.97 300L581.25 351.28L552.53 380L501.25 328.72L449.97 380L421.25 351.28L472.53 300L421.25 248.72L449.97 220L501.25 271.28L552.53 220L581.25 248.72L529.97 300Z" id="bM5pWK78k" />
    </defs>
    <g>
      <!-- Squares -->
      <g v-for="(squareIds, position) in squareSvgIds">
        <use :xlink:href="squareIds[0]" opacity="1" fill="#ffffff" fill-opacity="1"/>
        <g :clip-path="'url(' + squareIds[1] + ')'">
          <use :xlink:href="squareIds[0]" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="12" stroke-opacity="1" />
        </g>
      </g>
      <!-- Os -->
      <g v-for="(svgIds, position) in oSvgIds" v-if="game.board[position] === 'O' || (game.board[position] === '' && currentPosition === position && myPiece === 'O')">
        <use :xlink:href="svgIds[0]" opacity="1" fill="#ffffff" fill-opacity="1" />
        <g :clip-path="'url(' + svgIds[1] + ')'">
          <use :xlink:href="svgIds[0]" opacity="1" fill-opacity="0" :stroke="game.board[position] === '' ? '#999999' : '#000000'" stroke-width="70" stroke-opacity="1" />
        </g>
      </g>
      <!-- Xs -->
      <g v-for="(svgId, position) in xSvgIds" v-if="game.board[position] === 'X' || (game.board[position] === '' && currentPosition === position && myPiece === 'X')">
        <use :xlink:href="svgId" opacity="1" :fill="game.board[position] === '' ? '#999999' : '#000000'" fill-opacity="1" />
      </g>
      <!-- invisible elements to handle mouse enter events -->
      <template v-for="position in [0,1,2,3,4,5,6,7,8]">
        <rect :x="(position % 3) * 200" :y="position <= 2 ? 0 : (position <= 5 ? 200 : 400)" width="200" height="200" v-on:mouseenter="currentPosition = position" fill="transparent" @click="play(position)"/>
      </template>
    </g>
  </svg>
</template>

<script src="./board.js"></script>
<style scoped src="./board.css"></style>

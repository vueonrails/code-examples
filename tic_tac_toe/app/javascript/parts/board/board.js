export default {
  data: function() {
    return {
      // references to X svg items
      xSvgIds: [
        '#b1J3J3u53u', '#d5dGefT03', '#b4rCcqG9M2',
        '#edMUL8MKj', '#b3iRLvZeTI', '#bM5pWK78k',
        '#aalyDEzGM', '#aHsYD8uiN', '#bx9FJFzLH'
      ],
      oSvgIds: [
        ['#c3tmsvTYqT', '#clipc2D22cRKl3'], ['#d6mu4XE1Zq', '#clipa48872oHrx'], ['#cdxBmq8ac', '#clipb1Tvlzf7yq'],
        ['#c2fgghO5XC', '#clipg1RvfJwhpp'], ['#a3cg5A5jh9', '#clipamYr6lmI3'], ['#a4uHcLt7ce', '#clipe3GpCmJHG'],
        ['#b2SCXRPcte', '#clipa3z8ozGwq'], ['#a1MaLXdBcm', '#clipe2Tq8zIpX'], ['#b2y1GcQSH', '#clipiyb4Spavu']
      ],
      squareSvgIds: [
        ['#b3hl5rxiHZ', '#clipd1VooHJll'], ['#auJWqndPM', '#clipbbgk1P0iK'], ['#a5mW0goT0Y', '#clipc1lbZECt9p'],
        ['#dxVYDPwWP', '#clipk2FrGyPi37'], ['#a2d0zZA1ip', '#clipa1qdRN1LdS'], ['#m1Mo5dggkS', '#cliparCraKUqz'],
        ['#d6GpnPETO', '#clipk2i98muDrJ'], ['#c2YjO4nvhp', '#clipaaBRuaTWE'], ['#f2lQx2Xy77', '#cliph1LChlITv']
      ],
      currentPosition: null
    }
  },
  props: {
    board: Array,
    width: Number
  },
  methods: {
    setPosition: function(position) {
      this.currentPosition = position
    }
  }
};

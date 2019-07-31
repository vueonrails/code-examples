import { DirectUpload } from 'activestorage'
export default {
  data: function() {
    return {
      directUploadUrl: null,
      fileField: null,
      file: null,
      blobSrc: null,
      blobSignedId: null,
      name: null,
      x: 50,
      y: 50,
      width: 300,
      height: 300,
      image_width: null,
      image_height: null,
      image_x: 0,
      image_y: 0,
      scale: 1,
      dragging: false
    }
  },
  mounted: function() {
    this.fileField = document.querySelector('input[type="file"]')
    this.directUploadUrl = this.fileField.dataset.directUploadUrl
    this.name = this.fileField.name
    this.fileField.onchange = this.fileAdded
  },
  computed: {
    scaledHeight: function() {
      return parseInt(this.scale * this.image_height)
    },
    scaledWidth: function() {
      return parseInt(this.scale * this.image_width)
    },
    // converting scale to/from percentage
    imageScale: {
      get: function() {
        return parseInt(this.scale * 100)
      },
      set: function(newVal, oldVal) {
        this.scale = newVal / 100
      }
    },
    // Imagemagick geometry format: 'widthxheight+xoffset+yoffset'
    croppedGeometry: function() {
      const scaledWidth = parseInt(this.width / this.scale)
      const scaledHeight = parseInt(this.height / this.scale)
      const scaledXOffset = this.x - parseInt(this.image_x / this.scale)
      const scaledYOffset = this.y - parseInt(this.image_y / this.scale)
      return `${scaledWidth}x${scaledHeight}+${scaledXOffset}+${scaledYOffset}`
    }
  },
  methods: {
    fileAdded(event) {
      const vm = this
      this.file = event.target.files[0]
      if (this.file) {
        const upload = new DirectUpload(this.file, this.directUploadUrl)
        upload.create((error, blob) => {
          if (error) {
            console.error(error)
            alert(error.toString())
          } else {
            console.debug(blob)
            const image = new Image()
            image.onload = function() {
              vm.image_width = image.width
              vm.image_height = image.height
              if (vm.image_height > 400) {
                vm.scale = 400 / vm.image_height
              }
            }
            image.src = URL.createObjectURL(this.file)
            vm.blobSrc = image.src
            vm.blobSignedId = blob.signed_id
            vm.fileField.value = null
            vm.fileField.name = null
            vm.fileField.remove()
          }
        })
      }
    },
    pan(evt) {
      if (this.dragging) {
        this.image_x += evt.movementX
        this.image_y += evt.movementY
      }
    }
  }
}
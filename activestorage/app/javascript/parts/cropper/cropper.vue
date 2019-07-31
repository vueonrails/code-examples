<template>
  <div id="cropper" v-if="blobSrc && image_width && image_height">
    <div class="form-group">
      <label for="imageScale">Image Scale</label>
      <input
        type="range"
        min="10"
        max="100"
        v-model="imageScale"
        name="imageScale"
        id="imageScale">
      <p class="text-muted">{{ this.imageScale }}% size of original image</p>
    </div>

    <div class="dropper">
      <svg
        width="400"
        height="400"
        @mousemove="pan($event)"
        @scroll="zoomImage($event)">
        <image
          :xlink:href="blobSrc"
          :x="image_x"
          :y="image_y"
          :width="scaledWidth"
          :height="scaledHeight">
        </image>

        <!-- BEGIN elements for showing darker background outside cropped area -->
        <rect
          x="0"
          y="0"
          :width="x"
          height="400"
          fill="#000000"
          fill-opacity="0.5"/>
        <rect
          :x="x"
          y="0"
          :width="width"
          :height="y"
          fill="#000000" fill-opacity="0.5"/>
        <rect
          :x="x"
          :y="y + height"
          :width="width"
          :height="400 - y - height"
          fill="#000000"
          fill-opacity="0.5"/>
        <rect
          :x="x + width"
          y="0"
          :width="400 - x - width"
          height="400"
          fill="#000000"
          fill-opacity="0.5"/>
        <!-- END -->

        <!-- allows panning/zooming image -->
        <rect
          :x="x"
          :y="y"
          :width="width"
          :height="height"
          fill="#FFFFFF"
          fill-opacity="0"
          :class="dragging ? 'grabbing' : 'grab'"
          @mousemove="pan($event)"
          @mousedown="dragging = true"
          @mouseup="dragging = false"
          @mouseleave="dragging = false"/>
      </svg>
    </div>

    <!-- hidden fields to reference direct upload image and area to crop-->
    <input type="hidden" name="user[avatar]" :value="blobSignedId">
    <input type="hidden" name="user[avatar_crop]" :value="croppedGeometry">

  </div>
</template>

<script src="./cropper.js"></script>
<style src="./cropper.css" scoped></style>
<template>
  <div class="l-page">
    <p>上傳原始PDF檔案</p>
    <input id="inputFile" type="file" @change="convertToBase64()" />
    <div class="iframe-position">
      <iframe :src="files" height="500" width="500" v-if="files"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: "",
      files: null,
    };
  },
  methods: {
    convertToBase64() {
      //Read File
      var selectedFile = document.getElementById("inputFile").files;
      //Check File is not Empty
      if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        // var base64;
        var self = this;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
          self.files = fileLoadedEvent.target.result;
          // Print data in console
          // console.log(self.files);
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.iframe-position {
  text-align: center;
}
.l-page {
  margin: 10px;
}
</style>

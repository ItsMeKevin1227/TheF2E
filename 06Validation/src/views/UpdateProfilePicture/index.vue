<script>
export default {
  name: 'UpdateProfilePicture',
  data() {
    return {
      images: [],
      files: [],
      errorMsg: '',
    };
  },
  beforeMount() {
    this.$emit('error', false);
  },
  methods: {
    deleteIt(idx) {
      this.files.splice(idx, 1);
      this.images.splice(idx, 1);
    },
    fileSelected(evt) {
      this.errorMsg = '';
      for (let i = 0; i < evt.target.files.length; i += 1) {
        if (!/image\/\w+/.test(evt.target.files[i].type)) {
          this.errorMsg = '請上傳圖片格式';
          return;
        }
      }
      if (evt.target.files.length > 3) {
        this.errorMsg = '上傳太多圖片啦';
        return;
      }
      // 將圖片放入data
      for (let i = 0; i < evt.target.files.length; i += 1) {
        this.files[i] = evt.target.files[i];
      }

      // 定義FileReader
      const reader0 = new FileReader();
      const reader1 = new FileReader();
      const reader2 = new FileReader();

      // 將圖片路徑放入image
      reader0.addEventListener('load', this.imageLoaded);
      reader1.addEventListener('load', this.imageLoaded);
      reader2.addEventListener('load', this.imageLoaded);

      // 讀成DataUrl
      if (evt.target.files.length === 1) {
        reader0.readAsDataURL(this.files[0]);
      }
      if (evt.target.files.length === 2) {
        reader0.readAsDataURL(this.files[0]);
        reader1.readAsDataURL(this.files[1]);
      }
      if (evt.target.files.length === 3) {
        reader0.readAsDataURL(this.files[0]);
        reader1.readAsDataURL(this.files[1]);
        reader2.readAsDataURL(this.files[2]);
      }
    },
    imageLoaded(evt) {
      if (this.images.length < 3) {
        this.images.push(evt.target.result);
      } else {
        this.errorMsg = '上傳太多圖片啦';
      }
    },
  },
};
</script>
<template src="./UpdateProfilePicture.html"></template>
<style lang="scss" src="./UpdateProfilePicture.scss"></style>

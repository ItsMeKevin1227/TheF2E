<template lang="pug">
  #TodoInput
    input(placeholder="+ Add Task"
      class="addOne"
      @click="showAddList = true"
      v-if="!showAddList")
    #addArea(v-else)
      div.topArea
        .todoCheck
          label(for="addCheck")
            input(id="addCheck"
              type="checkbox"
              v-model="addItem.checked")
            span(class="todoCheckIcon")
        .todoText
          input(placeholder="Type Something Here"
            v-model="addItem.text")
        .todoIcon
          i(class="fa-star far"
            :class="addItem.star ? 'fas' : 'far'"
            @click="addItem.star = !addItem.star")
          i(class="far fa-edit isEdit")
      div.bottomArea
        div
          i(class="far fa-calendar-alt")
          h3 Deadline
          br
          input(class="mmdd"
            placeholder="mm/dd"
            v-model="addItem.date")
          input(placeholder="hh:mm"
            v-model="addItem.time")
        div
          i(class="far fa-file")
          h3 Flie
          br
          span(@click="addItem.file = !addItem.file"
            :class="{ uploaded: addItem.file }") +
        div
          i(class="far fa-comment-dots")
          h3 Comment
          br
          textarea(v-model="addItem.note"
            placeholder="Type your memo here…")
        div.footer
          div(@click="addNewItem") + &nbsp;Add Task
          div(@click="cancelItem") X &nbsp;Cancel
</template>
<script>
export default {
  data() {
    return {
      showAddList: false,
      addItem: {
        text: '',
        date: '',
        time: '',
        file: false,
        note: '',
        star: false,
        checked: false,
      },
    };
  },
  methods: {
    cancelItem() {
      this.addItem = {
        text: '',
        date: '',
        file: false,
        note: '',
        star: false,
        checked: false,
      };
      this.showAddList = false;
    },
    addNewItem() {
      this.$bus.$emit('addItem', this.addItem);
      this.addItem = {
        text: '',
        date: '',
        file: false,
        note: '',
        star: false,
        checked: false,
      };
      this.showAddList = false;
    },
  },
};
</script>
<style lang="scss" scoped>
#TodoInput {
  margin-top: 24px;
  text-align: center;
  input.addOne {
    width: 620px;
    height: 65px;
    font-size: 24px;
    padding-left: 33px;
    border-radius: 5px;
    border: #c8c8c8 solid 2px;
    outline: none;
    cursor: pointer;
    &::-webkit-input-placeholder {
      color: #c8c8c8;
    }
  }
  #addArea {
    width: 620px;
    height: 520px;
    background-color: #f2f2f2;
    border-radius: 5px;
    margin: 0 auto;
    text-align: left;
    .topArea {
      // 標題區div
      width: 100%;
      height: 72px;
      border-bottom: 2px solid #c8c8c8;
      position: relative;
      .todoCheck {
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        margin-left: 32px;
        margin-top: 18px;
        margin-right: 16px;
        label {
          margin: 5px 0 0 0;
          display: inline-block;
          cursor: pointer;
          input {
            display: none;
            &:checked + span {
              &::after {
                border-radius: 2px;
                background-color: #4a90e2;
                content: '✔';
                line-height: 24px;
                color: #fff;
                width: 24px;
                height: 24px;
                display: inline-block;
              }
            }
          }
          span {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.15);
            display: inline-block;
            margin-right: 10px;
            margin-top: -1px;
            vertical-align: middle;
            width: 24px;
            height: 24px;
            line-height: 1;
            border-radius: 2px;
            text-align: center;
          }
        }
      }
      .todoText {
        display: inline-block;
        input {
          width: 400px;
          font-size: 20px;
          margin-top: 16px;
          border: none;
          padding: 6px 10px;
          border-radius: 5px;
        }
      }
      .todoIcon {
        display: inline-block;
        position: absolute;
        right: 32px;
        top: 18px;
        font-size: 24px;
        i {
          cursor: pointer;
          &:last-child {
            margin-left: 32px;
          }
          &.isEdit {
            color: #4a90e2;
          }
          &.fas.fa-star {
            color: #f5a623;
          }
        }
      }
    }
    .bottomArea {
      // 附加區div
      padding: 25px 72px;
      position: relative;
      height: 448px;
      i {
        font-size: 14px;
        position: absolute;
        line-height: 24px;
      }
      h3 {
        font-size: 20px;
        display: inline-block;
        line-height: 24px;
        margin-left: 24px;
      }
      div {
        input {
          width: 162px;
          height: 35px;
          padding: 8px 16px;
          font-size: 16px;
          border-radius: 2px;
          border: none;
          margin-top: 6px;
          margin-bottom: 20px;
          &.mmdd {
            margin-left: 23px;
            margin-right: 8px;
          }
          &::-webkit-input-placeholder {
            color: #c8c8c8;
          }
          &[type='file'] {
            display: none;
          }
        }
        span {
          width: 32px;
          height: 32px;
          background-color: #c8c8c8;
          display: block;
          color: #fff;
          font-size: 24px;
          text-align: center;
          line-height: 30px;
          margin-left: 23px;
          margin-top: 9px;
          margin-bottom: 25px;
          border-radius: 2px;
          cursor: pointer;
          &.uploaded {
            background-color: #d0021b;
          }
        }
        textarea {
          width: 445px;
          height: 120px;
          font-size: 16px;
          margin-left: 23px;
          margin-top: 6px;
          padding: 8px 16px;
          border: none;
          border-radius: 2px;
          resize: none;
          outline: none;
          &::-webkit-input-placeholder {
            color: #c8c8c8;
          }
        }
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        div {
          display: inline-block;
          width: 50%;
          line-height: 60px;
          text-align: center;
          font-size: 24px;
          background-color: #ffffff;
          border-radius: 0 0 5px 0;
          color: #d0021b;
          cursor: pointer;
          &:first-child {
            background-color: #4a90e2;
            border-radius: 0 0 0 5px;
            color: #fff;
          }
        }
      }
    }
  }
  input {
    outline: none;
  }
}
</style>

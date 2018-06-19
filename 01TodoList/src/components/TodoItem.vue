<template lang="pug">
  #Item
    li(class="default"
        v-for="(item,idx) in todoItems"
        :key="idx"
        :class="{selected: item.star, cleared:item.checked}"
        v-if="!showEditItem")
      .todoCheck
        label(:for="item.id")
          input(
            :id="item.id"
            type="checkbox"
            v-model="item.checked")
          span(class="todoCheckIcon")
      .todoText
        h2 {{item.text}}
        p(v-if="nowClickNum !== idx")
          i(class="far fa-calendar-alt"
            v-if="item.date!==''")
          span(v-if="item.date!==''") {{item.date}}
          i(class="far fa-file"
            v-if="item.file")
          i(class="far fa-comment-dots"
            v-if="item.note!==''")
      .todoIcon
        i(class="fa-star"
          :class="item.star ? 'fas' : 'far'"
          @click="item.star = !item.star")
        i(class="far fa-edit"
          @click="editIt(idx)"
          :class="{isEdit: nowClickNum === idx}")
      transition(name="fade")
        #addArea(v-if="nowClickNum == idx")
          div.bottomArea
            div
              i(class="far fa-calendar-alt")
              h3 Deadline
              br
              input(class="mmdd"
                placeholder="mm/dd"
                v-model="editItem.date")
              input(placeholder="hh:mm"
                v-model="editItem.time")
            div
              i(class="far fa-file")
              h3 Flie
              br
              span(@click="editItem.file = !editItem.file"
                :class="{ uploaded: editItem.file }") +
            div
              i(class="far fa-comment-dots")
              h3 Comment
              br
              textarea(
                placeholder="Type your memo here…"
                v-model="editItem.note")
            div.footer
              div(@click="saveItem(idx)") + &nbsp;Save
              div(@click="cancelEdit") X &nbsp;Cancel
</template>
<script>
export default {
  data() {
    return {
      nowClickNum: -1,
      showEditItem: false,
      todoItems: [
        {
          id: 'check1',
          text: 'ABDB2',
          date: '5/14', // 日期
          time: '',
          file: false, // 上傳檔案
          note: '', // 註記
          star: false, // 置頂
          checked: false,
        },
        {
          id: 'check2',
          text: 'AB487',
          date: '6/14',
          time: '',
          file: true,
          note: 'true',
          star: false,
          checked: false,
        },
        {
          id: 'check3',
          text: 'Type Something Here...',
          date: '',
          time: '',
          file: false,
          note: 'true',
          star: true,
          checked: false,
        },
        {
          id: 'check4',
          text: 'Type Something Here...',
          date: '',
          time: '',
          file: false,
          note: '',
          star: false,
          checked: false,
        },
        {
          id: 'check5',
          text: 'Type Something Here...',
          date: '',
          time: '',
          file: true,
          note: 'true',
          star: true,
          checked: true,
        },
      ],
      editItem: {},
    };
  },
  methods: {
    cancelEdit() {
      this.nowClickNum = -1;
      this.editItem = {};
    },
    editIt(idx) {
      this.nowClickNum = idx;
      this.editItem = JSON.parse(JSON.stringify(this.todoItems[idx]));
    },
    saveItem(idx) {
      this.todoItems[idx] = JSON.parse(JSON.stringify(this.editItem));
      this.nowClickNum = -1;
      this.editItem = {};
    },
  },
};
</script>
<style lang="scss" scoped>
#Item {
  display: flex;
  flex-direction: column;
  input {
    outline: none;
  }
  .default {
    width: 100%;
    // height: 102px;
    background-color: #f2f2f2;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 20px;
    padding-bottom: 7px;
    position: relative;
    .todoCheck {
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: top;
      margin-left: 12px;
      margin-top: 4px;
      margin-right: 16px;
      label {
        margin: 5px 0 0 0;
        display: inline-block;
        cursor: pointer;
        input {
          display: none;
          &:checked + span {
            &::after {
              border-radius: 0;
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
          border-radius: 0;
          text-align: center;
        }
      }
    }
    .todoText {
      display: inline-block;
      h2 {
        padding-top: 4px;
      }
      p {
        margin-top: 14px;
        margin-left: 2px;
        font-size: 16px;
        i {
          letter-spacing: 16px;
          color: #757575;
        }
        span {
          font-style: normal;
          margin-right: 16px;
          color: #757575;
        }
      }
    }
    .todoIcon {
      display: inline-block;
      position: absolute;
      right: 32px;
      top: 24px;
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
    &.selected {
      background-color: #fff2dc;
      order: -1;
    }
    &.cleared {
      order: 100;
      h2 {
        text-decoration: line-through;
        color: #9b9b9b;
      }
    }
    &.selected.cleared {
      order: 99;
      h2 {
        text-decoration: line-through;
        color: #9b9b9b;
      }
    }
  }
  #addArea {
    width: 620px;
    height: 443px;
    background-color: #f2f2f2;
    border-radius: 0 0 5px 5px;
    margin: 10px auto 0;
    text-align: left;
    margin-left: -20px;
    border-top: 2px solid #c8c8c8;
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
}
</style>

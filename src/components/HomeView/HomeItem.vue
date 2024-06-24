<template>
  <li>
    <div class="td-sites-grid__cell">
      <div class="td-sites-grid__item">
        <a class="td-site__section-one" href="javascript:void(0);" data-project-id="9967215" alt="Перейти к редактированию">
          <div class="td-site__title">
            {{ project.name + ' ' + index }}
          </div>
        </a>
        
        <DropdownPopup
          :isOpen="isOpen"
          :index="index"
          @toggle="toggleDropdown"
          @delete="handleDelete"
        />

        <div class="td-site__hr"></div>

        <div class="td-site__section-two">
          <div class="td-site__section-two-wrapper">
            <a class="td-site__section-link td-site__settings-title" href="javascript:void(0);">
              <svg width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.21 28">
                <g>
                  <rect style="fill:#f78369;" x="20.41" y="2.17" width="7.63" height="3.63" transform="translate(9.91 -15.97) rotate(45)"></rect>
                  <rect style="fill:#f78369;" x="11.41" y="3.89" width="7.63" height="18.18" transform="translate(13.64 -6.97) rotate(45)"></rect>
                  <polygon style="fill:#f78369;" points="0 28 4.45 18.36 9.85 23.76 0 28"></polygon>
                </g>
              </svg>

              <span>Редактировать сайт</span>
            </a>
            
            <a class="td-site__section-link td-site__url" href="javascript:void(0);" target="_blank" rel="noopener noreferrer">
              <svg width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.14 26.14">
                <g>
                  <polygon style="fill:#f68269;" points="20.14 23.14 3 23.14 3 6 12.57 6 12.57 3 0 3 0 26.14 23.14 26.14 23.14 13.57 20.14 13.57 20.14 23.14"></polygon>
                  <polygon style="fill:#f68269;" points="16.14 0 16.14 3 21.02 3 7.24 16.78 9.36 18.9 23.14 5.12 23.14 10 26.14 10 26.14 0 16.14 0"></polygon>
                </g>
              </svg>

              <span>/project/id/preview</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import DropdownPopup from '@/components/Generic/DropdownPopup.vue'

export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    project: {
      type: Object,
      require: true
    },
    index: Number
  },
  components: {
    DropdownPopup
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleDelete() {
      this.$emit('deleteItem', this.index);
    },
  },
}
</script>

<style scoped>
.td-sites-grid__cell {
  user-select: none;
}
  
a {
    background: transparent;
    color: #000000;
    text-decoration: none;
}
.td-sites-grid__item {
  box-sizing: border-box;
  width: 100%;
  height: 265px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  transition: background-color 200ms ease-in-out;
  position: relative;
}

li div:hover {
  background-color: #eeeeee;
}



.td-site__section-one {
    display: block;
    box-sizing: border-box;
    padding: 30px 40px 0 40px;
    height: 180px;
    overflow: hidden;
}

.td-site__title {
    font-size: 52px;
    line-height: 54px;
    font-weight: 300;
    color: #000;
    transition: 200ms, visibility 0ms;
}

a:hover {
    color: #ff8562;
    text-decoration: none;
    outline: 0;
}

.td-site__hr {
    margin: 0 30px;
    height: 1px;
    background-color: #e5e5e5;
}

.td-site__section-two {
    box-sizing: border-box;
    height: 80px;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    width: 100%;
}

.td-site__section-two-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
}

.td-site__settings-title {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-weight: 500;
}

.td-site__section-link {
    display: flex;
    align-items: center;
    gap: 5px;
}

.td-site__url {
    text-align: right;
    float: right;
}

.td-site__section-link {
    display: flex;
    align-items: center;
    gap: 5px;
}

.td-site__section-link svg {
    flex-shrink: 0;
}

.td-site__settings-title span {
    padding-top: 2px;
}

</style>
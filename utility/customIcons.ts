import { h } from "vue"

// prepare icon to variable for App
import { IconSet , IconAliases , IconProps } from 'vuetify'

//Custom Icon Components
import MIcon from '@/components/MIcon.vue'

// select icons for only used in App
// define name of Icons by IconAliases
const aliases: IconAliases = {
    complete: "ph:check-circle",
    cancel: "ph:x-circle",
    close: "ph:x-circle",
    delete: "ph:trash",
    clear: "ph:x-circle",
    success: "ph:check-circle",
    info: "ph:info",
    warning: "ph:warning",
    error: "ph:x-circle",
    prev: "ph:caret-left",
    next: "ph:caret-right",
    checkboxOn: "ph:check-square-fill",
    checkboxOff: "ph:square",
    checkboxIndeterminate: "ph:square",
    delimiter: "ph:circle",
    sort: "ph:caret-up",
    expand: "ph:caret-down",
    menu: "heroicons:bars-2",
    subgroup: "ph:caret-down",
    dropdown: "ph:caret-down",
    radioOn: "ph:radio-button-fill",
    radioOff: "ph:circle",
    edit: "ph:pencil-simple",
    ratingEmpty: "ph:star",
    ratingFull: "ph:star-fill",
    ratingHalf: "ph:star-half-fill",
    loading: "ph:spinner",
    first: "ph:caret-double-left",
    last: "ph:caret-double-right",
    unfold: "ph:arrows-out",
    file: "ph:file",
    plus: "ph:plus",
    minus: "ph:minus",
    sortAsc: undefined,
    sortDesc: undefined,
  }

  
  // custom iconSet const name custom type Iconset use MIcon is master
  const custom: IconSet = {
    component: (props: IconProps) =>
    // Return render function
    h(MIcon, {
      name: props.icon,
      tag: props.tag,
      disabled: props.disabled,
    }),
}

// h = render vue  element  in js or ts สร้าง user tag
// h(tag , {property of tag} , [slot or child of tag] )

// export both aliases and the custom object created
export { aliases, custom }



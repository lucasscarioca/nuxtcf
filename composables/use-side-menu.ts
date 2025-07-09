const menuState = ref(false)
export default function () {
  return {
    menuState,
    toggleMenu: () => {
      menuState.value = !menuState.value
    },
  }
}

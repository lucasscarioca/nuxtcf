export default function useTheme() {
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set(_isDark) {
      colorMode.preference = _isDark ? 'dark' : 'light'
    },
  })

  const setDark = () => {
    colorMode.preference = 'dark'
  }
  const setLight = () => {
    colorMode.preference = 'light'
  }

  return {
    isDark,
    setDark,
    setLight,
    forced: colorMode.forced,
  }
}

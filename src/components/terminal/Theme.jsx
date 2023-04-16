import { useContext, useEffect } from "react"
import { ComponentContext } from "@/pages/index"

const Theme = () => {
  const { theme, setTheme } = useContext(ComponentContext)

  const themes = [
    {
      backgroundDark: "#eff3f3",
      titleMain: "#2c2e31",
      paraText: "#8b0566",
      cardBack: "#2f3237",
      tagHigh: "#7f5af0",
      cursorColor: "#00742c",
      orangeColor: "rgb(200, 146, 11)",
    },
    {
      backgroundDark: "#000000",
      titleMain: "#029a01",
      paraText: "#c11515",
      cardBack: "#000000",
      tagHigh: "#7f5af0",
      cursorColor: "#00712c",
      orangeColor: "rgb(233, 207, 39)",
    },
    {
      backgroundDark: "#2f2f2f",
      titleMain: "#fffffe",
      paraText: "#03ff52",
      cardBack: "#3d3838",
      tagHigh: "#6f42f5",
      cursorColor: "#fed400",
      orangeColor: "rgb(204, 147, 3)",
    },
    {
      backgroundDark: "#2d0822",
      titleMain: "#fffffe",
      paraText: "#94a1b2",
      cardBack: "#3f2136",
      tagHigh: "#03ff52",
      cursorColor: "#029a01",
      orangeColor: "#029a01",
    },
    {
      backgroundDark: "#0d0e13",
      titleMain: "#fffffe",
      paraText: "#94a1b2",
      cardBack: "#15161a",
      tagHigh: "#6f42f5",
      cursorColor: "#029a01",
      orangeColor: "#00ddff",
    },
    {
      backgroundDark: "#16161a",
      titleMain: "#fffffe",
      paraText: "#94a1b2",
      cardBack: "#242629",
      tagHigh: "#7f5af0",
      cursorColor: "#2cb67d",
      orangeColor: "rgb(199, 152, 33)",
    },
  ]

  useEffect(() => {
    setTheme(them => {
      return (them%(themes.length-1)) + 1;
    });
    document.documentElement.style.setProperty('--background-dark', themes[theme].backgroundDark);
    document.documentElement.style.setProperty('--title-main', themes[theme].titleMain);
    document.documentElement.style.setProperty('--para-text', themes[theme].paraText);
    document.documentElement.style.setProperty('--card-back', themes[theme].cardBack);
    document.documentElement.style.setProperty('--tag-high', themes[theme].tagHigh);
    document.documentElement.style.setProperty('--cursor-color', themes[theme].cursorColor);
    document.documentElement.style.setProperty('--orange-color', themes[theme].orangeColor);
  }, [])

  return (<span />)
}

export default Theme;
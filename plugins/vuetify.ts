// import createVuetify from "vuetify"
import { createVuetify } from "vuetify"

//import custom icons from helpers
import { aliases, custom } from "@/utility/customIcons"

// import theme from "@/helpers/themes"
import { LIGHT_THEME, lightTheme, DARK_THEME, darkTheme } from "@/utility/themes"

// import defaults from "@/helpers/defaults"
import { defaults } from "@/utility/defaults"

export default defineNuxtPlugin((nuxtApp ) => {
    // Create a new Vuetify instance
    const vuetify = createVuetify({
        ssr: true,
        defaults,
        theme: {
            defaultTheme: LIGHT_THEME,
            themes: {
                lightTheme,
                darkTheme,
            },
            // add color variations
            variations: {
                colors: ["primary", "secondary"],
                lighten: 3,
                darken: 3,
            }
        },
       // Add the custom iconset
        icons: {
            defaultSet: "custom",
            aliases,
            sets: {
                custom,
            },
        },
    })

    // Inject it to nuxtApp
    nuxtApp.vueApp.use(vuetify)
})
